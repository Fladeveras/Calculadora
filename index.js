const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclasRes=document.querySelector(".res")
const teclasD=document.querySelector(".display")

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        teclasD.innerHTML+=evt.target.innerHTML
        console.log (evt)

    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        teclasD.innerHTML+=evt.target.innerHTML
    })
})
