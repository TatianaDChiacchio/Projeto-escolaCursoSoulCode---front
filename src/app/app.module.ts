import { ListaBoletoAlunoComponent } from './views/Boleto/lista-boleto-aluno/lista-boleto-aluno.component';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { NgxCurrencyModule } from "ngx-currency";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header.component';
import { FooterComponent } from './Templates/footer/footer.component';
import { HomeComponent } from './Templates/home/home.component';
import { ListaTurmaComponent } from './views/Turma/lista-turma/lista-turma.component';
import { CadastroTurmaComponent } from './views/Turma/cadastro-turma/cadastro-turma.component';
import { DeleteTurmaComponent } from './views/Turma/delete-turma/delete-turma.component';
import { EditarTurmaComponent } from './views/Turma/editar-turma/editar-turma.component';
import { ListaAlunoComponent } from './views/Aluno/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './views/Aluno/cadastro-aluno/cadastro-aluno.component';
import { EditarAlunoComponent } from './views/Aluno/editar-aluno/editar-aluno.component';
import { DeleteAlunoComponent } from './views/Aluno/delete-aluno/delete-aluno.component';
import { ListaAlunoComTurmaComponent } from './views/Aluno/lista-aluno-com-turma/lista-aluno-com-turma.component';
import { ProfessorDaTurmaComponent } from './views/Professor/professor-da-turma/professor-da-turma.component';
import { ListaProfessorComponent } from './views/Professor/lista-professor/lista-professor.component';
import { ListaAlunosDaTurmaComponent } from './views/Aluno/lista-alunos-da-turma/lista-alunos-da-turma.component';
import { AtribuirTurmaComponent } from './views/Aluno/atribuir-turma/atribuir-turma.component';
import { AtribuirTurmaAoProfessorComponent } from './views/Professor/atribuir-turma-ao-professor/atribuir-turma-ao-professor.component';
import { ListaCardsProfessorComponent } from './views/Professor/lista-cards-professor/lista-cards-professor.component';
import { CadastrarProfessorComponent } from './views/Professor/cadastrar-professor/cadastrar-professor.component';
import { CadastroBoletoComponent } from './views/Boleto/cadastro-boleto/cadastro-boleto.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { EdicaoBoletoComponent } from './views/Boleto/edicao-boleto/edicao-boleto.component';
import { ExclusaoBoletoComponent } from './views/Boleto/exclusao-boleto/exclusao-boleto.component';
registerLocaleData(localePt)





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
    CadastroAlunoComponent,
    EditarAlunoComponent,
    DeleteAlunoComponent,
    ListaAlunoComTurmaComponent,
    ProfessorDaTurmaComponent,
    ListaProfessorComponent,
    ListaAlunosDaTurmaComponent,
    AtribuirTurmaComponent,
    AtribuirTurmaAoProfessorComponent,
    ListaCardsProfessorComponent,
    CadastrarProfessorComponent,
    CadastroBoletoComponent,
    ListaBoletoAlunoComponent,
    EdicaoBoletoComponent,
    ExclusaoBoletoComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxCurrencyModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  },
                { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
                CurrencyPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
