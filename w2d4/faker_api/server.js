// import faker
import { faker } from '@faker-js/faker';

// import express
import express from 'express';
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.name.firstName() + '@email.com',
        password: faker.internet.password(5),
        phoneNumber: faker.phone.number(),
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.bsNoun(),
        address: faker.address.street() + ', ' + faker.address.city() + ', ' + faker.address.state()
        + ', ' + faker.address.zipCode() + ', ' + faker.address.country()
    }
    return newCompany;
}

const newFakeUser = createUser();
console.log(newFakeUser);

const newFakeCompany = createCompany();
console.log(newFakeCompany);

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
    res.json({newFakeUser, newFakeCompany});
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );