import { ExclusaoBoletoComponent } from './views/Boleto/exclusao-boleto/exclusao-boleto.component';
import { EdicaoBoletoComponent } from './views/Boleto/edicao-boleto/edicao-boleto.component';
import { ListaBoletoAlunoComponent } from './views/Boleto/lista-boleto-aluno/lista-boleto-aluno.component';
import { CadastroBoletoComponent } from './views/Boleto/cadastro-boleto/cadastro-boleto.component';
import { ListaCardsProfessorComponent } from './views/Professor/lista-cards-professor/lista-cards-professor.component';
import { AtribuirTurmaAoProfessorComponent } from './views/Professor/atribuir-turma-ao-professor/atribuir-turma-ao-professor.component';
import { AtribuirTurmaComponent } from './views/Aluno/atribuir-turma/atribuir-turma.component';
//import { ListaAlunoComTurmaComponent } from './componentes/lista-aluno-com-turma/lista-aluno-com-turma.component';
import { AlunoComTurma } from './models/alunoComTurmaModel';
import { ListaAlunosDaTurmaComponent } from './views/Aluno/lista-alunos-da-turma/lista-alunos-da-turma.component';
import { ListaProfessorComponent } from './views/Professor/lista-professor/lista-professor.component';
import { ProfessorDaTurmaComponent } from './views/Professor/professor-da-turma/professor-da-turma.component';
import { ListaAlunoComTurmaComponent } from './views/Aluno/lista-aluno-com-turma/lista-aluno-com-turma.component';
import { DeleteAlunoComponent } from './views/Aluno/delete-aluno/delete-aluno.component';
import { EditarAlunoComponent } from './views/Aluno/editar-aluno/editar-aluno.component';
import { CadastroAlunoComponent } from './views/Aluno/cadastro-aluno/cadastro-aluno.component';
import { ListaAlunoComponent } from './views/Aluno/lista-aluno/lista-aluno.component';
import { EditarTurmaComponent } from './views/Turma/editar-turma/editar-turma.component';
import { DeleteTurmaComponent } from './views/Turma/delete-turma/delete-turma.component';
import { CadastroTurmaComponent } from './views/Turma/cadastro-turma/cadastro-turma.component';
import { ListaTurmaComponent } from './views/Turma/lista-turma/lista-turma.component';
import { HomeComponent } from './Templates/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProfessorComponent } from './views/Professor/cadastrar-professor/cadastrar-professor.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"turma", component:ListaTurmaComponent},
  {path:"turma/cadastro", component:CadastroTurmaComponent},
  {path:"turma/delete/:id", component:DeleteTurmaComponent},
  {path:"turma/edicao/:id", component:EditarTurmaComponent},
  {path:"turma/aluno/:id", component: ListaAlunoComponent},
  {path:"turma/:id_turma/aluno/cadastro", component:CadastroAlunoComponent},
  {path:"aluno/edicao/:ra_aluno", component:EditarAlunoComponent},
  {path:"aluno/delete/:ra_aluno", component:DeleteAlunoComponent},
  {path:"alunosComTurma", component:ListaAlunoComTurmaComponent},
  {path:"professor/cadastro", component:CadastrarProfessorComponent},
  {path:"professorDaTurma/:id_turma", component:ProfessorDaTurmaComponent},
  {path:"professor/listaProfessor", component:ListaProfessorComponent},
  {path:"professor/atribuirTurma/:id_professor", component:AtribuirTurmaAoProfessorComponent},
  {path:"professor/listaCards", component:ListaCardsProfessorComponent},
  //{path:"aluno/cadastro", component:CadastroAlunoComponent},
  {path:"aluno/lista", component:ListaAlunoComponent},
  {path:"aluno/listaDaTurma/:id_turma", component:ListaAlunosDaTurmaComponent},
  {path:"aluno/cadastrar", component:CadastroAlunoComponent},
  {path:"aluno/atribuirTurma/:ra_aluno/:id_turma", component:AtribuirTurmaComponent},
  {path:"boleto/cadastro/:ra_aluno", component:CadastroBoletoComponent},
  {path:"boleto/listaPorAluno/:ra_aluno", component:ListaBoletoAlunoComponent},
  {path:"boleto/edicao/:codigo/:ra_aluno", component:EdicaoBoletoComponent},
  {path:"boleto/exclusao/:codigo/:ra_aluno", component:ExclusaoBoletoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
