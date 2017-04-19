function reformate (book) {
    const reformatted = [];
    const bookById = {};
    book.forEach(book => {
        if(bookById[book.book_id]){
            bookById[book.book_id].authors.push({
                author_id: book.author_id,
                first_name:book.first_name,
                last_name: book.last_name
        });
    }
        else {
        bookById[book.book_id] = {
            book_id: book.book_id,
            title: book.title,
            genre: book.genre,
            description: book.description,
            cover_url: book.cover_url,
            authors: [{
                author_id: book.author_id,
                first_name:book.first_name,
                last_name: book.last_name
            }]
        };
        reformatted.push(bookById[book.book_id]);
        }
    });
    return reformatted;
}

function reformattedAuthor (author) {
    const reformatted = [];
    const authorById = {};
    author.forEach(author => {
        if(authorById[author.author_id]){
            authorById[author.author_id].books.push({
                book_id: author.book_id,
                title: author.title
        });
    }
        else {
        authorById[author.author_id] = {
            author_id: author.author_id,
            first_name: author.first_name,
            last_name: author.last_name,
            biography: author.biography,
            portrait_url: author.portrait_url,
            books: [{
                book_id: author.book_id,
                title:author.title
            }]
        };
        reformatted.push(authorById[author.author_id]);
        }
    });
    return reformatted;
}

module.exports = {
    reformate,
    reformattedAuthor
};
