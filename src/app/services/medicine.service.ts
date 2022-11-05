import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private firestore : AngularFirestore) {}

    agregarMedicina(medicina: any): Promise<any>{
      return this.firestore.collection('medicinas').add(medicina);
    }
   
}
