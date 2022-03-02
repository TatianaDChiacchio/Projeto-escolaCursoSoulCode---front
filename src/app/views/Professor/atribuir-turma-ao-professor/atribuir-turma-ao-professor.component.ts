import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from 'src/app/models/ProfessorModel';
import { Turma } from 'src/app/models/turmaModel';
import { ProfessorService } from 'src/app/servicos/professor.service';
import { TurmaService } from 'src/app/servicos/turma.service';

@Component({
  selector: 'app-atribuir-turma-ao-professor',
  templateUrl: './atribuir-turma-ao-professor.component.html',
  styleUrls: ['./atribuir-turma-ao-professor.component.css']
})
export class AtribuirTurmaAoProfessorComponent implements OnInit {

  id_professor:any

  turmasSemProfessor:any
  turmaSemProfessorEscolhida:any = []
  professorSemTurmaEscolhido: any = []

  professor:Professor ={
    id_professor:'',
    pro_nome:'',
    pro_formacao:'',
    pro_foto:''
  }

  turma:Turma = {
    id_turma:'',
    tu_nome:'',
    tu_descricao:''
  }

  constructor(private professorService:ProfessorService,
              private route:ActivatedRoute,
              private router:Router,
              private turmaService:TurmaService) { }

  ngOnInit(): void {

    this.id_professor = this.route.snapshot.paramMap.get('id_professor')
    this.buscarProfessor()
    this.buscarProfessorDaTurma()
    this.buscarTurmaSemProfessor()
  }

  buscarProfessor(){
    this.professorService.buscarUmProfessor(this.id_professor).subscribe(resultado =>{
      this.professor = resultado
    })
  }
  buscarProfessorDaTurma(){
    this.turmaService.buscarTurmaDoProfessor(this.id_professor).subscribe(resultado =>{

      if(resultado == null){
        alert("Para esse professor não está definida uma turma")

      }else{
        this.turma = resultado
        console.log(resultado);
      }


    })
  }

  buscarTurmaSemProfessor(){

    this.turmaService.mostrarTurmasSemProfesor().subscribe((resultado)=>{

      this.turmasSemProfessor = resultado
      console.log("aqui")
      console.log(resultado);

    })

  }

  escolherTurma(){
    console.log(this.turmaSemProfessorEscolhida)
    this.turma = this.turmaSemProfessorEscolhida

  }

  atribuirTurma(){

    this.professorService.buscarUmProfessor(this.id_professor).subscribe((resultado)=>{
      this.professor = resultado

    })

    this.turmaService.atribuirProfessor(this.turma, this.turma.id_turma,this.professor.id_professor).subscribe({
      complete: () => {alert("A turma foi atribuída para o professor")
                      this.router.navigate(['/professor/listaProfessor'])},
      error: () => {alert("Erro: a turma não foi atribuída")
                    this.router.navigate(['/professor/listaProfessor']) }
    })



  }

  deixarTurmaSemProfessor(){
    this.turmaService.deixarTurmaSemProfessor (this.turma, this.turma.id_turma,this.professor.id_professor).subscribe({
      complete: () => {alert("O professor está sem Turma")
                      //this.router.navigate(['/turma'])
                    },
      error: () => {alert("Erro: o professor não foi retirado da turma")
                    //this.router.navigate(['/turma'])
                  }
    })
  }

}
