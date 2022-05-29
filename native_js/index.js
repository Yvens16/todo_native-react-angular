const input = document.getElementById("simple_input");
const todoList = document.getElementById("list");

input.addEventListener('keydown', e => {
  if (e.key === "Enter") {
    // Container qui contient ma tâche et le button pour le supprimer
    const containerListItem = document.createElement("div");
    // Ma tâche
    const listItem = document.createElement("span");
    listItem.style.marginRight = "100px";
    // Texte à chaque fois que je tape une lettre
    let text = e.target.value;
    // J'ajoute le text à mon span 
    listItem.textContent = text;
    // J'ajoute mon span à mon container
    containerListItem.appendChild(listItem);
    // je crée un boutton
    const btn = document.createElement("btn");
    btn.textContent = "x";
    btn.padding = "6px 12px";
    btn.style.cursor = "pointer";
    btn.style.color = "red";
    // J'ajoute mon boutton au container
    containerListItem.appendChild(btn);
    
    // J'ajoute un écouter pour cliquer sur le boutton
    btn.addEventListener("click", (e) => {
      // Je supprime le container du html quand je clique sur le boutton supprimer
      containerListItem.remove();
    })

    // J'ajoute mon container qui contient ma tâche et mon boutton à ma liste qui existe déja dans mon html #list
    todoList.appendChild(containerListItem);
    e.target.value = "";
  }
})