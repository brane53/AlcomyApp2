// Angular Modules
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
// Firebase Configuration for Alcomy
import { firebaseConfig } from './utils/firebase.config';
// Alcomy Modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { WorkspaceModule } from './workspace/workspace.module';
// App Module Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FacilityComponent } from './facility/facility.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FacilityComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    CoreModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    WorkspaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
