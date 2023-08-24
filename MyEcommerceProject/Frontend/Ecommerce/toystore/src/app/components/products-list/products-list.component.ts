import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { GetResponseProducts } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  currentCategoryId: any;
  previousCategoryId: any;
  searchMode: boolean;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 4;
  theTotalElements: number = 0;

  previousKeyword: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    //this.listProducts();
  }

  /*
  listProducts() {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
  */

  /*
  listProducts() {
    //checking router parameter
    const hasCategoryId = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //Reading route parameter
      this.currentCategoryId = this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    //Calling ProductService
    this.productService
      .getProductList(this.currentCategoryId)
      .subscribe((data) => {
        this.products = data;
        console.log(data);
      });
  }

  */

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      //search products
      this.handleSearchProducts();
    } else {
      //list products
      this.handleListProducts();
    }
  }

  /*
  handleSearchProducts() {
    const theKeyword: string | null =
      this.route.snapshot.paramMap.get('keyword');

    this.productService.searchProducts(theKeyword).subscribe((data) => {
      this.products = data;
    });
  }
*/
  /*
  handleListProducts() {
    //checking router parameter
    const hasCategoryId = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //Reading route parameter
      this.currentCategoryId = this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    //Calling ProductService
    this.productService
      .getProductList(this.currentCategoryId)
      .subscribe((data) => {
        this.products = data;
        console.log(data);
      });
  }
*/

  handleListProducts() {
    //checking router parameter
    const hasCategoryId = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //Reading route parameter
      this.currentCategoryId = this.route.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    //Calling ProductService
    this.productService
      .getProductListPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId
      )
      .subscribe(this.processResult());
  }

  handleSearchProducts() {
    const theKeyword: any = this.route.snapshot.paramMap.get('keyword');

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    //Calling ProductService
    this.productService
      .searchProductsPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        theKeyword
      )
      .subscribe(this.processResult());
  }

  processResult() {
    return (data: GetResponseProducts) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  addProductToCart(theProduct: Product) {
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }
}
