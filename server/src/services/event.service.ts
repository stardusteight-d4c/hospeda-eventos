import { IEvent, IEventRepository, IEventService } from 'src/@interfaces/event';
import { Event } from 'src/entities/event.entity';

export class EventService implements IEventService {
  constructor(readonly eventRepository: IEventRepository) {}

  public async createEvent(request: Event): Promise<IEvent> {
    //  Tratar dados // fazer validações testes
    return this.eventRepository
      .create(request)
      .then((event) => event.reflect)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async updateEvent(request: Event): Promise<IEvent> {
    return this.eventRepository
      .update(request)
      .then((event) => event.reflect)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async deleteEvent(request: { id: string }): Promise<void> {
    return this.eventRepository.delete({ id: request.id }).catch((err) => {
      console.error(err);
      return null;
    });
  }

  public async getById(request: { id: string }): Promise<IEvent> {
    return this.eventRepository
      .find({ id: request.id })
      .then((event) => event.reflect)
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async getEvents(): Promise<IEvent[]> {
    return this.eventRepository
      .getMany()
      .then((event) => event.map((event) => event.reflect))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async getEventsByName(request: { name: string }): Promise<IEvent[]> {
    return this.eventRepository
      .getByName({ name: request.name })
      .then((event) => event.map((event) => event.reflect))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async getEventsWithPagination(request: {
    pageNumber: number;
    pageSize: number;
  }): Promise<IEvent[]> {
    return this.eventRepository
      .getWithPagination({
        pageNumber: request.pageNumber,
        pageSize: request.pageSize,
      })
      .then((event) => event.map((event) => event.reflect))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }
}
