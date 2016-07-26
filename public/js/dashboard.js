var array = [{
    url: "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
    summary: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a malevolent hacker known as Neo, who finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker, who reveals the shocking truth about our reality.",
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
    for (var i = 0; i < array.length; i ++) {
        imagesContainer[i].style.backgroundImage = 'url(' + array[i].url + ')'
        titles[i].innerHTML = array[i].title
        summaries[i].innerHTML = array[i].summary
    }
}

updateFilms();

var filmClicked = false;
document.getElementsByClassName('filmContainer')[0].addEventListener('click', function() {
    if (filmClicked) {
        document.getElementsByClassName('darken')[0].style.width = '100%';
        document.getElementsByClassName('filmTitle')[0].style.transform = 'translate(0,0)';
        document.getElementsByClassName('summary')[0].style.display = 'none';
        // document.getElementsByClassName('summary')[0].classList.add('animated', 'fadeOutDown');
        filmClicked = false;
    } else {
        document.getElementsByClassName('darken')[0].style.width = '100%';
        document.getElementsByClassName('filmTitle')[0].style.transform = 'translate(0,' + (document.getElementsByClassName('filmContainer')[0].clientHeight * -0.6) + 'px)';
        document.getElementsByClassName('summary')[0].style.display = 'block';
        // document.getElementsByClassName('summary')[0].classList.add('animated', 'fadeInUp');
        // document.getElementsByClassName('filmTitle')[0].classList.add('animated', 'fadeInUp');

        filmClicked = true;
    }
})
