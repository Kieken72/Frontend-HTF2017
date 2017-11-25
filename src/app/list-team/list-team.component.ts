import { Component, OnInit } from '@angular/core';
import { FullTeam } from '../models/fullteam';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  private teams: FullTeam[];
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.listTeams().subscribe(result => this.teams = JSON.parse(result._body));
  }

}
