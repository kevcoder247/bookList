//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI(){}

//Add book to List
UI.prototype.addBookToList = (book) => {
    const list = document.getElementById('book-list');

    //Create Table row element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class delete>x</a></td>
    `;

    list.appendChild(row);
    
    
    //Clear fields
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', (e) => {
    //Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value; 
   
    //Instantiation a book
    const book = new Book(title, author, isbn);
    
    //Instantiate UI object
    const ui = new UI();

    //Add book to list
    ui.addBookToList(book)

    //CLear Fields
    ui.clearFields();


    

    e.preventDefault();
})