import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router)
  {
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

      this.authService.signUp(this.signUpForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);
        }),
        error:(err=>{
          alert(err?.error.message);
        })
      })   
    }
    else{
      console.log("sign up form is not valid"); 
      ValidateForm.validateAllFormFields(this.signUpForm)
    }
  }
  
}
