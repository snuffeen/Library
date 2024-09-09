const myLibrary = [
    {title : 'title1', author : 'author1', numberOfPages : 300},
    {title : 'title2', author : 'author2', numberOfPages : 250}
]

const listOfBooks = document.querySelector('[data-list-of-books]')

const title = document.querySelector('[data-book-title]')
const author = document.querySelector('[data-book-author]')
const numberOfPages = document.querySelector('[data-book-pages]')


myLibrary.forEach(book => {
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.classList.add("choose-book")
    btn.textContent = book.title
    listOfBooks.appendChild(li)
    li.appendChild(btn)
    
    btn.addEventListener('click', button => {
        title.textContent = book.title
        author.textContent = book.author
        numberOfPages.textContent = book.numberOfPages
    })
});

// function Book(title, author, numberOfPages) {
//     this.title = title;
//     this.author = author;
//     this.numberOfPages = numberOfPages;
// }

// function addBookToLibrary() {

// }