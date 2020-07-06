/* To-Do List */
const addFrom = document.querySelector('.add');
const ul = document.querySelector('.todos');

/* ======== Get user input and add them in the list ======== */
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    ul.innerHTML += html;
};

addFrom.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addFrom.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        //reset() is a function to reset input filed after send data
        addFrom.reset();
    }
});


/* ======== Delete items from list ======== */

ul.addEventListener('click', (element) => {
    if (element.target.classList.contains('delete')) {
        element.target.parentElement.remove();
    }
});


/* ======== Creat search function ======== */
const search = document.querySelector('.search input');

const filterTodos = (term) => {

    Array.from(ul.children)
        .filter((todo) => {
            return !todo.textContent.toLocaleLowerCase().includes(term);
        }).forEach((todo) => {
            todo.classList.add('filtered');
        });

    Array.from(ul.children)
        .filter((todo) => {
            return todo.textContent.includes(term);
        }).forEach((todo) => {
            todo.classList.remove('filtered');
        });

};
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLocaleLowerCase();
    filterTodos(term);
});
/* End To-Do List */