import React from 'react';
import Book from './ui/Book';
import { books } from '../data'; // { [element] } grabs a specific element from a file instead of the whole file

const Featured = () => {
    function getFiveStarBooks() {
        books.filter(book => book.rating === 5).slice(0, 4);
    }

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Featured <span className="purple">Books</span></h2>
                    <div className="books">
                        {books
                            .filter(book => book.rating === 5)
                            .slice(0, 4)
                            .map((book) => {
                                <Book book={book} key={book.id} />
                            })}
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Featured;