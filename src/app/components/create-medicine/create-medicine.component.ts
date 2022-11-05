import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent implements OnInit {
  createMedicine: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Medicamento';


  constructor(
              private fb: FormBuilder,
              private _medicineService: MedicineService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) 
              {
    this.createMedicine = this.fb.group({
      codigo: ['',Validators.required, ],
      medicamento: ['', Validators.required],
      dosis: ['', Validators.required],
      horario: ['', Validators.required],
      funcion: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)

   }

  ngOnInit(): void {
    this.esEditar();
  }
 //Metodos de creacion 
  agregarEditarMedicina(){
    
    this.submitted = true;

    if(this.createMedicine.invalid){
      return;
    }

    if(this.id == null){
      this.agregarMedicina();
    }
    else{
      this.editarMedicina(this.id);
    }
    
        
  }

  agregarMedicina(){
    this.titulo = 'Agregar Medicamento'
    const medicina: any = {
      codigo: this.createMedicine.value.codigo,
      medicamento: this.createMedicine.value.medicamento,
      dosis: this.createMedicine.value.dosis,
      horario: this.createMedicine.value.horario,
      funcion: this.createMedicine.value.funcion,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }

    this.loading = true;
    this._medicineService.agregarMedicina(medicina).then(() =>{
      this.toastr.success('Medicamento Registrado con Exito!', 'Medicamento Registrado');
      this.loading = false;
      this.router.navigate(['/main']);
    }).catch((error: any) =>{
      console.log(error);
      this.loading =false;
    });

  }
  editarMedicina(id: string){ 
    const medicina: any = {
      codigo: this.createMedicine.value.codigo,
      medicamento: this.createMedicine.value.medicamento,
      dosis: this.createMedicine.value.dosis,
      horario: this.createMedicine.value.horario,
      funcion: this.createMedicine.value.funcion,
      fechaActualizacion: new Date(),
    }

    this.loading =true;
    this._medicineService.actualizarMedicina(id, medicina).then(() => {
      this.loading =false;
      this.toastr.info('La informacion fue actualizada con exito!','Medicamento modificado')
    })
    this.router.navigate(['/main']);
   }

  esEditar(){
   
    if(this.id !== null){
      this.titulo = 'Editar Medicamento'
      this.loading = true;
      this._medicineService.getMedicinas(this.id).subscribe(data => {
        this.loading = false;
        this.createMedicine.setValue({
          codigo: data.payload.data()['codigo'],
          medicamento: data.payload.data()['medicamento'],
          dosis: data.payload.data()['dosis'],
          horario: data.payload.data()['horario'],
          funcion: data.payload.data()['funcion'],
        })
      })
    }
  }

}

