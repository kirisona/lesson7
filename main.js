/**На основе массива map и массива users собрать новый массив объектов где в каждом объекте будут только те свойства которые перечислены в массиве map 
 * На выходе мы должны получить массив вида: 

    [ { _id: ..., name: ..., isActive: ..., balance: ... }, ... ];
*/

const map = ["_id", "name", "isActive", "balance", "nestedField"];
const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  }
];

let newArray = [];

for (let i = 0; i < users.length; i++) {
  let user = users[i];
  let newUser = {};
  for (let j = 0; j < map.length; j++) {
    if (user.hasOwnProperty(map[j])) {
      newUser[map[j]] = user[map[j]];
    }
  }
  newArray.push(newUser);
}
console.log(newArray);

/**2. Написать функцию сортировки которая принимает массив объектов который хотим сортировать, поле по которому хотим сортировать, и в каком порядке сортировать по возрастанию asc или по убыванию desc.

Условия:

- сортировка может быть как по числу так и по строке, т.е поле по которому мы хотим сортировать может содержать как строку так и число.,
- передаваемый массив не должен изменяться
- нужно проверять что передан массив и поле по которому сортировать. */

function sortAsc(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function sortDesc(a, b) {
  return sortAsc(b, a);
}

function sortArray(array, key, order) {
  if (order === "asc") {
    array.sort(function(prev, next) {
      return sortAsc(prev[key], next[key]);
    });
  } else if (order === "desc") {
    array.sort(function(prev, next) {
      return sortDesc(prev[key], next[key]);
    });
  }
  return array;
}

console.log(sortArray(newArray.slice(0), "balance", "desc"));

var getProperty = function(obj, propNested) {
  if (!obj || !propNested) {
    return null;
  } else if (propNested.length == 1) {
    var key = propNested[0];
    return obj[key];
  } else {
    var newObj = propNested.shift();
    return getProperty(obj[newObj], propNested);
  }
};

function sortNestedArray(array, key, order) {
  if (order === "asc") {
    array.sort(function(prev, next) {
      let a = getProperty(prev, key.split("."));
      let b = getProperty(next, key.split("."));
      return sortAsc(a, b);
    });
  } else if (order === "desc") {
    array.sort(function(prev, next) {
      let a = getProperty(prev, key.split("."));
      let b = getProperty(next, key.split("."));
      return sortDesc(a, b);
    });
  }
  return array;
}

console.log(sortNestedArray(newArray.slice(0), "nestedField.total", "asc"));
console.log(sortNestedArray(newArray.slice(0), "nestedField.total", "desc"));
