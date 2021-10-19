// Iteration 1: Names and Input
//
let hacker1 = "Manuel";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Diogo";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
var driversname = "";


for (let index = 0 ; index < hacker1.length; index++) {
  driversname += hacker1[index];
  driversname += " ";
}

driversname = driversname.toUpperCase();
console.log(driversname);



// hacker1 => string
//console.log(hacker1.split("").join(" ").toUpperCase())

var navigatorName = "";
for (let index = hacker2.length-1; index >= 0; index--) {
    navigatorName += hacker2[index]
}
console.log(navigatorName);

if (hacker2 < hacker1) 
{
    console.log(`${hacker1} goes first.`)
} 
else if (hacker1 < hacker2) 
{
    console.log(`Yo, ${hacker2} goes first, definitely.`)
} 
else 
{
    console.log("What you both have the same name?")
}




var loremOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida gravida bibendum. Aliquam at efficitur nunc. Fusce vestibulum vitae arcu non hendrerit. Sed eget ante ut urna mattis molestie faucibus eget lacus. Morbi volutpat est quis nibh fringilla scelerisque. Suspendisse pellentesque ut ipsum ut auctor. Vivamus rhoncus leo est, at euismod libero imperdiet rutrum. Aenean volutpat scelerisque nisi eu sagittis. Nunc venenatis laoreet erat, non auctor massa aliquam in. Nullam sollicitudin leo consectetur lorem tincidunt euismod. Aliquam suscipit vulputate felis ac venenatis. Maecenas gravida facilisis lorem elementum lobortis. Vestibulum quis neque rhoncus, blandit nisi sit amet, rhoncus eros. Etiam quis tempus dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;";
var loremTwo = "Nunc id turpis eget massa ornare tincidunt. Mauris et suscipit metus. Donec venenatis consequat convallis. Donec aliquam ex sit amet ante sollicitudin elementum. Maecenas iaculis tempus luctus. Sed rhoncus a nunc vel molestie. Etiam scelerisque, elit quis vehicula dapibus, neque ligula tristique neque, ac accumsan dui odio at quam.";
var loremThree = "Suspendisse eu lacinia arcu. Nunc id consectetur eros. Quisque posuere turpis lacus, vel sagittis sem finibus ac. Praesent vulputate felis quis mauris ornare tristique. Mauris tempus in nulla vitae imperdiet. Donec in felis eu elit pharetra ultrices ac in justo. Praesent lacinia convallis congue. Nullam quis nibh turpis. Aenean vehicula auctor eros, in faucibus metus scelerisque sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultricies ac velit ac mattis. Nulla facilisi. Pellentesque condimentum tincidunt ipsum eget sollicitudin. Etiam ornare ante at ex convallis, at semper eros commodo.";

let arr = [loremOne, loremTwo , loremThree];
var wordAmt = 1;
for (let indexOne = 0; indexOne < arr.length; indexOne++) {
  for (let indexTwo = 0; indexTwo < arr[indexOne].length; indexTwo++) {
    if(loremOne[indexTwo] === " "){
      wordAmt++;
    }
  }
}

var etAmt = 0;
for (let indexOne = 0; indexOne < arr.length; indexOne++) {
  for (let indexTwo = 0; indexTwo < arr[indexOne].length; indexTwo++) {
    if(loremOne[indexTwo] === "e" && loremOne[indexTwo+1] === "t"){
      etAmt++;
    }
  }
}


console.log({wordAmt});
console.log({etAmt});


var phraceToCheck = "abccccba";
for (let i = 0; i <= phraceToCheck.length ; i++) {
  if(phraceToCheck.charAt(i) === phraceToCheck.charAt(phraceToCheck.length-1-i)){
    if(i === phraceToCheck.length){
      console.log("Palindrome");
    } 
  }
  else{
    console.log("Not a Palindrome");
    break;
  }
}



