import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { FullTeam } from '../models/fullteam';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private teams: FullTeam[];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.listTeams().subscribe(result => this.teams = JSON.parse(result._body));
  }

}
