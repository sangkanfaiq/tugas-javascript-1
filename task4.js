let data = {
    id:1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-803 x56442",
    website: "hildegard.org"
}
// console.log(data)

const ubahData = {
    ...data,
    name: "Sangkan Faiq",
    email: "sangkanfaiq@gmail.com",
    hobbies: ['playing games','watching movie']

}
console.log(ubahData)

const {address: {street, city}} = data
const ambilData = {
    address: {
        street: "Kulas Light",
        city: "Gwenborough"
    }
}
console.log(ambilData)