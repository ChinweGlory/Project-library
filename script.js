const myLibrary = [];

function Book(title, author, pages, read) {
//   the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

// add eventlistener to the new book
// let newBook = document.getElementsByClassName("btn");
// newBook.addEventListener("click", function () {
//   let bookForm = document.getElementsByClassName("book-form");
//   bookForm.style.display = "block";
// });

// Add event listener to the form
const bookForm = document.getElementsByClassName("book-form");
bookForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  // Clear the form fields
  bookForm.reset();
  document.getElementById("form-container").style.display = "none";
});
