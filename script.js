
let input = document.getElementById("input-box");
let addButton = document.getElementById("add-button");
let list = document.getElementById("list");
addButton.addEventListener("click", addItem);
let buttonList = document.getElementsByClassName('remove-btn');

//adding the item
function addItem(e){
  let inputValue = document.getElementById("input-box").value;
  e.preventDefault();
if(inputValue !== ""){
  let li = document.createElement("li");
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("X"));
  button.setAttribute("class","remove-btn")
  li.appendChild(document.createTextNode(inputValue))
  li.appendChild(button);
  list.appendChild(li);
  input.value = "";
}
}
//removing item
let change = buttonList;
setInterval(function(){
  for(let i = 0; i< change.length; i++){
    change[i].addEventListener("click",removeBtn);
}
},0.001)

function removeBtn(e){
  e.preventDefault();
  e.target.parentNode.style.display = "none";
}



