import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  onsubmit:boolean = false;
  public UserFormGroup: FormGroup;
  constructor(public formbuilder:FormBuilder,public navcontrl:NavController) {
    this.UserFormGroup = this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required,]
    })
   }

  ngOnInit() {
  }
  onFormSubmit(){
    this.onsubmit = true;
    console.log(this.UserFormGroup,"==========");
    console.log(this.UserFormGroup.valid,"=====_____________");
    if(this.UserFormGroup.valid){

    this.navcontrl.navigateRoot('/tabs/tab1');
    }
  }
}
