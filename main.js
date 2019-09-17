/**На основе массива map и массива users собрать новый массив объектов где в каждом объекте будут только те свойства которые перечислены в массиве map 
 * На выходе мы должны получить массив вида: 

    [ { _id: ..., name: ..., isActive: ..., balance: ... }, ... ];
*/

const map = ["_id", "name", "isActive", "balance"];
const users = [
      {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
  	"nestedField": { total: 200 }
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

function sortArray(array, key, order) {

  if (order === 'asc') {
    return array.sort(function(prev, next) { 
      if (prev[key] < next[key]) return -1;
      if (prev[key] > next[key]) return 1;
      return 0;
    });
  } else if (order === 'desc') {
    return array.sort(function(prev, next) { 
      if (prev[key] > next[key]) return -1;
      if (prev[key] < next[key]) return 1;
      return 0;
    });
  }


}

console.log(sortArray(users, 'nestedField.total', 'asc'));
