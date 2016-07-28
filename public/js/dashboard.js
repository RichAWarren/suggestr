var array = [{
    url: "https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",
    summary: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a malevolent hacker known as Neo, who finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker, who reveals the shocking truth about our reality.",
    title: "The Matrix",
    filmClicked: false
}, {
    url: "https://image.tmdb.org/t/p/original/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
    summary: "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    filmClicked: false
}, {
    url: "https://image.tmdb.org/t/p/original/25QzBmimwYBW1cqJs3BR3tbp6jG.jpg",
    summary: "Jack Carter, a mob enforcer living in Las Vegas, travels back to his hometown of Seattle for his brother's funeral. During this visit, Carter realizes that the death of his brother was not accidental, but a murder. With this knowledge, Carter sets out to kill all those responsible.",
    title: "Get Carter",
    filmClicked: false
}, {
    url: "https://image.tmdb.org/t/p/original/ddPXVUAeCBFMbtTajh8bg4uyBvv.jpg",
    summary: "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    title: "Pirates of the Caribbean: On Stranger Tides",
    filmClicked: false
}
]


console.log(array);

function updateFilms() {
    for (var j = 1; j < array.length; j ++) {
        var div = document.getElementsByClassName('filmContainer')[0].cloneNode(true);
        document.getElementsByClassName('flexContainer')[0].appendChild(div);
    }
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

document.getElementsByClassName('saveButton')[0].addEventListener('click', function(event) {
    event.stopPropagation();
})

// var filmClicked = false;
array.forEach( function(el, index) {
    document.getElementsByClassName('filmContainer')[index].addEventListener('click', function() {
        if (array[index].filmClicked === true) {
            document.getElementsByClassName('darken')[index].style.opacity = '0';
            document.getElementsByClassName('filmTitle')[index].style.transform = 'translate(0,0)';
            document.getElementsByClassName('summary')[index].style.opacity = '0';
            // document.getElementsByClassName('summary')[0].classList.add('animated', 'fadeOutDown');
            array[index].filmClicked = false;
        } else {
            document.getElementsByClassName('darken')[index].style.opacity = '1';
            document.getElementsByClassName('filmTitle')[index].style.transform = 'translate(0,' + (document.getElementsByClassName('filmContainer')[0].clientHeight * -0.6) + 'px)';
            document.getElementsByClassName('summary')[index].style.opacity = '1';
            // document.getElementsByClassName('summary')[0].classList.add('animated', 'fadeInUp');
            // document.getElementsByClassName('filmTitle')[0].classList.add('animated', 'fadeInUp');
            array[index].filmClicked = true;
            // filmClicked = true;
        }
    })
})
