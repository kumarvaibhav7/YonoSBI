import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '../credentials';
import { DataserviceService } from '../dataservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit,AfterViewInit,OnDestroy {
  users:Credentials[]=[];

  isUnamevalid: boolean = false;
  check: any;
  constructor(private renderer: Renderer2, private element: ElementRef, @Inject(DOCUMENT) private document: Document,private modalservice:NgbModal, private formBuilder: FormBuilder, private router: Router, private dataservice:DataserviceService) 
  {
    this.dataservice.getUnamePass().subscribe(data=>{
      console.log(data);
      this.users=data;
    })
  }
  loginform: any;
  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      username: ["", [Validators.required, this.usernameValidator]],
      password: ["", [Validators.required, this.passwordValidator]]
    });
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'height', 'auto !important');
    this.renderer.setStyle(this.element.nativeElement.offsetParent, 'overflow-y', 'hidden');
  }

  ngOnDestroy() {
    this.renderer.removeStyle(this.document.body, 'overflow-y');
  }

  usernameValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().length >= 8) {
      return null;
    }
    else {
      return { invalid: true };
    }
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().length >= 8) {
      return null;
    }
    else {
      return { invalid: true };
    }
  }
  flag: boolean = false;
  verify(invalidModal:any) {
    // console.log(this.loginform.get('username')?.value);
    // console.log(this.loginform.get('password')?.value);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === this.loginform.get('username')?.value && this.users[i].password === this.loginform.get('password')?.value) {
        this.router.navigate([this.users[i].account+"/home/homedata"])
        this.flag = true;
        break;
      }
    }
    if (this.flag === false) {
      this.modalservice.open(invalidModal, { centered: true });
    }
    this.flag=false;
  }
}
