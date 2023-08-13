import { Board, BoardStatus } from './boards.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from 'src/dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(CreateBoardDto: CreateBoardDto) {
    const { title, description } = CreateBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards.filter((board) => board.id !== id);
  }
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status
    return board
  }
}
