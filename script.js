let arr1 = [1, 2, 3, 4, 5, 6 ]
let arr2 = [7, 8, 9, 10, 11, 12]
let arr3 = [13, 14, 15, 16, 17,18]
let arr4 = [19, 20, 21, 22, 23,24]
let arr5 = [25, 26, 27, 28, 29,30]
let arr6 = [...arr1,arr2,arr3,arr4,arr5]
alert(arr6)

let obj = {
    first_name: "Aidar",
    last_name:"Ilyazov",
    age:15,
    favorite_color:"green",
    city:"Bishkek"
}
let obj2 = {
    ...obj,
    gender:"man",
    date_of_born:2007,
    favorite_anime: "atack on titan"
}
console.log(obj2)


