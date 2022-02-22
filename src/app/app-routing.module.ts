import { ListaAlunoComTurmaComponent } from './componentes/lista-aluno-com-turma/lista-aluno-com-turma.component';
import { DeleteAlunoComponent } from './componentes/delete-aluno/delete-aluno.component';
import { EditarAlunoComponent } from './componentes/editar-aluno/editar-aluno.component';
import { CadastroLivroComponent } from './componentes/cadastro-livro/cadastro-livro.component';
import { ListaAlunoComponent } from './componentes/lista-aluno/lista-aluno.component';
import { EditarTurmaComponent } from './componentes/editar-turma/editar-turma.component';
import { DeleteTurmaComponent } from './componentes/delete-turma/delete-turma.component';
import { CadastroTurmaComponent } from './componentes/cadastro-turma/cadastro-turma.component';
import { ListaTurmaComponent } from './componentes/lista-turma/lista-turma.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"turma", component:ListaTurmaComponent},
  {path:"turma/cadastro", component:CadastroTurmaComponent},
  {path:"turma/delete/:id", component:DeleteTurmaComponent},
  {path:"turma/edicao/:id", component:EditarTurmaComponent},
  {path:"turma/aluno/:id", component: ListaAlunoComponent},
  {path:"turma/:id_turma/aluno/cadastro", component:CadastroLivroComponent},
  {path:"turma/aluno/:id_turma/edicao/:ra_aluno", component:EditarAlunoComponent},
  {path:"turma/aluno/delete/:id_turma/:ra_aluno", component:DeleteAlunoComponent},
  {path:"alunosComTurma", component:ListaAlunoComTurmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
