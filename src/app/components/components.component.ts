import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
listTarjetas:any[]=[
  {titular: 'Jhon Maicol', numeroTarjeta:'1005090585123', fechaExpiracion: '11/23', cvv:'123'},
  {titular: 'Karen Villa', numeroTarjeta:'1097782158856', fechaExpiracion: '11/24', cvv:'321'},
];

form: FormGroup;

  constructor(private fb:FormBuilder,
    private toastr: ToastrService) { 
    this.form=this.fb.group({
      titular:['',Validators.required],
      numeroTarjeta: ['',[Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv:['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  agregarTarjeta(){

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    this.listTarjetas.push(tarjeta)
    this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta Registrada');
    this.form.reset();
  }

  eliminarTarjeta(index: number){
    this.listTarjetas.splice(index, 1);
    this.toastr.error('La tajerta fue eliminada con exito!','Tarjeta Eliminada')
  }

}
