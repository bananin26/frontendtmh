import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-tolist-product',
  templateUrl: './tolist-product.component.html',
  styleUrls: ['./tolist-product.component.css']
})
export class TolistProductComponent {
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  displayedColumns: string[] = ['idProduct', 'nameProduct','descriptionProduct','priceProduct','dimensionsProduct'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private uS: ProductService) {}

  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
