const app = require("./app.js")

test("To make sure what is returned is not null", ()=> {
    expect(app.add(2, 1)).not.toBe(null);
})

describe("contains true/false test on same code", ()=> {   //*--  refactored
    test("A value that is truthy", ()=> {
        expect(app.trueValue).toBe(true);
    })
    test("A value that is truthy", ()=> {
        expect(app.trueValue).not.toBe(false);
    })
})

test("makes sure that the objects properties are equal", ()=> {
    expect(app.myFunc()).toEqual({age:32, name:"Bob"})
})

test("function that will return items in an array with 6 or more characters", ()=> {
    expect(app.sixGreater()).toHaveLength >= (6)
    // expect(app.sixGreater().length).toBe(6)
})

test("Convert a number to a string", ()=> {
    expect(typeof app.num2Str(22)).toBe("string")
})

test("Display the correct planet(Earth)", ()=> {
    expect(app.planetFunc(3)).toBe("Earth")
})

test("Count the amount of students present (true instances) in the class.", ()=> {
    expect(app.studFunc()).toBe(4)
})
