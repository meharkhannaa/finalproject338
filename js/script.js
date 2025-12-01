function hideRap() {
    console.log("In hideRap");
    const allDivs = document.querySelectorAll(".music");

    for (let i = 0; i < allDivs.length; i++) {
        console.log("Checking card:", allDivs[i].innerHTML);

        let genreLine = allDivs[i].querySelectorAll("dd")[0].innerHTML;
        console.log("Genre found:", genreLine);

        if (genreLine == "Rap") {
            allDivs[i].style.display = "none";
        }
    }
}

function hidePop() {
    console.log("In hidePop");
    const allDivs = document.querySelectorAll(".music");

    for (let i = 0; i < allDivs.length; i++) {
        console.log("Checking card:", allDivs[i].innerHTML);

        let genreLine = allDivs[i].querySelectorAll("dd")[0].innerHTML;
        console.log("Genre found:", genreLine);

        if (genreLine == "Pop") {
            allDivs[i].style.display = "none";
        }
    }
}

function hideCountry() {
    console.log("In hideCountry");
    const allDivs = document.querySelectorAll(".music");

    for (let i = 0; i < allDivs.length; i++) {
        console.log("Checking card:", allDivs[i].innerHTML);

        let genreLine = allDivs[i].querySelectorAll("dd")[0].innerHTML;
        console.log("Genre found:", genreLine);

        if (genreLine == "Country") {
            allDivs[i].style.display = "none";
        }
    }
}

function showAll() {
    console.log("In showAll");
    const allDivs = document.querySelectorAll(".music");

    for (let i = 0; i < allDivs.length; i++) {
        console.log("Showing card:", allDivs[i].innerHTML);
        allDivs[i].style.display = "inline-block";
    }
}

var images = document.querySelectorAll('.zoomable-img');

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        // Toggle the 'enlarged' class
        if (this.classList.contains('enlarged')) {
            this.classList.remove('enlarged');
        } else {
            this.classList.add('enlarged');
        }
    });
}

// Section 3: Social Icons
const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/meharkhanna/",
        img: "images/linkedin.png"
    },
    {
        name: "GitHub",
        url: "https://github.com/meharkhanna",
        img: "images/github.png"
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/user/yourusername",
        img: "images/spotify.png"
    },
    {
        name: "Gmail",
        url: "mailto:meharkha@umich.edu",
        img: "images/gmail.png"
    }
];

const socialContainer = document.getElementById("social-section");

socialLinks.forEach(link => {
    let a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank"; 

    let img = document.createElement("img");
    img.src = link.img;
    img.alt = link.name;
    img.classList.add("social-icon");

    a.appendChild(img);
    socialContainer.appendChild(a);
});
