import { randomUUID } from "node:crypto";
import { IEvent } from 'src/@interfaces/event';

export class Event {
  #id?: string;
  #name: string;
  #coverImage: string;
  #privacy: 'public' | 'private';
  #description: string;
  #cep: string;
  #number: string;
  #address: string;
  #complement: string;
  #neighborhood: string;
  #city: string;
  #state: string;
  #startDate: Date;
  #startTime: string;

  constructor(properties: IEvent) {
    this.#id = properties.id ?? randomUUID();
    this.#name = properties.name;
    this.#coverImage = properties.coverImage;
    this.#privacy = properties.privacy;
    this.#description = properties.description;
    this.#cep = properties.cep;
    this.#number = properties.number;
    this.#address = properties.address;
    this.#complement = properties.complement;
    this.#neighborhood = properties.neighborhood;
    this.#city = properties.city;
    this.#state = properties.state;
    this.#startDate = properties.startDate;
    this.#startTime = properties.startTime;
  }

  public get reflect(): IEvent {
    return {
      id: this.#id,
      name: this.#name,
      coverImage: this.#coverImage,
      privacy: this.#privacy,
      description: this.#description,
      cep: this.#cep,
      number: this.#number,
      address: this.#address,
      complement: this.#complement,
      neighborhood: this.#neighborhood,
      city: this.#city,
      state: this.#state,
      startDate: this.#startDate,
      startTime: this.#startTime,
    };
  }

  public set reflect(_values: IEvent) {
    throw new Error(
      'Cannot modify reflect object directly. Use the EventService methods instead.',
    );
  }
}
