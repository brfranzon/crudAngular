import { Products } from './../../models/products-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
  public dataSource$: Observable<Products[]> | undefined;
  constructor(private apiProductsService: ApiProductsService, private router: Router) { }

  ngOnInit(): void {
    this.apiProductsService.fetchAllProducts().subscribe(products => {
      this.dataSource = products;
    })
   // this.dataSource$ = this.apiProductsService.fetchAllProducts();
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

  getPriorityColor(priority: string){
     if (priority === 'low') return '#ade1e5';
     if (priority === 'medium') return '#73ab84';
     if (priority === 'high') return 'orange';
     if (priority === 'very high') return 'red';
     return ''
    //   if (this.i_task?.priority === TaskPriority.High) return 'bg-green';
    //   return 'bg-yellow';
    // }
  }


}
