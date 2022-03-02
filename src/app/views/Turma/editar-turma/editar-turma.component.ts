import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from 'src/app/servicos/turma.service';
import { Turma } from 'src/app/models/turmaModel';

@Component({
  selector: 'app-editar-turma',
  templateUrl: './editar-turma.component.html',
  styleUrls: ['./editar-turma.component.css']
})
export class EditarTurmaComponent implements OnInit {

  turma: Turma = {
    id_turma:'',
    tu_nome:'',
    tu_descricao:''
  }
  constructor(private turmaService:TurmaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.turma.id_turma = this.route.snapshot.paramMap.get('id')
    this.mostrarUmaTurma()
  }

  mostrarUmaTurma(){
    this.turmaService.mostrarUmaTurma(this.turma.id_turma).subscribe((resposta)=>{
      this.turma = resposta
      console.log(this.turma)
    })
  }


  editarTurma(){
    this.turmaService.editarTurma(this.turma).subscribe({
    complete: () => { alert("Turma editada com sucesso")
                      this.router.navigate(['/turma'])},
    error: () => { alert("Turma editada com sucesso")
                  this.router.navigate(['/turma']) },
    next: () => { console.log("turma Editada com sucesso")}

    });

  }

  cancelarEdicao(){
    this.router.navigate(['/turma'])
  }

}
