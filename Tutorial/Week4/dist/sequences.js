/*
Complete the following table when you submit this file:

Surname     | Firstname | email | Contribution% | Any issues?
=============================================================
Person 1... |           |       | 25%           |
Person 2... |           |       | 25%           |
Person 3... |           |       | 25%           |
Person 4... |           |       | 25%           |

complete Worksheet 4 by entering code in the places marked below...

For full instructions and tests open the file worksheetChecklist.html
in Chrome browser.  Keep it open side-by-side with your editor window.
You will edit this file (main.ts), save it, and reload the
browser window to run the test.
*/
//implement the function: 
function initSequence(transform) {
    // Your code here ...
    return function _next(initialValue) {
        return {
            value: initialValue,
            next: () => _next(transform(initialValue))
        };
    };
}
/*
    Exercise 2
 */
function map(func, seq) {
    // Your code here ...
    return {
        value: func(seq.value),
        next: () => map(func, seq.next())
    };
}
function filter(func, seq) {
    // Your code here ...
    return func(seq.value) ? {
        value: seq.value,
        next: () => filter(func, seq.next())
    } : filter(func, seq.next());
}
function take(amount, seq) {
    // gets the first n numbers of a sequence
    return amount ? undefined
        : {
            value: seq.value,
            next: () => take(amount - 1, seq.next())
        };
}
function reduce(func, seq, start) {
    // Your code here ...
    return seq ? reduce(func, seq.next(), func(start, seq.value)) : start;
    // return seq ? reduce(func, func(start, seq), seq.next) :start
}
/*
    Exercise 3
 */
function maxNumber(lazyList) {
    // ******** YOUR CODE HERE ********
    // Use __only__ reduce on the
    // lazyList passed in. The lazyList
    // will terminate so don't use `take`
    // inside this function body.
    return reduce(function (x, y) {
        return x > y ? x : y;
    }, lazyList);
}
function lengthOfSequence(lazyList) {
    // ******** YOUR CODE HERE ********
    // Again only use reduce and don't
    // use `take` inside this function.
    //    return reduce(function(a,b){
    return reduce((x, y) => x + 1, lazyList, 0);
}
// function maxNumber(seq : LazySequence<number>) : number {
//     // should return the largest number in a lazy sequence.
//     // acc is the current largest value
//     // Rachel I think it is "/g" that u must add to the end of the sed script cant really rmb
//     // But ye u gotta add something like that
//     return reduce((max, val) => max > val ? max : val, seq, seq.value) 
// }
// function lengthOfSequence(seq : LazySequence<T>):number{
//     return reduce((acc,_) =>acc+1 ,seq,0) 
// }
//    },lazyList)
/*
    Exercise 4
 */
//# sourceMappingURL=sequences.js.map