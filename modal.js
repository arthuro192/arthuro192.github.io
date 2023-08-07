
// CODE_EN_PLACE ######################################################################################################################################################

// SELECTION_HTML_TAGS ############################################################

  const modalbg = document.querySelector(".bground");
  // <DIV> ENGLOBANT LE <FORM> AVEC UN [DISPLAY:NONE] PAR DÉFAUT & :
  // UN [DISPLAY:BLOCK] = [FUNCTION LAUNCHMODAL()]
  // QUAND "CLICK" SUR <BUTTON CLASS="BTN-SIGNUP MODAL-BTN"> = [=> BTN.ADDEVENTLISTENER]

  const modalBtn = document.querySelectorAll(".modal-btn");
  // <BUTTON CLASS="BTN-SIGNUP MODAL-BTN"> X2 :
    // <BUTTON CLASS="BTN-SIGNUP MODAL-BTN> DANS <DIV CLASS="HERO-SECTION"> = FORMAT MOBILE
      // [DISPLAY:BLOCK] QUAND [@media screen and (max-width: 800px)] SINON EN [DISPLAY:NONE]
    // <BUTTON CLASS="BTN-SIGNUP MODAL-BTN> DANS <DIV CLASS="HERO-CONTENT"> = FORMAT DESKTOP
      // [DISPLAY:NONE] QUAND [@media screen and (max-width: 800px)] SINON EN [DISPLAY:BLOCK]

  const formData = document.querySelectorAll(".formData");
  // <DIV CLASS="FORMDATA"> X7 DU <FORM> : ENGLOBE LES X7 <LABEL> + <INPUT>

// MODAL_EVENT ####################################################################

  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// FUNCTIONS ######################################################################

  function launchModal() {   // LAUNCH MODAL FORM
    modalbg.style.display = "block";
  }

  function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// FONCTION APPELLÉE PAR <A CLASS="ICON" ONCLICK="EDITNAV()">
// (EN [DISPLAY:NONE] POUR DESKTOP & [DISPLAY:BLOCK] POUR MOBILE/TABLETTE) :
  // SI "ONCLICK" SUR <A CLASS="ICON"> ALORS :
    // <DIV ID="MYTOPNAV" CLASS="TOPNAV"> = [+CLASS="TOPNAV RESPONSIVE"]
  // SINON :
    // <DIV ID="MYTOPNAV" CLASS="TOPNAV">

// MON_CODE ###########################################################################################################################################################

// VALIDATION_FORMULAIRE ##########################################################
// CTRL > TOUS LES CTRL [INPUT_*_CHECK] DANS [FORM_CHECK[*]] DOIVENT ÊTRE À "TRUE".

  let input_first_check = false
  let input_last_check = false
  let input_email_check = false
  let input_birthdate_check = false
  let input_qty_check = false
  let input_location_check = false
  let input_checkbox_check = false

  let form_check = [
      input_first_check,
      input_last_check,
      input_email_check,
      input_birthdate_check,
      input_qty_check,
      input_location_check,
      input_checkbox_check]

  let form = document.querySelector("form")

  form.addEventListener("submit", (event) => {

    event.preventDefault(); // BLOCAGE_RECHARGEMENT_PAGE

    console.log(form_check)

    ctrl_first_last_name()
    ctrl_email()
    ctrl_birthdate()
    ctrl_nb_tour()
    ctrl_locate_tour()
    ctrl_checkbox()

    let compteur = 0

    for (let i = 0; i < form_check.length; i++) {

      if (form_check[i] == true) {

        compteur += 1

      } 

    }

    if (compteur == form_check.length) {

// MÉTHODE_1 ----------------------------
// = ON VIDE L'INTÉGRALITÉ DU <FORM> POUR Y INJECTER UN HTML ENTIÈREMENT PERSONNALISÉ,
// EN RECRÉANT LE BOUTON À L'IDENTIQUE, QUI REPREND DONC TOUS SES ATTRIBUTS.
// LE CSS [.THE_END] & [.THE_END P] EST CRÉÉ EN CONSÉQUENCE.

      let the_end = `
      <div class="the_end">
      <p>Merci pour<br>
      votre inscription</p>
      </div>
      <input class="btn-submit" type="submit" value="Fermer">
      `

      form.innerHTML = the_end

      let input_submit = document.querySelector(".btn-submit")

      input_submit.addEventListener("click", () => {
      
        modalbg.removeAttribute("style")
      
      })

    } else {

      console.log("TOUTES LES VALEURS NE SONT PAS RENSEIGNÉES CORRECTEMENTS, NE PAS AFFICHER LA VALIDATION DE L'INSCRIPTION.")

    }

  });

