import { Component } from '@angular/core';
import { DonorService } from './services/donor.service';
import { ReceptorService } from './services/receptor.service';
import { Donor } from './shared/donor';
import { Receptor } from './shared/receptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private donorService: DonorService,
    private receptorService: ReceptorService
  ){ }

  donor: Donor = new Donor();
  receptor: Receptor = new Receptor();

  title = 'mais-sangue';
  lat: number = 51.678418;
  lng: number = 7.809007;


  sendDonor() {
    this.donorService.post(this.donor).subscribe(
      data => {
        console.log("POST Request is successful ", data);
    },
    error => {
        console.log("Error", error);
    }      
    );
  }

  sendReceptor() {
    this.receptorService.post(this.receptor).subscribe(
      data => {
        console.log("POST Request is successful ", data);
    },
    error => {
        console.log("Error", error);
    }      
    );;
  }

}
