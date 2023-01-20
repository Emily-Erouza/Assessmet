let name= document.getElementById("name").value
let surname = document.getElementById("surname").value
let id = document.getElementById("id").value
var list = []

const upDateDisplay = (list) => {
  const displayOutput = document.getElementById('output')
  displayOutput.innerHTML = ""
  for(var i in list){
     displayOutput.innerHTML += `<li> ${list[i]}</li>`
    
  }
}


const mySubmit =(event) => {
  event.preventDefault();
  let form= document.getElementById("form")
  let name= document.getElementById("name").value
  let surname = document.getElementById("surname").value
  let id = document.getElementById("id").value
  if(name,surname,id === ""){
    
    alert("Please fill in all the boxes before you submit")
  }else{
  list.push(name,surname,id)
  upDateDisplay(list) 
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("id").value = "";
  }
    
}
  
  