import BookCollectionHero from "../components/books/BookCollectionHero";
import BookGrid from "../components/books/BookGrid";
import BookshelfSection from "../components/books/BookshelfSection";
import Influenceshelf from "../components/books/fluenceshelf";
 
 
import { books } from "../data/booksData";

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
       

      <BookCollectionHero /> 
      <BookGrid books={books.slice(0, 6)} />
      <BookshelfSection books={books} />
      <Influenceshelf />

      
    </main>
  );
}