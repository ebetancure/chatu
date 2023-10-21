import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  regisForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { 
    this.regisForm = this.fb.group({
    id: ['', Validators.required],
    nombre: ['', Validators.required],
    correo: ['', Validators.email],
    contrasena: ['', [Validators.minLength(8)]],
    })
  }

  ngOnInit(): void{
      }
  registro(){
    
    const USUARIO: Usuario = {
      id : this.regisForm.get('id')?.value,
      nombre: this.regisForm.get('nombre')?.value,
      correo: this.regisForm.get('correo')?.value,
      contrasena: this.regisForm.get('contrasena')?.value
  
    }
    console.log(USUARIO);
    this.toastr.success('El usurio fue registrado con exito!', 'Usurio registrado!');
    this.router.navigate(['/perfil'])
  }
  
}
