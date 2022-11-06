let btnResponsive = document.querySelector("#btnResponsive")
let containerSection_navbar_ul = document.querySelector("#containerSection_navbar_ul")



btnResponsive.addEventListener("click", () =>{ 
        //console.log("hola aqui estot")
        containerSection_navbar_ul.classList.toggle("containerSection_navbar_ul_JS")
        containerSection_navbar_ul.style.transition = "0.5s all ease"
})