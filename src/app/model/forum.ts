import { User } from './user';

export class Forum {
  idForum: number = 0;
  forum: string = '';
  date: Date = new Date(Date.now());
  iduser: User = new User();
}