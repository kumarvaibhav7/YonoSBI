import { DOCUMENT } from '@angular/common';
import { Component, DoCheck, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataserviceService } from 'src/app/login/dataservice.service';

@Component({
  selector: 'app-branchchange',
  templateUrl: './branchchange.component.html',
  styleUrls: ['./branchchange.component.css']
})
export class BranchchangeComponent implements OnInit,DoCheck {

  finalUploadObject: any;
  branchform: any;
  adata: any;
  bdata: any;
  branches: any;
  disabledFlag : Boolean = false

  constructor(private modalservice:NgbModal, private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private document: Document,private formbuilder: FormBuilder, public route: ActivatedRoute, private dataservice: DataserviceService, private router : Router) {
    this.dataservice.getactiveuserdetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data => {
      this.adata = data;
      console.log(this.adata)
      this.dataservice.getbranch(this.adata.bid).subscribe(data => {
        this.bdata = data;
        console.log(data);
      })
    })

    this.dataservice.getBranchData().subscribe(data => {
      this.branches = data;
    })
  }

  ngDoCheck(): void {
    if(this.branchform.value.bid == this.adata.bid){
      console.log("same")
      this.disabledFlag = true;
    }
    else{
      this.disabledFlag = false;
    }
  }

  

  ngOnInit(): void {
    this.branchform = this.formbuilder.group({
      bid: [""]
    })
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'height', 'auto !important');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'overflow-y', 'hidden');
  }

  ngOnDestroy() {
    this.renderer.removeStyle(this.document.body, 'overflow-y');
  }

  changebranch(submitModal:any) {
    //console.log(this.branchform);
    this.adata.bid = this.branchform.value.bid;
    console.log(this.adata);
    this.dataservice.putBranchDetails(this.route.snapshot.pathFromRoot[1].url[0].path, this.adata).subscribe((data) =>{
      console.log(data)
    })
    this.modalservice.open(submitModal, { centered: true });
  }

  gotorequest(){
    this.router.navigate([this.route.snapshot.pathFromRoot[1].url[0].path+'/home/request'])
  }
}