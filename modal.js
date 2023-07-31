
// %COL_168% | %COL_168% ##############################################################################################################################################
// %COL_84% #######################################################################
// %COL_63% ##################################################
// --------------------------------------

// OBJECTIF ###########################################################################################################################################################

// ISSUES GITHUB.COM ##############################################################

// #1 | TODO : FERMER LA MODALE ############################## OK_FAIT

    // Ajouter la fonctionnalité au bouton (x)
        // OK_FAIT

// #6 | FERMETURE DE LA MODALE ############################### OK_FAIT

    // Utilisation de: "display = none" pour fermer la modale.
        // OK_FAIT

// #2 | IMPLEMENTER ENTREES DU FORMULAIRE #################### OK_FAIT

    // (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire.
    // (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire :
        // OK_FAIT
    //     Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
    //     Les données doivent être saisies correctement :
    //     (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
        // OK_FAIT
    //     (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
        // OK_FAIT
    //     (3) L'adresse électronique est valide.
        // OK_FAIT
    //     (4) Pour le nombre de concours, une valeur numérique est saisie.
        // OK_FAIT
    //     (5) Un bouton radio est sélectionné.
        // OK_FAIT
    //     (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
        // OK_FAIT
    //     Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
        // OK_FAIT

// #3 | AJOUTER VALIDATION OU MESSAGES D'ERREUR ############## OK_FAIT

    // Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte.
    // Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :

    //     "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    //     "Vous devez choisir une option."
    //     "Vous devez vérifier que vous acceptez les termes et conditions."
    //     "Vous devez entrer votre date de naissance."

// #4 | AJOUTER CONFIRMATION QUAND ENVOI REUSSI ############## OK_FAIT

    // Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")

// #5 | TESTS MANUELS ######################################## @FAIRE

    // Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop.
    // Corriger les erreurs d'affichage existantes.
    // Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)

// STRUCTURE DOM <FORM NAME="RESERVE">_CONTROLES@FAIRE ################################################################################################################

    // <DIV CLASS="FORMDATA">
        // <LABEL>PRÉNOM
        // <INPUT ID="FIRST" CLASS="TEXT-CONTROL +SPÉ_MINLENGTH="2"">

    // <DIV CLASS="FORMDATA">
        // <LABEL>NOM
        // <INPUT ID="LAST" CLASS="TEXT-CONTROL">

    // <DIV CLASS="FORMDATA">
        // <LABEL>E-MAIL
        // <INPUT ID="EMAIL" CLASS="TEXT-CONTROL">

    // <DIV CLASS="FORMDATA">
        // <LABEL>DATE DE NAISSANCE
        // <INPUT ID="BIRTHDATE" CLASS="TEXT-CONTROL">

    // <DIV CLASS="FORMDATA">
        // <LABEL>À COMBIEN DE TOURNOIS GAMEON AVEZ-VOUS DÉJÀ PARTICIPÉ ?
        // <INPUT ID="QUANTITY" CLASS="TEXT-CONTROL" +SPÉ_MIN="0" & MAX="99">

    // <P CLASS="TEXT-LABEL">A QUEL TOURNOI SOUHAITEZ-VOUS PARTICIPER CETTE ANNÉE ?</P>

    // <DIV CLASS="FORMDATA">
        // <INPUT ID="LOCATION1" CLASS="CHECKBOX-INPUT" NAME="LOCATION">
        // <LABEL CLASS="CHECKBOX-LABEL" FOR="LOCATION1">NEW YORK
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

        // <INPUT ID="LOCATION2" CLASS="CHECKBOX-INPUT" NAME="LOCATION">
        // <LABEL CLASS="CHECKBOX-LABEL" FOR="LOCATION2">SAN FRANCISCO
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

        // <INPUT ID="LOCATION3" CLASS="CHECKBOX-INPUT" NAME="LOCATION">
        // <LABEL CLASS="CHECKBOX-LABEL" FOR="LOCATION3">SEATTLE</LABEL>
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

        // <INPUT ID="LOCATION4" CLASS="CHECKBOX-INPUT" NAME="LOCATION">
        // <LABEL CLASS="CHECKBOX-LABEL" FOR="LOCATION4">CHICAGO
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

        // <INPUT ID="LOCATION5" CLASS="CHECKBOX-INPUT" NAME="LOCATION">
        // <LABEL CLASS="CHECKBOX-LABEL" FOR="LOCATION5">BOSTON
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

        // <INPUT ID="LOCATION6" CLASS="CHECKBOX-INPUT" NAME="LOCATION">
        // <LABEL CLASS="CHECKBOX-LABEL" FOR="LOCATION6">PORTLAND
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

    // <DIV CLASS="FORMDATA">
        // <INPUT ID="CHECKBOX1" CLASS="CHECKBOX-INPUT" +SPÉ_CHECKED="">
        // <LABEL CLASS="CHECKBOX2-LABEL" FOR="CHECKBOX1" +SPÉ_REQUIRED="">J'AI LU ET ACCEPTÉ LES CONDITIONS D'UTILISATION.
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

        // <INPUT ID="CHECKBOX2" CLASS="CHECKBOX-INPUT">
        // <LABEL CLASS="CHECKBOX2-LABEL" FOR="CHECKBOX2">JE SOUHAITE ÊTRE PRÉVENU DES PROCHAINS ÉVÈNEMENTS.
            // <SPAN CLASS="CHECKBOX-ICON"> ::AFTER

    // <INPUT CLASS="BTN-SUBMIT" VALUE="C'EST PARTI">

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

      let compteur = 0

      for (let i = 0; i < form_check.length; i++) {

        if (form_check[i] == true) {

          compteur += 1

        } 

      }

      if (compteur == form_check.length) {

        // MÉTHODE_1 ######################################
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

          console.log("TOUTES LES VALEURS NE SONT PAS RENSEIGNÉES CORRECTEMENTS, NE PAS AFFICHER LA VALIDATION DE L'INSCRIPTION")

      }

  });

