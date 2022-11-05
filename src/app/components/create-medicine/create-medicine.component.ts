import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {
  createMedicine: FormGroup;
  submitted = false;

  constructor(
              private fb: FormBuilder,
              private _medicineService: MedicineService ) {
    this.createMedicine = this.fb.group({
      codigo: ['',Validators.required,],
      medicamento: ['', Validators.required],
      dosis: ['', Validators.required],
      horario: ['', Validators.required],
      funcion: ['', Validators.required]
    })

   }

  ngOnInit(): void {
  }
 //Metodos de creacion 
  agregarMedicina(){
    
    this.submitted = true;

    if(this.createMedicine.invalid){
      return;
    }
    const medicina: any = {
      codigo: this.createMedicine.value.codigo,
      medicamento: this.createMedicine.value.medicamento,
      dosis: this.createMedicine.value.dosis,
      horario: this.createMedicine.value.horario,
      funcion: this.createMedicine.value.funcion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),

    }


    this._medicineService.agregarMedicina(medicina).then(() =>{
      alert('Medicina registrada con exito!');
    }).catch((error: any) =>{
      console.log(error);
    });
        
  }

}

