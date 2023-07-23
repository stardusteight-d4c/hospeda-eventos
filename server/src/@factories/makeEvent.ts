import { IEvent } from 'src/@interfaces/event';

interface ChangeData {
  name?: string;
}

export function makeEvent(data?: ChangeData): Omit<IEvent, 'id'> {
  return {
    name: data?.name ?? 'Test Event',
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
}
