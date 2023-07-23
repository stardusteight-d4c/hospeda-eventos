import { makeEvent } from '../@factories/makeEvent';
import { Event } from '../entities/event.entity';
import { InMemoryEventRepository } from '../repositories/in-memory-event.repository';
import { EventService } from '../services/event.service';

describe('Event Service', () => {
  let eventService: EventService;

  beforeEach(async () => {
    const inMemoryEventRepository = new InMemoryEventRepository();
    eventService = new EventService(inMemoryEventRepository);
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

  it('should be throw error if have an empty field', async () => {
    const eventData = makeEvent();
    delete eventData.name;
    expect(() => new Event(eventData)).toThrow('all fields must be filled in');
  });

  it('should be throw error if cep is invalid', async () => {
    const eventData = makeEvent({ cep: '12-10' });
    expect(() => new Event(eventData)).toThrow('the <cep> is invalid');
  });

  it('should be throw error if privacy is invalid', async () => {
    const eventData = makeEvent({ privacy: 'open-to-public' });
    expect(() => new Event(eventData)).toThrow(
      'the <privacy> should only be "public" or "private"',
    );
  });

  it('should be possible delete an event', async () => {
    const eventData = makeEvent();
    const event = new Event(eventData);
    const createEventResult = await eventService.createEvent(event);
    const findEvent = await eventService.getById({ id: createEventResult.id });
    expect(findEvent.id).toBe(event.reflect.id);
    await eventService.deleteEvent({ id: createEventResult.id });
    const findDeletedEvent = await eventService.getById({
      id: createEventResult.id,
    });
    expect(findDeletedEvent).toBe(null);
  });

  it('should be throw error if the id of the event to be deleted does not exist', async () => {
    eventService.deleteEvent({ id: 'invalid-id' }).catch((err) => {
      expect(err.message).toBe('Event not found.');
    });
  });
});
