import { Component, ViewChild } from '@angular/core';
import { DonorService } from './services/donor.service';
import { ReceptorService } from './services/receptor.service';
import { Donor } from './shared/donor';
import { Receptor } from './shared/receptor';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfModalAction } from '@totvs/thf-ui/components/thf-modal/thf-modal-action.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  donor: Donor = new Donor();
  receptor: Receptor = new Receptor();

  title = 'mais-sangue';
  lat: number = 51.678418;
  lng: number = 7.809007;  

  @ViewChild('formModal') formModal: ThfModalComponent;

  public readonly modalPrimaryAction: ThfModalAction = {
    action: () => this.returnToHome(),
    label: 'Fechar'
  };  

  constructor(
    private donorService: DonorService,
    private receptorService: ReceptorService
  ){ }

  returnToHome() {
    this.donor = new Donor();
    this.receptor = new Receptor();   
    this.formModal.close() 
  }

  sendDonor() {
    this.donorService.post(this.donor).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.formModal.open();
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
        this.formModal.open();
    },
    error => {
        console.log("Error", error);
    }      
    );;
  }

}
