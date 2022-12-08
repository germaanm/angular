import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{
  constructor(public serviceService: ServicesService){}

  ngOnInit(): void {
    this.getServices();
  }
  getServices(){
    this.serviceService.getServices().subscribe(
      res => {
        this.serviceService.services = res;
        console.log(this.serviceService.services);
      },
      err => {
        console.log(err);
      }
    )
  }

}
