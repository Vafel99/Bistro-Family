// Aktualizuj ten plik co tydzień — index.html pozostaje bez zmian.
// Wpisz aktualne daty (dd.mm) i dania dla każdego dnia.
// Pole "theme" jest opcjonalne — pojawia się jako podtytuł (np. "Kuchnia świata").

const WEEK = [
  {
    name: "Poniedziałek",
    date: "18.05",
    soup: { name: "Ogórkowa", price: "15 zł" },
    mains: [
      { name: "Karkówka w kapuście z puree ziemniaczanym i buraczkami", price: "26 zł" },
      { name: "Gulasz drobiowy z kaszą pęczak i surówką z pory",        price: "23 zł" },
    ],
  },
  {
    name: "Wtorek",
    date: "19.05",
    soup: { name: "Rosół", price: "16 zł" },
    mains: [
      { name: "Potrawka z kurczaka z puree ziemniaczanym i mizerią",         price: "24 zł" },
      { name: "Udka z kurczaka z ryżem i surówką z kiszonej kapusty",        price: "23 zł" },
    ],
  },
  {
    name: "Środa",
    date: "20.05",
    theme: "Kuchnia świata",
    soup: { name: "Pomidorowa krem wegetariański", price: "15 zł" },
    mains: [
      { country: "Czechy",  name: "Szynka w sosie z kluskami na parze i surówką ze świeżej kapusty", price: "23 zł" },
      { country: "Gruzja",  name: "Gulasz z baraniny z kaszą gryczaną i kiszonym ogórkiem",          price: "26 zł" },
    ],
  },
  {
    name: "Czwartek",
    date: "21.05",
    soup: { name: "Zupa wiosenna", price: "16 zł" },
    mains: [
      { name: "Żeberka w ciemnym sosie z puree ziemniaczanym i buraczkami",       price: "25 zł" },
      { name: "Pulpety w sosie koperkowym z ryżem i surówką z kiszonej kapusty",   price: "23 zł" },
    ],
  },
  {
    name: "Piątek",
    date: "22.05",
    soup: { name: "Szczawiowa z jajkiem", price: "16 zł" },
    mains: [
      { name: "Kotlet mielony (drobiowo-wieprzowy) z puree ziemniaczanym i mizerią",  price: "23 zł" },
      { name: "Filet z dorsza z puree ziemniaczanym i surówką z kiszonej kapusty",    price: "24 zł" },
    ],
  },
];
