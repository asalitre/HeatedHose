import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHeatedHoseResponse } from '../interface/IHeatedHoseResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeatedHoseService {

  url = 'http://comet/xap/hyd/hos001?JOB='

  constructor(private http: HttpClient) { }

  getHeatedHose(jobNumber: string): Observable<IHeatedHoseResponse> {
    return this.http.get<IHeatedHoseResponse>(this.url + jobNumber + '&HYDRAFLOW_USERCHECK=HYDRAFL0W_Js0N_USER_2019.1.Y')
    // return this.http.get<IHeatedHoseResponse>('../../assets/hose2.json')
  }

}
