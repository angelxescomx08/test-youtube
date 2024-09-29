import { Prettify } from "./prettify";

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type myType = {
  name: string;
  age: number;
  employeeId: number;
  department: string;
}

type EmployeePerson = Prettify<Person & Employee>;