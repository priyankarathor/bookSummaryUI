export const formatBooks = (data) => {
  return data.map((item, index) => ({
    id: item._id || index + 1,

    slug: item.bookName
      ?.toLowerCase()
      .replace(/\s+/g, "-"),

    title: item.title || item.bookName,

    author: "Priyanka Sharma",

    genre: "Fiction",

    year: new Date(item.createdAt).getFullYear().toString(),

    rating: "4.5",

    pages: 300,

    shortDescription: item.summary,

    description: item.summary,

    accent: "#d4a574",

    cover: item.imageUrl,

    bg: item.imageUrl,

    highlights: [
      "Premium storytelling",
      "Emotional depth",
      "Must read",
    ],
  }));
};