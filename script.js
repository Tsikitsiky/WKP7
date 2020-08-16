console.log("let's start");

const books = [
    {
        title: "If I stay",
        author: "Sarra Manning",
        genre: "Fiction",
        pages: 491,
        status: "read",
        id: Date.now()
    },
    {
        title: "Where she went",
        author: "Sarra Manning",
        genre: "Mystery",
        pages: 356,
        status: "read",
        id: Date.now()
    },
    {
        title: "Everything",
        author: "Nicolas",
        genre: "Fantasy",
        pages: 247,
        status: "read",
        id: Date.now()
    },
]

const bookList = document.querySelector('.book-list');
const form = document.querySelector('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const genre = document.getElementById('genre');
const pages = document.getElementById('pages');
const status = document.getElementById('status');
const add = form.querySelector('.add');


// display the book
const displayBook = () => {
    const html = books.map(book => {
        return `<ul class="tr" data-id="${book.id}">
                    <li>${book.title}</li>
                    <li>${book.author}</li>
                    <li>${book.genre}</li>
                    <li>${book.pages}</li>
                    <li><input class= "checkbox"  value="${book.id}" ${book.status === 'read' ? 'checked' : ''} type="checkbox"></li>
                    <li><button class="delete"></button></li>
                </ul>`;
    }).join('');

    bookList.innerHTML = html;
}
displayBook();

//handle add book
let newLibrary = [...books]; // create a copy of the original array to store all the changes

const handleAddBtn = (e) => {
    e.preventDefault();
    const newBookArray = []; // new array to store the new book
    const newBook = {
        title: `${title.value}`,
        author: `${author.value}`,
        genre: `${genre.value}`,
        pages: `${pages.value}`,
        status: `${status.value}`,
        id: Date.now()
    };

    newBookArray.push(newBook);
    newLibrary.push(newBook);

    const html = newBookArray.map(book => {
        return `<ul class="tr" data-id="${book.id}">
                    <li>${book.title}</li>
                    <li>${book.author}</li>
                    <li>${book.genre}</li>
                    <li>${book.pages}</li>
                    <li><input class= "checkbox" type="checkbox" value="${book.id}" ${book.status === "read" ? 'checked' : ''}></li>
                    <li><button class="delete"></button></li>
                </ul>`;
    }).join('');

    bookList.insertAdjacentHTML("beforeend", html);
    console.log(newLibrary);
    console.log("new book added");
    form.reset();
}

// handle checkbox if the user want to mark the book as read or not
const handleCheckbox = (e) => {
    const target = e.target;
    if(target.matches('.checkbox')) {
       const parent = target.closest('ul');
        const id = Number(parent.dataset.id);
        const find = newLibrary.find(book => {
           book.id === id
                if(book.status === "read") {
                    return book.status = "not";
                } 
                if(book.status === "not") {
                    return book.status = "read";
                }
            }
        );
        console.log(find);
        
    }
    
}

// handle delete
const handleDelete = (e) => {
    if(e.target.matches('.delete')) {
        const parent = e.target.closest('ul');
        const id = Number(parent.dataset.id);
        newLibrary = newLibrary.filter(book => book.id !== id); // remove the object from the array
        parent.remove(); // remove from the book list
    }
}


// event listener
add.addEventListener('click', handleAddBtn);
document.addEventListener('click', handleDelete);
window.addEventListener('change', handleCheckbox);