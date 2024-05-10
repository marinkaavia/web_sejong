const url = "https://v2.jokeapi.dev/joke/Programming"

async function getData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        if (data.type == "single") {
            console.log(data.joke)
            const jokeText = data.joke
            showText(jokeText)
        }
        else {
            const jokeText = data.setup + " " + data.delivery
            showText(jokeText)

        }

    }
    catch (error) {

    }
}

function showText(text) {
    const jokeContent = document.querySelector(".joke-content")
    const newJoke = document.createElement('p')
    newJoke.textContent = text
    clearAll()
    jokeContent.appendChild(newJoke);

}

function clearAll() {
    const jokeContent = document.querySelector(".joke-content")
    jokeContent.innerHTML = ""
}
