//selecting  input num1
//selecting input num2
var box1 = document.getElementById("num1")
var box2 = document.getElementById("num2")
// selecting result
var result = document.getElementById("result")





function resultfunction(){
    
var box1value = Number(box1.value)
var box2value = Number(box2.value)

var total = box1value+box2value

    result.textContent=total
}

console.log(total)
