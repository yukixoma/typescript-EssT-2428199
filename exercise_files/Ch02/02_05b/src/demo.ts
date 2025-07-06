interface Contact {
    id: number;
    name: string;
    clone(source: Contact): Contact
}

function clone(source: Contact) : Contact {
    return Object.apply({}, source);
}

// Function as function argument
function funcAsArgument(source: Contact, func: (arg: Contact) => Contact) : Contact {
    return func(source);
}

const contact: Contact = {
    id: 1,
    name: "Phat",
    clone: clone
}

const contact1 = clone(contact);
const contact2 = funcAsArgument(contact, clone);
