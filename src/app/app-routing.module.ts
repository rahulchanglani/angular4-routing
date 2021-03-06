import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'users',  component: UsersComponent, children: [
    { path: ':id/:name',  component: UserComponent }    
  ] },
  { path: 'servers', 
//   canActivate: [AuthGuard],  
  canActivateChild: [AuthGuard],  
  component: ServersComponent, children: [
    { path: ':id',  component: ServerComponent },
    { path: ':id/edit',  component: EditServerComponent }
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
  //wild card route shpould be last in array as it is parsed from top to bottom
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    
}