import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/alunoModel';
import { AlunoService } from 'src/app/servicos/aluno.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  id_turma: any

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

    this.id_turma = this.route.snapshot.paramMap.get('id_turma')!
    this.aluno.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno')
    this.buscarUmAluno()
  }

  buscarUmAluno(){
    this.alunoService.buscarUmAluno(this.aluno.ra_aluno).subscribe((resultado)=>{
      this.aluno = resultado
    })
  }

  editarAluno(){
    this.alunoService.editarAluno(this.aluno,this.aluno.ra_aluno,this.id_turma).subscribe({
    complete: () => { alert("Aluno editado com sucesso")
                      this.router.navigate([`turma/aluno/${this.id_turma}`])},
    error: () => { alert("Aluno não editado")
                      this.router.navigate([`turma/aluno/${this.id_turma}`]) },
    next: () => { console.log("Aluno cadastrado com sucesso")}

    });

  }

  cancelarEdicao(){
    this.router.navigate([`turma/aluno/${this.id_turma}`])
  }

  trocarTurma(ra_aluno:any){
    this.id_turma = prompt("Pra qual turma deseja trocar o aluno?", "id_turma")
    //alert(ra_aluno)
    this.alunoService.buscarUmAluno(ra_aluno).subscribe(resultado =>{
      this.aluno = resultado;
    })

    this.alunoService.editarAluno(this.aluno,ra_aluno,this.id_turma).subscribe({
      complete: () => { alert("Aluno editado com sucesso")
                        this.router.navigate([`turma/aluno/${this.id_turma}`])},
      error: () => { alert("Aluno não editado")
                       },
      next: () => { console.log("Aluno editado com sucesso")}

    });
  }
}

