import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from '../domain/product.service';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('justificatif_cloud_apero.jpg'))
  postImage(@UploadedFile() file) {
    // return this.productService.sendImageToBazaarvoice(file);
    return this.productService.sendSecondImage();
  }

  @Post('/second')
  @UseInterceptors(FileInterceptor('photoUrl'))
  postSecondImage(@UploadedFile() file) {
    console.log('secondimage');
    console.log(file);
  }
}
