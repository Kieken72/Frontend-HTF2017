import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Team } from '../models/team';


@Injectable()
export class TeamService {

  private options: RequestOptions;
  private endPoint: string;

  constructor(private http: Http, @Inject('ApiBase') private api: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
    this.endPoint = api + 'teams/';
  }

  public listTeams(): Observable<any> {
    return this.http.get(this.endPoint, this.options);
  }
  public addTeam(team: Team): Observable<any> {
    return this.http.post(this.endPoint, team, this.options);
  }
  public modifyPerson(id: string, team: Team): Observable<any> {
    return this.http.put(this.endPoint + id, team, this.options);
  }
}
