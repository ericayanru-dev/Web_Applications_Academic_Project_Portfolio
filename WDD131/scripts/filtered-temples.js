const year = document.querySelector("#copyYear");
const lastModified = document.querySelector("#lastModification");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const container = document.querySelector("#temples-container");
const home = document.querySelector("#home");
const small = document.querySelector("#small");
const large = document.querySelector("#large");
const newTemple = document.querySelector("#new");
const old = document.querySelector("#old");


function hamButton1() {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
}
const currentYear = new Date();
year.textContent = currentYear.getFullYear();
lastModified.textContent = document.lastModified;
hamButton.addEventListener("click", hamButton1);


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan Ivory Coast",
        dedicated: "2025, May, 25",
        area: 17362 ,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-59124.jpg"
    },
    {
        templeName: "Bacolod Philippines",
        location: "Bacolod Philippines",
        dedicated: "2021, December, 11",
        area: 26700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-61694.jpg"
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City Utah",
        dedicated: "2017, August, 8",
        area: 42657,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-62059.jpg"

    },
];

function createTempleCard(temple)
{
    return `
    <section class="temple-card">
        <h2>${temple.templeName}</h2>
        <p><strong>Location: </strong>${temple.location}</p>
        <p><strong>Dedicated: </strong>${temple.dedicated}</p>
        <p><strong>Size: </strong>${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" width="300" height="auto" loading="lazy">
    </section>`;
};

displayTemples(temples);
function displayTemples(templesArray)
{
    container.innerHTML = templesArray.map(createTempleCard).join("");
};

function filterOld()
{
    const filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)
    displayTemples(filtered)
}
old.addEventListener("click", filterOld);

function filterNew()
{
    const filter = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
    displayTemples(filter)
};
newTemple.addEventListener("click", filterNew);

function filterLarge()
{
    const filter = temples.filter(temple => temple.area > 90000)
    displayTemples(filter)
};
large.addEventListener("click", filterLarge);

function filterSmall()
{
    const filter = temples.filter(temple => temple.area < 10000)
    displayTemples(filter)
};
small.addEventListener("click", filterSmall);

home.addEventListener("click", () => displayTemples(temples));
