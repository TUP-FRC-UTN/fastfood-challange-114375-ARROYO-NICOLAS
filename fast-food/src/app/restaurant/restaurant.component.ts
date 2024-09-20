import { Component, inject } from '@angular/core';
import { PointOfShellComponent } from '../point-of-shell/point-of-shell.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PointOfShellComponent, DeliveryPointComponent, KitchenComponent,CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  private pedidoService = inject(PedidoService)

  lstPedidosPendientes: Pedido[] = [];
  

  ngOnInit() {
    this.getPedidosPendientes();
  }

  getPedidosPendientes() {
    this.lstPedidosPendientes = this.pedidoService.getPedidosPendientes();
  }

}
