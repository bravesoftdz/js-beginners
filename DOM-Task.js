

// Создайте div
// добавьте класс "wrapper"

let div = createEl('div', 'wrapper');
// поместите его в body
let body = getByTag('body');
prepend(body, div);
// создайте неупорядоченный список
let ul =createUl();
// создайте картинку
// добавьте картинке класс "cute"
createImg();
// используя HTML строку, создать div с двумя параграфами внутри.
createElsbyHTMLtext();

// создайте div с классом "cards"
let divCards =createCards();
// Bonus,Не обязательно.
// поместите в каждую карту  кнопку которая по клику будет удалять карту
// Выберете все кнопки
// Сделайте функцию для удаления карт
// с помощью цикла поместите обработчик события на каждую кнопку
divCards.querySelectorAll('.playerCard').forEach(element => {
    createDeleteButton();
    append(element, btn);
});


function createElsbyHTMLtext() {
    let testTemplate = `<div> 
                            <p>1</p >
                            <p>2</p>
                        </div> `;
    let divbyHTmL = document.createRange().
        createContextualFragment(testTemplate);
    // поместить этот div перед неупорядоченным списком
    ul.before(divbyHTmL);
    // добавить второму параграфу класс "warning"
    document.
        querySelectorAll('div>div>p')[0].classList.add("warning");
    // удалите первый параграф
    console.log(document.
        querySelectorAll('div>div>p')[1]);
    document.
        querySelectorAll('div>div>p')[1].remove();
    return document.querySelector('div>div');
}

function createImg() {
    img = createEl('img', 'cute');
    // установите src для картинки
    // установите ширину картинки 250
    // добавьте картинке alt со значением "Cute Puppy"
    img.setAttr = setAttr;
    img.setAttr('width', '250').
        setAttr('alt', 'Cute Puppy').
        setAttr('src', './images/card1.svg');
    // добавьте картинку в существующий div.wrapper
    append(div, img);
}

function createUl() {
    let ul = createEl('ul');
    // добавьте списку 3 элемента списка со словами: "один, два и три"
    let uiText = ["один", "два", "три"];
    uiText.forEach(element => {
        let ui = createEl('li');
        ui.innerText = element;
        append(ul, ui);
    });
    // поместите этот список в предыдущий div
    append(div, ul);
    return ul;
}

function createDeleteButton() {
    btn = createEl('button', 'Delete');
    btn.innerText = 'delete';
    btn.addEventListener("click", function () {
        this.parentNode.remove();
    });
    return btn;
}

function createCards() {
    let divCards = createEl('dic', 'cards');
    // Используя функцию создайте 4 карты
    // добавьте эти карты в div с классом "cards"
    let names = ['Толик', 'Руслан', 'Дрюха', 'Муха'];
    for (let i = 0; i < names.length; i++) {
        let card = generatePlayerCard(names[i], Math.round(Math.random() * 100), Math.round(Math.random() * 100 + 100));
        append(divCards, card);
    }
    // поместите этот div в DOM перед .wrapper
    div.before(divCards);
    return divCards;
}

function createEl(aElement, aClass) {
    let el = document.createElement(aElement);
    if (!!aClass) {
        el.classList.add(aClass);
    }
    console.log(el);
    return el;
}

function getByTag(aTag) {
    let elByTag = document.querySelector(aTag);
    console.log(elByTag);
    return elByTag;
}

function append(aParent, aChild) {
    aParent.append(aChild);
    console.log(aParent);
    return aParent;
}

function prepend(aParent, aChild) {
    aParent.prepend(aChild);
    console.log(aParent);
    return aParent;
}

function setAttr(aAtr, aValue) {
    this.setAttribute(aAtr, aValue);
    console.log(this);
    return this;
}

// создайте функцию которая называется "generatePlayerCard" и принимает на вход 3 аргумента: name, age, and height
// эта функция должна возвращать вот такой HTML:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    let div = createEl('div', 'playerCard');
    let h2 = createEl('h2');
    h2.innerText = `${name.toUpperCase()} — ${age})`;
    append(div, h2);
    let p = createEl('p');
    p.innerText = `They are ${height} and ${age} years old. In Dog years this person would be ${Math.round(age / 7)}. That would be a tall dog!`;
    append(div, p);
    return div;
}
