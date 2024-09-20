import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private lstPedidosPendientes: Pedido[] = [];
  private lstPedidosCocinandose: Pedido[] = [];
  private lstPedidosEntregados: Pedido[] = [];


  addPush(P: Pedido) {
    this.lstPedidosPendientes.push(P);
    console.log(this.lstPedidosPendientes)
  };

  getPedidos() {
    return this.lstPedidosPendientes;
  }

  delete(index: number){
    this.lstPedidosPendientes.splice(index, 1);
  }
  
}
