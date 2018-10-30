export class Donor {
    name: string;
    bloodType: string;
    phone: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
  