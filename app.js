const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];// slice two arguement and 1 name 2 git

//const [name, github] = profileDataArgs;// assignm elements of an array to variable names in a single expression


    //console.log(name, github);
    //console.log(generatePage(name,github));
/**The first argument is the file name that will be created, or the output file. 
 * The second argument is the data that's being written: the HTML string template. 
 * The third argument is the callback function that will handle any errors as well as the success message. */
fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});