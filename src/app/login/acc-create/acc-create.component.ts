import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Branch } from '../branch';
import { Credentials } from '../credentials';
import { Cusaccount } from '../cusaccount';
import { Customer } from '../customer';
import { DataserviceService } from '../dataservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-acc-create',
  templateUrl: './acc-create.component.html',
  styleUrls: ['./acc-create.component.css']
})
export class AccCreateComponent implements OnInit {
  branches: Branch[] = [];
  customers: any;
  showsubmit: boolean = false;
  tdate: any | undefined;
  constructor(private modalservice: NgbModal, private formbuilder: FormBuilder, private dataservice: DataserviceService, private router: Router) {
    this.getAllBranches();
    this.dataservice.getcustomers().subscribe((data) => {
      this.customers = data;
      console.log(this.customers);
    })
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    this.tdate = yyyy + '-' + mm + '-' + dd;
  }
  accountform: any;
  ngOnInit(): void {
    this.accountform = this.formbuilder.group({
      atype: [""],
      branch: [""],
      customerform: this.formbuilder.group({
        fname: [""],
        lname: [""],
        houseno: [""],
        locality: [""],
        city: [""],
        state: [""],
        country: ["India"],
        pincode: ["", [Validators.required, this.pincodeValidator]],
        mobileno: ["", [Validators.required, this.mobileValidator]],
        aadhaar: ["", [Validators.required, this.aadhaarValidator]],
        dateofbirth: [""],
        mstatus: [""]
      })
    });
  }
  pincodeValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().length == 6 && control.value.match(/^[0-9]+$/) != null) {
      return null;
    }
    else {
      return { invalid: true };
    }
  }

  mobileValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().length == 10 && control.value.match(/^[0-9]+$/) != null) {
      // this.isvalidmob=true;
      return null;
    }
    else {
      // this.isvalidmob=false;
      return { invalid: true };
    }
  }

  aadhaarValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().length == 12 && control.value.match(/^[0-9]+$/) != null) {
      return null;
    }
    else {
      return { invalid: true };
    }
  }


  getAllBranches() {
    this.dataservice.getBranchData().subscribe(data => {
      this.branches = data;
      console.log(this.branches);
    });

  }

  cusaccount: Cusaccount | undefined;
  customer: Customer | undefined;
  logincred: Credentials | undefined;
  unique: boolean;

  adduser(signupModal: any, duplicateModal: any) {
    this.unique = true;
    for (let cus of this.customers) {
      if (cus.aadhaar == this.accountform.value.customerform.aadhaar) {
        this.modalservice.open(duplicateModal, { centered: true });
        this.unique = false;
      }
    }
    if (this.unique) {
      this.customer = {
        "aadhaar": this.accountform.value.customerform.aadhaar,
        "city": this.accountform.value.customerform.city,
        "country": this.accountform.value.customerform.country,
        "dateofbirth": this.accountform.value.customerform.dateofbirth,
        "fname": this.accountform.value.customerform.fname,
        "houseno": this.accountform.value.customerform.houseno,
        "lname": this.accountform.value.customerform.lname,
        "locality": this.accountform.value.customerform.locality,
        "mobileno": this.accountform.value.customerform.mobileno,
        "mstatus": this.accountform.value.customerform.mstatus,
        "pincode": this.accountform.value.customerform.pincode,
        "state": this.accountform.value.customerform.state,
      };

      this.cusaccount = {
        "atype": this.accountform.value.atype,
        "balance": "10000",
        "astatus": "Active",
        "acnumber": null,
        "accopendate": this.tdate,
        "bid": this.accountform.value.branch,
        "customer": this.customer
      };

      let curdate = new Date();
      this.logincred = {
        "username": this.accountform.value.customerform.lname + "." + this.accountform.value.customerform.fname,
        "password": this.accountform.value.customerform.mobileno,
        "account": this.cusaccount
      }

      console.log("cusaccount data ");
      console.log(this.logincred);
      this.dataservice.addlogincred(this.logincred).subscribe(data => {
        console.log(data);
      });
      this.modalservice.open(signupModal, { centered: true });
    }

  }


  backtosignin() {
    this.router.navigate(['./']);
  }

}