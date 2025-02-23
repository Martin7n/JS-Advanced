import {sum} from "../index.js"
import { expect } from "chai";

describe('Sum', () =>
{
    it("Should return the numbers sum", ()=>{
        const input = [1, 2, 3, 4, 5]
        const expected = 15
        const actual = sum(input); 

        expect(actual).to.equal(expected)

    });

})


describe('Sum of string-digits', () =>
{
    it("Should return True", ()=>{
        const input = ["1","2","3"]
        const expected = 6
        const actual = sum(input)
    
        expect(actual).to.equal(expected)

    });

})


describe('Sum of floats', () =>
    {
        it("Should return True", ()=>{
            const input = ["1.2","2.2"]
            const expected = 3.4
            const actual = sum(input)
        
            expect(actual.toFixed(2)).to.equal(expected.toFixed(2))
    
        });
    
    })