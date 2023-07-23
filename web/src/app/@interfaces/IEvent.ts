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