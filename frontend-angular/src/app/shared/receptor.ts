export class Receptor {
    name: string;
    localization: string;
    bloodType: string;
    hospital: string;
    history: string;
    phone: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}