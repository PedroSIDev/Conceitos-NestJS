import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private lista = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  findAll() {
    return this.lista;
  }
}
