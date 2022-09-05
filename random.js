// upper value count
var value = 2.3;
var upper = Math.ceil(value);
console.log(upper);


// lower value count
var lower = Math.floor(value);
console.log(lower);

// random value count
var input = Math.random()*10;
var result = Math.round(input);
console.log(result);


// fix limit random value count
for(var i = 0; i<100; i++){
    if(i !== 0){
        var input =Math.random()*6;
    var result = Math.round(input);
    console.log(result);
    }
    
}
