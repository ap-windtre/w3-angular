(function() {
    let isDone: boolean = false;
    let decimal: number = 6;
    let color: string = "blue";
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;    

    function doNothing(): void {
        console.log('Inutile');
    }

    function printEverything(param: any) {
        console.log(param);
    }
})();