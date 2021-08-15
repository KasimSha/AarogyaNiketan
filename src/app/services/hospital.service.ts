import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../models/hospital.model';

@Injectable()
export class HospitalService {
  constructor(private httpClient: HttpClient) {}

  createHospital(hospital: any) {
    return this.httpClient.post(`http://localhost:3000/hospitals`, hospital);
  }

  getAllHospitals(): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>(`http://localhost:3000/hospitals`);
  }

  getHospitalById(id: number): Observable<Hospital> {
    return this.httpClient.get<Hospital>(
      `http://localhost:3000/hospitals/${id}`
    );
  }

  updateHospital(hospital: any) {
    return this.httpClient.put(
      `http://localhost:3000/hospitals/${hospital.id}`,
      hospital
    );
  }

  deleteHospital(hospital: any) {
    return this.httpClient.delete(
      `http://localhost:3000/hospitals/${hospital.id}`
    );
  }
}
