import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Team } from '../models/team';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


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
    return this.http.get(this.endPoint, this.options)
    .map(res => res.json());
  }
  public addTeam(team: Team): Observable<any> {
    return this.http.post(this.endPoint, team, this.options)
    .map(res => res.json());
  }
  public modifyTeam(id: string, team: Team): Observable<any> {
    return this.http.put(this.endPoint + id, team, this.options)
      .map(res => res.json())
      .catch(res => Observable.throw(res.json()));
  }
  public feedbackTeam(id: string): Observable<any> {
    return this.http.get(this.endPoint + id + '/feedback', this.options)
      .map(res => res.json());
  }
}
