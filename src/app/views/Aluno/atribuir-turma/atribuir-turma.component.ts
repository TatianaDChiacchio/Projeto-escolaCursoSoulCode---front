import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/app/servicos/aluno.service';
import { TurmaService } from './../../../servicos/turma.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/models/turmaModel';
import { Aluno } from 'src/app/models/alunoModel';


@Component({
  selector: 'app-atribuir-turma',
  templateUrl: './atribuir-turma.component.html',
  styleUrls: ['./atribuir-turma.component.css']
})
export class AtribuirTurmaComponent implements OnInit {

  turmas:Turma[] = []
  turmaEscolhida: any = []
  id_turma:any
  ra_aluno:any
  turmaDoAluno:any = []

  aluno:Aluno ={
    ra_aluno:'',
    al_nome:'',
    al_responsavel:'',
    al_cidade:''
  }

  constructor(private turmaService:TurmaService,
              private alunoService:AlunoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno')
    this.id_turma = this.route.snapshot.paramMap.get('id_turma')
    console.log(this.id_turma)
    this.buscarTodasTurmas()
    this.mostrarAluno()
    this.buscarTurma()
  }

  buscarTodasTurmas(){
    this.turmaService.mostrarTodasTurmas().subscribe(resultado =>{
      this.turmas = resultado
    })
  }

  mostrarTurma(){
    console.log(this.turmaEscolhida)
  }

  mostrarAluno(){
    this.alunoService.buscarUmAluno(this.ra_aluno).subscribe(resultado =>{
      this.aluno = resultado
    })
  }

  buscarTurma(){
    this.turmaService.mostrarUmaTurma(this.id_turma).subscribe(resultado =>{
      this.turmaEscolhida = resultado
      console.log(this.turmaDoAluno)
    })
  }

  atribuirTurma(){
    this.alunoService.atribuirTurma(this.turmaEscolhida,this.ra_aluno).subscribe({
      complete: () => { alert("Aluno cadastrado na turma com sucesso")
                        this.router.navigate(['/alunosComTurma'])
                      },
      error: () => { alert("Aluno não cadastrado na turma")
                        this.router.navigate(['/alunosComTurma'])
                      },
      next: () => { console.log("Aluno cadastrado com sucesso")}

      });
  }

  deixarAlunoSemTurma(){
    this.alunoService.deixarAlunoSemTurma (this.aluno,this.ra_aluno).subscribe({
      complete: () => { alert("Aluno ficou sem turma")
                        this.router.navigate(['/alunosComTurma'])
                      },
      error: () => { alert("Aluno não ficou sem turma")
                        this.router.navigate(['/alunosComTurma'])
                      },
      next: () => { console.log("Aluno editado com sucesso")}

      });

  }

}
