import { Module } from '@nestjs/common';
import { EventController } from './event.controller';

@Module({
  imports: [],
  controllers: [EventController],
})
export class EventModule {}
