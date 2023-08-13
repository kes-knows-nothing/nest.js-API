import { Body, Controller, Delete, Get, Param, Post, Patch, ParseIntPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from 'src/boards/dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
// Service 안에서는 데이터베이스 관련된 로직을 처리한다.

@Controller('boards')
export class BoardsController {
  constructor(private BoardsService: BoardsService) {}
  @Get('/')
  getAllBoard(): Board[] {
    return this.BoardsService.getAllBoards();
  }
  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
    return this.BoardsService.createBoard(CreateBoardDto);
  }
  @Get(':id')
  getBoardById(@Param('id', ParseIntPipe) id: string): Board {
    return this.BoardsService.getBoardById(id);
  }
  @Delete(':id')
  deleteBoard(@Param('id') id: string): void {
    this.BoardsService.deleteBoard(id);
  }
  @Patch(':id/status')
  updateBoard(@Param('id') id:string,
  @Body('status', BoardStatusValidationPipe) status: BoardStatus,) {
    return this.BoardsService.updateBoardStatus(id, status)
  }
}
