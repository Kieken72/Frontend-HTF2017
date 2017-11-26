import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { TeamService } from './services/team.service';
import { HttpModule } from '@angular/http';
import { AddTeamComponent } from './add-team/add-team.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { ModifyTeamComponent } from './modify-team/modify-team.component';

import { AgmCoreModule } from '@agm/core';
import { OverviewComponent } from './overview/overview.component';

const appRoutes: Routes = [
    { path: 'map', component: OverviewComponent },
    { path: 'list', component: ListTeamComponent },
    { path: 'add', component: AddTeamComponent },
    { path: 'modify', component: ModifyTeamComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full'},
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    ListTeamComponent,
    ModifyTeamComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: '-shI0swfgGA1bQ'
    })
  ],
  providers: [
    { provide: 'ApiBase', useValue: environment.backendUrl },
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
