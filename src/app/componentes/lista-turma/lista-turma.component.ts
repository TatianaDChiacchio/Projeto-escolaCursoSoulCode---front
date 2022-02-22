import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/servicos/turma.service';
import { Turma } from '../../models/turmaModel'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-turma',
  templateUrl: './lista-turma.component.html',
  styleUrls: ['./lista-turma.component.css']
})
export class ListaTurmaComponent implements OnInit {

  turmas: Turma[] = []

  constructor(private turmaService:TurmaService,
              private router: Router) { }

  ngOnInit(): void {
    this.mostrarTodasTurmas();
  }

  mostrarTodasTurmas(){
    this.turmaService.mostrarTodasTurmas().subscribe(resposta =>{
      this.turmas = resposta;
      console.log(this.turmas)
    })
  }

  navegarCadastroTurma(){
    this.router.navigate(['/turma/cadastro'])
  }

  deletarTurma(id:any){

  }

}
