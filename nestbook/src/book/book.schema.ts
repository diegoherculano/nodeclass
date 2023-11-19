import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Book>;

@Schema({ collection: 'books', timestamps: true })
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop()
  author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
