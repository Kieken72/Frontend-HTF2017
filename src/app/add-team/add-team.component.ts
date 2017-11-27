import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';
import { FullTeam } from '../models/fullteam';
import { Angulartics2 } from 'angulartics2';

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

  constructor(private angulartics2: Angulartics2, private teamService: TeamService) { }

  ngOnInit() {
  }

  addTeam() {
    this.teamService.addTeam(this.team).subscribe(result => {
      this.addedTeam = result;
      localStorage.setItem('teamId', this.addedTeam.id);
      this.added = true;
      this.angulartics2.eventTrack.next({
        action: 'Add Team',
        properties: { category: 'action' },
      });
    });
  }

}
