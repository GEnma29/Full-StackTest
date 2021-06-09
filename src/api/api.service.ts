import { Injectable,Inject, HttpService } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { filter, map } from 'rxjs/operators';
import { Cron } from '@nestjs/schedule';

const UrlApi = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs'
@Injectable()
export class ApiService {
  constructor(
    @InjectConnection() private connection: Connection,
    private httpService: HttpService,
  ) {}
  @Cron('0 10 * * * *') // get data api every hour, at the start of the 10th minute
  async addData() {
    const articleCollection = this.connection.collection('articles');// connect to db 
    articleCollection.drop()// eliminate all documents of db
    const response = await this.httpService.get(UrlApi).toPromise(); // fetch data api
    const Articles = response.data.hits //
    //console.log(Articles)
    function insertData (Article) {
      const {created_at,title,story_title,author} = Article
      articleCollection.insertOne({
        "create_at":created_at, 
        "title": title,
        "story_title": story_title,
        "author": author,
      })
    }
    Articles.map(insertData)
    return articleCollection.find().toArray();
}
}
