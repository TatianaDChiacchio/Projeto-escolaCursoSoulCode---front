import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boleto } from 'src/app/models/boetoModel';
import { BoletoService } from 'src/app/servicos/boleto.service';

@Component({
  selector: 'app-exclusao-boleto',
  templateUrl: './exclusao-boleto.component.html',
  styleUrls: ['./exclusao-boleto.component.css']
})
export class ExclusaoBoletoComponent implements OnInit {

  codigo:any
  ra_aluno:any

  statusEscolhidoNoSelect:any

  statusParaEscolha:string[] = []

  boleto:Boleto ={
    codigo:'',
    bo_descricao:'',
    bo_dataVencimento:'',
    bo_status:'',
    bo_valor:0
  }

  constructor(private boletoService:BoletoService,
              private route:ActivatedRoute,
              private router:Router) { }



  ngOnInit(): void {

    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno')
    this.statusParaEscolha = ['RECEBIDO','CANCELADO','PENDENTE']
    this.mostrarBoleto()

  }

  mostrarBoleto(){
    this.boletoService.buscarUmBoleto(this.codigo).subscribe(resultado =>{
      this.boleto = resultado
      this.boleto.bo_status = resultado.bo_status
    })
  }

  excluirBoleto(){
    this.boletoService.excluirBoleto(this.codigo).subscribe({
      complete: () => {alert("boleto excluído com sucesso")
                      this.router.navigate([`/boleto/listaPorAluno/${this.ra_aluno}`])},
      error: () => {alert("Erro: Algo sai errado - boleto não excluído")}
    })
  }

  statusEscolhido(){
    console.log(this.statusEscolhidoNoSelect)
    this.boleto.bo_status = this.statusEscolhidoNoSelect

  }

}
