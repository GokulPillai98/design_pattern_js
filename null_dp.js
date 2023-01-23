class User { // user class 
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const users = [new User(1, "Gokul"), new User(2, "Kiran")]; // creating two user object

function fetchUser(userId) { // fetch right user with the id
  for (user of users) {
    if (userId == user.id) return user;
  }
  return null;
}

console.log(fetchUser(1));
console.log(fetchUser(3)); // since it's returning null because no user exists with id 3 we have to handle this with if condition


//// here is the code to elimitate if condition

function fetchUserNullObject(userId) { // fetch right user with id if dosn't exists return dummy user which is guest in this context
  for (user of users) {
    if (userId == user.id) return user;
  }
  return new User(-1, "Guest"); // returning general object instead of null to avoid checking whether the object exists conditions
}

console.log(fetchUserNullObject(2));
console.log(fetchUserNullObject(3)); // successfully eliminated condition by returning a dummy object even if no user exists
