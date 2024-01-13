//Highest Scope Variables
const Mylibrary = [];
const BookElementCount = 0;
let counter = 0;

// main code
function Book() {
    const container = document.querySelector(".main");
    if (counter >= 0 && counter < Mylibrary.length) {
        const book = Mylibrary[counter];

        //
        const bookdiv = document.createElement("div");
        AppendBookElements(bookdiv, book);
        bookdiv.dataset.bookIndex = counter;
        // Buttons

        const readButton = document.createElement("button");
        const removeButton = document.createElement("button");
        removeButton.textContent = "remove";
        //
        removeButton.addEventListener("click", function () {
            const indextoremove = parseInt(bookdiv.dataset.bookIndex);
            Mylibrary.splice(indextoremove, 1);
            container.removeChild(bookdiv);
        });

        readButton.addEventListener("click", function () {
            const indextochange = parseInt(bookdiv.dataset.bookIndex);
            if (readButton.textContent === "read") {
                Mylibrary[indextochange].read = false;
                DetertimeBookRead(readButton, false);
            } else {
                Mylibrary[indextochange].read = true;
                DetertimeBookRead(readButton, true);
            }
        });
        DetertimeBookRead(readButton, book.read);
        bookdiv.classList.add("bookcontainer");

        //Append Elements
        bookdiv.appendChild(readButton);
        bookdiv.appendChild(removeButton);
        container.appendChild(bookdiv);

        counter++;
    }
}

function DetertimeBookRead(readButton, value) {
    if (value) {
        readButton.style.backgroundColor = "green";
        readButton.textContent = "read";
    } else {
        readButton.style.backgroundColor = "red";
        readButton.textContent = "not read";
    }
}
// Button Logic For Book Cards
function AppendBookElements(bookdiv, bookObject) {
    const properties = Object.keys(bookObject);

    for (let i = 0; i < properties.length - 1; i++) {
        const property = properties[i];

        const pelement = document.createElement("p");
        pelement.textContent = bookObject[property];
        bookdiv.appendChild(pelement);
    }
}

//
function CreateBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const titleInput = document.querySelector(
        '#form [placeholder="Title"]'
    ).value;
    const authorInput = document.querySelector(
        '#form [placeholder="Author"]'
    ).value;
    const pagesInput = document.querySelector(
        '#form [placeholder="Pages"]'
    ).value;
    const readCheckbox = document.getElementById("read");
    const readInput = readCheckbox.checked;
    Mylibrary.push(
        new CreateBook(titleInput, authorInput, pagesInput, readInput)
    );
    Book();
});
// Modal logic
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const modal = document.querySelector(".modal");
function closModal(modal) {
    modal.close();
}
openModal.addEventListener("click", () => {
    modal.showModal();
});

const submit = document.querySelector(".submit-button");

submit.addEventListener("click", () => {
    modal.close();
});
