/*Q37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default 
message, and a shirt of any size with a different message.*/


function make_shirt (size: string = "Large", printMassage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} Shirt With the ${printMassage} Prints on Shirt`);
    
}

make_shirt();

make_shirt("Medium")

make_shirt("Small", "I Love TypeScript")