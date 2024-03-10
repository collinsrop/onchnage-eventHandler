"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
document.querySelector("select").onchange =function(){
	document.querySelector("p").style.fontSize = this.value;
};
//styles the position
document.querySelector("#c2").style.display= "flex";
document.querySelector("#c2").style.alignItems="end";
document.querySelector("#c2").style.justifyContent = "space-evenly";
//button programmatically


});







