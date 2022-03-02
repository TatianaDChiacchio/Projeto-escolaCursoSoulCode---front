import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/app/servicos/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/alunoModel';

@Component({
  selector: 'app-lista-alunos-da-turma',
  templateUrl: './lista-alunos-da-turma.component.html',
  styleUrls: ['./lista-alunos-da-turma.component.css']
})
export class ListaAlunosDaTurmaComponent implements OnInit {

  id_turma: any

  alunos:Aluno[] =[]

  constructor(private alunoService:AlunoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.id_turma = this.route.snapshot.paramMap.get('id_turma')
    this.mostrarAlunosDaTurma()
  }

  mostrarAlunosDaTurma(){
    this.alunoService.buscarAlunosTurma(this.id_turma).subscribe(resultado =>{
      this.alunos = resultado
      console.log(this.alunos)
    })
  }
}
