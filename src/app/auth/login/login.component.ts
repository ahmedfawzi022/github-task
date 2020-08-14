import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signin: FormGroup;
  userNameControl: FormControl;
  passwordControl: FormControl;
  loginInCorrect:boolean=false;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }
    // create form controls that we need to validate with their needed validators
    createFormControls() {

      this.userNameControl = new FormControl(null, [
        Validators.required,
      ]),
        this.passwordControl = new FormControl(null, [
          Validators.required,
        ])

    }
  
    // add form controls to form group
    createForm() {
      this.signin = new FormGroup({
        userName: this.userNameControl,
        password: this.passwordControl
      });
    }

    onClickLogin(){
      if(this.userNameControl.value == 'ForbesLindesay' && this.passwordControl.value == '123456'){
        this._router.navigate(['/index/home']);
        this.loginInCorrect=false;

      }
      else{
        this.loginInCorrect=true;
      }
      
    }
  
}
