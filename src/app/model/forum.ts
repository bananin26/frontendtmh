import { User } from './user';

export class Forum {
  idForum: number = 0;
  forum: string = '';
  date: Date = new Date(Date.now());
  idUser: User = new User();
}