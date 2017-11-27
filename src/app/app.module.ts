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
import { OverviewComponent } from './overview/overview.component';
import { LocationService } from './services/location.service';
import { ScorePipe } from './pipes/score.pipe';
import { LimitPipe } from './pipes/limit.pipe';

import { AgmCoreModule } from '@agm/core';
import { ParticlesModule } from 'angular-particle';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

const appRoutes: Routes = [
    { path: 'map', component: OverviewComponent },
    { path: 'list', component: ListTeamComponent },
    { path: 'add', component: AddTeamComponent },
    { path: 'modify', component: ModifyTeamComponent },
    { path: 'modify/:id', component: ModifyTeamComponent },
    { path: '', redirectTo: 'map', pathMatch: 'full'},
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    ListTeamComponent,
    ModifyTeamComponent,
    OverviewComponent,
    ScorePipe,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ParticlesModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: 'ApiBase', useValue: environment.backendUrl },
    TeamService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
