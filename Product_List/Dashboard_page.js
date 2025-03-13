// login modal
const OpenModal = document.querySelectorAll("[data-modal-target-login]")
const closeModal = document.querySelectorAll("[data-close-button-login]")
const overlay = document.getElementById("Overlay-login")
const eyeicon = document.getElementById("password-hidden")
const password = document.querySelector(".pass")


eyeicon.addEventListener("click", function(){
    if(password.type === "password"){
        password.type = "text"
        eyeicon.src = "eye-open.png"

    }
    else{
        password.type = "password"
        eyeicon.src = "eye-close.png"
    }


})



OpenModal.forEach(button => {
    button.addEventListener("click", function(){
        const modal = document.querySelector(button.dataset.modalTargetLogin)
        openModal(modal)
    })
})

closeModal.forEach(button => {
    button.addEventListener("click", function(){
        const modal = button.closest('#modal-login')
        CloseModal(modal)
    })
})


overlay.addEventListener("click", function(){
    const modals = document.querySelectorAll("#modal-login.active")
    modals.forEach(modal => {
        CloseModal(modal)
    })



})
function openModal(modal){
    if(modal ==null){
        return
    }else{
    modal.classList.add("active")
    overlay.classList.add("active")
    }
}
function CloseModal(modal){
    if(modal ==null){
        return
    }
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

// signup modal
const OpenModal_signup = document.querySelectorAll("[data-modal-target-signup]")
const closeModal_signup = document.querySelectorAll("[data-close-button]")
const overlay_signup = document.getElementById("Overlay-signup")
const eyeicon_signup = document.getElementById("password-hidden-signup")
const password_signup = document.getElementById("password")


eyeicon_signup.addEventListener("click", function(){
    if(password_signup.type === "password"){
        password_signup.type = "text"
        eyeicon_signup.src = "eye-open.png"

    }
    else{
        password_signup.type = "password"
        eyeicon_signup.src = "eye-close.png"
    }


})



OpenModal_signup.forEach(button => {
    button.addEventListener("click", function(){
        const modal = document.querySelector(button.dataset.modalTargetSignup)
        openModal(modal)
    })
})

closeModal_signup.forEach(button => {
    button.addEventListener("click", function(){
        const modal = button.closest('#modal-signup')
        CloseModal(modal)
    })
})


overlay_signup.addEventListener("click", function(){
    const modals_signup = document.querySelectorAll("#modal-signup.active")
    modals_signup.forEach(modal => {
        CloseModal(modal)
    })



})
function openModal(modal){
    if(modal ==null){
        return
    }else{
    modal.classList.add("active")
    overlay_signup.classList.add("active")
    }
}
function CloseModal(modal){
    if(modal ==null){
        return
    }
    modal.classList.remove("active")
    overlay_signup.classList.remove("active")
}


document.getElementById('all_prods').addEventListener('click', function() {
    document.querySelector('.rose_products').classList.remove('hidden');
    document.querySelector('.sunflower_products').classList.remove('hidden');
    document.querySelector('.tulip_products').classList.remove('hidden');
});

document.getElementById('all_roses').addEventListener('click', function() {
    document.querySelector('.rose_products').classList.remove('hidden');
    document.querySelector('.sunflower_products').classList.add('hidden');
    document.querySelector('.tulip_products').classList.add('hidden');
});

document.getElementById('all_sunflowers').addEventListener('click', function() {
    document.querySelector('.rose_products').classList.add('hidden');
    document.querySelector('.sunflower_products').classList.remove('hidden');
    document.querySelector('.tulip_products').classList.add('hidden');
});

document.getElementById('all_tulips').addEventListener('click', function() {
    document.querySelector('.rose_products').classList.add('hidden');
    document.querySelector('.sunflower_products').classList.add('hidden');
    document.querySelector('.tulip_products').classList.remove('hidden');
});


document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
})

const first_name = document.getElementById("First_name")
const last_name = document.getElementById("Last_name")
const signup = document.getElementById("signup")

let name = ""
document.getElementById('login').addEventListener('click', function () {
    const modalLogin = document.querySelector("#modal-login");
    CloseModal(modalLogin);
});

signup.addEventListener("click", function () {

    name = first_name.value + " " + last_name.value;
    const sign_up_nav = document.getElementById("sign_up");
    const login_nav = document.getElementById("Log_in");
    const welcome = document.getElementById("welcome");
    welcome.innerText = `Welcome: ${name}`;

    sign_up_nav.style.display = "none";
    login_nav.style.display = "none";


    const modalSignup = document.querySelector("#modal-signup");
    CloseModal(modalSignup);
});
function CloseModal(modal) {
    if (modal == null) {
        return;
    }
    modal.classList.remove("active");
    overlay_signup.classList.remove("active");
    overlay.classList.remove("active");
}


