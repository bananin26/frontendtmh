import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { CreateditUserComponent } from './component/user/createdit-user/createdit-user.component';
import { ProductComponent } from './component/product/product.component';
import { CreateditProductComponent } from './component/product/createdit-product/createdit-product.component';
import { OrderComponent } from './component/order/order.component';
import { CreateditOrderComponent } from './component/order/createdit-order/createdit-order.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [{ path: 'new', component: CreateditUserComponent }],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
