//my first API - get a joke
const url = "https://v2.jokeapi.dev/joke/Programming"
const url1 = "https://dog.ceo/api/breeds/image/random"

//function to clean all i a container with content
function clearAll() {
    const jokeContent = document.querySelector(".apicontent")
    jokeContent.innerHTML = ""
}

//function to get a joke
async function getData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        if (data.type == "single") {
            console.log(data.joke)
            const jokeText = data.joke
            clearAll()
            showText(jokeText)
        }
        else {
            const jokeText = data.setup + " " + data.delivery
            clearAll()
            showText(jokeText)

        }
    }
    catch (error) {

    }
}

//function to show a text of joke
function showText(text) {
    const jokeContent = document.querySelector(".apicontent")
    const newJoke = document.createElement('p')
    newJoke.textContent = text
    clearAll()
    jokeContent.appendChild(newJoke);

}

//function to recive a dog image 
async function showDog() {
    try{
        const response = await fetch(url1)
        const data = await response.json()
        show_image(data.message)
    }
    catch(error) {
        console.error("no image", error)
    }
}

//show image of dog
function show_image(image_of_dog) {
    const dog = document.querySelector(".apicontent")
    const newdog = document.createElement('img')
    newdog.src = image_of_dog
    newdog.alt = "dog is here"

    clearAll()
    dog.appendChild(newdog);
}

function getActivity() { 
    //place for our form - apicontent container 
    const place_for_form = document.querySelector(".apicontent")
    //form element
    const form = document.createElement('form')
    //create label 
    const label = document.createElement('label')
    label.htmlFor = "number_of_participant"
    label.textContent = "How many participants for your activity do you have?"
    //create input
    const input = document.createElement('input')
    input.type = "number"
    input.id = "number_of_participant"
    input.name = "number_of_participant"
    input.min = '1'; //at least one participant
    //breaks
    const br = document.createElement('br')
    const br1 = document.createElement('br')
    //add label and input to the form
    form.appendChild(label)
    form.appendChild(br)
    form.appendChild(input)
    form.appendChild(br1)
    
    // Create button - if user clicks on button, the data from input form goes as input.value
    const button = document.createElement('button')
    button.textContent = "Submit number of people"
    button.type = "button"
    button.addEventListener('click', function () {
        const NumberForLink = input.value
        receiveActivity(NumberForLink)
    })
    form.appendChild(button)
    
    // Clear existing content and append form to the apicontent container
    clearAll();
    place_for_form.appendChild(form) // Add form to our container
}

async function receiveActivity(NumberForLink) {
    // Correct URL with string interpolation
    const url2 = `http://www.boredapi.com/api/activity?participants=${NumberForLink}`
    
    try {
        // Fetch data from the API
        const response = await fetch(url2)
        const data = await response.json()
        console.log(data); // Log data for debugging
        displayActivity(data);
    } catch (error) {
        console.error("Cannot receive an activity:", error)
    }
}

function displayActivity(data) {
    // Get the apicontent container
    const activity = document.querySelector(".apicontent")

    // Create a paragraph element to display the activity
    const activity_suggest = document.createElement('p')
    activity_suggest.textContent = `Activity: ${data.activity}`
    
    // Append the activity element to the apicontent container
    clearAll()
    activity.appendChild(activity_suggest);
}


//4th api for perdicting a nationality
function predictNation() {
    // Place for our form - apicontent container 
    const place_for_form = document.querySelector(".apicontent")

    // Create form element
    const form = document.createElement('form')
    
    // Create label 
    const label = document.createElement('label')
    label.htmlFor = "full_name";
    label.textContent = "Enter your name (up to 2 words):"
    
    // Create input
    const input = document.createElement('input')
    input.type = "text"
    input.id = "full_name"
    input.name = "full_name"
    
    // Breaks
    const br = document.createElement('br')
    const br1 = document.createElement('br')
    
    // Add label and input to the form
    form.appendChild(label)
    form.appendChild(br)
    form.appendChild(input)
    form.appendChild(br1)
    
    // Create button - if user clicks on button, the data from input form goes as input.value
    const button = document.createElement('button')
    button.textContent = "Submit your name"
    button.type = "button"
    button.addEventListener('click', function () {
        const fullName = input.value.trim()
        // Check if the input has 2 words or less
        const words = fullName.split(/\s+/)
        if (words.length <= 2 && (fullName.length >= 2 || fullName === "")) {
            if (words.length === 1) {
                receiveCounty([fullName])
            } else {
                receiveCounty([fullName])
            }
        } else {
            alert("Please enter a valid name with up to 2 words");
        }
    });
    form.appendChild(button);
    // clear existing content and append form to the apicontent container
    clearAll();
    place_for_form.appendChild(form); // add form to our container
}

