//template_hhh8tka
//service_i0wz6br
//XqIGgZMOadRB7Rodg

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "You forgot something" ;
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for(let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)` 
       }
}


function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const sucess =document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_i0wz6br',
            'template_hhh8tka',
            event.target,
            'XqIGgZMOadRB7Rodg'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            sucess.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on gomescaneirajaime@gmail.com "
            );
        })
}  

function toggleModal() {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open";
}