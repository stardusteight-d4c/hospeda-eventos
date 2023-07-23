import { makeEvent } from '../@factories/makeEvent';
import { Event } from '../entities/event.entity';
import { InMemoryEventRepository } from '../repositories/in-memory-event.repository';
import { EventService } from '../services/event.service';

describe('Event Service', () => {
  let eventService: EventService;

  beforeEach(async () => {
    eventService = new EventService(new InMemoryEventRepository());
  });

  it('should be possible to create an event', async () => {
    const eventData = makeEvent();
    const event = new Event(eventData);
    const result = await eventService.createEvent(event);
    expect(result).toBeDefined();
    expect(result.name).toBe(eventData.name);
    expect(result.address).toBe(eventData.address);
    expect(result.cep).toBe(eventData.cep);
  });

  it('should be possible update an event', async () => {
    const eventData = makeEvent();
    const event = new Event(eventData);
    const createEventResult = await eventService.createEvent(event);
    const updatedEventData = new Event({
      ...createEventResult,
      name: 'Updated Name',
    });
    const updateEventResult = await eventService.updateEvent(updatedEventData);
    expect(updateEventResult).toBeDefined();
    expect(updateEventResult.id).toBe(createEventResult.id);
    expect(updateEventResult.name).not.toBe(createEventResult.name);
    expect(updateEventResult.name).toBe('Updated Name');
  });
});
