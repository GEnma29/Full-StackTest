import { Injectable, Inject, HttpService } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { filter, map } from 'rxjs/operators';
import { Cron } from '@nestjs/schedule';

const UrlApi = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';
@Injectable()
export class ApiService {
  constructor(
    @InjectConnection() private connection: Connection,
    private httpService: HttpService,
  ) {}

  @Cron('0 10 * * * *') // get data api every hour, at the start of the 10th minute
  async addData() {
    const articleCollection = this.connection.collection('articles'); // connect to db
    articleCollection.drop(); // eliminate all documents of db
    const response = await this.httpService.get(UrlApi).toPromise(); // fetch data api
    const Articles = response.data.hits; //
    //console.log(Articles)
    function insertData(Article) {
      const { created_at, title, story_title, author, url, story_url } =
        Article;

      if (title === null && story_title === null) {
        //eliminate
      } else if (url === null && story_url === null) {
        // eliminate
      } else if (url != null && story_url === null) {
        articleCollection.insertOne({
          create_at: created_at,
          title: title,
          story_title: story_title,
          author: author,
          url: url,
          story_url: url,
        });
      } else if (url === null && story_url != null) {
        articleCollection.insertOne({
          create_at: created_at,
          title: title,
          story_title: story_title,
          author: author,
          url: story_url,
          story_url: story_url,
        });
      } else {
        articleCollection.insertOne({
          create_at: created_at,
          title: title,
          story_title: story_title,
          author: author,
          url: url,
          story_url: story_url,
        });
      }
    }
    Articles.map(insertData);
    return articleCollection.find().toArray();
  }
}
