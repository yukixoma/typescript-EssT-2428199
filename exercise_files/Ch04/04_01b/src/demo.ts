let x: Record<string, string | number | boolean | Function> = { name: "Wruce Bayne" }
x.number = 1234
x.active = true
x.log = () => console.log("awesome!")


////////////////////

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
    email: string
    gender?: boolean
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

type ContactQuery = Record<keyof Contact, Query>

type OptionalContactQuery = Partial<ContactQuery>

type OmittedContactQuery = Omit<ContactQuery,"address" | "status">

type PickedContactQuery = Pick<ContactQuery, "id" | "email">

type RequiredContactQuery = Required<ContactQuery>

function searchContacts(contacts: Contact[], query: OptionalContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);