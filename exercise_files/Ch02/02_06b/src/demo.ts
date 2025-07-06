interface Contact {
    id: number;
    name: string;
}

interface UserContact {
    id: number;
    name: string;
    usernam: string;
}

function clone<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact,UserContact>(a)