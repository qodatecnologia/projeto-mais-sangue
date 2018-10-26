import { Injectable } from '@angular/core';
import { Donor } from '../shared/donor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  apiUrl = 'http://localhost:3000/donor';

  constructor(private http: HttpClient) { }

  post(donor: Donor): Observable<any> {
    console.log(donor);
    return this.http.post<any>(this.apiUrl, donor);
  }


}
