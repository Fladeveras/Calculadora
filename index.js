const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclasRes=document.querySelector(".res")
const teclasD=document.querySelector(".display")
const ton=document.getElementById("ton")
const tlimpar=document.getElementById("tlimpar")

let sinal=false
let decimal=false

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(teclasD.innerHTML=="0"){
            teclasD.innerHTML=""
        }
        if(evt.target.innerHTML=="."){
            if(!decimal){
           decimal=true
           teclasD.innerHTML+=evt.target.innerHTML
        }
        }else{
        teclasD.innerHTML+=evt.target.innerHTML
        console.log (evt)
    }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{

        if(!sinal){
        sinal=true
        if(teclasD.innerHTML=="0"){
            teclasD.innerHTML=""
        }
        if(evt.target.innerHTML=="x"){
            teclasD.innerHTML+="×"
        }else{
            teclasD.innerHTML+=evt.target.innerHTML
        }
    }
    })
})

tlimpar.addEventListener ("click",(evt)=>{
    sinal=false
    decimal=false
    teclasD.innerHTML="0"
    
})


