import { TurmaService } from 'src/app/servicos/turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from '../../../servicos/professor.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/ProfessorModel';
import { Turma } from 'src/app/models/turmaModel';



@Component({
  selector: 'app-professor-da-turma',
  templateUrl: './professor-da-turma.component.html',
  styleUrls: ['./professor-da-turma.component.css']
})
export class ProfessorDaTurmaComponent implements OnInit {

  id_turma:any

  professorCadastrado: boolean = false

  professoresSemTurma:any
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

    this.id_turma = this.route.snapshot.paramMap.get('id_turma')
    this.buscarTurma()
    this.buscarProfessorDaTurma()
    this.buscarProfessoresSemTurma()
  }

  buscarTurma(){
    this.turmaService.mostrarUmaTurma(this.id_turma).subscribe(resultado =>{
      this.turma = resultado
    })
  }
  buscarProfessorDaTurma(){
    this.professorService.buscarProfessorDaTurma (this.id_turma).subscribe((resultado)=>{

      if(resultado == undefined){
        alert("Para essa turma não está definido um professor")
        this.professorCadastrado = false
        console.log(resultado);
      }else{
        this.professor = resultado
        this.professorCadastrado = true
        console.log(resultado);
      }


    })
  }

  buscarProfessoresSemTurma(){

    this.professorService.buscarProfessoresSemTurma().subscribe((resultado)=>{

      this.professoresSemTurma = resultado
      console.log(this.professoresSemTurma);

    })

  }

  mostrarProfessor(){
    console.log(this.professorSemTurmaEscolhido)
    this.professor = this.professorSemTurmaEscolhido

  }

  atribuirProfessor(){

    this.turmaService.mostrarUmaTurma(this.id_turma).subscribe((resultado)=>{
      this.turma = resultado

    })

    this.turmaService.atribuirProfessor(this.turma, this.id_turma,this.professor.id_professor).subscribe({
      complete: () => {alert("O professor foi atribuído para a turma")
                      this.router.navigate(['/turma'])},
      error: () => {alert("Erro: o professor não foi atribuído")
                    this.router.navigate(['/turma']) }
    })



  }

  deixarTurmaSemProfessor(){
    this.turmaService.deixarTurmaSemProfessor (this.turma, this.id_turma,this.professor.id_professor).subscribe({
      complete: () => {alert("A turma agora está sem Professor")
                      this.router.navigate(['/turma'])},
      error: () => {alert("Erro: o professor não foi retirado da turma")
                    this.router.navigate(['/turma']) }
    })
  }
}
