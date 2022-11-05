import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MedicineService } from 'src/app/services/medicine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    medicinas: any[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private medicineService: MedicineService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getMedicina()
  }

  getMedicina(){
    this.medicineService.getMedicina().subscribe(data => {
      this.medicinas = [];
      data.forEach((element : any) => {
        /*console.log(element.payload.doc.id);*/
        /*console.log(element.payload.doc.data());*/
        this.medicinas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.medicinas);
    });
  }

  eliminarMedicina(id: string){
    this.medicineService.eliminarMedicina(id).then(() => {
      this.toastr.error('Medicamento Eliminado con Exito!', 'Medicamento Eliminado');
    }).catch(error =>{
      console.log(error);
    })
  }

}
