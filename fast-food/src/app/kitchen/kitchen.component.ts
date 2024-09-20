import { Component, inject } from '@angular/core';
import { Pedido } from '../pedido';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../pedido.service';
@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  lstPedidosPendientes: Pedido[] = [];
  lstPedidosCocinandose: Pedido[] = [];

  private pedidoService = inject(PedidoService);

  ngOnInit() {
    this.getPedidosPendientes();
  }

  getPedidosPendientes() {
    this.lstPedidosPendientes = this.pedidoService.getPedidosPendientes();
  }
  getPedidosCocinandose() {
    this.lstPedidosCocinandose = this.pedidoService.getPedidosCocinandose();
  }

  cocinar(index: number){
    this.pedidoService.addPushCocinandose(this.lstPedidosPendientes[index]);
    this.pedidoService.deletePendientes(index);
    this.getPedidosCocinandose();
  }

  terminar(index: number){
    this.pedidoService.addPushTerminados(this.lstPedidosCocinandose[index]);
    this.pedidoService.deleteCocinandose(index);
    this.getPedidosCocinandose();
  }
}
