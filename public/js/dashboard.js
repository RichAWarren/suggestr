const array = [{
    url: "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
    summary: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a malevolent",
    title: "The Matrix"
}, {
    url: "https://image.tmdb.org/t/p/original/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
    summary: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order ",
    title: "The Lord of the Rings: The Fellowship of the Ring"
}, {
    url: "https://image.tmdb.org/t/p/original/25QzBmimwYBW1cqJs3BR3tbp6jG.jpg",
    summary: "Jack Carter, a mob enforcer living in Las Vegas, travels back to his hometown of Seattle for his brother's funeral.",
    title: "Get Carter"
}, {
    url: "https://image.tmdb.org/t/p/original/ddPXVUAeCBFMbtTajh8bg4uyBvv.jpg",
    summary: "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a",
    title: "Pirates of the Caribbean: On Stranger Tides"
}
]

console.log(array);

function updateFilms() {
    const imagesContainer = document.getElementsByClassName('filmContainer')
    const titles = document.getElementsByClassName('filmTitle')
    const summaries = document.getElementsByClassName('summary')
    for (let i = 0; i < array.length; i ++) {
        imagesContainer[i].style.backgroundImage = 'url(' + array[i].url + ')'
        titles[i].innerHTML = array[i].title
        summaries[i].innerHTML = array[i].summary
    }
}

updateFilms();
