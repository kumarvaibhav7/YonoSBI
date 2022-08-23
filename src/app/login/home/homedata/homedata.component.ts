
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';

@Component({
  selector: 'app-homedata',
  templateUrl: './homedata.component.html',
  styleUrls: ['./homedata.component.css']
})
export class HomedataComponent implements OnInit {
  adata: any;
  constructor(public route: ActivatedRoute, private dataservice: DataserviceService) {
    this.dataservice.getactiveuserdetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data => {
      console.log(data);
      this.adata = data;
    })
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.pathFromRoot)
  }

  isbalhidden: boolean = true;
  showbalance() {
    this.isbalhidden = !this.isbalhidden;

  }
}