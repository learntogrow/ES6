//Comprahension
let people = [
    {
        "firstName": "Ajay",
        "phone": "2434-5530",
        "email": "ajay76@gmail.com"
    },
    {
        "firstName": "Vijay",
        "phone": "2446-1624",
        "email": "vijayk77@gmail.com"
    }
]


for(let {phone} of people) {
    console.log(phone)  //2434-5530   2446-1624
  }

  for(let phone of people) {
    console.log(phone)  //{ firstName: 'Ajay', phone: '2434-5530', email: 'ajay76@gmail.com' }
                        //{ firstName: 'Vijay', phone: '2446-1624', email: 'vijayk77@gmail.com' }     
  }

  for(let {phone, firstName} of people) {
    console.log(phone , firstName)  //2434-5530 Ajay
                                    //2446-1624 Vijay
  }