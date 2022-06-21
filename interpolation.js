// Interpolation means the use of backtics for concatinating many things in JS

let firstName = 'Harry';
let lastName = 'Potter';
let occupation = 'wizard';
let job_location = 'Hogwartz';
let pet = 'Hedwig';
let otherSkills = 'talk to snakes';

let sentence = `
Hello, I am ${firstName} ${lastName} and I am a ${occupation} at ${job_location}. I have a pet owl named ${pet} and I can ${otherSkills}
                `;

console.log(sentence);
console.log('');