import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class StorageProvider {

  constructor(
    public nativeStg: NativeStorage
  ) {
   
  }

  set(nameKey:string, value:any) {
    this.nativeStg.setItem(nameKey,value).then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );
  }

  get(nameKey: string) {
    return this.nativeStg.getItem(nameKey).then(
      data => console.log(data),
      error => console.error(error)
    );
  }
  
  remove(nameKey: string) {
    this.nativeStg.remove(nameKey);
  }
  
}
