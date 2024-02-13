import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/meals", () => ({
        meals: generateMealList(),
      }));
    },
  });

  function generateMealList() {
    const meals = [];
    for (let i = 1; i <= 50; i++) {
      meals.push({
        id: i,
        name: `Meal ${i}`,
        ingredients: generateIngredients(),
      });
    }
    return meals;
  }

  function generateIngredients() {
    const ingredients = [];
    const ingredientNames = [
      "Apple",
      "Egg",
      "Chicken Breast",
      "Salmon",
      "Spinach",
      "Quinoa",
      "Avocado",
      "Brown Rice",
      "Sweet Potato",
      "Broccoli",
      "Olive Oil",
      "Almonds",
      "Greek Yogurt",
      "Blueberries",
      "Oats",
      "Tomato",
      "Cucumber",
      "Lentils",
      "Tofu",
      "Cauliflower",
      "Chickpeas",
      "Pumpkin Seeds",
      "Turkey Breast",
      "Cheese",
      "Kale",
      "Carrot",
      "Peanut Butter",
      "Banana",
      "Cottage Cheese",
      "Green Beans",
      "Mushrooms",
      "Whole Wheat Bread",
      "Hummus",
      "Bell Pepper",
      "Salad Greens",
      "Oranges",
      "Flaxseeds",
      "Walnuts",
      "Beets",
      "Soy Milk",
      "Pomegranate",
      "Cabbage",
      "Chia Seeds",
      "Coconut",
      "Yogurt",
      "Peach",
      "Pear",
      "Raspberry",
    ];

    for (let j = 0; j < 3; j++) {
      const randomIngredient =
        ingredientNames[Math.floor(Math.random() * ingredientNames.length)];
      const calorie = Math.floor(Math.random() * (100 - 20 + 1) + 20);

      ingredients.push({
        name: randomIngredient,
        calorie: calorie,
      });
    }

    return ingredients;
  }

  return server;
}
