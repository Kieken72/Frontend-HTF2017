import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { TeamformComponent } from './teamform/teamform.component';

import { environment } from './../environments/environment';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { TeamService } from './services/team.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
    { path: 'list', component: TeamlistComponent },
    { path: 'add', component: TeamformComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full'},
  ];

@NgModule({
  declarations: [
    AppComponent,
    TeamformComponent,
    TeamlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: 'ApiBase', useValue: environment.backendUrl },
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
