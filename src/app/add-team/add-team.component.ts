import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { FullTeam } from '../models/fullteam';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  public team: Team = new Team();
  public addedTeam: FullTeam;
  public added: boolean;
  public confirmPassword: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  addTeam() {
    this.teamService.addTeam(this.team).subscribe(result => {this.addedTeam = JSON.parse(result._body); this.added = true; });
  }

}
