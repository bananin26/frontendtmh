import { ReportUserComponent } from './component/user/report-user/report-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { CreateditUserComponent } from './component/user/createdit-user/createdit-user.component';
import { ProductComponent } from './component/product/product.component';
import { CreateditProductComponent } from './component/product/createdit-product/createdit-product.component';
import { OrderComponent } from './component/order/order.component';
import { CreateditOrderComponent } from './component/order/createdit-order/createdit-order.component';
import { MessageComponent } from './component/message/message.component';
import { CreateditMessageComponent } from './component/message/createdit-message/createdit-message.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'new', component: CreateditUserComponent },
      { path: 'edition/:id', component: CreateditUserComponent },
      {path:'search',component:ReportUserComponent}
    ],
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [{ path: 'new', component: CreateditProductComponent }],
  },
  {
    path: 'order',
    component: OrderComponent,
    children: [{ path: 'new', component: CreateditOrderComponent }],
  },
  {
    path: 'message',
    component: MessageComponent,
    children: [{ path: 'new', component: CreateditMessageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
