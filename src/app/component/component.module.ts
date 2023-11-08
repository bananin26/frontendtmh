import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';

import { UserComponent } from './user/user.component';
import { CreateditUserComponent } from './user/createdit-user/createdit-user.component';
import { ReportUserComponent } from './user/report-user/report-user.component';
import { TolistUserComponent } from './user/tolist-user/tolist-user.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { TolistOrderComponent } from './order/tolist-order/tolist-order.component';
import { TolistMessageComponent } from './message/tolist-message/tolist-message.component';
import { TolistNotificationComponent } from './notification/tolist-notification/tolist-notification.component';
import { TolistCategoryComponent } from './category/tolist-category/tolist-category.component';
import { TolistRoleComponent } from './role/tolist-role/tolist-role.component';
import { TolistForumComponent } from './forum/tolist-forum/tolist-forum.component';
import { TolistRecordComponent } from './record/tolist-record/tolist-record.component';
import { TolistProductComponent } from './product/tolist-product/tolist-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserComponent,
    TolistUserComponent,
    CreateditUserComponent,
    ProductComponent,
    TolistUserComponent,
    CreateditProductComponent,
    OrderComponent,
    TolistOrderComponent,
    CreateditOrderComponent,
    MessageComponent,
    TolistMessageComponent,
    CreateditMessageComponent,
    ReportUserComponent,
    NotificationComponent,
    CreateditNotificationComponent,
    TolistNotificationComponent,
    CategoryComponent,
    CreateditCategoryComponent,
    TolistCategoryComponent,
    RoleComponent,
    TolistRoleComponent,
    CreateditRoleComponent,
    ForumComponent,
    CreateditForumComponent,
    TolistForumComponent,
    RecordComponent,
    TolistRecordComponent,
    CreateditRecordComponent,
    TolistProductComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatListModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
})
export class ComponentModule {}
