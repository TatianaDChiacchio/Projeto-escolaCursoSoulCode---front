import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from './../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/alunoModel';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-lista-aluno',
  templateUrl: './lista-aluno.component.html',
  styleUrls: ['./lista-aluno.component.css']
})
export class ListaAlunoComponent implements OnInit {

  id_turma: any
  alunos: Aluno[] =[]
  ra_aluno: String = ''

  aluno:Aluno ={
    ra_aluno: '',
    al_nome:'',
    al_responsavel:'',
    al_cidade:''
  }

  constructor(private alunoService: AlunoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.id_turma = this.route.snapshot.paramMap.get('id')!
    this.buscarAlunosTurma()
  }

  buscarAlunosTurma(){
    this.alunoService.buscarAlunosTurma(this.id_turma).subscribe((resultado) =>{
      this.alunos = resultado;
      console.log(this.alunos)
    })

  }

  navegarCriacaoLivro(){
    this.router.navigate([`turma/${this.id_turma}/aluno/cadastro`])
  }

  editarAluno(){
    this.router.navigate([`turma/aluno/${this.id_turma}/edicao`])
  }





}
