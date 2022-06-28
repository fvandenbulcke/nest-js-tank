import { Injectable } from '@nestjs/common';
import IAppAdapter from '../domain/IAppAdapter';

@Injectable()
export class AppAdapterImpl implements IAppAdapter {
  getProduct(): string {
    return 'Hello from adapter!';
  }
}
