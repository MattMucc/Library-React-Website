import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Highlight from "./ui/Highlight";

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">Why Choose <span className="purple">Library</span>?</h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title="Easy and Quick"
                            para="Get access to the book you purchased <span className='purple'>instantly</span>."
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="book-open" />}
                            title="10,000 Books"
                            para="Library has books in all your <span className='purple'>favorite</span> categories."
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="tag" />}
                            title="Affordable"
                            para="Get your hands on popular books for as little as <span className='purple'>$10</span>!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;