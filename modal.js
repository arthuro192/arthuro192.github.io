
// CODE_IN_PLACE ######################################################################################################################################################

// SELECTION_HTML_TAGS ############################################################

  const modalbg = document.querySelector(".bground");
  // <DIV> INCLUDING THE <FORM> WITH A [DISPLAY:NONE] BY DEFAULT & :
  // A [DISPLAY:BLOCK] = [FUNCTION LAUNCHMODAL()]
  // WHEN "CLICK" ON <BUTTON CLASS="BTN-SIGNUP MODAL-BTN"> = [=> BTN.ADDEVENTLISTENER]

  const modalBtn = document.querySelectorAll(".modal-btn");
  // <BUTTON CLASS="BTN-SIGNUP MODAL-BTN"> X2 :
    // <BUTTON CLASS="BTN-SIGNUP MODAL-BTN> IN <DIV CLASS="HERO-SECTION"> = MOBILE FORMAT
      // [DISPLAY:BLOCK] WHEN [@media screen and (max-width: 800px)] OTHERWISE [DISPLAY:NONE]
    // <BUTTON CLASS="BTN-SIGNUP MODAL-BTN> IN <DIV CLASS="HERO-CONTENT"> = DESKTOP FORMAT
      // [DISPLAY:NONE] WHEN [@media screen and (max-width: 800px)] OTHERWISE [DISPLAY:BLOCK]

  const formData = document.querySelectorAll(".formData");
  // <DIV CLASS="FORMDATA"> X7 DU <FORM> : INCLUDING X7 <LABEL> + <INPUT>

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
// FUNCTION IS CALLED BY <A CLASS="ICON" ONCLICK="EDITNAV()">
// (AT [DISPLAY:NONE] FOR DESKTOP & [DISPLAY:BLOCK] FOR MOBILE/TABLETTE) :
  // IF "ONCLICK" ON <A CLASS="ICON"> THEN :
    // <DIV ID="MYTOPNAV" CLASS="TOPNAV"> = [+CLASS="TOPNAV RESPONSIVE"]
  // OTHERWISE :
    // <DIV ID="MYTOPNAV" CLASS="TOPNAV">

// MY_CODE ############################################################################################################################################################

// VALIDATION_FORMULAIRE ##########################################################
// CTRL > ALL THE CTRL [INPUT_*_CHECK] IN [FORM_CHECK[*]] THEY MUST BE SET TO "TRUE".

  // DECLARATION OF CONTROL VARIABLES
  let input_first_check = false
  let input_last_check = false
  let input_email_check = false
  let input_birthdate_check = false
  let input_qty_check = false
  let input_location_check = false
  let input_checkbox_check = false

  // INSERTION IN THE CONTROL ARRAY
  let form_check = [
      input_first_check,
      input_last_check,
      input_email_check,
      input_birthdate_check,
      input_qty_check,
      input_location_check,
      input_checkbox_check]

  let form = document.querySelector("form") // RECOVERY OF THE FORM'S HTML TAG <FORM>.

  form.addEventListener("submit", (event) => { // EVERY TIME YOU CLICK ON THE SUBMIT FORM BUTTON :

    event.preventDefault(); // PAGE RELOAD BLOCKED (JAVA FAILURE)

    console.clear()

    // EXECUTION OF CONTROL FUNCTIONS
    ctrl_first_last_name()
    ctrl_email()
    ctrl_birthdate()
    ctrl_nb_tour()
    ctrl_locate_tour()
    ctrl_checkbox()

    // DISPLAYING MAINTENANCE MESSAGES IN THE JS CONSOLE
    console.log("Champ 'Prénom' : ", form_check[0],
    "\nChamp 'Nom' : ", form_check[1],
    "\nChamp 'E-mail' : ", form_check[2],
    "\nChamp 'Date de naissance' : ", form_check[3],
    "\nChamp du nombre de tournoi(s) : ", form_check[4],
    "\nChamp de localisation du tournoi : ", form_check[5],
    "\nChamp des conditions d'utilisation : ", form_check[6],
    )

    let counter = 0

    for (let i = 0; i < form_check.length; i++) { // WE LOOP OVER EACH OF THE [INPUT_*_CHECK] IN ARRAY [FORM_CHECK[*]]

      if (form_check[i] == true) { // IF ONE CTRL [INPUT_*_CHECK] IN [FORM_CHECK[*]] IS "TRUE"

        counter += 1 // THE COUNTER INCREASES BY 1

      }

    }

    if (counter == form_check.length) { // IF THE COUNTER IS EQUAL TO THE LENGTH OF THE TABLE (7 CTRL/7 CTRL), VALIDATION IS OK.

// METHOD_1 -----------------------------
// = WE EMPTY THE ENTIRE <FORM> TO INJECT FULLY CUSTOMISED HTML,
// BY RECREATING THE BUTTON IDENTICALLY, WHICH TAKES ON ALL ITS ATTRIBUTES.
// THE CSS [.THE_END] & [.THE_END P] IT IS ACCORDINGLY CREATED.

      console.log("TOUTES LES VALEURS SONT RENSEIGNÉES CORRECTEMENTS, AFFICHER LA VALIDATION DE L'INSCRIPTION.")

      // INTERPOLATION HTML :
      let the_end = `
      <div class="the_end">
      <p>Merci pour<br>
      votre inscription</p>
      </div>
      <input class="btn-submit" type="submit" value="Fermer">
      `

      form.innerHTML = the_end // INJECTION OF HTML INTERPOLATION INTO THE FORM.

      let input_submit = document.querySelector(".btn-submit") // RECOVERY THE FORM SUBMIT BUTTON.

      input_submit.addEventListener("click", () => { // EACH TIME A SUBMIT BUTTON IS SELECT OR DESELECT ...

        modalbg.removeAttribute("style") // WE REMOVE THE ATTRIBUTE "STYLE="DISPLAY: BLOCK;" FROM <DIV> INCLUDING <FORM>.

      })

    } else {

      console.log("TOUTES LES VALEURS NE SONT PAS RENSEIGNÉES CORRECTEMENTS, NE PAS AFFICHER LA VALIDATION DE L'INSCRIPTION.")

    }

  });

