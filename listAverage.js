function list_average(numlist) {
    var sum = 0;
    for(var num = 0, list_size = numlist.length; num < list_size; num++){ //iterates over the given list looking at each individual element
        sum += numlist[num]; //adds together each element in the list
    }
    var average = sum/list_size; //takes the average by dividing the sum of all the elments by the number of elements
    return "The average for this list of numbers is " + average
}
console.log(list_average([1, 2, 3, 4]));
var x = [10, 20, 30, 40, 50, 60];
console.log(list_average(x));
var y = list_average([20, 40, 60, 80, 100]);
console.log(y);