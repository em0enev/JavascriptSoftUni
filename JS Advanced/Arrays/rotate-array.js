function solve(input) {
    let rotation = (input.pop() % input.length);
    
    for (let i = 0; i < rotation; i++) {
        let last = input.pop();
        input.unshift(last)
    }

    return input.join(" ")
}


console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
));