import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { TolistUserComponent } from './component/user/tolist-user/tolist-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import{MatNativeDateModule} from '@angular/material/core'
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatMenuModule } from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CreateditUserComponent } from './component/user/createdit-user/createdit-user.component';
import { ProductComponent } from './component/product/product.component';
import { TolistProductComponent } from './component/product/tolist-product/tolist-product.component';
import { CreateditProductComponent } from './component/product/createdit-product/createdit-product.component';
import { OrderComponent } from './component/order/order.component';
import { TolistOrderComponent } from './component/order/tolist-order/tolist-order.component';
import { CreateditOrderComponent } from './component/order/createdit-order/createdit-order.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TolistUserComponent,
    CreateditUserComponent,
    ProductComponent,
    TolistProductComponent,
    CreateditProductComponent,
    OrderComponent,
    TolistOrderComponent,
    CreateditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
