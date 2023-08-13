import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from '../dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(readonly MoviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MoviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.MoviesService.getOne(movieId);
  }

  @Get('search')
  search(@Query('year') seachingYear: number) {
    return `We are searching for a movie made after: ${seachingYear}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.MoviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.MoviesService.update(movieId, updateData);
  }
}
