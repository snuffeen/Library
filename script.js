const myLibrary = [
    {title : 'title1', author : 'author1', numberOfPages : 300},
    {title : 'title2', author : 'author2', numberOfPages : 250}
]

function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary(book) {
    const formTitle = document.querySelector('#book-title')
    const formAuthor = document.querySelector('#book-author')
    const formNumberOfPages = document.querySelector('#number-of-pages')
    
    let newBook = new Book(formTitle.value, formAuthor.value, formNumberOfPages.value)

    myLibrary.push(newBook)
    formTitle.value = ''
    formAuthor.value = ''
    formNumberOfPages.value = ''
}

const submit = document.querySelector('[data-submit]')

submit.addEventListener('click', event => {
    event.preventDefault()
    addBookToLibrary()
})

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