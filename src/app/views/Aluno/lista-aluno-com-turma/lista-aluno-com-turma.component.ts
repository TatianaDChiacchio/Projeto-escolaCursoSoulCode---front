import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/app/servicos/aluno.service';


@Component({
  selector: 'app-lista-aluno-com-turma',
  templateUrl: './lista-aluno-com-turma.component.html',
  styleUrls: ['./lista-aluno-com-turma.component.css']
})
export class ListaAlunoComTurmaComponent implements OnInit {

  alunos:any = []

  constructor(private alunoService: AlunoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.buscarTodosAlunos()
  }



  buscarTodosAlunos(){
    this.alunoService.buscarTodosAlunos().subscribe(resultado =>{

      console.log(resultado)

      resultado.forEach((aluno: any[]) => {

        let alunosComTurma: any ={
          ra_aluno:'',
          al_nome:'',
          al_cidade: '',
          al_responsavel: '',
          id_turma:'',
          tu_nome:'',
          tu_descricao:''
        }

        alunosComTurma.ra_aluno = aluno[0]
        alunosComTurma.al_nome = aluno[1]
        alunosComTurma.al_cidade = aluno[2]
        if(aluno[4] != null){
          alunosComTurma.id_turma = aluno[3]
          alunosComTurma.tu_nome = aluno[4]
          alunosComTurma.tu_descricao = aluno[5]
        }else{
          alunosComTurma.id_turma = 0
          alunosComTurma.tu_nome = "----"
          alunosComTurma.tu_descricao = "----"
        }


        this.alunos.push(alunosComTurma)

      });


    })

  }

}




