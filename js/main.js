//HEADER MOVIL

let containerHeaderMovil_ul = document.querySelector("#containerHeaderMovil_ul")
let containerHeaderMovil_btnResp = document.querySelector("#containerHeaderMovil_btnResp")
let estado = true;


containerHeaderMovil_btnResp.addEventListener("click", ()=>{
    containerHeaderMovil_ul.classList.toggle("containerHeaderMovil_ul_JS")   
})