import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../models/ProfessorModel';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  baseUrl: String = 'http://localhost:8080/escola'

  constructor(private http:HttpClient) { }

  buscarUmProfessor(id_professor:String):Observable<Professor>{
    const url = `${this.baseUrl}/professor/${id_professor}`
    return this.http.get<Professor>(url)
  }

  buscarProfessorDaTurma(id_turma:String):Observable<Professor>{
    ///professor-turma/{id_turma}

    const url = `${this.baseUrl}/professor-turma/${id_turma}`
    return this.http.get<Professor>(url)
  }

  buscarProfessoresSemTurma():Observable<Professor[]>{
    //http://localhost:8080/escola/professorSemTurma

    const url = `${this.baseUrl}/professorSemTurma`
    return this.http.get<Professor[]>(url)
  }

  buscarTodosProfessores():Observable<any>{

    const url = `${this.baseUrl}/professor/professor-turma`
    return this.http.get<any>(url)
  }



}
