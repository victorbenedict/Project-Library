const cl = console.log;
cl('initialize', new Date())

let myLibrary = [];


const form = document.getElementById('form_book');
const tablebody = document.getElementById('tablebody_book');

(function loadPremadeObjects(){
  myLibrary.push(new Book('A Song of Ice and Fire', 'George R. R. Martin', '694', false));
  myLibrary.push(new Book('Eat That Frog!', 'Brian Tracy ', '144', true));
  myLibrary.push(new Book('The Subtle Art of Not Giving a Fuck', 'Mark Manson', '272', true));
  cl(myLibrary);
  
})();

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const title =  document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').value == 'Read' ? true:false; 
  const newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
  cl(myLibrary)
  cl(newBook)
}

function render() {
  
  tablebody.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const statusText = `${book.status == true ? 'Read':'Not Read'}`
    const statusClass = `${book.status == true ? 'Read':'NotRead'}`

    cl(book,index)
    const htmlBook = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class="btn_status ${statusClass}" onClick = "changeStatus(${index})">${statusText}</button></td>
        <td><button class="btn_delete" onClick = "deleteBook(${index})">Delete</button></td>
      </tr>
      `;
           tablebody.insertAdjacentHTML("afterbegin", htmlBook);
    cl('render')
  });
  
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  cl('submit');
  addBookToLibrary();
  render();
});


function changeStatus(index){
  myLibrary[index].status = myLibrary[index].status == true ? false:true;
  render();
}

function deleteBook(index){
  let text = `Are you sure to delete "${myLibrary[index].title}"?`;
  if (confirm(text) == true) {
    myLibrary.splice(index, 1);
    render();
  } 
  
}

render();
