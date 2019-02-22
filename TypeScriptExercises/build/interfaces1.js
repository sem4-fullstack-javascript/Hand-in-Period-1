// b
function test(book) {
    console.log(JSON.stringify(book));
}
test({ title: "Awesome Book", author: "Nikolaj", published: new Date(), pages: 1000 });
function test2(book) {
    book.author = "bob";
    console.log(JSON.stringify(book));
}
test2({ title: "Awesome Book", author: "Nikolaj" });
function test3(book) {
    //    book.author = "bob"
    console.log(JSON.stringify(book));
}
test3({ title: "Awesome Book", author: "Nikolaj", published: new Date(), pages: 1000 });
var Book = /** @class */ (function () {
    function Book(title, author, published, pages) {
        this.title = title;
        this.author = author;
        this.published = published;
        this.pages = pages;
    }
    return Book;
}());
//# sourceMappingURL=interfaces1.js.map