var restaurant = {
  name: 'Bistro',
  people: 150,
  booked: 75,
  checkAvailability: function ()
    return this.people -
      this.booked
}
};

var elName = document.getElementById('BistroName');
elName.textContent = restaurant.name;

var elPeople = document.getElementById('reservation');
elPeople.textContent = checkAvailability();