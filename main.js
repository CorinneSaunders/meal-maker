let menu = {
  courses:  {
    appetizers: [],
    mains:[],
    desserts: []
  },
  addDishToCourse : function (courseName, dishName, dishPrice){
    let dish = {
      name: dishName,
      price: dishPrice
    };
    if (this.courses[courseName]){
        this.courses[courseName].push(dish)
      } else {
        console.log('Invalid course name');
      }
    },
    getRandomDishFromCourse: function (courseName){
    let dishes = this.courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length)
    return dishes[randomIndex];
    },
    // Step8
   generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. Total price is ${totalPrice}`;
  },
};
    

// Example usage:
menu.addDishToCourse('appetizers', 'Caesar Salad', 5.99);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.99);

menu.addDishToCourse('mains', 'Steak', 15.99);
menu.addDishToCourse('mains', 'Pasta Carbonara', 14.99);

menu.addDishToCourse('desserts', 'Chocolate Cake', 6.99);
menu.addDishToCourse('desserts', 'Tiramisu', 7.99);

const meal = menu.generateRandomMeal()
console.log(meal);
