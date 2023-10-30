import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { CreateditUserComponent } from './component/user/createdit-user/createdit-user.component';

const routes: Routes = [
    {
      path: 'user', component: UserComponent, children: [
        { path: 'new', component: CreateditUserComponent }
      ]
    }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
