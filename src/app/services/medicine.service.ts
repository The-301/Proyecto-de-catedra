import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private firestore : AngularFirestore) {}

    agregarMedicina(medicina: any): Promise<any>{
      return this.firestore.collection('medicinas').add(medicina);
    }
   getMedicina(): Observable<any>{
    return this.firestore.collection('medicinas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
   }

   eliminarMedicina(id: string): Promise<any>{
    return this.firestore.collection('medicinas').doc(id).delete();
   }
}
