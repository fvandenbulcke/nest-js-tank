import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ProductController } from './controllers/app.controller';
import { ProductService } from './domain/product.service';
import { AppAdapterImpl, AppAdapterImplBis } from './adapters';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    AppAdapterImpl,
    {
      provide: 'IAppAdapter',
      useClass:
        process.env.IMPL_NUMBER === '1' ? AppAdapterImpl : AppAdapterImplBis,
    },
    {
      provide: 'IAppAdapter2',
      useClass: AppAdapterImpl,
    },
  ],
  exports: [ProductService],
})
export class ProductModule {}
