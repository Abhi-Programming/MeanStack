import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthApiService } from 'src/app/shared/auth-api.service';


export interface Subject {
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  SignUpForm!: FormGroup;
  SignInForm!: FormGroup;
  signIn:boolean = true;
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private authapi:AuthApiService
  ) { }

  /* Reactive book form */
  submitBookForm() {
    this.SignUpForm = this.fb.group({
      user_name: ['', [Validators.required]],
      user_email: ['', [Validators.required]],
      user_phone: ['', [Validators.required]],
      password: ['', Validators.required],
      dob: ['', [Validators.required]],
      gender: ['Male']
    })

    this.SignInForm = this.fb.group({
      user_name: ['', [Validators.required]],
      password: ['', Validators.required],
    })
  }

 

  /* Date */
  formatDate(e:any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.SignUpForm.get('dob')?.setValue(convertDate, {
      onlyself: true
    })

    //this.SignUpForm.get("dob").setValue(convertDate);
  }  

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.SignUpForm.controls[controlName].hasError(errorName);
  }  


  //toggel Signin signup
  signinup(){
    this.signIn = !this.signIn
  }

  /* Submit book */
  submitSignUpForm() {
    if (this.SignUpForm.valid) {
      this.authapi.signUp(this.SignUpForm.value).subscribe(res => {
        debugger
        this.ngZone.run(() => this.router.navigateByUrl('/students-list'))
      });
    }
  }

}