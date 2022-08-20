import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-homedata',
  templateUrl: './homedata.component.html',
  styleUrls: ['./homedata.component.css']
})
export class HomedataComponent implements OnInit {
  adata:any;
  constructor(private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private document: Document,public route:ActivatedRoute,private dataservice:DataserviceService) {
    this.dataservice.getactiveuserdetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data=>{
      console.log(data);
      this.adata=data;
    })
   }

  ngOnInit(): void {
    console.log(this.route.snapshot.pathFromRoot)
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'height', 'auto !important');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'overflow-y', 'hidden');
  }

  ngOnDestroy() {
    this.renderer.removeStyle(this.document.body, 'overflow-y');
  }

  isbalhidden:boolean=true;
  showbalance(){
    this.isbalhidden=!this.isbalhidden;
    
  }
}