import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product = new Product();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.handleProductDetails();
  }

  handleProductDetails() {
    const theProductId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(theProductId).subscribe((data) => {
      this.product = data;
    });
  }

  addProductToCart() {
    this.cartService.addToCart(new CartItem(this.product));
  }
}
