import { IEventRepository } from 'src/@interfaces/event';
import { Event } from 'src/entities/event.entity';

export class PrismaEventRepository implements IEventRepository {
  create(input: Event): Promise<Event> {
    throw new Error('Method not implemented.');
  }
  update(input: Event): Promise<Event> {
    throw new Error('Method not implemented.');
  }
  delete(input: { id: string }): Promise<void> {
    throw new Error('Method not implemented.');
  }

  find(input: { id: string }): Promise<Event> {
    throw new Error('Method not implemented.');
  }

  getMany(): Promise<Event[]> {
    throw new Error('Method not implemented.');
  }
  getByName(input: { name: string }): Promise<Event[]> {
    throw new Error('Method not implemented.');
  }
  getWithPagination(input: {
    pageNumber: number;
    pageSize: number;
  }): Promise<Event[]> {
    throw new Error('Method not implemented.');
  }
}
