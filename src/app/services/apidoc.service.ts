

import { Injectable, OnInit} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ApiDocService {
    constructor(private _http : Http) {
    }

    public readApiListing() : Observable<any> {
        return this._http.get("./assets/sabaapis.json")
        .map((res : any) => res.json());
    }
    
}
    
