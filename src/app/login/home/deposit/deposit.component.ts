import { DatePipe } from '@angular/common';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataserviceService } from '../../dataservice.service';
import { Transaction } from '../../transaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit, DoCheck {

  adata: any;
  rdata: any;
  deposit: number = 10;
  Toacnumber: number = null;
  isaccountsame: boolean = false;
  isinvalidamount: boolean = false;
  iszero: boolean = true;
  istransactioncomplete: boolean = false;
  ischar: boolean = false;
  isrecieverinvalid: boolean = true;
  tranid: string = "";
  tdate: any | undefined;
  curdate: String = "";

  constructor(private modalservice: NgbModal, public route: ActivatedRoute, private dataservice: DataserviceService, private router: Router) {
    this.dataservice.getactiveuserdetails(this.route.snapshot.pathFromRoot[1].url[0].path).subscribe(data => {
      this.adata = data;
    })

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    this.tdate = yyyy + '-' + mm + '-' + dd;
  }
  ngDoCheck(): void {
    if (this.deposit > this.adata.balance) {
      this.isinvalidamount = true;
    }
    else {
      this.isinvalidamount = false;
    }
    if (this.deposit <= 0) {
      this.iszero = true;
    }
    else {
      this.iszero = false;
    }
    if (!/\d/.test(this.deposit.toString()) && this.deposit.toString() != "") {
      this.ischar = true;
    }
    else {
      this.ischar = false;
    }
    if (this.Toacnumber == this.adata.acnumber) {
      this.isaccountsame = true;
    }
    else {
      this.isaccountsame = false;
    }
  }

  ngOnInit(): void {
  }

  randomString(length: any) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  createTransaction(tranid: string, type: string) {
    var temp = new Transaction();
    temp.dateoftran = this.tdate;
    temp.medium_of_tran = type;
    temp.tran_amount = this.deposit;
    temp.tranid = tranid;
    if (type == "Debit") {
      temp.acnumber = this.adata.acnumber;
      temp.from_to = this.Toacnumber;
    }
    else {
      temp.acnumber = this.Toacnumber;
      temp.from_to = this.adata.acnumber;
    }
    return temp;

  }

  findreciever(accountModel: any) {
    this.dataservice.getactiveuserdetails(this.Toacnumber).subscribe(data => {
      this.rdata = data;
      if (data == undefined) {
        this.modalservice.open(accountModel, { centered: true });
      }
      else {
        this.isrecieverinvalid = false;
      }
    });

  }

  send(transactionModel: any) {

    this.modalservice.open(transactionModel, { centered: true });
    setTimeout(() => {
      this.adata.balance = this.adata.balance - this.deposit;
      console.log(this.Toacnumber);
      console.log(this.adata);
      this.tranid = this.randomString(10);
      this.dataservice.sendertransaction(this.createTransaction(this.tranid, "Debit")).subscribe((data) => { });
      this.dataservice.recievertransaction(this.createTransaction(this.tranid, "Credit")).subscribe((data) => { });
      this.dataservice.modifybalance(this.Toacnumber, this.adata).subscribe((data) => { });
      this.istransactioncomplete = true;
      document.getElementById("status").innerHTML = "Transaction Complete";
    }, 5000);

  }

}
