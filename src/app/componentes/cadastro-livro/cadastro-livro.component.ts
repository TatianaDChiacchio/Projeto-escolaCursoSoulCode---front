import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from './../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/alunoModel';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent implements OnInit {


  id_turma: string = ''

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
  }

  cadastrarAluno(){
    this.alunoService.cadastrarAluno(this.aluno,this.id_turma).subscribe({
    complete: () => { alert("Aluno cadastrado com sucesso")
                      this.router.navigate([`turma/aluno/${this.id_turma}`])},
    error: () => { alert("Aluno não cadastrado")
                      this.router.navigate([`turma/aluno/${this.id_turma}`]) },
    next: () => { console.log("Aluno cadastrado com sucesso")}

    });

  }

  cancelarCadastro(){
    this.router.navigate([`turma/aluno/${this.id_turma}`])
  }
}
