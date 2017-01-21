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
}
