import { Component, inject } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-point-of-shell',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './point-of-shell.component.html',
  styleUrl: './point-of-shell.component.css'
})
export class PointOfShellComponent {

  private pedidoService = inject(PedidoService);

  pedido: Pedido = new Pedido();

  sendForm(form: NgForm) {
    if (form.valid) {
      this.pedidoService.addPushPendientes(this.pedido);
      this.pedido = new Pedido();
      console.log(this.pedido);
    }
  }
  
}
