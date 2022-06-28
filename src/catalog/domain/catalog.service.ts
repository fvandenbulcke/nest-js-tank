import { Injectable } from '@nestjs/common';
import { ProductService } from '../../product/domain/product.service';

@Injectable()
export class CatalogService {
  constructor(private readonly productService: ProductService) {}

  getHello(): string {
    return this.productService.getHello();
  }
}
