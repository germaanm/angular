import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  API_URL = "http://localhost:3000/api/reservar";
  constructor(private http:HttpClient) { }
  getReservations(){
    return this.http.get(this.API_URL);
  }
}
