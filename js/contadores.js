
let progressCont = document.querySelector("#years")
let progressStart = 0
let progressEnd = 20
let speed = 100



let progress =  setInterval(() =>{
    progressStart = progressStart + 1
    progressCont.textContent = progressStart

    if(progressStart == progressEnd){
        clearInterval(progress)
    }
}, speed)


/*
document.addEventListener("scroll", () =>{
    let positionScroll = document.documentElement.scrollTop
    //console.log(positionScroll)
    let positionElementYear = gridYears.offsetTop   //1294
    //console.log(positionElementYear)
    if(positionScroll > positionElementYear - 450){
        //console.log("PARAR")
    }
})*/





