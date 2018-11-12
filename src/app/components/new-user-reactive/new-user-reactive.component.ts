import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CustomValidations } from 'src/app/classes/custom.validations';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss']
})
export class NewUserReactiveComponent implements OnInit {
  userForm: FormGroup;

  
  get name() {
    return this.userForm.get('name')
  }

  get username() {
    return this.userForm.get('username')
  }
  
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe', [Validators.required, Validators.minLength(8), Validators.pattern('John Doe')]),
      username: new FormControl('uday', null, CustomValidations.asyncUnique),
      email: new FormControl('uday@gmail.com'),
      phone: new FormControl('834287489233427'),
      website: new FormControl('uday.com'),
      address: new FormGroup({
        street: new FormControl('any street'),
        suite: new FormControl('dsds'), 
        city: new FormControl('any city'),
        zipCode: new FormControl('432342343'),
        geo: new FormGroup({
          lat: new FormControl('233323223'),
          lng: new FormControl('23333233'),
        })
      }),
      company: new FormGroup({
        name: new FormControl('ABC'),
        catchPhrase: new FormControl('any'),
        bs: new FormControl('fdsddds')
      }),
      hobbies: new FormArray([]) 
    });
  }

  addHobby(){
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }

  deleteHobby(selectedHobby){
    console.log(selectedHobby);
    (<FormArray>this.userForm.get('hobbies')).removeAt(selectedHobby);
    
  }

  submit() {
    console.log('form submitted');
  }

  reset(){
    this.userForm.reset();
  }
}
