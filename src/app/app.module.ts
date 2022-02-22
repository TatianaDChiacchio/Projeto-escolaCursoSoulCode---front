import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaTurmaComponent } from './componentes/lista-turma/lista-turma.component';
import { CadastroTurmaComponent } from './componentes/cadastro-turma/cadastro-turma.component';
import { DeleteTurmaComponent } from './componentes/delete-turma/delete-turma.component';
import { EditarTurmaComponent } from './componentes/editar-turma/editar-turma.component';
import { ListaAlunoComponent } from './componentes/lista-aluno/lista-aluno.component';
import { CadastroLivroComponent } from './componentes/cadastro-livro/cadastro-livro.component';
import { EditarAlunoComponent } from './componentes/editar-aluno/editar-aluno.component';
import { DeleteAlunoComponent } from './componentes/delete-aluno/delete-aluno.component';
import { ListaAlunoComTurmaComponent } from './componentes/lista-aluno-com-turma/lista-aluno-com-turma.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaTurmaComponent,
    CadastroTurmaComponent,
    DeleteTurmaComponent,
    EditarTurmaComponent,
    ListaAlunoComponent,
    CadastroLivroComponent,
    EditarAlunoComponent,
    DeleteAlunoComponent,
    ListaAlunoComTurmaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
