const getTheTitles = function(books) {
    let groupedTitles = [];
    books.forEach(book => {
        groupedTitles.push(book.title);
    });
    return groupedTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
