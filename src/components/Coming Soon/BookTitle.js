import React from "react";
import title from "../../images/coming-soon-images/book-title.png";
import BookStyle from "./css/BookStyle.module.css";
import { Image } from "react-bootstrap";

const BookTitle = () => {
  const bookTitleCon = BookStyle.bookTitleCon;
  const subBookTitleCon = BookStyle.subBookTitleCon;
  const subBookTitle = BookStyle.subBookTitle;

  return (
    <>
      <div className={bookTitleCon}>
        <div className={subBookTitleCon}>
          <Image src={title} alt="Book Title" className={subBookTitle} />
        </div>
      </div>
    </>
  );
};

export default BookTitle;
