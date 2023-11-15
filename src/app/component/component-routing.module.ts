import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateditUserComponent } from './user/createdit-user/createdit-user.component';
import { UserComponent } from './user/user.component';
import { ReportUserComponent } from './user/report-user/report-user.component';
import { ProductComponent } from './product/product.component';
import { CreateditProductComponent } from './product/createdit-product/createdit-product.component';
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
import { CreateditTripsComponent } from './trips/createdit-trips/createdit-trips.component';
import { TripsComponent } from './trips/trips.component';
import { MapachevereComponent } from './mapachevere/mapachevere.component';

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
    children: [
      { path: 'new', component: CreateditProductComponent },
      { path: 'edition/:id', component: CreateditProductComponent },
    ],
  },
  {
    path: 'Trips',
    component: TripsComponent,
    children: [
      { path: 'new', component: CreateditTripsComponent },
      { path: 'edition/:id', component: CreateditTripsComponent },
  ],
  },
  {
    path: 'Messages',
    component: MessageComponent,
    children: [
      { path: 'new', component: CreateditMessageComponent },
      { path: 'edition/:id', component: CreateditMessageComponent },
    ],
  },
  {
    path: 'Notifications',
    component: NotificationComponent,
    children: [
      { path: 'new', component: CreateditNotificationComponent },
      { path: 'edition/:id', component: CreateditNotificationComponent },
    ],
  },
  {
    path: 'Categories',
    component: CategoryComponent,
    children: [
      { path: 'new', component: CreateditCategoryComponent },
      { path: 'edition/:id', component: CreateditCategoryComponent },
  ],
  },
  {
    path: 'Roles',
    component: RoleComponent,
    children: [
      { path: 'new', component: CreateditRoleComponent },
      { path: 'edition/:id', component: CreateditRoleComponent },
  ],
  },
  {
    path: 'Forums',
    component: ForumComponent,
    children: [
      { path: 'new', component: CreateditForumComponent },
      { path: 'edition/:id', component: CreateditForumComponent },
  ],
  },
  {
    path: 'Records',
    component: RecordComponent,
    children: [
      { path: 'new', component: CreateditRecordComponent },
      { path: 'edition/:id', component: CreateditRecordComponent },
    ],
  },
  {
    path: 'Home',
    component: HomeComponent,
  },

  {
    path: 'Map',
    component: MapachevereComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
