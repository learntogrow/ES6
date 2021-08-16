//class 
// constructor overloading = not allowed

class Vacation {

    constructor(destination, length) {
      this.destination = destination
      this.length = length
    }
    // constructor(destination, length, expense) {
    //     this.destination = destination
    //     this.length = length
    //     this.expense = expense
    //   } //SyntaxError: A class may only have one constructor

    print() {
      console.log(`${this.destination}: will take ${this.length} days.`)
    }

  }

  const trip = new Vacation("Goa", 9)
  trip.print();//Goa: will take 9 days.