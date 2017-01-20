import { User } from '../../common/models';

export class Account {
  id?: string;
  companyName: string;
  createdOn: Date;
  users?: User[];

}
