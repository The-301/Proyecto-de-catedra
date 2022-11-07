# Proyecto-de-catedra

Tienes problemas con el uso de la alicacion, tranquilo, los desarrolladores dejaron un manual para usuario, prueba con esto:
[Guia de usuario.pdf](https://github.com/The-301/Proyecto-de-catedra/files/9948242/Guia.de.usuario.pdf)

Los integrantes de el equipo a cargo del desarrollo de la aplicacion web que permita el control de medicamentos a usar y sus dosis son:

Sofía Alejandra Amaya García AG220453

Carlos Alfredo Artiga Mármol AM221132

Kevin Steven Parada Carbajal PC220797 

David Guillermo Campos Hernández CH220048

Fernando Arturo Ramírez Corvera Rc222309

Pertenecientes al "Grupo 1 de Daw Teorico y Laboratorio"


## Guia de instalación 

Primero deberas bajar el proyecto que se te presenta aca, te recomiendo bajar el zip primero y luego reemplazar la carpeta src y los demas elementos que encuentres fuera de esta, conservando solo el node modules.

Luego de eso al abrir el proyecto te recomiendo ejecutes los siguientes comandos en tu terminal del proyecto:


### Añadir angular-firebase

```ruby
ng add@angular-firebase
```

### agrega el bootstrap
```ruby
ng add @ng-bootstrap/ng-bootstrap
```

### Agrega el toastr
```ruby
npm install ngx-toastr --save
```
```ruby
npm install @angular/animations --save
```
Una vez agregado estos modulos es importante que vayas al archivo app.module.ts y verifiques tener agregado los import de los modulos,asi:

```ruby
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    CreateMedicineComponent,
    NavbarComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  ```
  
  Si tienes los mismos modulos deberias de ser capaz de poder ejecutar el proyecto sin problemas
