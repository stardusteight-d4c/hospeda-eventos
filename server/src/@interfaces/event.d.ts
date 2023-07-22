import { Event } from 'src/entities/event.entity';

export interface IEvent {
  id?: string;
  name: string;
  coverImage: string;
  privacy: 'public' | 'private';
  description: string;
  cep: string;
  number: string;
  address: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  startDate: Date;
  startTime: string;
}

export interface IEventService {
  createEvent(request: Event): Promise<IEvent>;
  updateEvent(request: Event): Promise<IEvent>;
  deleteEvent(request: { id: string }): Promise<void>;
  getEvents(): Promise<IEvent[]>;
  getEventsByName(request: { name: string }): Promise<IEvent[]>;
  getEventsWithPagination(request: {
    pageNumber: number;
    pageSize: number;
  }): Promise<IEvent[]>;
}

export interface IEventRepository {
  create(input: Event): Promise<Event>;
  update(input: Event): Promise<Event>;
  delete(input: { id: string }): Promise<void>;
  getMany(): Promise<Event[]>;
  getByName(input: { name: string }): Promise<Event[]>;
  getWithPagination(input: {
    pageNumber: number;
    pageSize: number;
  }): Promise<Event[]>;
}