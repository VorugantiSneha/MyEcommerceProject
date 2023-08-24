import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable, map } from 'rxjs';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsUrl = 'http://localhost:8080/api/products';
  categoryUrl = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) {}

  /*
  getProductList(): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(this.productsUrl)
      .pipe(map((response) => response._embedded.products));
  }
  */

  getProductList(theCategoryId: string | number | null): Observable<Product[]> {
    //http://localhost:8080/api/products/search/findByCategoryId?id=2

    const searchUrl =
      'http://localhost:8080/api/products/search/findByCategoryId?id=' +
      theCategoryId;

    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetResponseCategory>(this.categoryUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }

  searchProducts(theKeyword: string | null): Observable<Product[]> {
    //http://localhost:8080/api/products/search/findByNameContaining?name=dell

    const searchUrl =
      'http://localhost:8080/api/products/search/findByNameContaining?name=' +
      theKeyword;

    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProduct(theProductId: string | null): Observable<Product> {
    //http://localhost:8080/api/products/10
    const productUrl = 'http://localhost:8080/api/products/' + theProductId;
    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number
  ): Observable<GetResponseProducts> {
    //http://localhost:8080/api/products/search/findByCategoryId?id=1&page=1&size=2
    //const url = 'http://localhost:8080/api/products/search/findByCategoryId?id='+theCategoryId+'&page='+thePage+'&size='+thePageSize

    const url = `http://localhost:8080/api/products/search/findByCategoryId?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(url);
  }

  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    theKeyword: any
  ): Observable<GetResponseProducts> {
    const searchUrl = `http://localhost:8080/api/products/search/findByNameContaining?name=${theKeyword}&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }
}

export interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
  page: {
    size: 2;
    totalElements: 20;
    totalPages: 10;
    number: 0;
  };
}

interface GetResponseCategory {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
