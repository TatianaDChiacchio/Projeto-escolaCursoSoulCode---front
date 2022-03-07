import { ActivatedRoute } from '@angular/router';
import { BoletoService } from './../../../servicos/boleto.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Boleto } from 'src/app/models/boetoModel';

@Component({
  selector: 'app-edicao-boleto',
  templateUrl: './edicao-boleto.component.html',
  styleUrls: ['./edicao-boleto.component.css']
})
export class EdicaoBoletoComponent implements OnInit {

  codigo:any
  ra_aluno:any



  boleto:Boleto ={
    codigo:'',
    bo_descricao: '',
    bo_dataVencimento:'',
    bo_status: '',
    bo_valor: 0
  }

  constructor(private boletoService:BoletoService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit(): void {

    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno')
    this.buscarBoleto()
  }

  buscarBoleto(){
    this.boletoService.buscarUmBoleto(this.codigo).subscribe(resultado =>{
      this.boleto = resultado
      console.log(resultado.bo_dataVencimento)
      this.boleto.bo_dataVencimento = resultado.bo_dataVencimento.slice(0,10)
      console.log(this.boleto.bo_dataVencimento)
    })
  }

  editarBoleto(){
    this.boletoService.editarBoleto(this.boleto,this.codigo,this.ra_aluno).subscribe({
      complete: () =>{alert("boleto alterado com sucesso")
                      this.location.back()  },
      error: () =>{ alert("Erro: boleto não editado")
                    this.location.back()}
    })
  }
}
