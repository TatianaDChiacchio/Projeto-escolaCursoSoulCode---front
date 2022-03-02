import { ProfessorService } from 'src/app/servicos/professor.service';
import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/servicos/turma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-turma',
  templateUrl: './lista-turma.component.html',
  styleUrls: ['./lista-turma.component.css']
})
export class ListaTurmaComponent implements OnInit {

  turmas:any = []

  constructor(private turmaService:TurmaService,
              private professorService:ProfessorService,
              private router: Router) { }

  ngOnInit(): void {
    this.mostrarTodasTurmas();
  }

  mostrarTodasTurmas(){
    this.turmaService.buscarTodasTurmas().subscribe(resultado =>{
      //this.turmas = resultado;
      console.log("aqui")
      console.log(this.turmas)

      resultado.forEach((turma: any[]) => {

        let turmaComProfessor: any ={
          id_turma:'',
          tu_nome:'',
          tu_descricao: '',
          id_professor:'',
          pro_nome:'',
          pro_formacao:''
        }

        turmaComProfessor.id_turma = turma[0]
        turmaComProfessor.tu_nome = turma[1]
        turmaComProfessor.tu_descricao = turma[2]
        if(turma[3] != null){
          turmaComProfessor.id_professor = turma[3]
          turmaComProfessor.pro_nome = turma[4]
          turmaComProfessor.pro_formacao = turma[5]
        }else{
          turmaComProfessor.id_professor = 0
          turmaComProfessor.pro_nome = "----"
          turmaComProfessor.pro_formacao = "----"
        }


        this.turmas.push(turmaComProfessor)
        //console.log(this.turmas)

      });


    })


  }

  navegarCadastroTurma(){
    this.router.navigate(['/turma/cadastro'])
  }

  deletarTurma(id:any){

  }



}
