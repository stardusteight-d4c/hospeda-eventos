import { PrismaClient } from '@prisma/client';
import { IEventRepository } from 'src/@interfaces/event';
import { Event } from 'src/entities/event.entity';

export class PrismaEventRepository implements IEventRepository {
  #prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.#prisma = prisma;
  }

  public async create(input: Event): Promise<Event> {
    return this.#prisma.event
      .create({ data: input.reflect })
      .then((event: any) => new Event(event))
      .catch((err) => {
        console.error('Error creating event', err);
        return null;
      });
  }

  public async update(input: Event): Promise<Event> {
    const id = input.reflect.id;
    const inputCopy = {
      ...input.reflect,
    };
    delete inputCopy.id;
    return this.#prisma.event
      .update({
        where: { id },
        data: inputCopy,
      })
      .then((event: any) => new Event(event))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async delete(input: { id: string }): Promise<void> {
    return this.#prisma.event
      .delete({
        where: { id: input.id },
      })
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async find(input: { id: string }): Promise<Event> {
    return this.#prisma.event
      .findUnique({
        where: { id: input.id },
      })
      .then((event: any) => new Event(event))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async getMany(): Promise<Event[]> {
    return this.#prisma.event
      .findMany({
        orderBy: { createdAt: 'desc' },
      })
      .then((events) => events.map((event: any) => new Event(event)))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async getByName(input: { name: string }): Promise<Event[]> {
    return this.#prisma.event
      .findMany({
        where: {
          name: {
            contains: input.name,
            mode: 'insensitive',
          },
        },
      })
      .then((events) => events.map((event: any) => new Event(event)))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }

  public async getWithPagination(input: {
    pageNumber: number;
    pageSize: number;
  }): Promise<Event[]> {
    const { pageNumber, pageSize } = input;
    const startIndex = (pageNumber - 1) * pageSize;
    return this.#prisma.event
      .findMany({
        skip: startIndex,
        take: pageSize,
      })
      .then((events) => events.map((event: any) => new Event(event)))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }
}
