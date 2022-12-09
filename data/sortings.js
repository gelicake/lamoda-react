export const sorters = {
  "Сначала дешевые": (g1, g2) => g1.price - g2.price,
  "Сначала дорогие": (g1, g2) => g2.price - g1.price,
  "Сначала популярные": (g1, g2) => g2.rating - g1.rating,
};
