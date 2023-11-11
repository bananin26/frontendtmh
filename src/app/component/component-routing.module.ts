import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateditUserComponent } from './user/createdit-user/createdit-user.component';
import { UserComponent } from './user/user.component';
import { ReportUserComponent } from './user/report-user/report-user.component';
import { ProductComponent } from './product/product.component';
import { CreateditProductComponent } from './product/createdit-product/createdit-product.component';
import { OrderComponent } from './order/order.component';
import { CreateditOrderComponent } from './order/createdit-order/createdit-order.component';
import { MessageComponent } from './message/message.component';
import { CreateditMessageComponent } from './message/createdit-message/createdit-message.component';
import { NotificationComponent } from './notification/notification.component';
import { CreateditNotificationComponent } from './notification/createdit-notification/createdit-notification.component';
import { CategoryComponent } from './category/category.component';
import { CreateditCategoryComponent } from './category/createdit-category/createdit-category.component';
import { CreateditRoleComponent } from './role/createdit-role/createdit-role.component';
import { RoleComponent } from './role/role.component';
import { ForumComponent } from './forum/forum.component';
import { CreateditForumComponent } from './forum/createdit-forum/createdit-forum.component';
import { CreateditRecordComponent } from './record/createdit-record/createdit-record.component';
import { RecordComponent } from './record/record.component';
import { HomeComponent } from './home/home.component';

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
  {
    path: 'Home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}