//main configuration file basicly it tells application everythings that we need
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; //Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
import { AuthService } from './services/auth.service';
import { TrajetService } from './services/trajet.service';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MTrajetsComponent } from './m-trajets/m-trajets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditTrajetComponent } from './m-trajets/edit-trajet/edit-trajet.component';
import { FormsModule } from '@angular/forms';
import { DeleteTrajetComponent } from './m-trajets/delete-trajet/delete-trajet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    MTrajetsComponent,
    DashboardComponent,
    EditTrajetComponent,
    DeleteTrajetComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    NotAuthGuard,
    TrajetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
