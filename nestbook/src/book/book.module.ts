import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';
import { BooksService } from './book.service';
import { BooksController } from './book.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'books', schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
