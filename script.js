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
                    <li><input type="checkbox"></li>
                    <li><button class="delete"></button></li>
                </ul>`;
    }).join('');

    bookList.innerHTML = html;
}

//handle add book
const handleAddBtn = (e) => {
    e.preventDefault();
    let newLibrary = []; // new array to store the new book
    const newBook = {
        title: `${title.value}`,
        author: `${author.value}`,
        genre: `${genre.value}`,
        pages: `${pages.value}`,
        status: `${status.value}`,
        id: Date.now()
    };

    newLibrary.push(newBook);
    books.push(newBook);

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

    bookList.insertAdjacentHTML("beforeend", html);
    console.log(books);
    console.log("new book added");
}


// event listener
add.addEventListener('click', handleAddBtn);


displayBook();