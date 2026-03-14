import { describe, expect, test } from "vitest";
import { arrayFromLowToHigh, generatePassword } from "../src/passwordUtils";

describe("should return an array of numbers between low and hight",()=>{
    test("should return an array of type numbers",()=>{
        const arr=arrayFromLowToHigh(1,50);
        arr.forEach(num=>expect(typeof num).toBe("number"));
    }),
    test("should return an empty array if low is greater than high",()=>{
        const arr=arrayFromLowToHigh(50,1);
        expect(arr).toEqual([]);
    }),
    test("should return an ordered array of numbers between low and high",()=>{
        const low=Math.floor(Math.random()*50);
        const high=low+Math.floor(Math.random()*50)+1;
        const arr=arrayFromLowToHigh(low,high);
        expect(arr[0]).toBe(low);
        expect(arr[arr.length-1]).toBe(high);
        for(let i=1;i<arr.length;i++){
            expect(arr[i]).toBe(arr[i-1]+1);
        }
    })
})

describe("should generate a password based on the given criteria", ()=>{
    test("password should be of type string",()=>{
        const password=generatePassword(10,false,false,false);
        expect(typeof password).toBe("string");
    }),
    test("password should be of the correct length",()=>{
        for (let it=0;it<100;it++){
            const length=Math.floor(Math.random()*50)+1;
            const password=generatePassword(length,false,false,false);
            expect(password.length).toBe(length);
        }
    }),
    test("password should be empty if length is 0",()=>{
        const password=generatePassword(0,false,false,false);
        expect(password).toBe("");
    }),
    test("password should contain only lowercase letters if no options are selected",()=>{
        const password=generatePassword(50,false,false,false);
        expect(password).toMatch(/^[a-z]+$/);
    }),
    test("password should contain uppercase letters if includeUppercase is true",()=>{
        const password=generatePassword(50,true,false,false);
        expect(password).toMatch(/[A-Z]/);
    }),
    test("password should contain numbers if includeNumbers is true",()=>{
        const password=generatePassword(50,false,true,false);
        expect(password).toMatch(/[0-9]/);
    }),
    test("password should contain symbols if includeSymbols is true",()=>{
        const password=generatePassword(50,false,false,true);
        expect(password).toMatch(/[^a-zA-Z0-9]/);
    })

})