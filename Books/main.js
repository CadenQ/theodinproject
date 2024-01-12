const myLibrary = [];

/**
 * Class to represent books.
 * @param title - The title of the book.
 * @param author - The author of the book.
 * @param pages - The number of pages in the book.
 * @param read - Whether or not the book has been read.
 */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    get info() {
        return this.title + " by " + this.author
            + ", " + this.pages + " pages, "
            + (this.read ? "read" : "not read yet");
    }
}

/**
 * Updates the visual book list
 */
function addBookToLibrary() {
    // Grabs the book div that will contain the books
    let booksDiv = document.getElementById("list-of-books");
    booksDiv.innerHTML = "";

    myLibrary.forEach((element) => {
        // Creates a book wrapper for ease of entry deletion
        let bookWrapper = document.createElement("div");
        
        // Adds a remove button to remove a book when desired
        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click", () => bookWrapper.remove());
        bookWrapper.appendChild(removeButton);
        
        // Adds the info of the book
        let book = document.createElement("p");
        book.className = "books";
        book.innerText = element.info;
        bookWrapper.appendChild(book);

        // Adds a read button to toggle if the book has been read or not
        let readToggle = document.createElement("button");
        readToggle.innerText = "Read";
        readToggle.addEventListener("click", () => {
            element.read = !element.read;
            addBookToLibrary();
        });
        bookWrapper.appendChild(readToggle);

        // Appends the book wrapper into the book div containing
        // the list of books
        booksDiv.appendChild(bookWrapper);
    });
}

/**
 * Function to submit form info into the book list
 */
document.getElementById("the-form").addEventListener("submit", (e) => {
    // Stops the default process of a form submission and grabs form data
    e.preventDefault();
    let formData = new FormData(e.target);
    
    // Pushes form data into the book list (constructed as a Book)
    myLibrary.push(new Book(formData.get("title"), formData.get("author"), 
        parseInt(formData.get("pages")), (formData.get("read") === 'true')));

    // Updates the library list
    addBookToLibrary(); 
    // Automatically hides the form element
    const formElm = document.getElementById("the-form");
    formElm.style.display = "none";

    // Empties input contents of the form
    for (const elm of formElm.childNodes) 
        if (elm.nodeName.toLowerCase() == "input" && elm.value != "submit")
            elm.value = "";
});

/**
 * Toggles the form to add a book
 */
document.getElementById("new-book").addEventListener("click", () => {
    const form = document.getElementById("the-form");
    form.style.display = form.style.display.toLowerCase() == "block" ? "none" : "block";
});