import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-teamform',
  templateUrl: './teamform.component.html',
  styleUrls: ['./teamform.component.css']
})
export class TeamformComponent implements OnInit {

  private team: Team = new Team();
  private confirmPassword: string;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

}
