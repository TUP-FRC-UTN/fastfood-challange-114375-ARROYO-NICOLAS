import { Component } from '@angular/core';
import { PointOfShellComponent } from '../point-of-shell/point-of-shell.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { KitchenComponent } from '../kitchen/kitchen.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [PointOfShellComponent, DeliveryPointComponent, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

}
