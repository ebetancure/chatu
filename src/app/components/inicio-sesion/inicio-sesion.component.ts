import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.email],
      contrasena: ['', [Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }
  iniciarSesion() {
    const USUARIO: Usuario = {
      id: this.usuarioForm.get('id')?.value,
      nombre: this.usuarioForm.get('nombre')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      contrasena: this.usuarioForm.get('contrasena')?.value

    }
    this.authService.signInUser(USUARIO)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
    this.router.navigate(['/perfil'])
  }
}
