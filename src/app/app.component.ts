import { Observable } from 'rxjs';
import { Products } from './models/products-model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiProductsService } from './service/api-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularExpressMongoCrud';

  constructor(private apiProductsService: ApiProductsService) { }

  public allProducts: any | undefined;

  ngOnInit() {

    this.apiProductsService.fetchAllProducts().subscribe(products => this.allProducts = products)

    // this.http.post("http://localhost:3000/api/products", {
    //   title: 'vidro'
    // }).subscribe(res => console.log('created a new prod: ', res));

    // this.http.delete("http://localhost:3000/api/products/61999de76ea4489291e4c8b1").subscribe(res => console.log('deleted a new prod: ', res));

    // this.http.put("http://localhost:3000/api/products/619976cd73e4ac16b0bb284c", { title: 'jabuticaba' }).subscribe(
    //   res => console.log('updated: ', res)
    // )
  }

  addNewProduct() {
    this.apiProductsService.createProduct({
      title: 'Mamao',
      description: 'Berinjela organica',
      priorityDelivery: 'very high',
      price: 44,
      checkIfProductIsNotAvailable: true
    }).subscribe(
      {
        next: res => {
          this.apiProductsService.fetchAllProducts().subscribe(products => this.allProducts = products)
        },
        error: () => alert('Error'),
        complete: () => alert('completed call!')
      }
    )
  }

  deleteProduct(id: string) {
    this.apiProductsService.deleteProductById(id).subscribe(
      {
        next: () => alert(`id ${id} deleted`),
        error: () => alert('Error'),
        complete: () => alert('completed call!')
      }
    )

  }

}
