import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Model } from 'mongoose';
import {Article} from './article.model'
@Injectable()
export class ArticlesService {
    constructor(
      @InjectModel('Article') private readonly articleModel: Model<Article>,
      @InjectConnection() private connection: Connection
      ){}

   async  findAll() { // 👈
      const articleCollection = await this.connection.collection('articles'); 
      return articleCollection.find().toArray()
      }
      async findOne(ArticleID: string) {  // 👈
        let article: any;
        try {
          article = await this.articleModel.findById(ArticleID).exec();
        } catch (error) {
          throw new NotFoundException('Could not find article.');
        }
        if (!article) {
          throw new NotFoundException('Could not find article.');
        }
        return article;
      }
        /*const article = await this.articleModel.findById(ArticleID).exec();
        if (!article) {
          throw new NotFoundException(`Article #${ArticleID} not found`);
        }
        return article;*/
      
      async  DeleteArticle(ArticleID:string){
        const result = await this.articleModel.deleteOne({ _id: ArticleID }).exec();
        if (result.n === 0) {
          throw new NotFoundException('Could not find user.');
        }
      }
}
