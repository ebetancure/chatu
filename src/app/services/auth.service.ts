import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario'; // Ajusta la ruta de importación
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(usuario: Usuario): Observable<any> { // Usa la clase Usuario como tipo para el parámetro
    return this.http.post<any>(this.URL + '/signup', usuario);
  }

  signInUser(usuario: Usuario): Observable<any> { // También usa la clase Usuario como tipo aquí
    return this.http.post<any>(this.URL + '/signin', usuario);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
