//my first API - get a joke
const url = "https://v2.jokeapi.dev/joke/Programming"
const url1 = "https://dog.ceo/api/breeds/image/random"
const url3 = "https://api.nationalize.io?name=mathisen"

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
    const place_for_form = document.querySelector(".apicontent");
    //form element
    const form = document.createElement('form');
    //create label 
    const label = document.createElement('label');
    label.htmlFor = "number_of_participant";
    label.textContent = "How many participants for your activity do you have?";
    //create input
    const input = document.createElement('input');
    input.type = "number";
    input.id = "number_of_participant";
    input.name = "number_of_participant";
    input.min = '1'; //at least one participant
    //breaks
    const br = document.createElement('br');
    const br1 = document.createElement('br');
    //add label and input to the form
    form.appendChild(label);
    form.appendChild(br);
    form.appendChild(input);
    form.appendChild(br1);
    
    // Create button - if user clicks on button, the data from input form goes as input.value
    const button = document.createElement('button');
    button.textContent = "Submit number of people";
    button.type = "button"; 
    button.addEventListener('click', function () {
        const NumberForLink = input.value;
        receiveActivity(NumberForLink);
    });
    form.appendChild(button);
    
    // Clear existing content and append form to the apicontent container
    clearAll();
    place_for_form.appendChild(form); // Add form to our container
}

async function receiveActivity(NumberForLink) {
    // Correct URL with string interpolation
    const url2 = `http://www.boredapi.com/api/activity?participants=${NumberForLink}`;
    
    try {
        // Fetch data from the API
        const response = await fetch(url2);
        const data = await response.json();
        console.log(data); // Log data for debugging
        displayActivity(data);
    } catch (error) {
        console.error("Cannot receive an activity:", error);
    }
}

function displayActivity(data) {
    // Get the apicontent container
    const activity = document.querySelector(".apicontent");

    // Create a paragraph element to display the activity
    const activity_suggest = document.createElement('p');
    activity_suggest.textContent = `Activity: ${data.activity}`;
    
    // Append the activity element to the apicontent container
    clearAll()
    activity.appendChild(activity_suggest);
}


//4th api for perdicting a nationality
function predictNation() {

}


