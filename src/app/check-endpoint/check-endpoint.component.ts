import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { TeamFeedback } from '../models/team-feedback';

@Component({
  selector: 'app-check-endpoint',
  templateUrl: './check-endpoint.component.html',
  styleUrls: ['./check-endpoint.component.css']
})
export class CheckEndpointComponent implements OnInit {

  public teamId = '';
  public feedback: TeamFeedback;
  public errors: any;

  constructor(private teamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teamId = params['id'];
    });
    if (!!localStorage.getItem('teamId')) {
      this.teamId = localStorage.getItem('teamId');
    }
    this.errors = {
      id: false
    };
  }
  validate() {
    if (this.teamId === '' || this.teamId == null) {
      this.errors.id = true;
      return true;
    }
    return false;
  }

  getFeedback() {
    if (!this.validate()) {
      this.teamService.feedbackTeam(this.teamId).subscribe(result => {
        this.feedback = result;
      });
    }
  }
}
