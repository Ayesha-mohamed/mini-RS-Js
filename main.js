const  first = document.querySelector("#first")
const  pp1 = document.querySelector("#pp1")
const  pp2  = document.querySelector("#pp2")
const  pp3 = document.querySelector("#pp3")



const price = 600;
let startValue = 0
pp3.addEventListener("click" , () =>{
    startValue ++
    pp2.innerHTML = startValue
    first.innerHTML = "$" + startValue *price
})
   


pp1.addEventListener("click" , () =>{
    if (startValue>=1){
    startValue --
    pp2.innerHTML = startValue
    first.innerHTML = "$" + startValue *price


    }
})
