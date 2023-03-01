// A future age calculator 

let yearOfBirth = prompt('what is your year of birth ?');
let yearFuture = prompt('you want to know your age in which year ?');
let age =yearFuture-yearOfBirth;
let NotPossible= 125;

if(yearFuture>yearOfBirth && age<NotPossible){
    alert('You will be '+ age +' years old in '+ yearFuture)
}
else if (age>NotPossible) {
    alert('i think you are a vampire ')
}
else {
    alert('Please check again we are not using the stars to calculate')
}


// A dog age to human years calculator

const dogAge = prompt('how old is your dog ?'); 
const dogYearFuture = prompt('you want to know your dog age in year ..');
const dogYearOfBirth =2023-dogAge; // next year need an update XD 
const dogAgeInDogYears = dogYearFuture - dogYearOfBirth;
const dogAgeInHumanYears = (dogAge-2)*4+21; //the most close dog year calculator formula
const optionalChoice = prompt('would you like to know your dog age in dog year ? write Y or N' );
const shouldShowResultInHumanYears = 'Your dog will be '+ dogAgeInHumanYears+ ' human years old in '+ dogYearFuture ;
const shouldShowResultInDogYears = 'Your dog will be '+ dogAgeInDogYears + ' years old in '+ dogYearFuture;
const optionYes ='y';
if (optionalChoice==optionYes){
    alert(shouldShowResultInDogYears)
    alert(shouldShowResultInHumanYears)
}
else {
    alert(shouldShowResultInHumanYears)
} // a little bit outside the homework task , just to explore the coding.


// A house price estimator

const peter = {
    wide: 8,
    deep:10,
    high:10,
    garden:100,
    costs:2500000,
}
const julia = {
    wide: 5,
    deep:11,
    high:8,
    garden:70,
    costs:1000000,
}
const peterHouseVolume = peter.deep*peter.high*peter.wide;
const juliaHouseVolume=julia.deep*julia.high*julia.wide;
const peterHousePrice = peterHouseVolume*2.5*1000 + peter.garden*300;
const juliaHousePrice = juliaHouseVolume*2.5*1000 + julia.garden*300;
if (peterHousePrice<peter.costs){
    console.log('peter got tricked')
}
else{
    console.log('peter have a good price on his house')
}
if (juliaHousePrice<julia.costs){
    console.log('julia got scammed')
}
else{
    console.log('julia have a good price on her house')
}
   
