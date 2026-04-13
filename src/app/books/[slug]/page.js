"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { formatBooks } from "../../data/booksData";
import BookDetailsHero from "../../components/books/BookDetailsHero";

export default function BookDetailsPage() {
  const { slug } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const loadBook = async () => {
      const res = await axios.get("https://book-summary-ui.netlify.app/books");

      const formatted = formatBooks(res.data);

      const found = formatted.find((b) => b.slug === slug);

      setBook(found);
    };

    loadBook();
  }, [slug]);

  if (!book) return <div className="text-white p-10">Loading...</div>;

  return <BookDetailsHero book={book} />;
}