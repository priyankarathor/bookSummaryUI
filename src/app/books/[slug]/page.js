import { notFound } from "next/navigation";
import BookDetailsHero from "../../components/books/BookDetailsHero";
import { getBookBySlug } from "../../data/booksData";

export default async function BookDetailsPage({ params }) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) return notFound();

  return (
    <main className="min-h-screen bg-[#040404]">
      <BookDetailsHero book={book} />
    </main>
  );
}