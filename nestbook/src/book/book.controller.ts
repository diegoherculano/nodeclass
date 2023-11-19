import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { BooksService } from './book.service';
import { CreateBookDto } from './create-book.dto';
import { BookExceptionsFilter } from './book.filters';

@Controller('books')
@UseFilters(new BookExceptionsFilter())
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<string> {
    return await this.booksService.findAll();
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }
}