// FUNCTION_CTRL_PRÉNOM_&_NOM #####################################################
// CTRL > UN MINIMUM DE 2 CARACTÈRES, NON VIDE, DOIT ÊTRE SAISI.

function ctrl_first_last_name() {

  for (let i = 0; i < input_array.length; i++) { // ON BOUCLE SUR CHACUN DES <INPUT> DU TABLEAU.

    let input_array_i_value = input_array[i].value // ON RÉCUPÈRE SA VALEUR ...

    if (input_array_i_value.length < 2) { // SI LE CTRL EST KO :

      if (input_array[i] === input_first) { // ET QUE CELA CONCERNE L'INPUT #FIRST

        form_check[0] = false
        parent_first.setAttribute("data-error", "Il faut un minimum de 2 caractères.")

      } else { // ET QUE CELA CONCERNE L'INPUT #LAST

        form_check[1] = false
        parent_last.setAttribute("data-error", "Il faut un minimum de 2 caractères.")

      }

    } else { // SI LE CTRL EST OK :

      if (input_array[i] === input_first) { // ET QUE CELA CONCERNE L'INPUT #FIRST

        form_check[0] = true
        parent_first.removeAttribute("data-error")

      } else { // ET QUE CELA CONCERNE L'INPUT #LAST

        form_check[1] = true
        parent_last.removeAttribute("data-error")

      }

    }

  }

}

// CTRL_PRÉNOM_&_NOM ##############################################################

    let input_first = document.getElementById("first")
    let input_last = document.getElementById("last")
    let parent_first = input_first.parentElement
    let parent_last = input_last.parentElement
    let input_array = [input_first, input_last]

    for (let i = 0; i < input_array.length; i++) { // ON BOUCLE SUR CHACUN DES <INPUT> DU TABLEAU.

      input_array[i].addEventListener ('change', () => { // À CHAQUE FOIS QU'UN <INPUT> EST DÉSÉLECTIONNÉ ...

        ctrl_first_last_name()

      })

    }

// FUNCTION_CTRL_E-MAIL ###########################################################
// CTRL > MODÈLE REGEX : [a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+

    function ctrl_email() {

      let input_mail_value = input_mail.value
      let resultat = regex_mail.test(input_mail_value)

      if (resultat) {

        form_check[2] = true
        parent_mail.removeAttribute("data-error")

      } else {

        form_check[2] = false
        parent_mail.setAttribute("data-error", "Adresse e-mail incorrecte.")

      }

    }

// CTRL_E-MAIL ####################################################################

    let input_mail = document.getElementById("email")
    let parent_mail = input_mail.parentElement
    let regex_mail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

    input_mail.addEventListener ('change', () => {

      ctrl_email()

    })

// FUNCTION_CTRL_DATE_DE_NAISSANCE ################################################
// CTRL > LA DATE NE PEUT PAS ÊTRE DANS LE FUTUR.
// CTRL > L'UTILISATEUR NE PEUT PAS ÊTRE MINEUR.

function ctrl_birthdate() {

  let input_birthdate_value_string = input_birthdate.value
  let input_birthdate_value_obj = new Date(input_birthdate_value_string)
  let difference = Math.abs(date_format_ok_obj-input_birthdate_value_obj)
  let days = difference/(1000 * 3600 * 24)

  if (input_birthdate_value_string > date_format_ok_string) {

    form_check[3] = false
    parent_birthdate.setAttribute("data-error", "Vous ne pouvez pas être né dans le futur.")

  } else if (days < 6574) {
  // 6570 = 18 x 365 JOURS(1 AN).
  // 6574 = 6570 + 4 jours (X4 ANNÉES BISSEXTILES SUR LES 18 DERNIÈRES ANNÉES).

    form_check[3] = false
    parent_birthdate.setAttribute("data-error", "Il faut la majorité pour pouvoir s'inscrire.")

  } else if (input_birthdate.value == "") {

    parent_birthdate.setAttribute("data-error", "Date de naissance incorrecte")

  } else {

    form_check[3] = true
    parent_birthdate.removeAttribute("data-error")

  }

}

