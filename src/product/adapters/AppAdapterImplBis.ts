import { Injectable } from '@nestjs/common';
import IAppAdapter from '../domain/IAppAdapter';

@Injectable()
export class AppAdapterImplBis implements IAppAdapter {
  getProduct(): string {
    return 'Hello from AppAdapterImplBis!';
  }
}
