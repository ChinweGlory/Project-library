let myLibrary = [];

function Book(title, author, pages, read) {
  //   the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title, author, pages, read);
  //  add an array
  myLibrary.push(newBook);
  displayBooks();
}

// Function to display books in the library
function displayBooks() {
  let libraryContainer = document.querySelector("#library-container");

  // Clear the container
  libraryContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookDiv = document.createElement("div");
    bookDiv.setAttribute("class", "book-card");
    bookDiv.innerHTML = `
    <div class = "card-content">
    <h3 class = "book-title">Title: ${book.title}</h3>
    <h5 class = "book-author"> Author: ${book.author}</h5>
    
    <p>${book.pages} Pages</p>
    <p class = "book-read">${book.read ? "Read" : "Not read"}</p>
    </div>
    <div class = "bttn">
    <button class = "read-button" onclick="removeBook(${i})">Remove</button>
    <button class = "toggle" onclick="toggleReadStatus(${i})">Toggle Read Status</button>
    </div>
    
      
    `;
    // Append the book element to the library container
    libraryContainer.appendChild(bookDiv);

    libraryContainer.style.display = "block";
  }
}

// Function to remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
//   myLibrary[index].read = !myLibrary[index].read;
myLibrary[index].toggleReadStatus();
  displayBooks();
}

// Add an event listener to the "NEW BOOK" button
let btn = document.querySelector(".btn");
let formContainer = document.querySelector(".form-container");
let message = document.querySelector("p");
let welcome = document.querySelector("h1");
btn.addEventListener("click", function () {
  formContainer.style.display = "block";
  message.style.display = "none";
  welcome.style.display = "none";
});

// Add an event listener to the form
// let libraryContainer = document.querySelector("#library-container"),
document
  .querySelector(".form-container")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
    // libraryContainer.style.display = "block";
    
  });
