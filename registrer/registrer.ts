import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { userModel } from '../../models/user-model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validateRegistrer } from '../../util/validateRegistrer';
import { Alert } from '../../util/alert';
import { StorageProvider } from '../../providers/storage-provider';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registrer',
  templateUrl: 'registrer.html',
})
export class RegistrerPage implements OnInit{
  private userModel: userModel;
  private formGroup: FormGroup;
  private msgValid: userModel;
  title: string;
  public image: string;

  public customPatterns = {
    '0': { pattern: new RegExp('\[a-zA-Z0-9 -,\]')},
    '1': { pattern: new RegExp('\[a-zA-Z \]')},
    '2':  { pattern: new RegExp('\[a-zA-Z0-9@_.\]')}
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private alert: Alert,
    private localData: StorageProvider,
    public camera: Camera
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
        Validators.required, Validators.minLength(2), Validators.maxLength(15)
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
    if (this.msgValid) {
      this.localData.set('key', this.userModel);
      this.alert.showErrorAlert('Cadastro realizado com sucesso');
      this.navCtrl.setRoot(HomePage);
    }
  }
  
  async formValidate(){
    this.msgValid = validateRegistrer.validate(this.formGroup);
  }

  tirarFoto(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 300,
      targetHeight: 300,
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }).then( imagemData => {
      this.image = "data:image/jpeg;base64," + imagemData;
      this.image = this.userModel.photoUrl;
    }, error => {
      console.log(error);
      }
    );
  }

  galeria(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 300,
      targetHeight: 300,
      quality: 100,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM 
    }).then( imagemData => {
      this.userModel.photoUrl = "data:image/jpeg;base64," + imagemData;
    }, error => {
      console.log(error);
      }
    );
  }

}
