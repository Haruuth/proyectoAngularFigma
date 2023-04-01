import { Component, Input } from '@angular/core';
import { Product } from '../models/interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})


export class ProductosComponent {
  @Input() product!: Product;
}