async function receiveCounty(names) {
    // Construct URL with the names
    const nameQuery = names.length === 1 ? `name=${encodeURIComponent(names[0])}` : `name=${encodeURIComponent(names.join(' '))}`
    const url = `https://api.nationalize.io?${nameQuery}`
    try {
        // Fetch data from the API
        const response = await fetch(url)
        const data = await response.json()
        console.log(data) // Log data for debugging
        displayCountry(data)
    } catch (error) {
        console.error("Cannot receive activity:", error)
    }
}

function displayCountry(data) {
    const activity = document.querySelector(".apicontent")
    //Clea previous results
    clearAll()
    // Create elements to display the data
    const personElement = document.createElement('div')
    personElement.innerHTML = `<strong>Name:</strong> ${data.name} <br> <strong>Countries:</strong>`
    const countryList = document.createElement('ul')
    data.country.forEach(country => {
        const listItem = document.createElement('li')
        const countryName = countryCodes[country.country_id] || country.country_id
        listItem.textContent = `${countryName}: ${Math.round(country.probability*100)}%`
        countryList.appendChild(listItem);
    })
    personElement.appendChild(countryList)
    activity.appendChild(personElement)
}

//conties code
const countryCodes = {
    "US": "United States",
    "IN": "India",
    "FR": "France",
    "BR": "Brazil",
    "GB": "United Kingdom",
    "IT": "Italy",
    "ES": "Spain",
    "TR": "Turkey",
    "DE": "Germany",
    "CA": "Canada",
    "MX": "Mexico",
    "ID": "Indonesia",
    "AU": "Australia",
    "NL": "Netherlands",
    "PL": "Poland",
    "PH": "Philippines",
    "ZA": "South Africa",
    "CO": "Colombia",
    "AR": "Argentina",
    "CN": "China",
    "BE": "Belgium",
    "PT": "Portugal",
    "RU": "Russian Federation",
    "CZ": "Czech Republic",
    "MY": "Malaysia",
    "CL": "Chile",
    "NG": "Nigeria",
    "MA": "Morocco",
    "SE": "Sweden",
    "PK": "Pakistan",
    "PE": "Peru",
    "RO": "Romania",
    "CH": "Switzerland",
    "DZ": "Algeria",
    "SA": "Saudi Arabia",
    "VE": "Venezuela",
    "IR": "Iran, Islamic Republic of",
    "AE": "United Arab Emirates",
    "DK": "Denmark",
    "TH": "Thailand",
    "EG": "Egypt",
    "HU": "Hungary",
    "UA": "Ukraine",
    "GR": "Greece",
    "IE": "Ireland",
    "EC": "Ecuador",
    "KE": "Kenya",
    "TN": "Tunisia",
    "AT": "Austria",
    "JP": "Japan",
    "MQ": "Martinique",
    "NZ": "New Zealand",
    "BD": "Bangladesh",
    "VN": "Viet Nam",
    "FI": "Finland",
    "IL": "Israel",
    "HK": "Hong Kong",
    "GH": "Ghana",
    "CI": "Cote D'Ivoire",
    "RS": "Serbia",
    "SK": "Slovakia",
    "TW": "Taiwan, Province of China",
    "KR": "Korea, Republic of",
    "SN": "Senegal",
    "CM": "Cameroon",
    "LK": "Sri Lanka",
    "LB": "Lebanon",
    "CR": "Costa Rica",
    "NE": "Niger",
    "DO": "Dominican Republic",
    "BG": "Bulgaria",
    "HR": "Croatia",
    "AO": "Angola",
    "UY": "Uruguay",
    "GT": "Guatemala",
    "JO": "Jordan",
    "KW": "Kuwait",
    "UG": "Uganda",
    "BO": "Bolivia",
    "QA": "Qatar",
    "TZ": "Tanzania, United Republic of",
    "PA": "Panama",
    "PR": "Puerto Rico",
    "LT": "Lithuania",
    "SI": "Slovenia",
    "AL": "Albania",
    "BY": "Belarus",
    "ZW": "Zimbabwe",
    "KZ": "Kazakhstan",
    "NP": "Nepal",
    "AZ": "Azerbaijan",
    "IQ": "Iraq",
    "SG": "Singapore",
    "BA": "Bosnia and Herzegovina",
    "CD": "Congo, the Democratic Republic of the",
    "SV": "El Salvador",
    "CY": "Cyprus",
    "ET": "Ethiopia",
    "LV": "Latvia",
    "OM": "Oman",
    "PY": "Paraguay",
    "MZ": "Mozambique",
    "HN": "Honduras",
    "LU": "Luxembourg",
    "RE": "Reunion",
    "JM": "Jamaica",
    "MM": "Myanmar",
    "ZM": "Zambia",
    "NO": "Norway",
    "NI": "Nicaragua",
    "MD": "Moldova, Republic of",
    "BJ": "Benin",
    "TT": "Trinidad and Tobago",
    "MK": "North Macedonia",
    "BH": "Bahrain",
    "BF": "Burkina Faso",
    "SD": "Sudan",
    "ML": "Mali",
    "MG": "Madagascar",
    "BW": "Botswana",
    "KH": "Cambodia",
    "MT": "Malta",
    "IS": "Iceland",
    "SY": "Syrian Arab Republic",
    "AF": "Afghanistan",
    "TG": "Togo",
    "AM": "Armenia",
    "NA": "Namibia",
    "RW": "Rwanda",
    "GA": "Gabon",
    "CU": "Cuba",
    "LY": "Libyan Arab Jamahiriya",
    "ME": "Montenegro",
    "UZ": "Uzbekistan",
    "YE": "Yemen",
    "HT": "Haiti",
    "PG": "Papua New Guinea",
    "PS": "Palestinian Territory, Occupied",
    "MW": "Malawi",
    "MU": "Mauritius",
    "FJ": "Fiji",
    "MN": "Mongolia",
    "GN": "Guinea",
    "BS": "Bahamas",
    "EE": "Estonia",
    "GP": "Guadeloupe",
    "CV": "Cape Verde",
    "MV": "Maldives",
    "GE": "Georgia",
    "DJ": "Djibouti",
    "GM": "Gambia",
    "BB": "Barbados",
    "LR": "Liberia",
    "KG": "Kyrgyzstan",
    "MR": "Mauritania",
    "SO": "Somalia",
    "AD": "Andorra",
    "SL": "Sierra Leone",
    "BN": "Brunei Darussalam",
    "MO": "Macao",
    "LA": "Lao People's Democratic Republic",
    "SR": "Suriname",
    "SZ": "Swaziland",
    "AN": "Netherlands Antilles",
    "LS": "Lesotho",
    "BM": "Bermuda",
    "NC": "New Caledonia",
    "BI": "Burundi",
    "BT": "Bhutan",
    "SH": "Saint Helena",
    "MC": "Monaco",
    "GY": "Guyana",
    "BZ": "Belize",
    "PF": "French Polynesia",
    "GU": "Guam",
    "GF": "French Guiana",
    "TD": "Chad",
    "JE": "Jersey",
    "SC": "Seychelles",
    "GQ": "Equatorial Guinea",
    "XK": "Kosovo",
    "TJ": "Tajikistan",
    "CG": "Congo",
    "AW": "Aruba",
    "LC": "Saint Lucia",
    "TM": "Turkmenistan",
    "GI": "Gibraltar",
    "AG": "Antigua and Barbuda",
    "IM": "Isle of Man",
    "KM": "Comoros",
    "SS": "South Sudan",
    "AS": "American Samoa",
    "GG": "Guernsey",
    "LI": "Liechtenstein",
    "CF": "Central African Republic",
    "GL": "Greenland",
    "FO": "Faroe Islands",
    "SM": "San Marino",
    "VC": "Saint Vincent and the Grenadines",
    "YT": "Mayotte",
    "TC": "Turks and Caicos Islands",
    "DM": "Dominica",
    "KN": "Saint Kitts and Nevis",
    "VU": "Vanuatu",
    "GW": "Guinea-Bissau",
    "SB": "Solomon Islands",
    "MP": "Northern Mariana Islands",
    "TV": "Tuvalu",
    "ST": "Sao Tome and Principe",
    "TL": "Timor-Leste",
    "AX": "Aland Islands",
    "AI": "Anguilla",
    "VI": "Virgin Islands, U.s.",
    "WS": "Samoa",
    "TO": "Tonga",
    "VG": "Virgin Islands, British",
    "ER": "Eritrea",
    "FM": "Micronesia, Federated States of",
    "MH": "Marshall Islands",
    "AQ": "Antarctica",
    "KI": "Kiribati",
    "PW": "Palau",
    "CK": "Cook Islands",
    "EH": "Western Sahara",
    "VA": "Holy See (Vatican City State)",
    "CW": "Curacao",
    "IO": "British Indian Ocean Territory",
    "WF": "Wallis and Futuna",
    "PM": "Saint Pierre and Miquelon",
    "MS": "Montserrat",
    "NR": "Nauru",
    "CX": "Christmas Island",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "FK": "Falkland Islands (Malvinas)",
    "CC": "Cocos (Keeling) Islands",
    "KP": "Korea, Democratic People's Republic of",
    "PN": "Pitcairn",
    "TF": "French Southern Territories",
    "TK": "Tokelau",
    "SJ": "Svalbard and Jan Mayen",
    "KY": "Cayman Islands",
    "BL": "Saint Barthelemy",
    "GD": "Grenada",
    "BV": "Bouvet Island",
    "HM": "Heard Island and Mcdonald Islands",
    "MF": "Saint Martin",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "GS": "South Georgia and the South Sandwich Islands",
    "SX": "Sint Maarten",
    "UM": "United States Minor Outlying Islands"
};