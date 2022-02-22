import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Turma } from '../models/turmaModel'

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  baseUrl: String = 'http://localhost:8080/escola'

  constructor(private http:HttpClient) { }

  mostrarTodasTurmas():Observable<Turma[]>{

    const url = `${this.baseUrl}/turma`

    return this.http.get<Turma[]>(url)
  }

  mostrarUmaTurma(id:string):Observable<Turma>{
    const url = `${this.baseUrl}/turma/${id}`
    return this.http.get<Turma>(url)
  }

  cadastroTurma(turma:Turma): Observable<Turma>{
    const url = `${this.baseUrl}/turma`
    return this.http.post<Turma>(url,turma)
  }

  excluirTurma(id:String):Observable<void>{
    const url = `${this.baseUrl}/turma/${id}`
    return this.http.delete<void>(url)

  }

  editarTurma(turma:Turma):Observable<void>{
    const url = `${this.baseUrl}/turma/${turma.id_turma}`
    return this.http.put<void>(url,turma)
  }


}
