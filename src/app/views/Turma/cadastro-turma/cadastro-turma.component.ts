import { Router } from '@angular/router';
import { TurmaService } from 'src/app/servicos/turma.service';
import { Component, OnInit } from '@angular/core';
import { Turma } from '../../../models/turmaModel'

@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrls: ['./cadastro-turma.component.css']
})
export class CadastroTurmaComponent implements OnInit {

  turma: Turma ={
    tu_nome:'',
    tu_descricao:''
  }

  constructor(private turmaService: TurmaService,
              private router: Router) { }

  ngOnInit(): void { }

  cadastroTurma(): void{
    this.turmaService.cadastroTurma(this.turma).subscribe((resposta) =>{
      console.log(resposta)
      alert("Turma cadastrada")
      this.router.navigate(['/turma'])
    },err =>{
      alert(err.error.message())
    },
    )
  }

  cancelarCadastro(){
    this.router.navigate(['/turma'])
  }


}
