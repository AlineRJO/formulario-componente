import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { userModel } from '../../models/user-model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validateRegistrer } from '../../util/validateRegistrer';
import { Alert } from '../../util/alert';

@Component({
  selector: 'page-registrer',
  templateUrl: 'registrer.html',
})
export class RegistrerPage implements OnInit{
  private userModel: userModel;
  private formGroup: FormGroup;
  private msgValid: userModel;
  title: string;
  public customPatterns = {'0': { pattern: new RegExp('\[a-zA-Z0-9 -,\]')}};
  public emailPatterns = {'0': { pattern: new RegExp('\[a-zA-Z0-9@_.\]')}};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private alert: Alert,
  ) {
    this. userModel = new userModel();
    this.title = "MEU CARTÃO";
  }

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(15)
      ])],
      lastName: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(15)
      ])],
      comercialAdress: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ])],
      numberComercial: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(15)
      ])],
      complementAdress: ['', Validators.compose([
        Validators.minLength(3), Validators.maxLength(15)
      ])],
      cep: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.maxLength(12)
      ])],
      city: ['', Validators.compose([
        Validators.required, Validators.minLength(4), Validators.maxLength(15)
      ])],
      state: ['', Validators.compose([
        Validators.required, Validators.minLength(4), Validators.maxLength(15)
      ])],
      comercialPhone: ['', Validators.compose([
        Validators.required, Validators.minLength(10), Validators.maxLength(20)
      ])],
      celPhone: ['', Validators.compose([
        Validators.minLength(10), Validators.maxLength(20)
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ])],
      photoUrl: [''],
    });
  }

  generate(){
    this.formValidate();
    if (!this.msgValid) {
      this.alert.showErrorAlert('Cadastro realizado com sucesso');
    }
  }
  
  formValidate(){
    this.msgValid = validateRegistrer.validate(this.formGroup);
  }


}
