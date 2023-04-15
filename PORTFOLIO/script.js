fetch('https://api.kanye.rest/')
    .then(response => {
        return response.json();
    })
    .then( quotes => {
        // console.log(quotes);//
    })

    // so we need something that will push DIFFERENT and RANDOM quotes to a text box. NGL would be kinda cool if I could animate the submit button to disappear and just have the quotes slide from right to left. //

    // OR if I could use a text-to-speech type of command that will read out the quotes after you click the button // 

let Kanye = document.querySelector("#Kanye")
let p = document.querySelector("p")
    Kanye.addEventListener("click", kanyeQuotes);
    function kanyeQuotes() {
        console.log("whatever")
        fetch('https://api.kanye.rest/')
        .then(response => {
            return response.json();
})
        .then( quotes => {
            p.innerHTML = quotes.quote
            console.log(quotes);
})
}