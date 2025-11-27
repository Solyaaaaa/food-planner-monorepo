import type { Meal } from '../types';

export const initialBreakfasts: Meal[] = [
  {
    id: 1,
    name: "Шарлотка",
    ingredients: [
      { name: "Яблоки", amount: "600г" },
      { name: "Яйца", amount: "4 шт" },
      { name: "Мука", amount: "160г" },
      { name: "Сахар", amount: "160г" }
    ]
  },
  {
    id: 2,
    name: "Сырники",
    ingredients: [
      { name: "Творог", amount: "400г" },
      { name: "Яйца", amount: "2 шт" },
      { name: "Мука", amount: "60г" },
      { name: "Сахар", amount: "30г" },
      { name: "Масло", amount: "20г" }
    ]
  },
  {
    id: 3,
    name: "Овсяная каша",
    ingredients: [
      { name: "Овсяные хлопья", amount: "100г" },
      { name: "Молоко", amount: "300мл" },
      { name: "Сахар", amount: "100гр" }
    ]
  },
  {
    id: 4,
    name: "Английский завтрак",
    ingredients: [
      { name: "Яйца", amount: "5 шт" },
      { name: "Бекон", amount: "100г" },
      { name: "Помидоры Черри", amount: "100г" },
      { name: "Хлеб", amount: "2 ломтя" },
      { name: "Фасоль", amount: "0.5" },
      { name: "Зелень", amount: "1" }
    ]
  },
  {
    id: 5,
    name: "Сэндвичи",
    ingredients: [
      { name: "Хлеб", amount: "8 ломтя" },
      { name: "Сыр Чизбургер", amount: "1 уп" },
      { name: "Ветчина", amount: "1 уп" },
      { name: "Огурцы", amount: "1 шт" },
      { name: "Салат", amount: "1 шт" },
      { name: "Сыр Маасдам", amount: "1 уп" },
      { name: "Какая-то мясная нарезка", amount: "1 уп" }
    ]
  },
  {
    id: 6,
    name: "Панкейки",
    ingredients: [
      { name: "Мука", amount: "200г" },
      { name: "Яйца", amount: "2 шт" },
      { name: "Молоко", amount: "200мл" },
      { name: "Сахар", amount: "40г" },
      { name: "Масло", amount: "20г" }
    ]
  },
  {
    id: 7,
    name: "Блинчики",
    ingredients: [
      { name: "Мука", amount: "200г" },
      { name: "Яйца", amount: "3 шт" },
      { name: "Молоко", amount: "500мл" },
      { name: "Сахар", amount: "30г" },
      { name: "Масло", amount: "30г" }
    ]
  },
  {
    id: 8,
    name: "Рисовая каша",
    ingredients: [
      { name: "Рис", amount: "100г" },
      { name: "Молоко", amount: "300мл" },
      { name: "Сахар", amount: "20г" },
      { name: "Сливочное масло", amount: "10г" }
    ]
  },
  {
    id: 9,
    name: "Творожная запеканка",
    ingredients: [
      { name: "Творог", amount: "500г" },
      { name: "Яйца", amount: "4 шт" },
      { name: "Сахар", amount: "40г" },
      { name: "Манка", amount: "80г" }
    ]
  },
  {
    id: 10,
    name: "Бутерброды с красной рыбкой",
    ingredients: [
      { name: "Хлеб", amount: "8 ломтя" },
      { name: "Красная рыба", amount: "200г" },
      { name: "Масло", amount: "10г" },
      { name: "Огурец", amount: "1шт" },
      { name: "Творожный сыр", amount: "1уп" }
    ]
  }
];


