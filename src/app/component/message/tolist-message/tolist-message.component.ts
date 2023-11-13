import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-tolist-message',
  templateUrl: './tolist-message.component.html',
  styleUrls: ['./tolist-message.component.css']
})
export class TolistMessageComponent implements OnInit {
  dataSource: MatTableDataSource<Message> = new MatTableDataSource();
  displayedColumns: string[] = ['idMessage', 'title','content', 'userSend','userReceives'];
  backgroundImage = 'url("assets/mensaje.png")';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mS: MessageService) {}

  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.mS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
