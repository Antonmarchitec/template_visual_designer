
let speed = 2000
let progressEnd = 20
let progressStart = 0
let contYears = document.querySelector("#gridYears")




let progress =  setInterval(() =>{
    progressStart = progressStart + 1
    contYears.textContent = progressStart
    if(progressStart == progressEnd){
        clearInterval(progress)
        contYears.style.background = "yellow"
    }   
}, speed)





