console.log("let's start");

const books = [
    {
        title: "If I stay",
        author: "Sarra Manning",
        genre: "Fantacy",
        pages: 397,
        status: "Read",
        id: Date.now()
    },
    {
        title: "Where she went",
        author: "Sarra Manning",
        genre: "Fantacy",
        pages: 397,
        status: "Read",
        id: Date.now()
    },
    {
        title: "Everything",
        author: "Nicolas",
        genre: "Fantacy",
        pages: 397,
        status: "Read",
        id: Date.now()
    },
]

let newLibrary = [...books];
const bookList = document.querySelector('.book-list');
const form = document.querySelector('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const genre = document.getElementById('genre');
const pages = document.getElementById('pages');
const status = document.getElementById('status');
const add = form.querySelector('.add');

//handle add book
const handleAddBtn = (e) => {
    e.preventDefault(); 
    const newBook = {
        title: `${title.value}`,
        author: `${author.value}`,
        genre: `${genre.value}`,
        pages: `${pages.value}`,
        status: `${status.value}`,
        id: Date.now()
    };

    newLibrary.push(newBook);
    console.log(newLibrary);
    console.log("new book added");
}

// display the book
const displayBook = () => {
    const html = newLibrary.map(book => {
        return `<ul class="tr" data-id="${book.id}">
                    <li>${book.title}</li>
                    <li>${book.author}</li>
                    <li>${book.genre}</li>
                    <li>${book.pages}</li>
                    <li><input type="checkbox"></li>
                    <li><button class="delete"></button></li>
                </ul>`;
    }).join('');

bookList.innerHTML += html;
}

// event listener
add.addEventListener('click', handleAddBtn);


displayBook();