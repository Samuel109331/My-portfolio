window.addEventListener("DOMContentLoaded",() => {
    var url = "https://api.github.com/users/Samuel109331/repos"
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        // alert(data.length)
        for (let i = 0; i < data.length; i++ ) {
        document.querySelector("#projects-list").innerHTML += `
            <li>
            <a href="${data[i].html_url}" target="_blank">${data[i].name} </a>
            </li>
        `
        }
    })
})