// CONTRÔLE_PRENOM_&_NOM ###########################################################
// MINIMUM DE 2 CARACTÈRES, NON VIDE.

    let input_first = document.getElementById("first")
    let input_last = document.getElementById("last")
    let input_array = [input_first, input_last]

    let first_error = document.createElement("div") // LE <DIV> DÉDIÉ AU MESSAGE D'ERREUR EST CRÉÉ.
    first_error.classList.add("error_msg") // ON Y AJOUTE LA CLASSE CSS CRÉÉE À CET EFFET.
    let last_error = document.createElement("div") // LE <DIV> DÉDIÉ AU MESSAGE D'ERREUR EST CRÉÉ.
    last_error.classList.add("error_msg") // ON Y AJOUTE LA CLASSE CSS CRÉÉE À CET EFFET.

    for (let i = 0; i < input_array.length; i++) { // ON BOUCLE SUR CHACUN DES <INPUT> DU TABLEAU.

      input_array[i].addEventListener ('change', () => { // À CHAQUE FOIS QU'UN <INPUT> EST DÉSÉLECTIONNÉ ...

        let input_array_i_value = input_array[i].value // ON RÉCUPÈRE SA VALEUR ...

        if (input_array_i_value.length < 2) { // SI LE CONTRÔLE EST KO :

          if (input_array[i] === input_first) { // ET QUE CELA CONCERNE L'INPUT #FIRST

            form_check[0] = false
            parent = input_first.parentElement
            parent.appendChild(first_error)
            first_error.innerHTML = `<p>Il faut un minimum de 2 caractères.</p>`

          } else { // ET QUE CELA CONCERNE L'INPUT #LAST

            form_check[1] = false
            parent = input_last.parentElement
            parent.appendChild(last_error)
            last_error.innerHTML = `<p>Il faut un minimum de 2 caractères.</p>`

          }

        } else { // SI LE CONTRÔLE EST OK :

          if (input_array[i] === input_first) { // ET QUE CELA CONCERNE L'INPUT #FIRST

            form_check[0] = true
            first_error.remove() // ON SUPPRIME LE <DIV> ÉVENTUEL DÉDIÉ AU MESSAGE D'ERREUR.

          } else { // ET QUE CELA CONCERNE L'INPUT #LAST

            form_check[1] = true
            last_error.remove() // ON SUPPRIME LE <DIV> ÉVENTUEL DÉDIÉ AU MESSAGE D'ERREUR.

          }

        }

      })

    }

// CONTRÔLE_EMAIL ##################################################################
// MODELE REGEX : [a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+

    let input_email = document.getElementById("email")
    let regex_email = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

    let email_error = document.createElement("div")
    email_error.classList.add("error_msg")

    input_email.addEventListener ('change', () => {

      let input_email_value = input_email.value
      let resultat = regex_email.test(input_email_value)

      if (resultat) {

        form_check[2] = true
        email_error.remove()

      } else {

        form_check[2] = false
        parent = input_email.parentElement
        parent.appendChild(email_error)
        email_error.innerHTML = `<p>Email invalide</p>`

      }

    })

