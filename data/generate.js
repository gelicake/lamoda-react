const getRandomString = () => Math.random().toString(36).substring(2);

const getRandomNum = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

export default function generateGoods(count = 100) {
  const goods = [];
  for (let i = 0; i < count; i++) {
    goods.push(generateGood());
  }
  return goods;
}

const generateGood = () => ({
  id: Date.now() + getRandomString(),
  name: generateName(),
  description: generateDescription(),
  color: generateColor(),
  rating: generateRating(),
  price: generatePrice(),
  image: generateImage(),
});

const COLORS = ["Черный", "Белый", "Синий", "Желтый", "Голубой", "Зеленый"];

const generateColor = () => COLORS[getRandomNum(0, COLORS.length - 1)];

const generateName = () => getRandomString();
const DESCRIPTION_WORDS = [
  "удобный",
  "теплый",
  "мужской",
  "женский",
  "шерстяной",
  "брендовый",
];
const generateDescription = (length = 4) => {
  const description = [];
  for (let i = 0; i < length; i++) {
    description.push(
      DESCRIPTION_WORDS[getRandomNum(0, DESCRIPTION_WORDS.length - 1)]
    );
  }
  return description.join(" ");
};
const IMAGES = [
  "https://a.lmcdn.ru/img600x866/R/T/RTLABO043301_17446333_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLAAV585501_15601216_1_v1.jpg",
  "https://a.lmcdn.ru/img600x866/R/T/RTLABL924101_17236659_1_v1.jpg",
];
const generateRating = () => getRandomNum(1, 100);
const generatePrice = () => getRandomNum(10, 9999);
const generateImage = () => IMAGES[getRandomNum(0, IMAGES.length - 1)];
