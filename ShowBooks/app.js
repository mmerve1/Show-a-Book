let book1 = { title: "Her Şeyi Düşünme", author: "Anne Bogel", price: 25, shelf: "1.5.SHELF" };
let book2 = { title: "Hiçbir Karşılaşma Tesadüf Değildir", author: "Hakan Mengüç", price: 56, shelf: "2.3.SHELF" };
let book3 = { title: "İnsan Neyle Yaşar", author: "Tolstoy", price: 34, shelf: "3.4.SHELF" };
let book4 = { title: "Zafer Sızlanarak Kazanılmaz", author: "Haluk Tatar", price: 45, shelf: "4.1.SHELF" };
let book5 = { title: "Şeker Portakalı", author: "José Mauro de Vasconcelos", price: 22, shelf: "5.3.SHELF" };

let books = [book1, book2, book3, book4, book5];

let shelf11 = { code: "1.1.SHELF", display: false };
let shelf12 = { code: "1.2.SHELF", display: false };
let shelf13 = { code: "1.3.SHELF", display: false };
let shelf14 = { code: "1.4.SHELF", display: false };
let shelf15 = { code: "1.5.SHELF", display: false };

let shelf21 = { code: "2.1.SHELF", display: false };
let shelf22 = { code: "2.2.SHELF", display: false };
let shelf23 = { code: "2.3.SHELF", display: false };
let shelf24 = { code: "2.4.SHELF", display: false };
let shelf25 = { code: "2.5.SHELF", display: false };

let shelf31 = { code: "3.1.SHELF", display: false };
let shelf32 = { code: "3.2.SHELF", display: false };
let shelf33 = { code: "3.3.SHELF", display: false };
let shelf34 = { code: "3.4.SHELF", display: false };
let shelf35 = { code: "3.5.SHELF", display: false };

let shelf41 = { code: "4.1.SHELF", display: false };
let shelf42 = { code: "4.2.SHELF", display: false };
let shelf43 = { code: "4.3.SHELF", display: false };
let shelf44 = { code: "4.4.SHELF", display: false };
let shelf45 = { code: "4.5.SHELF", display: false };

let shelf51 = { code: "5.1.SHELF", display: false };
let shelf52 = { code: "5.2.SHELF", display: false };
let shelf53 = { code: "5.3.SHELF", display: false };
let shelf54 = { code: "5.4.SHELF", display: false };
let shelf55 = { code: "5.5.SHELF", display: false };

let shelves = [
    [shelf51, shelf52, shelf53, shelf54, shelf55],
    [shelf41, shelf42, shelf43, shelf44, shelf45],
    [shelf31, shelf32, shelf33, shelf34, shelf35],
    [shelf21, shelf22, shelf23, shelf24, shelf25],
    [shelf11, shelf12, shelf13, shelf14, shelf15]
];

function createShelves() {
    console.clear();
    let row = "";
    for (let i = 0; i < shelves.length; i++) {
        for (let j = 0; j < 5; j++) {
            row += "|" + (shelves[i][j].display ? shelves[i][j].code : "---") + "";
        }
        console.log(row);
        console.log("--------------------");
        row = "";
    }
}

function findCode(bookTitle) {
    let shelfCode = null;
    books.forEach(function (book) {
        if (book.title.toUpperCase().includes(bookTitle.toUpperCase(), 0)) {
            shelfCode = book.shelf;
        }
    });
    return shelfCode;
}

function displayOnShelf(shelfCode) {
    for (let i = 0; i < shelves.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (shelves[i][j].code == shelfCode) {
                shelves[i][j].display = true;
                break;
            }
        }
    }
}

createShelves();

let bookTitle = prompt("Please enter a book title.");
let shelfCode = findCode(bookTitle);

if (shelfCode != null) {
    displayOnShelf(shelfCode);
    createShelves();
} else {
    alert("The entered book is not available in our library.");
}
