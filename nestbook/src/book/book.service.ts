import { Injectable, Dependencies } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { CreateBookDto } from './create-book.dto';

@Injectable()
@Dependencies(getModelToken('books'))
export class BooksService {
  bookModel: any;

  constructor(bookModel) {
    this.bookModel = bookModel;
  }

  async create(createBook: CreateBookDto) {
    const createdCat = new this.bookModel(createBook);
    return createdCat.save();
  }

  async findAll() {
    return this.bookModel.find().exec();
  }
}
