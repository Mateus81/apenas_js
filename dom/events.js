// onload
window.onload = function(){
    console.log("Carregou o DOM");
}

console.log("Carregou o JS");

// click
var btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", function(){
    console.log("clicou");
    console.log(this);
    this.style.color = "red";
});

var title = document.querySelector("#title");
title.addEventListener("click", function() {
    var subtitle = document.querySelector(".subtitle");
    subtitle.style.display = "none";
});

// double click - dblclick
var subtitle = document.querySelector(".subtitle");
subtitle.addEventListener("dblclick", function() {
    console.log("clique duplo!");
});

// mouseover e mouseout
title.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});
title.addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
});

subtitle.addEventListener("mouseover", function(){
    var legenda = document.querySelector("#legenda");
    legenda.classList.remove("hide");
});

subtitle.addEventListener("mouseout", function(){
    var legenda = document.querySelector("#legenda");
    legenda.classList.add("hide");
});

// keydown
document.addEventListener("keydown", function(event){
    if(event.key === "Enter") {
        console.log("Apertou Enter");
    }
});

// keyup
document.addEventListener("keyup", function(e){
  
    if(event.key === "Enter"){
        console.log("Soltou Enter");
    }
});