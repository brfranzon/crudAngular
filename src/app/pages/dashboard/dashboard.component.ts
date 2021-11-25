import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products-model';
import { ApiProductsService } from 'src/app/service/api-products.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  displayedColumns: string[] = ['title', 'description', 'priority', 'available', 'price'];
  public dataSource: any;

  public allProducts: Products[] = [];

  constructor(private apiProductsService: ApiProductsService, private router: Router) { }

  ngOnInit(): void {
    this.apiProductsService.fetchAllProducts().subscribe(products => {
      this.dataSource = products;
    })
  }
  openEditForm(product: any) {
    console.log('produtc to be edited', product);
    this.router.navigate(['edit-form', product._id]);
  }

  deleteProduct(product: Products) {
    this.apiProductsService.deleteProductById(product?._id!).subscribe(
      (res: any) => {
        console.log(res);
        if (res) {
          this.apiProductsService.fetchAllProducts().subscribe(products => {
            this.dataSource = products;
          })
        }
      }
    );
  }

  addForm() {
    this.router.navigate(['add-form']);
  }



}
