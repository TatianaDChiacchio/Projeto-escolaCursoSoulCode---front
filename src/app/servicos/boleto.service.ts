import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Boleto } from '../models/boetoModel';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  baseUrl: String = 'http://localhost:8080/escola'

  constructor(private http:HttpClient) { }

  buscarUmBoleto(codigo:string):Observable<Boleto>{

    //http://localhost:8080/escola/aluno/boleto/1
    const url = `${this.baseUrl}/aluno/boleto/${codigo}`
    return this.http.get<Boleto>(url)
  }

  listarBoletosDoAluno(ra_aluno: String):Observable<Boleto[]>{
    //http://localhost:8080/escola/aluno/boletosDoAluno/1
    const url = `${this.baseUrl}/aluno/boletosDoAluno/${ra_aluno}`
    return this.http.get<Boleto[]>(url)
  }

  cadastrarBoleto(boleto:Boleto, ra_aluno:String):Observable<Boleto>{
    const url = `${this.baseUrl}/aluno/boleto/${ra_aluno}`
    return this.http.post<Boleto>(url,boleto);
  }

  editarBoleto(boleto:Boleto, codigo:any, ra_aluno:any):Observable<Boleto>{
    const url = `${this.baseUrl}/aluno/boleto/${codigo}/${ra_aluno}`
    return this.http.put<Boleto>(url,boleto)
  }

  excluirBoleto(codigo:string):Observable<void>{
    const url = `${this.baseUrl}/aluno/boleto/${codigo}`
    return this.http.delete<void>(url)
  }

  quitarBoleto(boleto:Boleto, codigo:any):Observable<Boleto>{
    //http://localhost:8080/escola/aluno/QuitarBoleto/5
    const url = `${this.baseUrl}/aluno/quitarBoleto/${codigo}`
    return this.http.put<Boleto>(url,boleto)
  }

  cancelarBoleto(boleto:Boleto, codigo:any):Observable<Boleto>{
    //http://localhost:8080/escola/aluno/cancelarBoleto/5
    const url = `${this.baseUrl}/aluno/cancelarBoleto/${codigo}`
    return this.http.put<Boleto>(url,boleto)
  }
}
