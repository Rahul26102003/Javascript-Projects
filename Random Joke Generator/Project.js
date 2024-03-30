const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const URL = "https://v2.jokeapi.dev/joke/Any";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(URL)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}
btn.addEventListener("click",getJoke);
getJoke();