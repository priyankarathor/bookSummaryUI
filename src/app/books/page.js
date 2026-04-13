"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import BookCollectionHero from "../components/books/BookCollectionHero";
import BookGrid from "../components/books/BookGrid";
import { formatBooks } from "../data/booksData";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await axios.get("https://boonode-api-production.up.railway.app/api/books");

        const formatted = formatBooks(res.data);

        setBooks(formatted);
      } catch (err) {
        console.error(err);
      }
    };

    loadBooks();
  }, []);

  return (
    <>
      <BookCollectionHero />
      <BookGrid books={books} />
    </>
  );
}