// CTRL_DATE_DE_NAISSANCE #########################################################

let input_birthdate = document.getElementById("birthdate");
let parent_birthdate = input_birthdate.parentElement
let date = new Date();
let date_format_ok_string = date.toISOString().split('T')[0]
let date_format_ok_obj = new Date(date_format_ok_string)

input_birthdate.addEventListener ('change', () => {

  ctrl_birthdate()

})

// FUNCTION_CTRL_NB_TOURNOIS ######################################################
// CTRL > UNE VALEUR NUMÉRIQUE POSITIVE DOIT ÊTRE SAISIE.

function ctrl_nb_tour() {

  let input_qty_value = input_qty.value
  let resultat = regex_qty.test(input_qty_value)

  if (resultat) {

    form_check[4] = true
    parent_qty.removeAttribute("data-error")

  } else {

    form_check[4] = false
    parent_qty.setAttribute("data-error", "Il faut indiquer un chiffre ou un nombre positif.")

  }

}
// CTRL_NB_TOURNOIS ###############################################################

let input_qty = document.getElementById("quantity")
let regex_qty = new RegExp("^[0-9]+$")
let parent_qty = input_qty.parentElement

input_qty.addEventListener ('change', () => {

  ctrl_nb_tour()

})

// FUNCTION_CTRL_LOCALISATION_TOURNOI #############################################
// CTRL > UN BOUTON RADIO DOIT ÊTRE SÉLECTIONNÉ.

function ctrl_locate_tour() {

  for (let i = 0; i < input_location.length; i++) {

      if (input_location[i].checked) {

        form_check[5] = true
        parent_location.removeAttribute("data-error")
        break

      } else {
        
        form_check[5] = false
        parent_location.setAttribute("data-error", "Il faut sélectionner un tournoi.")

      }

  }

}

// CTRL_LOCALISATION_TOURNOI ######################################################

let input_location = document.querySelectorAll("input[name='location']")
let parent_location = input_location[0].parentElement

  for (let i = 0; i < input_location.length; i++) {

    input_location[i].addEventListener ('change', () => {

      ctrl_locate_tour()

    })

  }

// FUNCTION_CTRL_CHECKBOX #########################################################
// CTRL > LA CASE DES CONDITIONS D'UTILISATION DOIT ÊTRE COCHÉE.
// CTRL > L'AUTRE CASE EST FACULTATIVE.

function ctrl_checkbox() {

  for (let i = 0; i < input_checkbox.length; i++) {

    let parent_checkbox = input_checkbox[i].labels[0]
    
    if (input_checkbox[i].id === "checkbox1") {

      if (input_checkbox[i].checked === false) {

        form_check[6] = false
        parent_checkbox.setAttribute("data-error", "Il faut accepter les conditions d'utilisation.")

      } else {

        form_check[6] = true
        parent_checkbox.removeAttribute("data-error")

      }

    } else {
        
        if (input_checkbox[i].checked === true) {
          
          console.log("%Traitement à effectuer% = informer l'utilisateur des évènements à venir%")

      }

    }

  }

}

// CTRL_CHECKBOX ##################################################################

let input_checkbox = document.querySelectorAll("input[type='checkbox']")

for (let i = 0; i < input_checkbox.length; i++) {

  input_checkbox[i].addEventListener('change', () => {

    ctrl_checkbox()

  })

}

// FERMETURE_FORMULAIRE ###########################################################
// PERMETTRE LA FERMETURE DU FORMULAIRE LORS D'UN CLIC SUR LA CROIX.

let span_close = document.querySelector(".close")

span_close.addEventListener("click", () => {

  modalbg.removeAttribute("style")
  // ON SUPPRIME L'ATTRIBUT [STYLE="DISPLAY: BLOCK;"] INJECTÉ PAR [FUNCTION LAUNCHMODAL()].
  // [FUNCTION LAUNCHMODAL()] QUI EST LANCÉE LORS DU CLICK SUR LE BOUTON "JE M'INSCRIS"

})