"use strict";
const users = [
    {
        id: 1,
        name: "Ayaka",
        email: "Ayaka@example.com",
        isAdmin: true
    },
    {
        id: 2,
        name: "raiden",
        email: "raiden@example.com",
        isAdmin: false
    }
];
function showUser(user) {
    return `${user.name} / ${user.email}`;
}
console.log(showUser(users[0]));
console.log(showUser(users[1]));
