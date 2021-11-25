import { ApiProductsService } from 'src/app/service/api-products.service';
import { Products } from 'src/app/models/products-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  loginForm?: FormGroup;
  productForm?: FormGroup;


  constructor(private apiProductsService: ApiProductsService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null),
    });

    this.productForm = new FormGroup({
      'title': new FormControl(null),
      'description': new FormControl(null),
      'priorityDelivery': new FormControl(null),
      'checkIfProductIsNotAvailable': new FormControl(null),
      'price': new FormControl(null)
    });
  }

  addProduct(myNewProduct: Products) {
    // const myNewProduct: Products = {
    //   title: "Pitanta",
    //   description: "Pitanga preta docinha",
    //   price: 44,
    //   priorityDelivery: "low",
    //   checkIfProductIsNotAvailable: true
    // }

    console.log(myNewProduct)

    this.apiProductsService.createProduct(myNewProduct).subscribe(
      res => {
        console.log('New product created', res);
        if (res) {
          this.router.navigate(['dashboard']);
        }
      }
    )
  }

  onSubmitX() {

    const email = this.loginForm?.controls['email'].value;
    const password = this.loginForm?.controls['password'].value;
    console.log('submit', email, password);

  }
  onSubmitProduct() {
    const title = this.productForm?.controls['title'].value;
    const description = this.productForm?.controls['description'].value;
    const priorityDelivery = this.productForm?.controls['title'].value;
    const checkIfProductIsNotAvailable = this.productForm?.controls['description'].value;
    const price = this.productForm?.controls['price'].value;

    this.addProduct({ title, description, priorityDelivery, checkIfProductIsNotAvailable, price })

  }

}
