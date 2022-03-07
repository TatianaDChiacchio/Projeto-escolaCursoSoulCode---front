import { AlunoService } from './../../../servicos/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletoService } from './../../../servicos/boleto.service';
import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/models/boetoModel';



@Component({
  selector: 'app-lista-boleto-aluno',
  templateUrl: './lista-boleto-aluno.component.html',
  styleUrls: ['./lista-boleto-aluno.component.css'],

})


export class ListaBoletoAlunoComponent implements OnInit {

  ra_aluno:any
  nomeAluno:any

  recebido:boolean = false
  cancelado:boolean = false

  boletos:Boleto[] = []

  boleto:Boleto ={
    codigo:'',
    bo_descricao:'',
    bo_dataVencimento:'',
    bo_status:'',
    bo_valor:0
  }

  constructor(private boletoService:BoletoService,
              private alunoService:AlunoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno')
    this.listarBoletoDoAluno()
    this.buscarAluno()
  }


  listarBoletoDoAluno(){
    this.boletoService.listarBoletosDoAluno(this.ra_aluno).subscribe(resultado =>{
      this.boletos = resultado

      console.log(resultado)
    })
  }

  buscarAluno(){
    this.alunoService.buscarUmAluno(this.ra_aluno).subscribe(resultado =>{
      this.nomeAluno = resultado.al_nome
    })
  }

  quitarBoleto(codigo:any){

    this.boletoService.buscarUmBoleto(codigo).subscribe(resultado =>{
      this.boleto = resultado

      console.log(this.boleto)

      this.boletoService.quitarBoleto(this.boleto,this.boleto.codigo).subscribe({
        complete: () => {alert("Boleto quitado com sucesso")
                         this.listarBoletoDoAluno()},
        error: () => {alert("Erro: Boleto não quitado")}
      })
    })


  }

  cancelarrBoleto(codigo:any){

    this.boletoService.buscarUmBoleto(codigo).subscribe(resultado =>{
      this.boleto = resultado

      console.log(this.boleto)

      this.boletoService.cancelarBoleto(this.boleto,this.boleto.codigo).subscribe({
        complete: () => {alert("Boleto cancelado com sucesso")
                         this.listarBoletoDoAluno()},
        error: () => {alert("Erro: Boleto não cancelado")}
      })
    })


  }
}
