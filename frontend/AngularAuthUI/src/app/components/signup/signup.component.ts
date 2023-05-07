import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  
  passwordFieldType : string = "password"
  isFieldTypeText: boolean = false;
  eyeIcon: string = "fa fa-eye-slash";
  signUpForm!: FormGroup;

  constructor(private fb : FormBuilder){
  }
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isFieldTypeText = !this.isFieldTypeText;
    this.isFieldTypeText ? this.eyeIcon = "fa fa-eye" : this.eyeIcon = "fa fa-eye-slash";
    this.isFieldTypeText ? this.passwordFieldType = "text" : this.passwordFieldType = "password";
  }

  onSignUp(){
    if(this.signUpForm.valid){
      // keep here logic for signUp
      console.log(this.signUpForm.value);
      
    }else{
      console.log("sign up form is not valid"); 
      ValidateForm.validateAllFormFields(this.signUpForm)
    }
  }
  
}
