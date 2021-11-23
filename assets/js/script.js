let nameText = document.querySelector("#Name")

let erorMsgName = document.querySelector(".name")
erorMsgName.classList.add("d-none")

let btn = document.querySelector("input[type=button]")

btn.onclick = function () {

    if (nameText.value == "") {
        erorMsgName.classList.remove("d-none")
    } else {
        erorMsgName.classList.add("d-none")
    }
}


let SurnameText = document.querySelector("#surname")

let erorMsgSurName = document.querySelector(".surname")
erorMsgSurName.classList.add("d-none")

btn.onclick = function () {

    if (SurnameText.value == "") {
        erorMsgSurName.classList.remove("d-none")
    } else {
        erorMsgSurName.classList.add("d-none")
    }
}

let email = document.querySelector("#email")

let erorMsgEmail = document.querySelector(".email")
erorMsgEmail.classList.add("d-none")

btn.onclick = function () {

    if (email.value == "") {
        erorMsgEmail.classList.remove("d-none")
    } else {
        erorMsgEmail.classList.add("d-none")
    }
}

let mainPasword=document.querySelector("#Password")
ErrorMsgMainPasdword=document.querySelector(".password")
ErrorMsgMainPasdword.classList.add("d-none")

btn.onclick=function(){
    if (mainPasword.value=="") {
        ErrorMsgMainPasdword.classList.remove("d-none")
    }else{
        ErrorMsgMainPasdword.classList.add("d-none")
    }
}

let TryPasword=document.querySelector("#Password2")
ErrorMsgTryPasdword=document.querySelector(".password")
ErrorMsgTryPasdword.classList.add("d-none")

btn.onclick=function(){
    if (ErrorMsgTryPasdword.value===mainPasword.value) {
        ErrorMsgTryPasdword.classList.add("d-none")
    }else{
        ErrorMsgTryPasdword.classList.remove("d-none")
    }
}




