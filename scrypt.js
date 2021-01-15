let addItem = () => {
  const newItem = document.createElement("div");
    newItem.className = "itemButtons";
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
   
  newItem.innerHTML = document.getElementById("insert").value;
  newItem.onclick = removeItem;
  deleteButton.innerHTML = "delete";
  editButton.innerHTML = "edit"

  document.getElementById("list").appendChild(newItem);
};

let removeItem = () => {
  document.getElementById("list").removeChild(this);
};


