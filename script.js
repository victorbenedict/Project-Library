let myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.toggleRead = function (){
  this.isRead = !this.isRead;

};

function toggleRead(index){
  myLibrary[index].toggleRead();
  renderLibrary();
}

function addBookToLibrary() {
  //Retrieve the input values
  let title = document.getElementById('input_title').value;
  let author = document.getElementById('input_author').value;
  let pages = document.getElementById('input_pages').value;
  let isRead = document.getElementById('input_isRead').checked;
  let newBook = new Book(title,author,pages,isRead);
  myLibrary.push(newBook);
}

function renderLibrary() {
  //Process and display the mylibrary array
  let content_library = document.querySelector('.content_library');
  content_library.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let showBook = document.createElement('div');
    showBook.innerHTML = `
      <p>${book.title} | ${book.author} | ${book.pages} | ${book.isRead ? "Yes" : "No"}
      <button class="btn_removeBook" onclick="removeBook(${i})">Remove</button>
      <button class="btn_toggleRead" onclick="toggleRead(${i})">Toggle Read</button></p>`;
    content_library.appendChild(showBook);
  };
}

function removeBook(index){
  myLibrary.splice(index,1);
  renderLibrary();
}

//Displays the form_newBook when clicking the btn_newBook
document.querySelector('.btn_newBook').addEventListener('click', () => {
  document.querySelector('.form_newBook').style.display = 'inline';
});

//Submit button of form_newBook
document.querySelector('.form_newBook').addEventListener('submit', () => {
  event.preventDefault();
  addBookToLibrary();
  renderLibrary();
});