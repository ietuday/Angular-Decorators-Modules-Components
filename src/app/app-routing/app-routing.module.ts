import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { BlogComponent } from '../components/blog/blog.component';
import { AboutComponent } from '../components/about/about.component';
import { UsersComponent } from '../components/users/users.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { MessageListComponent } from '../components/message-list/message-list.component';
import { ConfirmationGuard } from '../guards/confirmation/confirmation.guard';
import { UsersResolveGuard } from '../guards/users-resolve/users-resolve.guard';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard]},
  { path: 'about', component: AboutComponent},
  { path: 'users', 
    component: UsersComponent,
    canActivateChild: [ AuthGuard ],
    resolve:{
      users: UsersResolveGuard
    },
    children: [
      { path: ':id', component: UserDetailsComponent },
      // { path: '', component: PlaceholderComponent}
  ]},
  { path: 'messages', component: MessageListComponent, canDeactivate: [ ConfirmationGuard]},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
