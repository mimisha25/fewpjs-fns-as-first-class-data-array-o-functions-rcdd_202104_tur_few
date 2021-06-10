function wakeDog(dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}` }
const result = wakeDog("Skippy", "Welsh Corgi");
console.log(result);

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}` }
const result1 = leashDog("Boo Radley", "Pibble");
console.log(result1);

function unleashDog(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}` }
const result3 = unleashDog("Lauren", "Golden Retriever");
console.log(result3);

function walkToPark(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}` }
const result4 = walkToPark("Bunny", "Labrador");
console.log(result4);

function throwFrisbee(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}` }
const result5 = throwFrisbee("Mary J. Blige", "Papillon");
console.log(result5);

function walkHome(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}` }
const result6 = walkHome("Santa Paws", "Husky");
console.log(result6);

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];


const weatherToday = "Rainy";

function exerciseDog(dogName, dogBreed) {
    return routine;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return routine
}

const result = exerciseDog("Byron", "poodle");
console.log(result); // => "Byron did not exercise d
