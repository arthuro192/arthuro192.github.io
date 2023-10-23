import {getPhotographers} from "./index.js";
import {mediaTemplate, photographerTemplate} from "../templates/photographer.js";

let {photographers} = await getPhotographers();
let {media} = await getPhotographers();

let url_params = new URL(document.location).searchParams;
let url_id = parseInt(url_params.get("id"));

let mainPhotograph = document.getElementById("main");
let sectionPhotograph = document.createElement('section');
sectionPhotograph.classList.add("photograph-medias");
mainPhotograph.appendChild(sectionPhotograph)

// PHOTOGRAPHER_FORM ##############################################################

let div_filter = document.querySelector(".photograph_filter");
let form = document.createElement('form');
form.setAttribute("method", "get");
form.setAttribute("action", "");

form.innerHTML = `
<label for="sort">Trier par</label>
<select name="order_by" id="sort" class="btn_red">
<!--Nom accessible = "Order by"/select = pas d'attribut ARIA nécessaire-->
    <option class="opt_pop">Popularité</option>
    <option class="opt_dat">Date</option>
    <option class="opt_tit">Titre</option>
</select>
`

div_filter.appendChild(form)

// PHOTOGRAPHER_INFO ##############################################################

photographers.forEach((photographer) => {

    if (photographer.id == url_id) {

        let photographerModel = photographerTemplate(photographer);
        let userPageDOM = photographerModel.getUserPageDOM();

    }

});

// PHOTOGRAPHER_MEDIA_ARRAY #######################################################

let medias_id = [];

media.forEach((media_unit) => {

    if (media_unit.photographerId == url_id) {

        medias_id.push(media_unit)

    }

});

// PHOTOGRAPHER_MEDIA_DISPLAY #####################################################

function display_media(medias) {

    medias.forEach((media) => {

        let mediaModel = mediaTemplate(media);
        let mediaCardDOM = mediaModel.getMediaCardDOM();
        sectionPhotograph.appendChild(mediaCardDOM);

    });

}

display_media(medias_id)

// POPULAR_SORT ###################################################################

let opt_pop = document.querySelector(".opt_pop");
opt_pop.addEventListener("click", function () {

    let medias_id_pop = Array.from(medias_id);
    medias_id_pop.sort(function (a, b) {
        // return a.likes - b.likes; // TRI CROISSANT = DU - AU + POPULAIRE.
        return b.likes - a.likes; // TRI DÉCROISSANT = DU + AU - POPULAIRE.
    });

    sectionPhotograph.innerHTML = "";
    display_media(medias_id_pop);
    lightbox();
    media_likes();

});

// DATE_SORT ######################################################################

let opt_dat = document.querySelector(".opt_dat");
opt_dat.addEventListener("click", function () {

    let medias_id_dat = Array.from(medias_id);
    medias_id_dat.sort(function (a, b) {
        // return (a.date > b.date)?1:-1; // TRI CROISSANT = DU - AU + RÉCENT.
        return (a.date < b.date)?1:-1; // TRI DÉCROISSANT = DU + AU - RÉCENT.
    });

    sectionPhotograph.innerHTML = "";
    display_media(medias_id_dat);
    lightbox();
    media_likes();

});

// TITLE_SORT #####################################################################

let opt_tit = document.querySelector(".opt_tit");
opt_tit.addEventListener("click", function () {

    let medias_id_tit = Array.from(medias_id);
    medias_id_tit.sort(function (a, b) {
        return (a.title > b.title)?1:-1; // TRI CROISSANT = DE A vers Z.
        // return (a.title < b.title)?1:-1; // TRI DÉCROISSANT = DE Z vers A.
    });

    sectionPhotograph.innerHTML = "";
    display_media(medias_id_tit);
    lightbox();
    media_likes();

});

// LIGHTBOX #######################################################################

function lightbox() {

    let lightbox = new SimpleLightbox('.photograph-medias a', {
        showCounter : false,
        captionSelector: 'img', // Valeur par défaut.
        captionsData: 'alt', // Légende img = valeur attr alt img.
    });

}

lightbox();

// MEDIA_LIKES ####################################################################

function media_likes() {

    let icos_likes = document.querySelectorAll("article p i")

    icos_likes.forEach((ico_likes) => {

        let media_likes_origin = Number((ico_likes.previousElementSibling).textContent)

        ico_likes.addEventListener("click", () => {

            let span_media_likes = ico_likes.previousElementSibling;
            let media_likes_new = Number((ico_likes.previousElementSibling).textContent)

            if (media_likes_new == media_likes_origin) {

                media_likes_new++
                span_media_likes.innerText = media_likes_new

            }

        })

    })

}

media_likes();

// TOTAL_LIKES ####################################################################

let likes_userpage = document.querySelector(".likes_userpage")
let total_likes = 0;

medias_id.forEach((media_id) => {
    total_likes += media_id.likes
});

likes_userpage.innerHTML = `${total_likes} <i class="fa-solid fa-heart" aria-label="total_likes"></i>`

// ?????_????? ########################################################################################################################################################
