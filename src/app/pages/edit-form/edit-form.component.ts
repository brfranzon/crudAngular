import { ApiProductsService } from './../../service/api-products.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products-model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  productForm?: FormGroup | undefined;

  public productToBeUpdated: Products | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private apiProductService: ApiProductsService) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'title': new FormControl(null),
      'description': new FormControl(null),
      'priorityDelivery': new FormControl(null),
      'checkIfProductIsNotAvailable': new FormControl(null),
      'price': new FormControl(null)
    });

    // watch changes in the form
    // this.productForm?.get('title')?.valueChanges.subscribe(v => console.log(v));
    // this.productForm?.get('description')?.valueChanges.subscribe(v => console.log(v));


    this.route.params.subscribe(params => {
      console.log('params: ', params['id']);
      this.apiProductService.productById(params['id']).subscribe(
        (product: Products) => this.productToBeUpdated = product
      )
    });
  }

  confirmEdit(id: Products['_id']) {
    const updatedProduct: Products = {
      title: this.productForm?.get('title')?.value!,
      description: this.productForm?.get('description')?.value,
      priorityDelivery: this.productForm?.get('priorityDelivery')?.value,
      checkIfProductIsNotAvailable: this.productForm?.get('checkIfProductIsNotAvailable')?.value,
      price: this.productForm?.get('price')?.value,
    }

    this.apiProductService.updateProduct(id!, updatedProduct).subscribe(
      (res: any) => {
        if (res) {
          this.router.navigate(['dashboard']);
        }
      }
    );
  }
}
