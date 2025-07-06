interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
    contactStatus: ContactStatus
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new",
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    contactStatus: ContactStatus.New
}

type ContactName = string