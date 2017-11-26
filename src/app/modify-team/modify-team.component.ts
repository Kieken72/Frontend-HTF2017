import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { FullTeam } from '../models/fullteam';
import { Team } from '../models/team';

@Component({
  selector: 'app-modify-team',
  templateUrl: './modify-team.component.html',
  styleUrls: ['./modify-team.component.css']
})
export class ModifyTeamComponent implements OnInit {

  public teamId: string;
  public team: Team = new Team();
  public modifiedTeam: FullTeam;
  public modified: boolean;
  public confirmPassword: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  modifyTeam() {
    // tslint:disable-next-line:max-line-length
    this.teamService.modifyTeam(this.teamId, this.team).subscribe(result => {this.modifiedTeam = JSON.parse(result._body); this.modified = true; });
  }
}
