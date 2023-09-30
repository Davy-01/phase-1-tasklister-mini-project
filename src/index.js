document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (e)=>{
      e.preventDefault();
    handleToDo(e.target['new-task-description'].value)
    
  })
  });

function handleToDo(description){
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "x"
  let list = document.createElement("li");
  list.textContent = description;
  list.appendChild(btn)
   document.querySelector("#tasks").appendChild(list)
  
}

function handleDelete(e){
  e.target.parentNode.remove()
}

