import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
  }
  onClick(){
    this.userService.logout()
    .then(()=>{
      this.toastr.success('Has cerrado la sesion!', 'Sesion cerrada');
      this.router.navigate(['/register'])
    })
    .catch( error => {this.toastr.error('No se pudo cerrar sesion!', 'Fallo cerrar sesion');});
  }

}
