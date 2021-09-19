class Burger {
  cost() {
    return 50
  }
}

const cheese = burger => {
  const cost = burger.cost()
  burger.cost = () => cost + 5
}

const double = burger => {
  const cost = burger.cost()
  burger.cost = () => cost + 20
}

const doubleWithCheese = burger => {
  double(burger)
  cheese(burger)
  const cost = burger.cost()
  burger.cost = () => cost
}

const burger = new Burger()
doubleWithCheese(burger)

console.log(burger.cost())