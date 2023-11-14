import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Notification } from 'src/app/model/notification';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-tolist-notification',
  templateUrl: './tolist-notification.component.html',
  styleUrls: ['./tolist-notification.component.css']
})
export class TolistNotificationComponent {
  dataSource: MatTableDataSource<Notification> = new MatTableDataSource();
<<<<<<< HEAD
  displayedColumns: string[] = ['idNotification', 'title','description','date','viewed','user','message'];
  backgroundImage = 'url("assets/fondo-notification.png")';

=======
  displayedColumns: string[] = ['idNotification', 'title','description','date','viewed','user','actualizar','eliminar'];
>>>>>>> da0a27b60a2b8b0b693c16134856097413408db6

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private nS: NotificationService) {}

  ngOnInit(): void {
    this.nS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.nS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminar(id: number) {
    this.nS.delete(id).subscribe((data) => {
      this.nS.list().subscribe((data) => {
        this.nS.setList(data);
      });
    });
  }

  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
