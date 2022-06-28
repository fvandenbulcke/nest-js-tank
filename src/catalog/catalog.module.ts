import { Module } from '@nestjs/common';
import { ProductModule } from '../product/product.module';
import { CatalogController } from './controllers/catalog.controller';
import { CatalogService } from './domain/catalog.service';

@Module({
  imports: [ProductModule],
  controllers: [CatalogController],
  providers: [CatalogService],
  exports: [],
})
export class CatalogModule {}
