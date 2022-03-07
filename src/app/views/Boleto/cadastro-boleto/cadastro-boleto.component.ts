import { ActivatedRoute, Router } from '@angular/router';
import { BoletoService } from './../../../servicos/boleto.service';
import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/models/boetoModel';
import { Location } from '@angular/common'


@Component({
  selector: 'app-cadastro-boleto',
  templateUrl: './cadastro-boleto.component.html',
  styleUrls: ['./cadastro-boleto.component.css']
})
export class CadastroBoletoComponent implements OnInit {

  ra_aluno:any

  boleto:Boleto ={
    codigo:'',
    bo_descricao: '',
    bo_dataVencimento:'',
    bo_status: 'PENDENTE',
    bo_valor: 0
  }

  constructor(private boletoService:BoletoService,
              private route:ActivatedRoute,
              private router:Router,
              private location:Location) { }

  ngOnInit(): void {
    this.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno')
  }

  cadastrarBoleto(){
    this.boletoService.cadastrarBoleto(this.boleto, this.ra_aluno).subscribe({
      complete: () => {alert("Boleto cadastrado com sucesso")
                       this.location.back() },
      error: () => {alert("Erro: boleto não cadastrado")
                    this.location.back()}
    })
  }


}
