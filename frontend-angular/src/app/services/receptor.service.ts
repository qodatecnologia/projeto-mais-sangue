import { Injectable } from '@angular/core';
import { Receptor } from '../shared/receptor';
import { Donor } from '../shared/donor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceptorService {
  
  apiUrl = 'http://localhost:3000/receptor';

  constructor(private http: HttpClient) { }

  post(receptor: Receptor): Observable<any> {
    return this.http.post<any>(this.apiUrl, receptor);
  }
}
