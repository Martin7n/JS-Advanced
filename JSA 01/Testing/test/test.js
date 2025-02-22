// import {sum} from "../index.js"
import { isSymmetric } from "../symmetry.js"
import { expect } from "chai";

// describe('Sum', () =>
// {
//     it("Should return the numbers sum", ()=>{
//         const input = [1, 2, 3, 4, 5]
//         const expected = 15
//         const actual = sum(input); 

//         expect(actual).to.equal(expected)

//     });

// })




describe('Sum', () =>
{
    it("Should return False", ()=>{
        const input = [1,2,3,3,2,1]
        const expected = false
        const actual = isSymmetric(input)
    
        expect(actual).to.be.true;

    });

})