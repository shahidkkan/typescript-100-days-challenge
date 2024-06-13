/*******************
 * TYPE ASSERTIONS *
 *******************/

let value :any = 'shahid';

console.log((value as string).length);

console.log((<string>value).length)