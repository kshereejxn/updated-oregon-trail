let bodyElement = document.querySelector ('body')
let newMain = document.createElement ('main')
bodyElement.append (newMain)

class Dog {
    constructor (name, breed) {
        this.name = name
        this.breed = breed
        this.isGoodBoy = Boolean("of course")
    }
    sit () {
        // sitting code goes here
    }   
    fetch () {
        // fetching code goes here
    }   
}
class GuardDog extends Dog {
    constructor(name, breed, isGoodBoy, attackWord) {
        super(name, breed, isGoodBoy)
        this.attackWord = attackWord
    }
    bark() {
        // barking code here
    }
}
// create an instance of the Dog parent class
const fluffy = new Dog("Fluffy", "Toy Poodle")
// create an instance of the GuardDog child class
const cujo = new GuardDog("Cujo", "St. Bernard", "Go")

class Traveler {
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt(){
        this.food += 2
    }
    eat(){
        if (this.food <= 0){
            return this.isHealthy = false
        }
        else{
            this.food -= 1
        }
        
    }
}
class Doctor extends Traveler{
    constructor (name, isHealthy){
        super (name, isHealthy) 
                this.isHealthy = true
}
heal (traveler){
    traveler.isHealthy = true
}

//heal(traveler) - set the traveler's isHealthy property to true.
}

class Hunter extends Traveler{
    constructor (name, hunt, eat){
        super (name, hunt, eat)
                this.food = 2
        
    }
    hunt(){
        this.food += 5
    }
//hunt() - Increase the hunter's food by 5. (A normal traveler gains only 2.)
    eat(){
        if (this.food <= 1){
            this.food -= this.food
            return this.isHealthy = false
        }
        else {
            this.food -= 2
            
        }
    }
//eat() - Consumes 2 units of food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy.
  giveFood(traveler, numOfFoodUnits){
      if (this.food >= numOfFoodUnits){
          this.food -= numOfFoodUnits
          traveler.food += numOfFoodUnits
      }
      
  }
//giveFood(traveler, numOfFoodUnits) - Transfers numOfFoodUnits from the hunter to the traveler. If the hunter doesn't have enough food, then no food should be transferred.
}

class Wagon {
    constructor (capacity){
        this.capacity = capacity
        this.passengersList = []
    }
    getAvailableSeatCount(){
       return this.capacity - this.passengersList.length
        /*Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.*/
    }
    join(traveler){
        if (this.getAvailableSeatCount() > 0){
            this.passengersList.push (traveler)
        }
        /*Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.*/
    }
    shouldQuarantine(){
        let unhealthy = this.passengersList.some (traveler => traveler.isHealthy === false)
        return unhealthy
        /*Returns true if there is at least one unhealthy person in the wagon. Return false if not.*/
    }
    totalFood (){
        let amountFood = 0
        for (let index = 0; index < this.passengersList.length; index += 1){
            amountFood += this.passengersList[index].food
        }
        return amountFood
        //Returns the total amount of food among all passengers in the wagon.
    }
}