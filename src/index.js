module.exports = function toReadable (number) {

const lessThanTwenty = { 
	0 : 'zero',
    1 : 'one', 
	2 : 'two',
	3 : 'three',
	4 : 'four',
	5 : 'five',
	6 : 'six',
	7 : 'seven',
	8 : 'eight',
	9 : 'nine',
	10 : 'ten',
	11 : 'eleven',
	12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
}

const lessThanHundred = {
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
}



const splitArray = number.toString().split(''); //parse to array

    if (number < 20) {
        return lessThanTwenty[number]   // cases up to twenty
    }


    else if (number >= 20 && number < 100) {
        if (splitArray[splitArray.length - 1] === '0') { // cases up to one hundred
            return lessThanHundred[number]
        }

        else  {
            let remainder = number % 10;
            let numberNum = splitArray[0]+'0'
            return lessThanHundred[numberNum] + ' ' + lessThanTwenty[remainder]
        } 
    }

    else if (number >= 100 && number < 1000) {  // cases up to one thousand
        let remainderHundred = number % 100;
        let remainderTen = remainderHundred % 10;     
        let tempVar = remainderHundred - remainderTen;

        if (splitArray[1] === '0' && splitArray[2] === '0') {   //300,400,500
            return lessThanTwenty[splitArray[0]] + ' hundred'    
        }

        else if (splitArray[1] === '1' && splitArray[2] === '0') {
            return lessThanTwenty[splitArray[0]] + ' hundred ' + lessThanTwenty[10]; //110, 310, 210 etc
        }

        else if (splitArray[2] === '0') {
            return lessThanTwenty[splitArray[0]] + ' hundred ' + lessThanHundred[remainderHundred] //320, 250 etc
        } 

        else if (splitArray[1] === '0' && splitArray[2] !== '0') {   //302,403,505
            return lessThanTwenty[splitArray[0]] + ' hundred ' +  lessThanTwenty[remainderTen]
        }

        else if (splitArray[1] === '1' && splitArray[2] !== '0') {  // 319, 216 etc
            return lessThanTwenty[splitArray[0]] + ' hundred ' + lessThanTwenty[parseInt(splitArray[1]+splitArray[2])];
        }

        else if (splitArray[1] !== '0' && splitArray[1] !== '1' && splitArray[2] !== '0') {   //322,423,525
            return lessThanTwenty[splitArray[0]] + ' hundred ' + lessThanHundred[tempVar] + ' ' + lessThanTwenty[remainderTen];
		}
		
    }


}

