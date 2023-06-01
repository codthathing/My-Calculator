let firstEl=document.getElementById("first-el")
let secondSum=document.getElementById("second-sum")

let addBtn= document.getElementById("add-btn")
addBtn.addEventListener("click", function() {
    firstEl.value+="+"
})

let divBtn= document.getElementById("div-btn")
divBtn.addEventListener("click", function() {
    firstEl.value+="/"
})

let mulBtn= document.getElementById("mul-btn")
mulBtn.addEventListener("click", function() {
    firstEl.value+="*"
})

let subBtn= document.getElementById("sub-btn")
subBtn.addEventListener("click", function() {
    firstEl.value+="-"
})
let clearBtn= document.getElementById("clear-btn")
 clearBtn.addEventListener("click", function() {
    secondSum.value=""
    firstEl.value=""
 })

 document.getElementById("bra1").addEventListener("click", function() {
    firstEl.value+="("
 })
 
 document.getElementById("bra2").addEventListener("click", function() {
    firstEl.value+=")"
})

document.getElementById("point").addEventListener("click", function() {
    firstEl.value+="."
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


 document.getElementById("param-btn1").addEventListener("click", function() {
    firstEl.value+=1
 })
 
 document.getElementById("param-btn2").addEventListener("click", function() {
    firstEl.value+=2
 })
 
 document.getElementById("param-btn3").addEventListener("click", function() {
    firstEl.value+=3
 })
 
 document.getElementById("param-btn4").addEventListener("click", function() {
    firstEl.value+=4
 })
 
 document.getElementById("param-btn5").addEventListener("click", function() {
    firstEl.value+=5
 })
 
 document.getElementById("param-btn6").addEventListener("click", function() {
    firstEl.value+=6
 })
 
 document.getElementById("param-btn7").addEventListener("click", function() {
    firstEl.value+=7
 })
 
 document.getElementById("param-btn8").addEventListener("click", function() {
    firstEl.value+=8
 })
 
 document.getElementById("param-btn9").addEventListener("click", function() {
    firstEl.value+=9
 })
 
 document.getElementById("param-btn0").addEventListener("click", function() {
    firstEl.value+=0
 })