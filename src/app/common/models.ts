export abstract class Person {
  id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender?: string;
}

export class User {
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export class Facility {
  id?: string;
  displayName: string;
  name?: string;
  licenseNumber?: string;

  constructor(facility: Facility){
    this.id = facility.id ? facility.id: null;
    this.name = facility.name;
    this.displayName = facility.displayName;
    this.licenseNumber = facility.licenseNumber;
  }
}

export class FirebaseError {
  name?: string;
  message?: string;
  code?: string;
}
