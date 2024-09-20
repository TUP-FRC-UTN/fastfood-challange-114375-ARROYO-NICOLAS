import { Injectable } from '@angular/core';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private lstPedidosPendientes: Pedido[] = [];
  private lstPedidosCocinandose: Pedido[] = [];
  private lstPedidosTerminados: Pedido[] = [];


  addPushPendientes(P: Pedido) {
    this.lstPedidosPendientes.push(P);
  };

  getPedidosPendientes() {
    return this.lstPedidosPendientes;
  }

  deletePendientes(index: number){
    this.lstPedidosPendientes.splice(index, 1);
  }


  
  getPedidosCocinandose() {
    return this.lstPedidosCocinandose;
  }

  addPushCocinandose(P: Pedido) {
    this.lstPedidosCocinandose.push(P);
  };

  deleteCocinandose(index: number){
    this.lstPedidosCocinandose.splice(index, 1);
  }



  addPushTerminados(P: Pedido) {
    this.lstPedidosTerminados.push(P);
  };

  deleteTerminados(index: number){
    this.lstPedidosTerminados.splice(index, 1);
  }

  getPedidosTerminados() {
    return this.lstPedidosTerminados;
  }

  
  
}
