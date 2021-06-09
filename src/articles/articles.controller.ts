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
    @Get(':productId')
    getOne(@Param('productId') productId: string) {   // 👈
    return this.articlesService.findOne(productId);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
 
    /*finOne(){
        return 
    }*/
}
