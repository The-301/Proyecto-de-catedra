import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.userService.login(this.formLogin.value)
      .then(response => {
        this.toastr.success('Bienvenido!', 'Autenticación Exitosa');
        console.log(response);
        this.loading = false;
        this.router.navigate(['/view'])
      })
      .catch(error => {this.loading = false;
        this.toastr.error(error, 'Fallo al ingresar');
      });
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        this.toastr.success('Bienvenido!', 'Autenticación Exitosa');
        console.log(response);
        this.router.navigate(['/view']);
      })
      .catch(error => {this.loading = false;
        console.log(error);})
  }

}
