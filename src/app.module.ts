import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { CatalogModule } from './catalog/catalog.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    ProductModule,
    CatalogModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
