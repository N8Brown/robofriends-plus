function Contact(name, username, email, phone, address, website){
  this.fullCard = false;
  this.id = app.contacts.length + 1;
  this.name = name;
  this.username = username;
  this.email = email;
  this.phone = phone;
  this.address = address;
  this.website = website;
};

function Address(street, suite, city, zipcode){
  this.street = street;
  this.suite = suite;
  this.city = city;
  this.zipcode = zipcode;
};

function createContact(){
  let address = new Address(
    app.newContact.address.street,
    app.newContact.address.suite,
    app.newContact.address.city,
    app.newContact.address.zipcode
    );

  let contact = new Contact(
    app.newContact.name,
    app.newContact.username,
    app.newContact.email,
    app.newContact.phone,
    address,
    app.newContact.website
  );

  app.contacts.push(contact);
}

Vue.component('card',{
  props: ['contact', 'avatar'],
  template:`
  <div class="contact-card" :key="contact.id" @click="contactModal">
    <img class="avatar" :src='"https://robohash.org/" + contact.id + avatar' alt="Robot Friend">
    <p class="contact-name"><strong>{{contact.name}}</strong></p>
    <p class="contact-email"><strong>{{contact.email}}</strong></p>
  </div>
  `,
  methods: {
    contactModal: function() {
      this.contact.fullCard = !this.contact.fullCard;
    }
  }
});

Vue.component('modal',{
  props: ['contact', 'avatar'],
  template:`
  <div class="modal-container" :key="contact.id" v-if="this.contact.fullCard">
    <div class="full-card">
      <header>
        <span class="close" @click="contactModal">&times;</span>
        <img class="modal-avatar" :src='"https://robohash.org/" + contact.id + avatar' alt="Robot Friend">
      </header>
      <section>
        <div class="row">
          <div class="label">
            <p>Name: </p>
          </div>
          <div class="details">
            <p>{{contact.name}}</p>
          </div>
        </div>
        <div class="row">
          <div class="label">
            <p>Username: </p>
          </div>
          <div class="details">
            <p>{{contact.username}}</p>
          </div>
        </div>
        <div class="row">
          <div class="label">
            <p>Email: </p>
          </div>
          <div class="details">
            <p>{{contact.email}}</p>
          </div>
        </div>
        <div class="row">
          <div class="label">
            <p>Phone: </p>
          </div>
          <div class="details">
            <p>{{contact.phone}}</p>
          </div>
        </div>
        <div class="row">
          <div class="label">
            <p>Address: </p>
          </div>
          <div class="details">
            <p>{{contact.address.street}}</p>
            <p>{{contact.address.suite}}</p>
            <p>{{contact.address.city}}</p>
            <p>{{contact.address.zipcode}}</p>
          </div>
        </div>
        <div class="row">
          <div class="label">
            <p>Website: </p>
          </div>
          <div class="details">
            <p>{{contact.website}}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
  `,
  methods: {
    contactModal: function() {
      this.contact.fullCard = !this.contact.fullCard;
    }
  }
});


const app = new Vue({
  el: '#app',
  data: {
    avatarType: "",
    avatarOptions: [
      {text: "Robots", value: ""},
      {text: "Monsters", value: "?set=set2"},
      {text: "Robot Heads", value: "?set=set3"},
      {text: "Cats", value: "?set=set4"}
    ],
    searchText: "",
    newContact: {
      "fullCard": false,
      "id": null,
      "name": "",
      "username": "",
      "email": "",
      "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
      },
      "phone": "",
      "website": ""
    },
    addForm: false,
    fieldRequired: false,
    contacts:[
      {
        "fullCard": false,
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org"
      },
      {
        "fullCard": false,
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net"
      },
      {
        "fullCard": false,
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Nathan",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info"
      },
      {
        "fullCard": false,
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz"
      },
      {
        "fullCard": false,
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
        },
        "phone": "(254)954-1289",
        "website": "demarco.info"
      },
      {
        "fullCard": false,
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org"
      },
      {
        "fullCard": false,
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
        },
        "phone": "210.067.6132",
        "website": "elvis.io"
      },
      {
        "fullCard": false,
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com"
      },
      {
        "fullCard": false,
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
          "street": "Dayna Park",
          "suite": "Suite 449",
          "city": "Bartholomebury",
          "zipcode": "76495-3109",
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com"
      },
      {
        "fullCard": false,
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Lebsackbury",
          "zipcode": "31428-2261",
        },
        "phone": "024-648-3804",
        "website": "ambrose.net"
      }
    ]
  },
  computed: {
    filterContacts: function(){
      return this.contacts.filter(contact => {
          return (contact.name.toLowerCase().includes(this.searchText.toLowerCase())? contact: null);
        }
      )
    }, 
  },
  methods: {
    toggleForm: function(){
      this.formReset();
      this.addForm = !this.addForm;
    },
    submitContact: function(){
      if(
        this.newContact.name === "" || 
        this.newContact.username === "" || 
        this.newContact.email === ""
        ){
        this.fieldRequired = true;
        alert("Please fill out the required fields")
      } else {
        createContact();
        this.addForm = !this.addForm;  
      }
    }, 
    formReset: function(){
      this.newContact.name = "";
      this.newContact.username = "";
      this.newContact.email = "";
      this.newContact.phone = "";
      this.newContact.address.street = "";
      this.newContact.address.suite = "";
      this.newContact.address.city = "";
      this.newContact.address.zipcode = "";
      this.newContact.website = "";
      this.formComplete = false;
      this.fieldRequired = false;
    },
  }
});
