import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { IEvent } from 'src/@interfaces/event';
import { Event } from 'src/entities/event.entity';
import { InMemoryEventRepository } from 'src/repositories/in-memory-event.repository';
import { EventService } from 'src/services/event.service';

@Controller('event')
export class EventController {
  #eventService: EventService;

  constructor() {
    const eventRepository = new InMemoryEventRepository();
    this.#eventService = new EventService(eventRepository);
  }

  @Post()
  async create(@Body() request: IEvent): Promise<IEvent> {
    return this.#eventService
      .createEvent(new Event(request))
      .then((event) => event)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  @Get()
  async events(): Promise<IEvent[]> {
    return this.#eventService
      .getEvents()
      .then((events) => events)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  @Get('search')
  async byName(@Query() query: { name: string }): Promise<IEvent[]> {
    return this.#eventService
      .getEventsByName(query)
      .then((events) => events)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IEvent> {
    return this.#eventService
      .getById({ id })
      .then((events) => events)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  @Put()
  async edit(@Body() request: IEvent): Promise<IEvent> {
    return this.#eventService
      .updateEvent(new Event(request))
      .then((updatedEvent) => updatedEvent)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  @Delete()
  async delete(@Query() query: { id: string }): Promise<void> {
    return this.#eventService.deleteEvent(query).catch((err) => {
      console.error(err);
      return null;
    });
  }
}
