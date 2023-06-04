let firstEl=document.getElementById("first-el")
let secondSum=document.getElementById("second-sum")


const addNum = (x) => {
   firstEl.value += x
}

document.getElementById("add-btn").addEventListener("click",()=> {addNum("+")})
document.getElementById("div-btn").addEventListener("click", ()=> {addNum("/")})
document.getElementById("mul-btn").addEventListener("click", ()=> {addNum("*")})
document.getElementById("sub-btn").addEventListener("click", ()=> {addNum("-")})
document.getElementById("bra1").addEventListener("click", ()=> {addNum("(")})
document.getElementById("bra2").addEventListener("click", ()=> {addNum(")")})
document.getElementById("point").addEventListener("click", ()=> {addNum(".")})
document.getElementById("param-btn1").addEventListener("click", ()=> {addNum(1)})
document.getElementById("param-btn2").addEventListener("click", ()=> {addNum(2)})
document.getElementById("param-btn3").addEventListener("click", ()=> {addNum(3)})
document.getElementById("param-btn4").addEventListener("click", ()=> {addNum(4)})
document.getElementById("param-btn5").addEventListener("click", ()=> {addNum(5)})
document.getElementById("param-btn6").addEventListener("click", ()=> {addNum(6)})
document.getElementById("param-btn7").addEventListener("click", ()=> {addNum(7)})
document.getElementById("param-btn8").addEventListener("click", ()=> {addNum(8)})
document.getElementById("param-btn9").addEventListener("click", ()=> {addNum(9)})
document.getElementById("param-btn0").addEventListener("click", ()=> {addNum(0)})


let clearBtn= document.getElementById("clear-btn")
 clearBtn.addEventListener("click", function() {
    secondSum.value=""
    firstEl.value=""
 })
document.getElementById("del-ete").addEventListener("click", function() {
        firstEl.value= firstEl.value.slice(0, -1)
})

 document.getElementById("total-btn").addEventListener("click", function() {
        try {
            secondSum.value = eval(firstEl.value)
            firstEl.value=""
        } catch {
            secondSum.value ="undefined"
            firstEl.value=""
        }
 })