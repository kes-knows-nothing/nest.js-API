import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [MoviesModule, BoardsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
