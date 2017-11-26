import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { FullTeam } from '../models/fullteam';
import { Location } from '../models/Location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public teams: FullTeam[];
  private loadedTeams: FullTeam[];
  private locations: Location[];
  public zoom = 2;
  public mapTypeId = 'terrain';
  private interval: any;

  constructor(private teamService: TeamService, private locationService: LocationService) { }

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
    this.locationService.listLocations().subscribe(result => {
      this.locations = JSON.parse(result._body); this.getTeams();
    });
  }

  getTeams() {
    this.teamService.listTeams().subscribe(result => {
      this.loadedTeams = JSON.parse(result._body);
      this.loadedTeams.forEach(team => {
        team.location = this.locations.find(location => location.id === team.locationId);
      });
      this.teams = this.loadedTeams;
    });
  }
}
