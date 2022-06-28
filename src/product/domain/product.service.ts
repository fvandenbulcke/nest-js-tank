import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import IAppAdapter from './IAppAdapter';
import * as FormData from 'form-data';

@Injectable()
export class ProductService {
  constructor(
    @Inject('IAppAdapter') private readonly appAdapter: IAppAdapter,
    private httpService: HttpService,
  ) {
    httpService.axiosRef.interceptors.request.use((config) => {
      /* console.log('interceptor');
      console.log(config); */
      return config;
    });
  }

  getHello(): string {
    return this.appAdapter.getProduct();
  }

  async sendImageToBazaarvoice(file): Promise<any> {
    const url =
      'https://stg.api.bazaarvoice.com/data/uploadphoto.json?apiversion=5.4&passkey=cawohdyYg5GuMXkCX4pYJox38YbuWrk4jSpN1j5TEZwb0&ContentType=review&Locale=fr_FR';
    const input = {
      photo: file,
    };

    const formData = new FormData();
    formData.append(
      'photoUrl',
      'https://lemagduchat.ouest-france.fr/images/dossiers/2021-12/marche-chat-france-164220.jpg',
      'file.originalname',
    );

    const headers = {
      'Content-Type': 'multipart/form-data',
    } as any;

    console.log(url);
    console.log(formData);

    try {
      const { data } = await lastValueFrom(
        this.httpService.post(url, formData, { headers }),
      );
      return data;
    } catch (error) {
      console.log(error);
      return 'error';
    }
  }

  async sendSecondImage(): Promise<any> {
    const url = 'http://localhost:4000/product/second';

    const formData = new FormData();
    formData.append(
      'photoUrl',
      'https://lemagduchat.ouest-france.fr/images/dossiers/2021-12/marche-chat-france-164220.jpg',
      'file.originalname',
    );

    const headers = {
      'Content-Type': 'multipart/form-data',
    } as any;

    try {
      const { data } = await lastValueFrom(
        this.httpService.post(url, formData, { headers }),
      );
      return data;
    } catch (error) {
      console.log(error);
      return 'error';
    }
  }
}
