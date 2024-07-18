// what is oop
// object
// is JS -> Fully Object Oriented -> No
// class, constructor, new, this

// template & blueprint of an object
// class Student {

//     // automatically call on creating an object
//     constructor(first_name, last_name, mobile, batch_code, tech) {
//         // current object
//         this.name =  first_name + " " + last_name;
//         this.mobile = mobile;
//         this.tech = tech;
//     }

//     updateMobile(mobile) {
//        this.mobile =  mobile;
//     }

//     addTech(tech) {
//         this.tech.push(tech);
//     }
// }

// // Object Creating
// const shadab = new Student("Shadab", "Ansari", "197917893791", "TP_RP_06", ["HTML", "CSS", "JS"]);
// const sheela = new Student("Sheela", "Mishra", "197917893791", "TP_RP_06", ["HTML", "CSS", "JS"]);

// shadab.addTech("ReactJS")

// console.log(shadab);

class Account {
    #balance;
    constructor(id, name, balance) {
      this.id = id;
      this.name = name;
      this.#balance = balance;
    }
  
    depositAmount(amount) {
      this.#balance += amount;
      return this.#balance;
    }
  
    withdrawAmount(amount) {
      this.#balance -= amount;
      return this.#balance;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  class CurrentAccount extends Account{
    calculateInterest() {
      return 0
    }
  }
  
  class SavingAccount extends Account {
    calculateInterest() {
      return this.getBalance() * 2.5 / 100; 
    }
  }
  
  const samruddhiAccount = new CurrentAccount(123, "Samruddhi", 0);
  const sarojAccount = new SavingAccount(123, "Saroj", 1);
  
  sarojAccount.depositAmount(10000);
  samruddhiAccount.depositAmount(2000);
  
  console.log(samruddhiAccount.calculateInterest());
  console.log(sarojAccount.calculateInterest());