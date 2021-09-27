import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {UserComponent} from 'C:/Users/dvkr1/Desktop/Flight Booking Case Study/search-microservice/frontend/MyFrontend/src/app/user/user.component'
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'; 
import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component'

const routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:AppComponent},
  {path:'search',component:UserComponent}
]
@NgModule({
  declarations: 
  [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    MyDialogComponent
  ],
  imports: 
  [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
