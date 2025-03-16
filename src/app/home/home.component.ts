import { Component, numberAttribute } from '@angular/core';
import { ApiService } from '../api.service';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private service: ApiService) {
    this.showAll();
  }

  public allFoods: Products[] = [];
  public cart: any = [];

  transfer() {
    this.service.cartConnector.next(this.cart);
  }

  showAll() {
    this.service.getAllProducts().subscribe({
      next: (data: Products[]) => (this.allFoods = data),
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  addToCart(item: any) {
    let body = {
      quantity: 1,
      price: item.price,
      productId: item.productId,
    };
    this.service.createAndAddToCart(body).subscribe({
      next: (data: any) => {
        this.cart = data;
        console.log(data);
      },
      error: (err: any) => console.log(err),
    });
  }
}
