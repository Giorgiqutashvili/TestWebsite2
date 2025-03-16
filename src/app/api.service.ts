import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public loader: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public cartConnector: BehaviorSubject<any> = new BehaviorSubject(undefined)

  stopLoading() {
    this.loader.next(false)
  }

  startLoading() {
    this.loader.next(true)
  }

  getAllProducts() {
    return this.http.get<Products[]>("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  public isBasketCreated: boolean = true


  createAndAddToCart(product: any){
    return this.http.post<Products[]>("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", product)
  }
  
  updateCart(product: any){
    return this.http.put<Products[]>("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", product)
  }

  deleteItem(id: any){
    return this.http.delete<Products[]>(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }
  
  

}
