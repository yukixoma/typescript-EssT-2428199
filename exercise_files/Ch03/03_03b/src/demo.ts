const x = "string"
const y = true
console.log(typeof x) // --> "string"
console.log(typeof y) // --> "boolean"



type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

function toContact(nameOrContact : string | Contact) : Contact {
    if (typeof nameOrContact === "object") {
        return {
            id: nameOrContact.id,
            name: nameOrContact.name,
            status: nameOrContact.status
        }
    }
    else {
        return {
            id: 0,
            name: nameOrContact,
            status: "active"
        }
    }
}

const myType = {min: 10, max: 100}
function save(source: typeof myType) {
    console.log(source.min, source.max);
}