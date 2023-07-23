import { IEvent } from 'src/@interfaces/event';

export class EventValidator {
  constructor() {}

  private isValidCEP(cep: string): void {
    const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
    if (!cepPattern.test(cep)) {
      throw new Error('the <cep> is invalid');
    }
  }

  private isStartDateValid(startDate: Date): void {
    const currentDate = new Date();
    if (startDate < currentDate) {
      throw new Error('the <startDate> is less than the current date');
    }
  }

  private isValidPrivacy(privacy: string): void {
    if (!(privacy === 'public' || privacy === 'private')) {
      throw new Error('the <privacy> should only be "public" or "private"');
    }
  }

  private areAllFieldsFilled(event: IEvent): void {
    if (
      !(
        !!event.name &&
        !!event.coverImage &&
        !!event.privacy &&
        !!event.description &&
        !!event.cep &&
        !!event.number &&
        !!event.address &&
        !!event.complement &&
        !!event.neighborhood &&
        !!event.city &&
        !!event.state &&
        !!event.startDate &&
        !!event.startTime
      )
    ) {
      throw new Error('all fields must be filled in');
    }
  }

  public ValidateEvent(event: IEvent): void {
    this.areAllFieldsFilled(event);
    this.isStartDateValid(event.startDate);
    this.isValidPrivacy(event.privacy);
    this.isValidCEP(event.cep);
  }
}
