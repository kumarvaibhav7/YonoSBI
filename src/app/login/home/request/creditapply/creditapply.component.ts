
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataserviceService } from 'src/app/login/dataservice.service';

@Component({
  selector: 'app-creditapply',
  templateUrl: './creditapply.component.html',
  styleUrls: ['./creditapply.component.css']
})
export class CreditapplyComponent implements OnInit {

  constructor(private modalservice: NgbModal, private formbuilder: FormBuilder, private dataService: DataserviceService, private route: ActivatedRoute, private router: Router) { }

  credform: any;
  finalUploadObject: any;
  accountdata: any;
  totalReq: number;
  on: boolean = false;
  reqdetails: any;
  ischar: any = false

  getData(submitModal: any) {
    this.finalUploadObject = {
      "acnumber": this.accountdata.acnumber,
      "requesttype": this.credform.value.ctype,
      "panno": this.credform.value.pan,
      "monthlyincome": this.credform.value.income,
      "employer": this.credform.value.employer
    }
    this.dataService.postRequestDetails(this.route.snapshot.pathFromRoot[1].url[0].path, this.finalUploadObject).subscribe(data => {
      console.log("request submitted");
    })
    this.modalservice.open(submitModal, { centered: true })
  }

  @ViewChild('submitted') submittedModal: TemplateRef<any>;

  ngOnInit(): void {
    this.credform = this.formbuilder.group({
      pan: ["", [Validators.required]],
      income: ["", [Validators.required, this.numbervalidator]],
      employer: ["", [Validators.required]],
      ctype: ["", [Validators.required]]
    })
    this.dataService.getactiveuserdetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(respdata => {
      console.log(respdata)
      this.accountdata = respdata;
    })

    this.dataService.getreqDetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(respdata => {
      this.reqdetails = respdata;
      console.log(this.reqdetails + "from reqtable")
    })

    this.dataService.getReqCount(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data => {
      if (data < 1) {
        this.on = true;
      }
    })
  }

  numbervalidator(control: AbstractControl): ValidationErrors | null {
    if (/\d/.test(control.value.toString()) && control.value.toString() != "" && control.value > 0) {
      return null;
    }
    else {
      return { invalid: true };
    }

  }

  ngAfterViewInit() {
    this.dataService.getReqCount(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data => {
      if (data >= 1) {
        this.modalservice.open(this.submittedModal, { centered: true });
      }
    })
  }

  gotorequest() {
    this.router.navigate([this.route.snapshot.pathFromRoot[1].url[0].path + '/home/request'])
  }

  isinvalid() {
    if (this.on == true && this.credform.invalid == false) {
      return false;
    }
    console.log(this.on, this.credform.invalid);
    return true;
  }
}
