'use strict';

import { expect } from 'chai';
import { aritGeo } from '../app/index.js';

describe("aritGeo() for edge cases", () => {
    it("empty array [] ", () => {
        expect(aritGeo([])).to.equal(0);
    });

    it("insufficient args array [1,4] ", () => {
        expect(aritGeo([1,4])).to.equal('Array should have a minimum of 3 numbers');
    });
 });

describe("aritGeo() for Arithmetic arrays", () => {
    it("[5, 7, 9, 11, 13, 15]", () => {
        expect(aritGeo([5, 7, 9, 11, 13, 15])).to.equal('Arithmetic');
    });

    it("[-1, 3, 7, 11]", () => {
        expect(aritGeo([-1, 3, 7, 11])).to.equal('Arithmetic');
    });

    it("[2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32]", () => {
        expect(aritGeo([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32])).to.equal('Arithmetic');
    });
 });


 describe("aritGeo() for Geometric arrays", () => {
    it("[3, 15, 75, 375, 1875]", () => {
        expect(aritGeo([3, 15, 75, 375, 1875])).to.equal('Geometric');
    });

    it("[1, 3, 9, 27, 81]", () => {
        expect(aritGeo([1, 3, 9, 27, 81])).to.equal('Geometric');
    });

    it("[2, 6, 18, 54]", () => {
        expect(aritGeo([2, 6, 18, 54])).to.equal('Geometric');
    });

    it("[4, 8, 16, 32, 64, 128, 256, 512, 1024]", () => {
        expect(aritGeo([4, 8, 16, 32, 64, 128, 256, 512, 1024])).to.equal('Geometric');
    });
 });

 describe("aritGeo() for invalid array (neither arithmetic nor geometric)", () => {
    it("[5,4,1,5,4]", () => {
        expect(aritGeo([5,4,1,5,4])).to.equal(-1);
    });
    
    it("[50,12,13,14]", () => {
        expect(aritGeo([50,12,13,14])).to.equal(-1);
    });

    it("[12,90,105]", () => {
        expect(aritGeo([12,90,105])).to.equal(-1);
    });

    it("[10,-5,10,2]", () => {
        expect(aritGeo([10,-5,10,2])).to.equal(-1);
    });

    it("[-50,-19,-20,-18]", () => {
        expect(aritGeo([-50,-19,-20,-18])).to.equal(-1);
    });

    it("[2,23,16,198,0]", () => {
        expect(aritGeo([2,23,16,198,0])).to.equal(-1);
    });

    it("[10,1,0,1,0]", () => {
        expect(aritGeo([10,1,0,1,0])).to.equal(-1);
    });

    it("[5, 7, 9, 13, 15]", () => {
        expect(aritGeo([5, 7, 9, 13, 15])).to.equal(-1);
    });

    it("[1, 3, 27, 81]", () => {
        expect(aritGeo([1, 3, 27, 81])).to.equal(-1);
    });
 });