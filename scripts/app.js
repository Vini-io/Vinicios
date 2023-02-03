
// animation arrow for skill

document.querySelector(".skill-frontEnd").addEventListener("click", () => {
    document.querySelector(".arrow-front").classList.toggle("arrow-rotate");
})
document.querySelector(".skill-backEnd").addEventListener("click", () => {
    document.querySelector(".arrow-back").classList.toggle("arrow-rotate");
})
document.querySelector(".skill-design").addEventListener("click", () => {
    document.querySelector(".arrow-design").classList.toggle("arrow-rotate");
})


// animation project

document.querySelector(".btn-comidaAqui").addEventListener("click", () => {
    document.querySelector(".projeto-info-comidaAqui").classList.toggle("hidden-projeto-info");
    document.querySelector(".projeto-img-comidaAqui").classList.toggle("show-projeto-img");
})

document.querySelector(".btn-calculadora").addEventListener("click", () => {
    document.querySelector(".projeto-info-calculadora").classList.toggle("hidden-projeto-info");
    document.querySelector(".projeto-img-calculadora").classList.toggle("show-projeto-img");
})

document.querySelector(".btn-paginalogin").addEventListener("click", () => {
    document.querySelector(".projeto-info-paginalogin").classList.toggle("hidden-projeto-info");
    document.querySelector(".projeto-img-paginalogin").classList.toggle("show-projeto-img");
})

document.querySelector(".btn-menu").addEventListener("click", () => {
    document.querySelector(".projeto-info-menu").classList.toggle("hidden-projeto-info");
    document.querySelector(".projeto-img-menu").classList.toggle("show-projeto-img");
})



// scroll Reveal

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 100
})



// para mobile


if (window.screen.width <= 630) {
    ScrollReveal().reveal('.img-perfil', { origin: 'top' });
    ScrollReveal().reveal('.info-sobre', { origin: 'bottom' });

    //skills
    ScrollReveal().reveal('.titles', { origin: 'top' });
    ScrollReveal().reveal('.container-skills', { origin: 'bottom' });

    //projetos
    ScrollReveal().reveal('.container-projeto', { origin: 'bottom' });

    //contatos
    ScrollReveal().reveal('.send-email', { origin: 'top' });
    ScrollReveal().reveal('.other-contact', { origin: 'bottom' });

} else {
    // para desktop
    // sobre
    ScrollReveal().reveal('.img-perfil', { origin: 'left' });
    ScrollReveal().reveal('.info-sobre', { origin: 'right' });

    //skills
    ScrollReveal().reveal('.titles', { origin: 'top' });
    ScrollReveal().reveal('.container-skills', { origin: 'right' });

    //projetos
    ScrollReveal().reveal('.container-projeto', { origin: 'right' });

    //contatos
    ScrollReveal().reveal('.send-email', { origin: 'left' });
    ScrollReveal().reveal('.other-contact', { origin: 'right' });
}


// nav mobile
document.querySelector(".body").addEventListener("click", () => {
})
document.querySelector(".nav-sobre").addEventListener("click", () => {
    document.querySelector(".nav-mobile").classList.remove("open-nav-mobile")
    document.querySelector(".openMenu-img").classList.remove("hidden-openMenu-img")
    document.querySelector(".closeMenu-img").classList.remove("show-closeMenu-img")
})
document.querySelector(".nav-skill").addEventListener("click", () => {
    document.querySelector(".nav-mobile").classList.remove("open-nav-mobile")
    document.querySelector(".openMenu-img").classList.remove("hidden-openMenu-img")
    document.querySelector(".closeMenu-img").classList.remove("show-closeMenu-img")
})
document.querySelector(".nav-projetos").addEventListener("click", () => {
    document.querySelector(".nav-mobile").classList.remove("open-nav-mobile")
    document.querySelector(".openMenu-img").classList.remove("hidden-openMenu-img")
    document.querySelector(".closeMenu-img").classList.remove("show-closeMenu-img")
})
document.querySelector(".nav-contato").addEventListener("click", () => {
    document.querySelector(".nav-mobile").classList.remove("open-nav-mobile")
    document.querySelector(".openMenu-img").classList.remove("hidden-openMenu-img")
    document.querySelector(".closeMenu-img").classList.remove("show-closeMenu-img")
})
document.querySelector(".toggle-nav-mobile").addEventListener("click", () => {
    document.querySelector(".openMenu-img").classList.toggle("hidden-openMenu-img")
    document.querySelector(".closeMenu-img").classList.toggle("show-closeMenu-img")
    document.querySelector(".nav-mobile").classList.toggle("open-nav-mobile")
})



