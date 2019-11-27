import { get, post, put, del } from "./requester.js"

const html = {
    'getAllBooks': () => document.getElementById("all-books"),
    'getBookTitle': () => document.getElementById("title"),
    'getBookAuthor': () => document.getElementById("author"),
    'getBookIsbn': () => document.getElementById("isbn"),
    'getEditTitle': () => document.getElementById("edit-title"),
    'getEditAuthor': () => document.getElementById("edit-author"),
    'getEditIsbn': () => document.getElementById("edit-isbn"),
    'getEditId': () => document.getElementById('edit-id')
}

const actions = {
    "load-books": async function () {
        try {
            const books = await get('appdata', 'books')
            const booksContainer = html.getAllBooks();
            const fragment = document.createDocumentFragment()
            books
                .forEach(b => {
                    const tr = document.createElement("tr");
                    const titleTd = document.createElement("td");
                    const authorTd = document.createElement("td");
                    const isbnTd = document.createElement("td");
                    const actionsTd = document.createElement("td")
                    const editBtn = document.createElement("button")
                    const deleteBtn = document.createElement("button")

                    titleTd.textContent = b.title;
                    authorTd.textContent = b.author;
                    isbnTd.textContent = b.isbn;

                    editBtn.textContent = "Edit"
                    editBtn.setAttribute("id", b._id)
                    editBtn.addEventListener("click", this["edit-book-get"])

                    deleteBtn.textContent = "Delete"
                    deleteBtn.setAttribute("id", b._id)
                    deleteBtn.addEventListener("click", this["delete-book"])

                    actionsTd.appendChild(editBtn);
                    actionsTd.appendChild(deleteBtn);

                    tr.append(titleTd, authorTd, isbnTd, actionsTd)
                    fragment.appendChild(tr)
                })
            booksContainer.innerHTML = "";
            booksContainer.appendChild(fragment)
        } catch (e) {
            alert(e)
        }
    },
    "create-book": async function () {
        const title = html.getBookTitle();
        const author = html.getBookAuthor();
        const isbn = html.getBookIsbn();

        const data = {
            title: title.value,
            author: author.value,
            isbn: isbn.value
        }

        try {
            await post('appdata', 'books', data)
            title.value = '';
            isbn.value = '';
            author.value = '';
            this["load-books"]();

        } catch (e) {
            console.error(e)
        }
    },
    "edit-book-get": async function () {
        const id = this.id
        try {
            const book = await get("appdata", `books/${id}`)
            let editId = html.getEditId();
            let t = html.getEditTitle();
            let a = html.getEditAuthor();
            let i = html.getEditIsbn();

            t.value = book.title
            a.value = book.author
            i.value = book.isbn
            editId.value = id;
        } catch (error) {
            alert(error)
        }
    },
    "edit-book-post": async function () {
        let editId = html.getEditId();
        let t = html.getEditTitle();
        let a = html.getEditAuthor();
        let i = html.getEditIsbn();

        const data = {
            title: t.value,
            author: a.value,
            isbn: i.value
        }
        try {
            await put('appdata', `books/${editId.value}`, data)
            t.value = '';
            a.value = '';
            i.value = '';
            actions["load-books"]();
        } catch (error) {
            alert(error)
        }
    },
    "delete-book": async function () {
        let id = this.id
        try {
            await del("appdata", `books/${id}`)
            actions["load-books"]();
        } catch (error) {
            alert(error)
        }
    }
}

function handleEvent(e) {
    if (typeof actions[e.target.id] === 'function') {
        e.preventDefault()
        actions[e.target.id]();
    }
}

(function attachEvents() {
    document.addEventListener("click", handleEvent)
}())