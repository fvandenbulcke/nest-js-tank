import { Controller, Get } from '@nestjs/common';
import { CatalogService } from '../domain/catalog.service';

@Controller('/catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  getHello(): string {
    return this.catalogService.getHello();
  }
}