// FUNCTION_CTRL_FIRST_&_LAST_NAME ################################################
// CTRL > A MINIMUM OF 2 NO-EMPTY CHARACTERS MUST BE ENTERED.

// THE MECHANICS OF THIS TEST ARE IDENTICAL FOR ALL TESTS.

function ctrl_first_last_name() { // CREATION OF A DEDICATED CONTROL FUNCTION

  for (let i = 0; i < input_array.length; i++) { // WE LOOP OVER EACH OF THE <INPUT> IN THE ARRAY.

    let input_array_i_value = input_array[i].value // WE RECOVER ITS VALUE ...

    if (input_array_i_value.length < 2) { // IF CTRL IS KO :

      if (input_array[i] === input_first) { // AND THAT THIS CONCERNS INPUT #FIRST

        form_check[0] = false // CONTROL VARIABLE KO
        parent_first.setAttribute("data-error", "Il faut un minimum de 2 caractères.") // SEE COMMENT LINE 218 IN MODAL.CSS FOR DATA-ERROR

      } else { // AND THAT THIS CONCERNS INPUT #LAST

        form_check[1] = false // CONTROL VARIABLE KO
        parent_last.setAttribute("data-error", "Il faut un minimum de 2 caractères.")

      }

    } else { // IF CTRL IS OK :

      if (input_array[i] === input_first) { // AND THAT THIS CONCERNS INPUT #FIRST

        form_check[0] = true // CONTROL VARIABLE OK
        parent_first.removeAttribute("data-error")

      } else { // AND THAT THIS CONCERNS INPUT #LAST

        form_check[1] = true // CONTROL VARIABLE OK
        parent_last.removeAttribute("data-error")

      }

    }

  }

}

// CTRL_FIRST_&_LAST_NAME #########################################################

    let input_first = document.getElementById("first") // RECOVERY OF THE FORM'S HTML TAG <INPUT ID="FIRST">
    let input_last = document.getElementById("last") // IDENTICAL FOR <INPUT ID="LAST">
    let input_array = [input_first, input_last] // INSERTION IN SPECIFIC ARRAY
    let parent_first = input_first.parentElement // RECOVERY THE PARENT HTML TAG FROM <INPUT ID="FIRST"> = <DIV CLASS="FORMDATA">
    let parent_last = input_last.parentElement // IDENTICAL FOR <INPUT ID="LAST">

    for (let i = 0; i < input_array.length; i++) { // WE LOOP OVER EACH OF THE <INPUT> IN THE ARRAY

      input_array[i].addEventListener ('change', () => { // EACH TIME AN <INPUT> IS SELECT OR DESELECT ...

        ctrl_first_last_name() // EXECUTION OF THE ASSOCIATED FUNCTION

      })

    }

