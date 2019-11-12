class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

interface IPerson {
  firstName: string;
  lastName: string;
}

function greeter(person: IPerson) {
  return "Hello " + person.firstName + " " + person.lastName;
}

let user = new Student("Renato", "Manuel Sousa", "Santos");

document.body.textContent = greeter(user);
