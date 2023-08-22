const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclasRes=document.querySelector("res")
const teclasD=document.querySelector(".display")
const ton=document.getElementById("ton")
const tlimpar=document.getElementById("tlimpar")
const tigual=document.getElementById("tigual")

let sinal=false
let decimal=false

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML=="."){
            if(!decimal){
           decimal=true
           if(teclasD.innerHTML=="0"){
           teclasD.innerHTML="0."
        }else{
            teclasD.innerHTML+=evt.target.innerHTML
        }
        }
        }else{
            if(teclasD.innerHTML=="0"){
                teclasD.innerHTML=""
            }
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
            teclasD.innerHTML+="*"
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

tigual.addEventListener ("click",(evt)=>{
    sinal=false
    decimal=false
   const res=eval(teclasD.innerHTML)
   teclasD.innerHTML=res
})


