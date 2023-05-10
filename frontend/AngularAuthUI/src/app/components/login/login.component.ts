import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService){

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

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //send the obj to backend

      this.authService.login(this.loginForm.value).subscribe({
        next:(res)=>{
          alert(res.message)
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
      
    }else{
      console.log("login form is not valid");
      ValidateForm.validateAllFormFields(this.loginForm)
    }
  }
}
