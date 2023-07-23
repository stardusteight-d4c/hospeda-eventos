import { IEventRepository } from 'src/@interfaces/event';
import { Event } from 'src/entities/event.entity';

export class InMemoryEventRepository implements IEventRepository {
  #events: Map<string, Event> = new Map();

  async create(input: Event): Promise<Event> {
    this.#events.set(input.reflect.id, input);
    return input;
  }

  async update(input: Event): Promise<Event> {
    if (!this.#events.has(input.reflect.id)) {
      throw new Error('Event not found.');
    }
    this.#events.set(input.reflect.id, input);
    return input;
  }

  async delete(input: { id: string }): Promise<void> {
    if (!this.#events.has(input.id)) {
      throw new Error('Event not found.');
    }
    this.#events.delete(input.id);
  }

  async find(input: { id: string }): Promise<Event | null> {
    const { id } = input;
    const event = this.#events.get(id);
    return event || null;
  }
  async getMany(): Promise<Event[]> {
    return Array.from(this.#events.values());
  }

  async getByName(input: { name: string }): Promise<Event[]> {
    const events = Array.from(this.#events.values());
    const keyword = input.name.toLowerCase();
    return events.filter((event) =>
      event.reflect.name.toLowerCase().includes(keyword),
    );
  }

  async getWithPagination(input: {
    pageNumber: number;
    pageSize: number;
  }): Promise<Event[]> {
    const events = Array.from(this.#events.values());
    const startIndex = (input.pageNumber - 1) * input.pageSize;
    const endIndex = startIndex + input.pageSize;
    return events.slice(startIndex, endIndex);
  }
}
