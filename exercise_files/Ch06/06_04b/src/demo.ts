class Customer {}

// Merging interface
interface Customer {
    save: () => void 
}

const customer = new Customer();
customer.save = () => {};

const myVar = window.MY_VAR;