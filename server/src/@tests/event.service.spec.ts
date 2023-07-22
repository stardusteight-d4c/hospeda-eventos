import { Test, TestingModule } from '@nestjs/testing';
import { IEvent } from 'src/@interfaces/event';
import { Event } from 'src/entities/event.entity';
import { InMemoryEventRepository } from 'src/repositories/in-memory-event.repository';
import { EventService } from 'src/services/event.service';

describe('Event Service', () => {
  let eventService: EventService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [EventService, InMemoryEventRepository], 
    }).compile();

    eventService = app.get<EventService>(EventService);
  });

  it('should be possible to create an Event', async () => {
    const eventData: Omit<IEvent, 'id'> = {
      name: 'Test Event',
      address: 'Rua Janary Nunes, 170 - Infraero, Macapá - AP',
      cep: '68908-876',
      city: 'Macapá',
      state: 'AP',
      complement: 'Área Comercial',
      coverImage:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a7/9e/3d/fachada.jpg?w=700&h=-1&s=1',
      description: 'Evento de Tecnologia super bacana',
      neighborhood: 'Infraero',
      number: '170',
      privacy: 'public',
      startDate: new Date('2023-07-22T12:00:00.000Z'),
      startTime: '10:00',
    };

    const event = new Event(eventData);

    const createdEvent = await eventService.createEvent(event);
    expect(createdEvent).toBeDefined();
    expect(createdEvent.name).toBe(eventData.name);
    expect(createdEvent.address).toBe(eventData.address);
    expect(createdEvent.cep).toBe(eventData.cep);
  });
});