// FUNCTION_CTRL_E-MAIL ###########################################################
// CTRL > MODEL REGEX : [a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+

    function ctrl_email() {

      let parent_mail = input_mail.parentElement
      let regex_mail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
      let input_mail_value = input_mail.value
      let result = regex_mail.test(input_mail_value)

      if (result) {

        form_check[2] = true
        parent_mail.removeAttribute("data-error")

      } else {

        form_check[2] = false
        parent_mail.setAttribute("data-error", "Adresse e-mail incorrecte.")

      }

    }

// CTRL_E-MAIL ####################################################################

    let input_mail = document.getElementById("email")

    input_mail.addEventListener ('change', () => {

      ctrl_email()

    })

// FUNCTION_CTRL_BIRTHDATE ########################################################
// CTRL > THE DATE CANNOT BE IN THE FUTURE.
// CTRL > THE USER CANNOT BE A MINOR.

function ctrl_birthdate() {

  let parent_birthdate = input_birthdate.parentElement
  let date = new Date();
  let date_format_ok_string = date.toISOString().split('T')[0]
  let date_format_ok_obj = new Date(date_format_ok_string)
  let input_birthdate_value_string = input_birthdate.value
  let input_birthdate_value_obj = new Date(input_birthdate_value_string)
  let difference = Math.abs(date_format_ok_obj-input_birthdate_value_obj)
  let days = difference/(1000 * 3600 * 24)

  if (input_birthdate_value_string > date_format_ok_string) {

    form_check[3] = false
    parent_birthdate.setAttribute("data-error", "Vous ne pouvez pas être né dans le futur.")

  } else if (days < 6574) {
  // 6570 = 18 x 365 DAYS (1 YEAR).
  // 6574 = 6570 + 4 DAYS (X4 LEAP YEARS BISSEXTILES OVER THE LAST 18 YEARS).

    form_check[3] = false
    parent_birthdate.setAttribute("data-error", "Il faut la majorité pour pouvoir s'inscrire.")

  } else if (input_birthdate.value == "") {

    parent_birthdate.setAttribute("data-error", "Date de naissance incorrecte")

  } else {

    form_check[3] = true
    parent_birthdate.removeAttribute("data-error")

  }

}

// CTRL_BIRTHDATE #################################################################

let input_birthdate = document.getElementById("birthdate");

input_birthdate.addEventListener ('change', () => {

  ctrl_birthdate()

})

// FUNCTION_CTRL_NB_TOURNAMENTS ###################################################
// CTRL > A POSITIVE NUMERIC VALUE MUST BE ENTERED.

function ctrl_nb_tour() {

  let input_qty_value = input_qty.value
  let result = regex_qty.test(input_qty_value)

  if (result) {

    form_check[4] = true
    parent_qty.removeAttribute("data-error")

  } else {

    form_check[4] = false
    parent_qty.setAttribute("data-error", "Il faut indiquer un chiffre ou un nombre positif.")

  }

}
// CTRL_NB_TOURNOIS ###############################################################

let input_qty = document.getElementById("quantity")
let parent_qty = input_qty.parentElement
let regex_qty = new RegExp("^[0-9]+$")

input_qty.addEventListener ('change', () => {

  ctrl_nb_tour()

})

// FUNCTION_CTRL_LOCATION_TOURNAMENT ##############################################
// CTRL > A RADIO BUTTON MUST BE SELECTED.

function ctrl_locate_tour() {
  let parent_location = input_location[0].parentElement
  
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

// CTRL_LOCATION_TOURNAMENT #######################################################

let input_location = document.querySelectorAll("input[name='location']")

  for (let i = 0; i < input_location.length; i++) {

    input_location[i].addEventListener ('change', () => {

      ctrl_locate_tour()

    })

  }

// FUNCTION_CTRL_CHECKBOX #########################################################
// CTRL > THE TERMS OF USE BOX MUST BE TICKED.
// CTRL > THE OTHER BOX IS OPTIONAL.

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

// CLOSING_THE_FORM ###############################################################
// CLOSE THE FORM WHEN THE CROSS IS CLICKED.

let span_close = document.querySelector(".close")

span_close.addEventListener("click", () => {

  modalbg.removeAttribute("style")
  // WE REMOVE THE [STYLE="DISPLAY: BLOCK;"] INJECTED BY [FUNCTION LAUNCHMODAL()].
  // [FUNCTION LAUNCHMODAL()] WHICH IS LAUNCHED WHEN THE "I REGISTER" BUTTON IS CLICKED.

})