// CONTRÔLE_DATE_NAISSANCE #########################################################
// LA DATE NE PEUT PAS ÊTRE DANS LE FUTUR.
// L'UTILISATEUR NE PEUT PAS ÊTRE MINEUR.

let input_birthdate = document.getElementById("birthdate");
let date = new Date();
let date_format_ok_string = date.toISOString().split('T')[0]
let date_format_ok_obj = new Date(date_format_ok_string)

let birthdate_error = document.createElement("div")
birthdate_error.classList.add("error_msg")

input_birthdate.addEventListener ('change', () => {

  let input_birthdate_value_string = input_birthdate.value
  let input_birthdate_value_obj = new Date(input_birthdate_value_string)
  let difference = Math.abs(date_format_ok_obj-input_birthdate_value_obj)
  let days = difference/(1000 * 3600 * 24)

  parent = input_birthdate.parentElement
  parent.appendChild(birthdate_error)

  if (input_birthdate_value_string > date_format_ok_string) {

    form_check[3] = false
    birthdate_error.innerHTML = `<p>La date de naissance ne peut se situer dans le futur</p>`

  } else if (days < 6574) {
  // 6570 = 18 x 365 JOURS(1 AN).
  // 6574 = 6570 + 4 jours (X4 ANNÉES BISSEXTILES SUR LES 18 DERNIÈRES ANNÉES).

    form_check[3] = false
    birthdate_error.innerHTML = `<p>Vous ne pouvez pas vous inscrire si vous avez moins de 18 ans.</p>`

  } else {

    form_check[3] = true
    birthdate_error.remove()

  }

})

// CONTRÔLE_NB_TOURNOIS ############################################################
// VALEUR NUMÉRIQUE SAISIE.

let input_qty = document.getElementById("quantity")
let regex_qty = new RegExp("^[0-9]+$")

let qty_error = document.createElement("div")
qty_error.classList.add("error_msg")

input_qty.addEventListener ('change', () => {

  let input_qty_value = input_qty.value
  let resultat = regex_qty.test(input_qty_value)

  if ((resultat) && (input_qty_value < 1000)) {

    form_check[4] = true
    qty_error.remove()

  } else {

    form_check[4] = false
    parent = input_qty.parentElement
    parent.appendChild(qty_error)
    qty_error.innerHTML = `<p>Nombre de tournois invalide</p>`

  }

})

// CONTRÔLE_LOCATION_TOURNOIS ######################################################
// UN BOUTON RADIO EST SÉLECTIONNÉ.

let input_location = document.querySelectorAll("input[name='location']")

let location_error = document.createElement("div")
location_error.classList.add("error_msg")

  for (let i = 0; i < input_location.length; i++) {

    input_location[i].addEventListener ('change', () => {

      if (input_location[i].checked) {

        form_check[5] = true
        location_error.remove()
        // break

      } else {

        form_check[5] = false
        parent = input_location[i].parentElement
        parent.appendChild(location_error)
        location_error.innerHTML = `<p>Vous devez sélectionner le tournoi auquel participer</p>`

      }

    })

  }

// CONTRÔLE_CHECKBOX ###############################################################
// LA CASE DES CONDITIONS D'UTILISATION DOIT ÊTRE COCHÉE, L'AUTRE CASE EST FACULTATIVE.

let input_checkbox = document.querySelectorAll("input[type='checkbox']")

let checkbox_error = document.createElement("div")
checkbox_error.classList.add("error_msg")

for (let i = 0; i < input_checkbox.length; i++) {

  input_checkbox[i].addEventListener('change', () => {

      if (input_checkbox[i].id === "checkbox1") {

        if (input_checkbox[i].checked === false) {

          form_check[6] = false
          parent = input_checkbox[i].labels[0]
          parent.appendChild(checkbox_error)
          checkbox_error.innerHTML = `<p>Vous devez accepter les conditions d'utilisation.</p>`

        } else {

          form_check[6] = true
          checkbox_error.remove()

        }

      } else {
          
          if (input_checkbox[i].checked === true) {
            
            console.log("%Traitement à effectuer = informer l'utilisateur des évènements à venir%")

        } else {

            console.clear()

        }

      }

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