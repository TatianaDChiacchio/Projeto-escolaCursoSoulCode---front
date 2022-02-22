import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Aluno } from '../models/alunoModel';
import { Turma } from '../models/turmaModel'
import { AlunosComTurma } from '../models/alunosComTurmaModel';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  baseUrl: String = 'http://localhost:8080/escola'

  constructor(private http:HttpClient) { }

  buscarAlunosTurma(id_turma: string):Observable<Aluno[]>{

    const url = `${this.baseUrl}/aluno/busca-turma/${id_turma}`
    return this.http.get<Aluno[]>(url)

  }


  buscarTodosAlunos():Observable<any>{

    const url = `${this.baseUrl}/aluno-turma`
    return this.http.get<any>(url)
  }

  buscarUmAluno(id:string):Observable<Aluno>{
    const url = `${this.baseUrl}/aluno/${id}`
    return this.http.get<Aluno>(url)

  }
  cadastrarAluno(aluno:Aluno,id_turma:string):Observable<Turma>{
    const url = `${this.baseUrl}/aluno?turma=${id_turma}`
    return this.http.post<Turma>(url,aluno);
  }

  editarAluno(aluno:Aluno,ra_aluno:String,id_turma:string):Observable<Aluno>{
    const url = `${this.baseUrl}/aluno/${ra_aluno}/?turma=${id_turma}`
    return this.http.put<Aluno>(url,aluno)
  }

  excluirAluno(ra_aluno:string):Observable<void>{
    const url = `${this.baseUrl}/aluno/${ra_aluno}`
    return this.http.delete<void>(url)
  }

}
