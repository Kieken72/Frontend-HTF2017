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

  private team: Team = new Team();
  private addedTeam: FullTeam;
  private added: boolean;
  private confirmPassword: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  addTeam() {
    this.teamService.addTeam(this.team).subscribe(result => {this.addedTeam = JSON.parse(result._body); this.added = true; });
  }

}
