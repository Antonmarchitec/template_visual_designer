let botonSubir = document.querySelector("#botonSubir")



document.addEventListener("scroll", ()=>{    
    let posicionScrolling = document.documentElement.scrollTop
    //console.log(posicionScrolling)

    let elementBoton = botonSubir.offsetTop     //489
    //console.log(elementBoton)

    if(posicionScrolling > elementBoton - 200){
        botonSubir.classList.add("botonSubir_JS")
        botonSubir.style.transition = "0.5s all"
    }else{
        botonSubir.classList.remove("botonSubir_JS")
    }
})

