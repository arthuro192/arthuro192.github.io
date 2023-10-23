export function photographerTemplate(data) {

    const {name, id, city, country, tagline, price, portrait} = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        const article = document.createElement('article');
        const url = document.createElement('a');
        url.setAttribute("href", `photographer.html?id=${id}`);
        url.setAttribute("title", "Page personnelle : " + name)
        const img = document.createElement('img');
        img.classList.add("photographer");
        img.setAttribute("src", picture);
        img.alt = "Portrait représentant le ou la photographe : " + name;
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const infos = document.createElement('p');
        infos.innerHTML = `
        <span class="place_usercard">${city}, ${country}</span>
        <span class="tagline_usercard">${tagline}</span>
        <span class="price_usercard">${price}€/jour</span> `
        article.appendChild(url);
        url.appendChild(img);
        url.appendChild(h2);
        article.appendChild(infos);
        return (article);

    }

    function getUserPageDOM() {

        const photograph_header = document.querySelector(".photograph_header")
        const infos = document.createElement('div');
        infos.innerHTML = `
        <h1>${name}</h1>
        <p class="txt_red_userpage">${city}, ${country}</p>
        <p class="tagline_userpage">${tagline}</p>
        <div class="likes_price_userpage">
        <p class="likes_userpage"></p>
        <p>${price}€/jour</p>
        </div>`
        const img = document.createElement('img');
        img.classList.add("photographer");
        img.setAttribute("src", picture);
        img.alt = "Portrait représentant le ou la photographe : " + name;
        photograph_header.appendChild(infos);
        photograph_header.appendChild(img)
        const h1_modal = document.querySelector(".modal h1")
        const name_modal = document.createElement('span');
        name_modal.innerHTML = `${name}`
        h1_modal.appendChild(name_modal);

        return (photograph_header)

    }

    return {name, picture, getUserCardDOM, getUserPageDOM}

}

export function mediaTemplate(data) {

    const {id, photographerId, title, image, alt_image, likes, date, price} = data;
    const picture = `assets/medias/ID_${photographerId}/${image}`;

    function getMediaCardDOM() {

        const article = document.createElement('article');
        // RAJOUT_LIGHTBOX
        const href = document.createElement('a'); // Nom accessible = "Close up view"
        href.setAttribute("href", `${picture}`);
        // RAJOUT_LIGHTBOX
        const img = document.createElement('img');
        img.setAttribute("src", `${picture}`);
        img.alt = `${alt_image}`; // RAJOUT_LIGHTBOX
        const imgTitle = document.createElement('p');
        imgTitle.innerText = `${title}`;
        imgTitle.classList.add("txt_red_userpage");
        const likesTitle = document.createElement('span');
        likesTitle.classList.add("txt_red_userpage");
        likesTitle.innerText = `${likes}`;
        const likesIco = document.createElement('i');
        likesIco.classList.add("fa-solid","fa-heart")
        likesIco.setAttribute("aria-label", "likes");
        imgTitle.appendChild(likesTitle);
        imgTitle.appendChild(likesIco);
        // RAJOUT_LIGHTBOX
        href.appendChild(img);
        article.appendChild(href);
        // RAJOUT_LIGHTBOX
        article.appendChild(imgTitle);
        return (article);

    }

    return {getMediaCardDOM}

}









