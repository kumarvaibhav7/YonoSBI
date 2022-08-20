import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  adata:any;
  bdata:any;
  constructor(private dataservice:DataserviceService, private route:ActivatedRoute) { 
    this.dataservice.getactiveuserdetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data=>{
      console.log(data);
      this.dataservice.getbranch(data.bid).subscribe(data1=>{
        this.bdata=data1;
      })
      this.adata=data;
    })
  }

  ngOnInit(): void {
  }

}
