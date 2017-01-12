import { Person } from '../../common/models';

export class Resident extends Person{
  ssn: number;
  dateOfBirth: Date;
  religion: string;
  isDNR: boolean;
  isAmbulatory: boolean;
  isVerbal: boolean;
  isActive: boolean;
  isDeceased: boolean;
}