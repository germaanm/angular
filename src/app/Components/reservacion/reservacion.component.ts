import { Component, OnInit } from '@angular/core';
import{ReservationsService} from '../../Services/reservations.service'
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  constructor(private reservationService: ReservationsService){}

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations()
  {
    this.reservationService.getReservations().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
