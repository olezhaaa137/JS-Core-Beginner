function testBlockScope() {
    {
        var xVar = "sometextvar";
        let xLet = "sometextlet";
        const xConst = "sometextconst";

        console.log(xVar); 
        console.log(xLet); 
        console.log(xConst); // Выведет: Variable declared with const
    }

    console.log(xVar); 
    //console.log(xLet); //  xLet is not defined
    //console.log(xConst); //  xConst is not defined
}

testBlockScope();