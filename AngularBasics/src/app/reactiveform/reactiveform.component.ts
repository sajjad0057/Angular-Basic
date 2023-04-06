import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit{

  title = 'ReactiveForms';
  reactiveForm : FormGroup;
  nonWhitespaceRegExp: RegExp = new RegExp("\\S");

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup(
        {
          firstname : new FormControl(null, [ Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]),
          lastname : new FormControl(null, Validators.required),
          email : new FormControl(null, [Validators.required, Validators.email]),
        }
      ),
      gender : new FormControl('male'),
      country : new FormControl('bangladesh'),
      hobbies : new FormControl(null)
    });
  }


  onSubmit(){
    console.log(this.reactiveForm);
  }

}
