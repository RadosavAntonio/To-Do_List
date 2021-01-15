let addItem = () => {
  const newItem = document.createElement("div");
    newItem.className = "listItem"
  const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
  const editButton = document.createElement("button");
   
  newItem.innerHTML = document.getElementById("insert").value;
  newItem.onclick = removeItem;
  deleteButton.innerHTML = "delete";
  editButton.innerHTML = "edit"

  document.getElementById("list").appendChild(newItem).appendChild(deleteButton);
};

function removeItem() {
  document.getElementById("list").removeChild(this);
};


