import * as fs from 'fs';

let file: string = fs.readFileSync("build/stdin_1001", "utf8");
let input: string[] = file.split("\n");

let A: number = parseInt(input.shift() as string);
let B: number = parseInt(input.shift() as string);

let X: number = A + B; 

console.log(`X = ${X}`);

