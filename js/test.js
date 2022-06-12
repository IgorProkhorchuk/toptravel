var links = document.getElementsByTagName("a");
for (i = 1; i <= links.length; i++) {

    console.log("this is link number" + i);

}

document.write("all links are looped");


var myAge = 21;

if (myAge > 40){
    document.write("you are over 40!")

} else if (myAge > 30){
    document.write("you are over 30!")

} else if (myAge >20){
    document.write("you are over 20!")
} else{
    document.write("you are not over 20!")
}

var age = 5;
while (age < 10) {
    document.write("your age is less than 10");
    age++;
}
document.write ("your are now over 10");

for (vosrast = 5; vosrast <10; vosrast++) {
    document.write("your age is less than 5");
}
document.write ("your are now over 5");

for (i = 0; i < 10; i++) {
    
    if(i === 5 || i === 3){

        continue;

    }
    
    console.log(i);

       if(i === 7){

        break;

    }
}
console.log("I have broken out of the loop");