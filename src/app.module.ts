import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Testreign:reigntest@cluster0.ldrod.mongodb.net/articles_test?retryWrites=true&w=majority',
    ),
    HttpModule,
    ApiModule,
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [MongooseModule],
})
export class AppModule {}
