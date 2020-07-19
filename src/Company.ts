import faker from "faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    const fCompany = faker.company;
    const fAddress = faker.address;

    this.name = fCompany.companyName();
    this.catchPhrase = fCompany.catchPhrase();
    this.location = {
      lat: +fAddress.latitude(),
      lng: +fAddress.longitude(),
    };
  }

  markerContent(): string {
    return `
    <h2>Company Name: ${this.name}</h2>
    <h3>${this.catchPhrase}</h3>
    `;
  }
}
