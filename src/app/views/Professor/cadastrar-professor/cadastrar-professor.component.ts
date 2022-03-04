import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfessorService } from 'src/app/servicos/professor.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/ProfessorModel';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrls: ['./cadastrar-professor.component.css']
})
export class CadastrarProfessorComponent implements OnInit {

  idProfessorCadastrado:any

  professorCadastrado:boolean = false

  professor:Professor ={
    id_professor:'',
    pro_nome:'',
    pro_formacao:'',
    pro_foto:''
  }

  foto:any

  constructor(private professorService:ProfessorService,
              private router:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarProfessor(){
    this.professorService.cadastrarProfessor(this.professor).subscribe({
      complete: () => {alert("Professor cadastrado com sucesso")
                        this.professorService.buscarProfessorPeloNome(this.professor.pro_nome)
                      .subscribe(resultado =>{
                        console.log(resultado)
                        this.idProfessorCadastrado = resultado.id_professor
                        this.professorCadastrado = true
                      })},

      error: () => {alert("Erro: Não foi possível cadastrar o professor")}
    })
  }

  subirFoto(event:any){


    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]

      const formData = new FormData
      formData.append("foto",this.foto)

      const nome:string = this.professor.pro_nome + "-" + event.target.files[0].name


      //http://localhost:8080/escola/envio/3?nome=yyyyyyyyy
      this.http.post(`http://localhost:8080/escola/envio/${this.idProfessorCadastrado}?nome=${nome}`,formData).subscribe({
        next: () => console.log("Foto enviada")
      })

      alert("Foto anexada ao Professor")


    }
  }

}
