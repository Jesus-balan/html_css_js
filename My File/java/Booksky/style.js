//selecting popup box overlay button
var popupverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupverlay.style.display="block";
    popupbox.style.display="block";
})

//selecting cancel button
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupverlay.style.display="none";
    popupbox.style.display="none";
})


//select container,Add-book,book-title,book-author-input,book-description-input

var container = document.querySelector(".container")
var Addbook = document.getElementById("Add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

Addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupverlay.style.display="none"

})


function deletebook(event)
{
    event.target.parentElement.remove()
}

