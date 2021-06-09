import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Article} from '../schemas/articles.schema'
@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Article.name) private articleModel: Model<Article>){}

    findAll() { // 👈
      return this.articleModel.find().exec();
      /*
      const articleCollection = this.connection.collection('articles'); 
      return articleCollection.find().toArray()*/
      }
      async findOne(id: string) {  // 👈
        const article = await this.articleModel.findById(id).exec();
        if (!article) {
          throw new NotFoundException(`Product #${id} not found`);
        }
        return article;
      }
      remove(id: string) {
        return this.articleModel.findByIdAndDelete(id);
      }
}
