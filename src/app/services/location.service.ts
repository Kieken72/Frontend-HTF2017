import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Location } from '../models/location';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LocationService {

  private options: RequestOptions;
  private endPoint: string;

  constructor(private http: Http, @Inject('ApiBase') private api: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
    this.endPoint = api + 'locations/';
  }

  public listLocations(): Observable<any> {
    return this.http.get(this.endPoint, this.options)
      .map(res => res.json());
  }
}
