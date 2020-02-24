//Factura

class Bill {
  constructor() {
    this.details = [];
  }
  addDetail(detail) {
    this.details.push(detail);
  }
  /* 
  [Symbol.iterator](){
    let current = 0;
    return {
      next: () => ({done: current >= this.details.length, value: this.details[current++]})
    }
  }
} */

  [Symbol.iterator]() {
    let current = 0;
    return {
      next: function() {
        return {
          done: current >= this.details.length,
          value: this.details[current++]
        };
      }.bind(this)
    };
  }
}

class Detail {
  constructor(name, amount) {
    (this.name = name), (this.amount = amount);
  }
}

const bill = new Bill();
bill.addDetail(new Detail("Breakfast", "$" + 55));
bill.addDetail(new Detail("Taxi", "$" + 100));

for (let detail of bill) {
  console.log(detail.name);
  console.log(detail.amount);
}
