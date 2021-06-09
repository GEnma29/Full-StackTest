import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  created_at: string;

  @Prop({required: true} )
  title: string;

  @Prop()
  story_title: string;

  @Prop()
  author: string;

  @Prop({required: true })
  story_url: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);