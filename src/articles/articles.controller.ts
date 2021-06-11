import {
    Controller,
    Get,
    Param,
    Delete
    // ParseIntPipe,
  } from '@nestjs/common';
import {ArticlesService} from './articles.service'
@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService) {}

    @Get()
    finAll(){
        return this.articlesService.findAll()
    }
    @Get(':id')
    getOne(@Param('id') ArticleID: string) {   // 👈
    return this.articlesService.findOne(ArticleID);
  }
  @Delete(':id')
  delete(@Param('id') ArticleID: string) {
     this.articlesService.DeleteArticle(ArticleID);
     return null;
  }
 
    /*finOne(){
        return 
    }*/
}
