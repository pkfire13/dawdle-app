import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';

@Module({
  imports: [],
  controllers: [RoomsController],
  providers: [],
})
export class RoomsModule {}
