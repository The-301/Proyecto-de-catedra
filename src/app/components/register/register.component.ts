import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.userService.register(this.formReg.value)
      .then(response => {
        this.toastr.success('Ahora ya estas registrado', 'Registro Exitoso');
        console.log(response);
        this.loading = false;
        this.router.navigate(['/login']);
      })
      .catch(error => {this.loading = false;
        this.toastr.error(error, 'Fallo al registrar');});
  }

}