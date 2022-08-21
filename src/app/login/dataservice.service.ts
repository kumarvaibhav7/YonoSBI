import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Branch } from './branch';
import { Credentials } from './credentials';
import { Cusaccount } from './cusaccount';
import { Customer } from './customer';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  baseurl="http://localhost:8080/yonoSBI/"
  constructor(private httpclient:HttpClient) { }
  getBranchData():Observable<Branch[]>{
    return this.httpclient.get<Branch[]>(this.baseurl+"getyonobranches");
  }

  getUnamePass():Observable<Credentials[]>{
    return this.httpclient.get<Credentials[]>(this.baseurl+"getunamepass")
  }

  // addaccount(accountdata:Cusaccount):Observable<object>{
  //   console.log("here: ");
  //   console.log(accountdata);
  //   return this.httpclient.post(this.baseurl+"addaccount",accountdata);
  // }

  addlogincred(creddata:Credentials):Observable<object>{
    return this.httpclient.post(this.baseurl+"addcred",creddata);
  }

  // addcustomer(customerdata:Customer):Observable<object>{
  //   console.log("from service"+customerdata);
  //   return this.httpclient.post(this.baseurl+"addcustomer",customerdata);
  // }

  getactiveuser(anum:any):Observable<any>{
    return this.httpclient.get<any>(this.baseurl+"getactiveuser/"+anum);
  }

  getactiveuserdetails(anum:any):Observable<any>{
    return this.httpclient.get<any>(this.baseurl+"getactiveuserdetails/"+anum);
  }

  modifybalance(id:number,adata:any):Observable<object>{
    console.log(this.baseurl+"modifybal/"+adata.acnumber+"/"+id);
    
    return this.httpclient.put(this.baseurl+"modifybal/"+adata.acnumber+"/"+id,adata);
  }

  recievertransaction(recievetran:Transaction){
    return this.httpclient.post(this.baseurl+"addtransaction",recievetran);
  }

  sendertransaction(sendtran:Transaction){
    return this.httpclient.post(this.baseurl+"addtransaction",sendtran);
  }

  getTranDetails(id : string){
    return this.httpclient.get<Transaction[]>(this.baseurl + "gettransaction/" + id)
  }

  getbranch(id:number):Observable<Branch>{
    return this.httpclient.get<Branch>(this.baseurl+"getbranch/"+id);
  }

  postRequestDetails(acnumber, reqData): Observable<Object>{
    return this.httpclient.post(this.baseurl+"postrequest/"+acnumber , reqData);
  }

  getReqCount(acnumber: any):Observable<any>{
    return this.httpclient.get<any>(this.baseurl+"getCountDetails/"+ acnumber)
  }

  getreqDetails(acnumber:any):Observable<any>{
    return this.httpclient.get<any>(this.baseurl+"getreqdetails/"+ acnumber)
  }

  putBranchDetails(acnumber: any ,data:any):Observable<Object>{
    console.log(acnumber)
    return this.httpclient.put(this.baseurl+ 'putbranch/'+ acnumber , data)
  }


  //vaibhav changes

  getcustomers():Observable<Customer>{
    return this.httpclient.get<Customer>(this.baseurl+"getcustomers");
  }


  
}
