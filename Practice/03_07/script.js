/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const screen = {
    name : "Apple",
    color: "black",
    owner: {
        name: "Teemo",
        charactor: "Funny",
        dick: {
            size: "big",
            length: 18
        }

    }
}

console.log(screen.owner.dick['length'])