export const initialLunchDinner: Meal[] = [
  {
    id: 1,
    name: "Гречка со свининой",
    ingredients: [
      { name: "Гречка", amount: "200г" },
      { name: "Свинина", amount: "300г" },
      { name: "Лук", amount: "100г" },
      { name: "Морковь", amount: "100г" }
    ]
  },
  {
    id: 2,
    name: "Шурпа",
    ingredients: [
      { name: "Говядина", amount: "400г" },
      { name: "Картофель", amount: "200г" },
      { name: "Морковь", amount: "100г" },
      { name: "Лук", amount: "100г" },
      { name: "Красный перец", amount: "100г" },
      { name: "Бешбармак", amount: "50г" }
    ]
  },
  {
    id: 3,
    name: "Картошка в духовке с курицей",
    ingredients: [
      { name: "Картофель", amount: "400г" },
      { name: "Курица(голень)", amount: "600г" },
      { name: "Масло", amount: "20г" }
    ]
  },
  {
    id: 4,
    name: "Куриный суп",
    ingredients: [
      { name: "Курица(голень)", amount: "400г" },
      { name: "Картофель", amount: "200г" },
      { name: "Морковь", amount: "100г" },
      { name: "Вермишель", amount: "50г" }
    ]
  },
  {
    id: 5,
    name: "Харчо",
    ingredients: [
      { name: "Говядина", amount: "200г" },
      { name: "Рис", amount: "100г" },
      { name: "Лук", amount: "100г" },
      { name: "Томат", amount: "50г" },
      { name: "Набор для харчо", amount: "1 шт" },
      { name: "Картофель", amount: "100г" }
    ]
  },
  {
    id: 6,
    name: "Котлеты с картошкой",
    ingredients: [
      { name: "Свинина", amount: "300г" },
      { name: "Картофель", amount: "500г" },
      { name: "Лук", amount: "50г" },
      { name: "Говядина", amount: "200г" }
    ]
  },
  {
    id: 7,
    name: "Говядина с лапшой(вок)",
    ingredients: [
      { name: "Говядина", amount: "400г" },
      { name: "Лапша", amount: "100г" },
      { name: "Красный перец", amount: "100г" },
      { name: "Стручковая фасоль", amount: "50г" }
    ]
  },
  {
    id: 8,
    name: "Болоньезе",
    ingredients: [
      { name: "Свинина", amount: "200г" },
      { name: "Макароны", amount: "100г" },
      { name: "Томатная паста", amount: "50г" },
      { name: "Лук", amount: "1шт" },
      { name: "Говядина", amount: "100г" },
      { name: "Морковь", amount: "1шт" }
    ]
  },
  {
    id: 9,
    name: "Крабовый салат",
    ingredients: [
      { name: "Крабовое мясо", amount: "150г" },
      { name: "Яйцо", amount: "2 шт" },
      { name: "Майонез", amount: "20г" },
      { name: "Рис", amount: "30г" },
      { name: "Кукуруза", amount: "1 банка" }
    ]
  },
  {
    id: 10,
    name: "Тушеная картошка со свининой",
    ingredients: [
      { name: "Картофель", amount: "300г" },
      { name: "Свинина", amount: "300г" },
      { name: "Лук", amount: "100г" },
      { name: "Морковь ", amount: "100г" }
    ]
  },
  {
    id: 12,
    name: "Тушенка с макаронами",
    ingredients: [
      { name: "Тушенка", amount: "1 банка" },
      { name: "Макароны", amount: "100г" }
    ]
  },
  {
    id: 13,
    name: "Сосиски с макаронами",
    ingredients: [
      { name: "Сосиски", amount: "200г" },
      { name: "Макароны", amount: "100г" }
    ]
  },
  {
    id: 14,
    name: "Рис со свининой",
    ingredients: [
      { name: "Рис", amount: "150г" },
      { name: "Свинина", amount: "300г" },
      { name: "Лук", amount: "100г" },
      { name: "Морковь", amount: "1 шт" },
      { name: "Устричный соус", amount: "1 шт" }
    ]
  },
  {
    id: 15,
    name: "Гуляш с макаронами",
    ingredients: [
      { name: "Говядина", amount: "300г" },
      { name: "Макароны", amount: "100г" },
      { name: "Лук", amount: "50г" },
      { name: "Морковь", amount: "1шт" }
    ]
  },
  {
    id: 16,
    name: "Рыбный суп",
    ingredients: [
      { name: "Рыбная консерва", amount: "300г" },
      { name: "Картофель", amount: "150г" },
      { name: "Морковь", amount: "50г" },
      { name: "Рис", amount: "50г" }
    ]
  },
  {
    id: 17,
    name: "Жареная рыба с пюре",
    ingredients: [
      { name: "Рыба", amount: "500г" },
      { name: "Картофель", amount: "500г" },
      { name: "Масло", amount: "20г" },
      { name: "Яйцо", amount: "1шт" },
      { name: "Молоко", amount: "100мл" }
    ]
  },
  {
    id: 18,
    name: "Брокколи с говядиной",
    ingredients: [
      { name: "Брокколи", amount: "400г" },
      { name: "Говядина", amount: "300г" },
      { name: "Масло", amount: "10г" },
      { name: "Устричный соус", amount: "1 шт" }
    ]
  },
  {
    id: 19,
    name: "Ежики в духовке с картошкой",
    ingredients: [
      { name: "Фарш", amount: "300г" },
      { name: "Картофель", amount: "400г" },
      { name: "Масло", amount: "20г" },
      { name: "Лук", amount: "1шт" },
      { name: "Рис", amount: "50гр" }
    ]
  }
];