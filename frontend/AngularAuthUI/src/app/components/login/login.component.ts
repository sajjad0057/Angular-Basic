import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  passwordFieldType : string = "password";
  isFieldTypeText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  loginForm!: FormGroup; 

  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  hideShowPass(){
    this.isFieldTypeText = !this.isFieldTypeText;
    this.isFieldTypeText ? this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash";
    this.isFieldTypeText ? this.passwordFieldType = "text" : this.passwordFieldType = "password";
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //send the obj to backend
    }else{
      console.log("login form is not valid");
      ValidateForm.validateAllFormFields(this.loginForm)
    }
  }
}
