import { Component, inject } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  private pedidoService = inject(PedidoService);

  lstPedidosTerminados: Pedido[] = [];

  getPedidosTerminados(){
    this.lstPedidosTerminados = this.pedidoService.getPedidosTerminados();
  }

  entregar(index:number){
    this.pedidoService.deleteTerminados(index);
    this.getPedidosTerminados();
  }

}
