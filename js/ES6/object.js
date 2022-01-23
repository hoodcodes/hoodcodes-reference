// es6 has cleaner syntax for method declaration
// 2 ways to call object members ( Dot syntax and [''] )

const car = {
  make: "Toyota",
  model: "Landcruiser",
  honk: function () {},
  forward() {},
  reverse() {},
};

//if you know your member invocation, use dot notation
car.honk();

//if you are determining member syntax at runtime, use ['']
const targetMember = "model";
car[targetMember.value] = "FJ Cruiser";
