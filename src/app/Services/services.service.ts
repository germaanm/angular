import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Servicios } from '../model/services'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  API_URL = "http://localhost:3000/api/servicios";
  services: Servicios[] | undefined;
  constructor(private http:HttpClient) {}
  getServices(){
    return this.http.get<Servicios[]>(this.API_URL);
  }
}
