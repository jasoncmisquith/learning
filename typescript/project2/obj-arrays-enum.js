"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Jason',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 9] = "READ_ONLY";
    Role[Role["AUTHOR"] = 10] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Jason',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// let favoriteActivities: string[];
let favoriteActivities;
favoriteActivities = ['Jason'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
// if (person.role === ADMIN) {
//     console.log('is_admin');
// }
if (person.role === Role.ADMIN) {
    console.log('is_admin');
}
