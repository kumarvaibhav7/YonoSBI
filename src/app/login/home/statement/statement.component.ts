import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../../dataservice.service';
import { Transaction } from '../../transaction';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit{

  transactions:any;
  displayedColumns=['tranid','dateoftran','medium_of_tran','from_to','tran_amount'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(private dataService : DataserviceService,private route:ActivatedRoute) { 

    this.dataService.getTranDetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data=>{
      this.transactions=data;
      this.dataSource=new MatTableDataSource(this.transactions);
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
  }
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
