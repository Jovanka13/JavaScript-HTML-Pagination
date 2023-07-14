let items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
];

let itemsPerPage = 5;

function displayItems(pageNumber) {
  let startIndex = (pageNumber - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  let itemContainer = document.getElementById("itemContainer");
  itemContainer.innerHTML = "";

  for (let i = startIndex; i < endIndex; i++) {
    if (items[i]) {
      let listItem = document.createElement("li");
      listItem.setAttribute("class", "list-item");
      listItem.textContent = items[i];
      itemContainer.appendChild(listItem);
    }
  }
}

displayItems(1);
