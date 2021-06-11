import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    created_at: { type: String, required: true },
    title: { type: String, required: true },
    story_title: { type: String, required: true },
    author: { type: String, required: true },
    url: { type: String, required: true },
    story_url: { type: String, required: true },
});

export interface Article extends mongoose.Document {
  id: string;
  creat_at: string;
  title: string;
  story_title: string;
  author: string;
  url: string;
  story_url: string;
}