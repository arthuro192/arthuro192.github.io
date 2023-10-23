
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function form_log() {
    const into_form = document.querySelectorAll("form input, #your_message")
    for (let i = 0; i < into_form.length; i++) {
        into_form[i].addEventListener ('change', () => {
            const value_label = into_form[i].labels[0].textContent
            const value_input = into_form[i].value
            console.log(
                "Champ " + value_label + " : " + value_input
            )
        })
    }
}

function prevent_default() {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const h1_modal = document.querySelector(".modal_header h1")
        form.innerHTML = `
        <p>Merci de m'avoir contacté !<br>
        Je te répondrai dès que possible.</p>
        `
        h1_modal.innerText = "Message envoyé.";
    })
}

form_log()
prevent_default()