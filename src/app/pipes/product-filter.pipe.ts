import { Pipe, PipeTransform } from '@angular/core';
import { ProductItem } from '../components/main/model/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: ProductItem[], text:string): any {
    if (!products) {
      return [];
    }
    if (!text) {
      return products;
    }
    text = text.toLocaleLowerCase();

    return products.filter(p => {
      return p.name.toLocaleLowerCase().includes(text);
    });
  }

}
