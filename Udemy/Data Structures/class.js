class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }
  fullName() {
    return `My Full Name is ${this.lastName} ${this.firstName}`;
  }
  late() {
    this.tardies++;
    if (this.tardies >= 3) return "Go to Hell!!!";
    return `${this.lastName} ${this.firstName} has been late ${this.tardies} times`;
  }
}

let firstStudent = new Student("Choong Ho", "Park");

console.log(firstStudent.late());
console.log(firstStudent.late());
console.log(firstStudent.late());
