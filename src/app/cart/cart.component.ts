import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public service: ApiService){

  }

  public cart: any;

  takeCart(){
    this.service.cartConnector.subscribe((data: any) => {
      this.cart = data
    })
  }

  deleteItem(id: any){
    this.service.deleteItem(id.productId).subscribe((data: any) => {
      console.log(data)
    })
  }

  
}
