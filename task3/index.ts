interface Users {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[] ,
    hasChildren: boolean,
    hasEducation: boolean,
}
const users: Users[] = [
    {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true
    },
    {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
    },
    {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false
    }
]

//1
const strNameUsers: string = users.map(({name}) => name).join(',');
console.log(strNameUsers)

//2
const numOfCar: number = users.reduce((accum: number, user) => {
    if (user.cars !== undefined) {
        accum += user.cars.length
    }
    return accum
},0)
console.log(numOfCar)

//3
let usersWithEduc:Users[]
function isHasEducation(users: Users[]): Users[] {
    usersWithEduc = users.filter(({hasEducation}) => {
        if (hasEducation) {
            return users
        }
    })
    return usersWithEduc;
}
console.log(isHasEducation(users))

//4
let usersWithAnimal:Users[]
function isHasAnimal(users:Users[]): Users[] {
    usersWithAnimal = users.filter(({animals}) => {
        if(animals) {
            return users;
        }
    })
    return usersWithAnimal;
}
console.log(isHasAnimal(users))

//5
function getCar(users:Users[]): string {
    const stringCar:string = users.map(({cars}) => cars).join(',')
    return stringCar;
}
console.log(getCar(users))