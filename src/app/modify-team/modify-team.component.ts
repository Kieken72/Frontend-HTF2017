import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { FullTeam } from '../models/fullteam';
import { Team } from '../models/team';
import { Angulartics2 } from 'angulartics2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-team',
  templateUrl: './modify-team.component.html',
  styleUrls: ['./modify-team.component.css']
})
export class ModifyTeamComponent implements OnInit {

  public teamId = '';
  public team: Team = new Team();
  public modifiedTeam: FullTeam;
  public modified: boolean;
  public confirmPassword: string;
  public hasError = false;
  public error: string;
  public errors: any;

  constructor(private angulartics2: Angulartics2, private teamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teamId = params['id'];
    });
    if (!!localStorage.getItem('teamId')) {
      this.teamId = localStorage.getItem('teamId');
    }
      this.errors = {
        id: false,
        name: false,
        feedback: false,
        password: false
      };
    }
    validate() {
      let error = false;
      if (this.teamId === '' || this.teamId == null) {
        this.errors.id = true;
        error = true;
      }
      if (this.team.name === '') {
        this.errors.name = true;
        error = true;
      }
      if (this.team.feedbackEndpoint === '') {
        this.errors.feedback = true;
        error = true;
      }
      if (this.team.password === '') {
        this.errors.password = true;
        error = true;
      }
      return error;
    }

  modifyTeam() {
    if (!this.validate()) {
      this.hasError = false;
      // tslint:disable-next-line:max-line-length
      this.teamService.modifyTeam(this.teamId, this.team).subscribe(result => {
        this.modifiedTeam = result;
        this.modified = true;
        this.angulartics2.eventTrack.next({
          action: 'Modify Team',
          properties: { category: 'action' },
        });
      }, err => {
        this.hasError = true;
        this.error = err;
      });
  }
  }
}
