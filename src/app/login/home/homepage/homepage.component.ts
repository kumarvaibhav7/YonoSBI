import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user:any;

  check: boolean|undefined;

  constructor(private modalservice:NgbModal, private router:Router,private dataservice:DataserviceService,private route:ActivatedRoute) { 
    this.dataservice.getactiveuser(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data=>{
      data[0]=data[0].replace(","," ")
      this.user=data;
    });
  }

  ngOnInit(): void {
  }

  canlogout(logoutModal:any){
    this.modalservice.open(logoutModal, {backdropClass: 'dark-modal', centered: true });
  }

  backtosignin(){
    this.router.navigate(['./']);
  }
}
