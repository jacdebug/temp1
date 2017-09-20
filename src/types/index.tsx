export interface ContactInfo {
    name: string;
    email: string;
    message: string;
}

export interface StoreState {
    contactdata: Array<ContactInfo>;
}