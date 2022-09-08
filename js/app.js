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
        <td><a href="#" class="delete">x</a></td>
    `;

    list.appendChild(row);

}

// Show Alert
UI.prototype.showAlert = function(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);
  
    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }
    

// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

    //Clear fields
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }


//Event Listeners for adding a book
document.getElementById('book-form').addEventListener('submit', (e) => {
    //Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value; 
   
    //Instantiation a book
    const book = new Book(title, author, isbn);
    
    //Instantiate UI object
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        //Error alert
        ui.showAlert('Pleaseå fill in all fields', 'error');
    }else{
        //Add book to list
        ui.addBookToList(book);

        //Show Success
        ui.showAlert('Book Added', 'success');

        //CLear Fields
        ui.clearFields();
    }
     e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){

    // Instantiate UI
    const ui = new UI();
  
    // Delete book
    ui.deleteBook(e.target);
  
    // Show message
    ui.showAlert('Book Removed!', 'success');
  
    e.preventDefault();
  });