import { Injectable, Inject  } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {}
  getHello(): string {
    return 'Hello World!';
  }
  getArticles(){
    const articleCollection = this.connection.collection('articles');
    return articleCollection.find().toArray();
  }
}
