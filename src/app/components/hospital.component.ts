import { Component, OnInit } from '@angular/core';

import { Hospital } from '../models/hospital.model';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  providers: [HospitalService],
})
export class HospitalComponent implements OnInit {
  hospitalList: Array<Hospital>;
  isEdit = false;
  hospitalObj = {
    hospitalName: '',
    address: '',
    bedCapacity: '',
    icuBeds: '',
    hospitalNumber: '',
  };
  hospitals!: Hospital[];

  constructor(private hospitalService: HospitalService) {
    this.hospitalList = [];
  }

  ngOnInit() {
    this.hospitalService
      .getAllHospitals()
      .subscribe((data: Hospital[]) => (this.hospitalList = data));
    this.getLatestHospital();
  }

  getHospitalById(id: number): void {
    this.hospitalService.getHospitalById(id).subscribe((data: Hospital) => {
      alert(
        `ID: ${data.id} 
        Hospital: ${data.hospitalName}  \n
        Bed Capcity: ${data.bedCapcity}  \n
        Address: ${data.address} \n
        Contact Details: ${data.hospitalNumber}
        `
      );
    });
  }
  addHospital(formObj: any) {
    this.hospitalService.createHospital(formObj).subscribe((response) => {
      console.log(response);
    });
  }

  getLatestHospital() {
    this.hospitalService.getAllHospitals().subscribe((response) => {
      this.hospitals = response;
    });
  }

  editHospital(hospital: any) {
    this.isEdit = true;
    this.hospitalObj = hospital;
  }

  updateHospital() {
    this.isEdit = !this.isEdit;
    this.hospitalService.updateHospital(this.hospitalObj).subscribe(() => {
      this.getLatestHospital();
    });
  }

  deleteHospital(hospital: any) {
    this.hospitalService.deleteHospital(hospital).subscribe(() => {
      this.getLatestHospital();
    });
  }
}
