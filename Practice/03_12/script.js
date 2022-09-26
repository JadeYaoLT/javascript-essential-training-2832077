/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Clothing {
    constructor (
    // what I want to include
    name,
    color,
    length,
    season,
    ){
        //Define 
        this. name = name;
        this. color = color;
        this. length = length;
        this. season = season 
    }
    changeSeason(newSeason) {
        this.season = newSeason 
    }  
}

const coat = new Clothing(
    "coat",
    "green",
    56,
    "winter"
);

console.log("the season:", coat.season);
coat.changeSeason("spring")
console.log("the season:", coat.season);
