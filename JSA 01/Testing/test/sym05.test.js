// import {sum} from "../index.js"
import { isSymmetric } from "../symmetry.js"
import { expect, assert } from "chai";



describe('Symmetry', () =>
{

    it("Equal halfs should return True", ()=>{
        const input = [1,2,3,3,2,1]
        const actual = isSymmetric(input)
    
        expect(actual).to.be.true;

    });


    it("Unequal halfs return False", ()=>{
        const input = [1,2,3,4,2,1]
        const actual = isSymmetric(input)
    
        expect(actual).to.be.false;

    });



    it("Odd elements should return True", ()=>{
        const input = [1,2,3,2,1]
        const actual = isSymmetric(input)
    
        expect(actual).to.be.true;

    });


    it("1 element should return True", ()=>{
        const input = ["a"]
        const expected = false
        const actual = isSymmetric(input)
    
        expect(actual).to.be.true;

    });
    
    it("No elements should return True", ()=>{
        const input = ["a"]
        const actual = isSymmetric(input)
    
        expect(actual).to.be.true;

    });

    it("NotArray return False", ()=>{
        const input = "africa"
        const actual = isSymmetric(input)
    
        expect(actual).to.be.false;

    });


    it('return true if is symmetric string array', ()=>{
        
        const expected = true
        const actual = isSymmetric(['yes','no','yes'])
    
        expect(actual).to.be.true;
    });
})



describe('Symmetry2', () =>
    {
        it("Should return True", ()=>{
            const input = [1,2,3,3,2,1]
            const expected = false
            const actual = isSymmetric(input)
        
            expect(actual).to.be.true;
    
        });
    
    })



describe('Symmetry Checker2', ()=>{
    it('return true if is symmetric', ()=>{
        assert.isTrue(isSymmetric([1,0,0,1]));
    });
    it('return false if is not an array', ()=>{
        assert.isFalse(isSymmetric('not array'));
    });

    it('return false if is not symmetric', ()=>{
        assert.isFalse(isSymmetric([1,2,3]));
    });

    it('return true if is symmetric odd-length', ()=>{
        assert.isTrue(isSymmetric([1,0,1]));
    });

    it('return true if is symmetric string array', ()=>{
        assert.isTrue(isSymmetric(['yes','no','yes']));
    });

    it('return true if is symmetric string array', ()=>{
        assert.isTrue(isSymmetric(['yes','no','yes']));
    });

    it('return false if is not symmetric only type is different', ()=>{
        assert.isFalse(isSymmetric([1,2,'1']));
    });
});