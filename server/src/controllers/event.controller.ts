import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { IEvent } from 'src/@interfaces/event';
import { Event } from 'src/entities/event.entity';
import { InMemoryEventRepository } from 'src/repositories/in-memory-event.repository';
import { EventService } from 'src/services/event.service';

@Controller('event')
export class EventController {
  #eventService: EventService;

  constructor() {
    const eventRepository = new InMemoryEventRepository() 
    this.#eventService = new EventService(eventRepository);
  }

  @Post()
  async create(@Body() request: IEvent): Promise<IEvent> {
    const event = new Event(request);
    return this.#eventService
      .createEvent(event)
      .then((event) => event)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  @Get()
  async getEvents(): Promise<IEvent[]> {
    return this.#eventService
      .getEvents()
      .then((events) => events)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  @Put()
  async editEvent(@Body() request: IEvent): Promise<IEvent[]> {
    const event = new Event(request);
    return this.#eventService
      .updateEvent(event)
      .then((updatedEvent) => updatedEvent)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

 
}
