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
  public myStyle: object = {};
  public myParams: object = {};
  public width = 100;
  public height = 100;
  public loaded = false;
  constructor(private teamService: TeamService, private locationService: LocationService) { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '65%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
    this.myParams = {
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#238afc'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 7,
            opacity_min: 0.3,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 300,
            line_linked: {
              opacity: 0.5
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
};
    this.getData();
    if (this.interval) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.getData();
      }, 10000);
    }
    this.loaded = true;
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
