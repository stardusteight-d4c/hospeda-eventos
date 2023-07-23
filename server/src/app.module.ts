import { Module } from '@nestjs/common';
import { EventModule } from './controllers/event.module';

@Module({
  imports: [EventModule],
})
export class AppModule {}
