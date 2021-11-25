import { ApiProductsService } from './../../service/api-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products-model';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  public productToBeUpdated: Products | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private apiProductService: ApiProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params: ', params['id']);
      this.apiProductService.productById(params['id']).subscribe(
        (product: Products) => this.productToBeUpdated = product
      )
    });
  }

  confirmEdit(id: string) {
    const updatedProduct: Products = {
      title: "Beterraba abcde",
      description: "Beterraba amarela",
      price: 23,
      priorityDelivery: "low",
      checkIfProductIsNotAvailable: true
    }
    this.apiProductService.updateProduct(id, updatedProduct).subscribe(
      (res: any) => {
        if (res) {
          this.router.navigate(['dashboard']);
        }
      }
    );
  }
}
