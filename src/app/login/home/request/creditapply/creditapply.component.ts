import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/login/dataservice.service';

@Component({
  selector: 'app-creditapply',
  templateUrl: './creditapply.component.html',
  styleUrls: ['./creditapply.component.css']
})
export class CreditapplyComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private dataService: DataserviceService, private route: ActivatedRoute ,private renderer : Renderer2 , private element: ElementRef,
    @Inject(DOCUMENT) private document: Document , private router: Router) { }

  credform: any;
  finalUploadObject: any;
  accountdata: any;
  totalReq : number;
  on: boolean = false;
  reqdetails:any;
  
  getData(){
    this.finalUploadObject = {
      "acnumber": this.accountdata.acnumber,
      "requesttype": this.credform.value.ctype,
      "panno": this.credform.value.pan,
      "monthlyincome": this.credform.value.income,
      "employer": this.credform.value.employer
    }
    this.dataService.postRequestDetails(this.route.snapshot.pathFromRoot[1].url[0].path,this.finalUploadObject).subscribe(data =>{
      console.log("request submitted");
    })
    this.router.navigate([this.route.snapshot.pathFromRoot[1].url[0].path+'/home/request'])
  }


  ngOnInit(): void {
    this.credform = this.formbuilder.group({
      pan: [""],
      income: [""],
      employer: [""],
      ctype: [""]
    })
    this.dataService.getactiveuserdetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(respdata => {
      console.log(respdata)
      this.accountdata = respdata;
    })

    this.dataService.getReqCount(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(respdata => {
      if(respdata >= 1){
        alert("Request Already Submitted Disabling Services!!")
        // this.dataService.getreqDeatils(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(respdata =>{
        //   this.reqdetails = respdata;
        //   console.log(this.reqdetails)
        // })
      }
      else{
        this.on = true;
      }
    })
    
    this.dataService.getreqDetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(respdata =>{
          this.reqdetails = respdata;
          console.log(this.reqdetails+ "from reqtable")
        })
    
  }

  ngAfterViewInit(){
       this.renderer.setStyle(this.element.nativeElement.offsetParent, 'height', 'auto !important');
       this.renderer.setStyle(this.element.nativeElement.offsetParent, 'overflow-y', 'hidden');  
   }
   ngOnDestroy(){
       this.renderer.removeStyle(this.document.body, 'overflow-y');
   }

}
