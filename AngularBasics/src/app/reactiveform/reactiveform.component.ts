import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit{

  title = 'ReactiveForms';
  reactiveForm : FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname : new FormControl(null),
      lastname : new FormControl(null),
      email : new FormControl(null),
      gender : new FormControl('male'),
      country : new FormControl('bangladesh'),
      hobbies : new FormControl(null)
    });
  }


  onSubmit(){
    console.log(this.reactiveForm.value); 
  }

}
