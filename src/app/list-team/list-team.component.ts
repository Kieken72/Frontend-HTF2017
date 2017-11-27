import { Component, OnInit } from '@angular/core';
import { FullTeam } from '../models/fullteam';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  public teams: FullTeam[];
  private interval: any;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getData();
    if (this.interval) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.getData();
      }, 10000);
    }
  }
  getData() {
    this.teamService.listTeams().subscribe(result => this.teams = JSON.parse(result._body));
  }

}
