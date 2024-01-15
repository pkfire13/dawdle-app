import { Controller, Param, Post } from '@nestjs/common';

@Controller('rooms')
export class RoomsController {
  @Post('/:id/join')
  joinRoom(@Param('id') id: string) {
    return id;
  }
}
