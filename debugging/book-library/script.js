let myLibrary = [];

window.onload = () => {
  populateStorage();
  render();
};

function populateStorage() {
  if (myLibrary.length === 0) {
    myLibrary.push(
      new Book("Robinson Crusoe", "Daniel Defoe", "252", true),
      new Book("The Old Man and the Sea", "Ernest Hemingway", "127", false)
    );
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

function submit() {
  if (!title.value || !author.value || !pages.value) {
    alert("Please fill all fields!");
    return;
  }

  myLibrary.push(
    new Book(title.value, author.value, pages.value, check.checked)
  );
  render();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  const table = document.getElementById("display");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  myLibrary.forEach((book, i) => {
    const row = table.insertRow();
    row.insertCell(0).innerText = book.title;
    row.insertCell(1).innerText = book.author;
    row.insertCell(2).innerText = book.pages;

    const readCell = row.insertCell(3);
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = book.read ? "Read" : "Not Read";
    toggleBtn.onclick = () => {
      book.read = !book.read;
      render();
    };
    readCell.appendChild(toggleBtn);

    const deleteCell = row.insertCell(4);
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = () => {
      myLibrary.splice(i, 1);
      render();
    };
    deleteCell.appendChild(delBtn);
  });
}
