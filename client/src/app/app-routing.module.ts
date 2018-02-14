import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { MTrajetsComponent } from './m-trajets/m-trajets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTrajetComponent } from './m-trajets/edit-trajet/edit-trajet.component';


const appRoutes: Routes = [ // this is an array of objects , each object is each route
  
    { path: '',
    component: HomeComponent

    },

    {
      path: 'register',
      component: RegisterComponent,
      canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
    },

    {
      path: 'login',
      component: LoginComponent, // Login Route, 
      canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
           
    },

    {
      path: 'dashboard',
      component: DashboardComponent, // DashBoard Route, 
      canActivate: [AuthGuard] // User must be logged in to view this route
    },

    {
      path: 'profile',
      component: ProfileComponent, // Profile Route
      canActivate: [AuthGuard] // User must be logged in to view this route
    },

    {
      path: 'm-trajets',
      component: MTrajetsComponent, // MTrajets Route
      canActivate: [AuthGuard] // User must be logged in to view this route
    },
    {
      path: 'edit-trajet/:id',
      component: EditTrajetComponent, // EditTrajetComponent Route
      canActivate: [AuthGuard] // User must be logged in to view this route
    },

    {
       path: '**', 
       component: HomeComponent 
    }
  ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(
            appRoutes, // we pass in this module all of our routes witch we created top of here (appRoutes)
            { enableTracing: true } // <-- debugging purposes only
          )
    ],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  