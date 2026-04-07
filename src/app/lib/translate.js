export const translateTextAPI = async (text, language) => {
  try {
    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${language}&dt=t&q=${encodeURIComponent(
        text
      )}`
    );

    const data = await res.json();
    return data[0].map((i) => i[0]).join("");
  } catch {
    return "Error 😔";
  }
};  