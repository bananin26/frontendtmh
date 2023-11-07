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
import { NotificationComponent } from './component/notification/notification.component';
import { CategoryComponent } from './component/category/category.component';
import { CreateditNotificationComponent } from './component/notification/createdit-notification/createdit-notification.component';
import { CreateditCategoryComponent } from './component/category/createdit-category/createdit-category.component';
import { RoleComponent } from './component/role/role.component';
import { CreateditRoleComponent } from './component/role/createdit-role/createdit-role.component';
import { ForumComponent } from './component/forum/forum.component';
import { CreateditForumComponent } from './component/forum/createdit-forum/createdit-forum.component';
import { RecordComponent } from './component/record/record.component';
import { CreateditRecordComponent } from './component/record/createdit-record/createdit-record.component';

const routes: Routes = [
  {
    path: 'Users',
    component: UserComponent,
    children: [
      { path: 'new', component: CreateditUserComponent },
      { path: 'edition/:id', component: CreateditUserComponent },
      { path: 'search', component: ReportUserComponent },
    ],
  },
  {
    path: 'Products',
    component: ProductComponent,
    children: [{ path: 'new', component: CreateditProductComponent }],
  },
  {
    path: 'Orders',
    component: OrderComponent,
    children: [{ path: 'new', component: CreateditOrderComponent }],
  },
  {
    path: 'Messages',
    component: MessageComponent,
    children: [{ path: 'new', component: CreateditMessageComponent }],
  },
  {
    path: 'Notificactions',
    component: NotificationComponent,
    children: [{ path: 'new', component: CreateditNotificationComponent }],
  },
  {
    path: 'Categories',
    component: CategoryComponent,
    children: [{ path: 'new', component: CreateditCategoryComponent }],
  },
  {
    path: 'Roles',
    component: RoleComponent,
    children: [{ path: 'new', component: CreateditRoleComponent }],
  },
  {
    path: 'Forums',
    component: ForumComponent,
    children: [{ path: 'new', component: CreateditForumComponent }],
  },
  {
    path: 'Records',
    component: RecordComponent,
    children: [{ path: 'new', component: CreateditRecordComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
