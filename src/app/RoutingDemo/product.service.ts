import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public getProducts() {
    let products: Product[];
    products = [
      {
        id: 'ABC8441189035',
        name: 'Tshirt',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ipsum necessitatibus qui, vero iste deleniti, hic rerum cumque incidunt commodi asperiores laboriosam nesciunt in dolorem libero obcaecati numquam fugiat mollitia.',
      },
      {
        id: 'DEF6510463347',
        name: 'Shoes',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ipsum necessitatibus qui, vero iste deleniti, hic rerum cumque incidunt commodi asperiores laboriosam nesciunt in dolorem libero obcaecati numquam fugiat mollitia.',
      },
      {
        id: 'GHI0831819467',
        name: 'Handbags',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ipsum necessitatibus qui, vero iste deleniti, hic rerum cumque incidunt commodi asperiores laboriosam nesciunt in dolorem libero obcaecati numquam fugiat mollitia..',
      },
    ];
    return products;
  }

  public getProduct(id: string) {
    let products: Product[] = this.getProducts();
    return products.find((p) => p.id == id);
  }
}