//mode dark


function modedarK() {

    document.querySelector(".icon-dark-mobile").classList.toggle("hidden-dark-mobile")
    document.querySelector(".icon-light-mobile").classList.toggle("show-light-mobile")

    document.querySelector(".icon-dark").classList.toggle("hidden-icon-dark")
    document.querySelector(".icon-light").classList.toggle("show-icon-light")

    document.querySelector(".body").classList.toggle("show-dark")
    document.querySelector(".nav-desktop").classList.toggle("nav-light")
    document.querySelector(".nav-desktop").classList.toggle("show-dark")

    document.querySelector(".sobre").classList.toggle("list-dark")
    document.querySelector(".skill").classList.toggle("list-dark")
    document.querySelector(".projetos").classList.toggle("list-dark")
    document.querySelector(".contato").classList.toggle("list-dark")

    document.querySelector(".nav-mobile").classList.toggle("show-dark")
    document.querySelector(".nav-mobile").classList.toggle("nav-light-mobile")

    document.querySelector(".sobre-mobile").classList.toggle("list-dark")
    document.querySelector(".skill-mobile").classList.toggle("list-dark")
    document.querySelector(".projetos-mobile").classList.toggle("list-dark")
    document.querySelector(".contato-mobile").classList.toggle("list-dark")


}


// logo dinamica

let dia = new Date();

dia = dia.getDate();


if (dia > 0 && dia < 5) {
    console.log("teste")
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo1.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML = `<img class="logo" src="./assets/image/icon/logo1.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`


} else if (dia > 4 && dia < 9) {
    console.log("outro")
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo2.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML = `<img class="logo" src="./assets/image/icon/logo2.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`


} else if (dia > 8 && dia < 13) {
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo3.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML += `<img class="logo" src="./assets/image/icon/logo3.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`


} else if (dia > 12 && dia < 17) {
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo4.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML += `<img class="logo" src="./assets/image/icon/logo4.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`
                                                        

} else if (dia > 16 && dia < 21) {
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo5.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML = `<img class="logo" src="./assets/image/icon/logo5.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`
                                                        


} else if (dia > 20 && dia < 25) {
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo6.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML = `<img class="logo" src="./assets/image/icon/logo6.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`
                                                        


} else if (dia > 24 && dia < 29) {
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo7.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML = `<img class="logo" src="./assets/image/icon/logo7.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`
                                                        


} else if (dia > 28 && dia < 32) {
    document.querySelector(".head").innerHTML += `<link rel="icon" href="./assets/image/icon/logo8.png" type="image/png">`;
    document.querySelector(".nav-left").innerHTML = `<img class="logo" src="./assets/image/icon/logo8.png">`
    document.querySelector(".nav-left").innerHTML += `
                                                        <ul class="lista">
                                                            <a href="#sobre">
                                                                <li class="sobre">Sobre</li>
                                                            </a>
                                                            <a href="#skill">
                                                                <li class="skill">Skill</li>
                                                            </a>
                                                            <a href="#projetos">
                                                                <li class="projetos">Projetos</li>
                                                            </a>
                                                            <a href="#contato">
                                                                <li class="contato">Contato</li>
                                                            </a>
                                                        </ul>`
                                                        


}


