// const fs = require('fs');
// const yargs = require('yargs');

// // Define command-line arguments using yargs
// const argv = yargs
//   .command('add', 'Add a new note', {
//     title: {
//       describe: 'Title of the note',
//       demandOption: true, // Make this argument required
//       type: 'string' // Ensure this argument is a string
//     },
//     body: {
//       describe: 'Body of the note',
//       demandOption: true,
//       type: 'string'
//     }
//   })
//   .help()
//   .argv;

// // Check if the "add" command was used
// if (argv._[0] === 'add') {
//   const title = argv.title;
//   const body = argv.body;
//   // Read existing notes from a file (if it exists)
//   let notes = [];
//   try {
//     const data = fs.readFileSync('notes.json');
//     notes = JSON.parse(data);
//   } catch (e) {
//     // Do nothing if file does not exist
//   }

//   // Add the new note to the array
//   notes.push({ title, body });

//   // Write the updated notes to the file
//   const json = JSON.stringify(notes);
//   fs.writeFileSync('notes.json', json);

//   console.log('Note added successfully!');
// } else {
//   console.log('Invalid command');
// }

const fs = require('fs');
const yargs = require('yargs');

// Define command-line arguments using yargs
const argv = yargs
  .command('remove', 'Remove a note', {
    title: {
      describe: 'Title of the note',
      demandOption: true, // Make this argument required
      type: 'string' // Ensure this argument is a string
    }
  })
  .help()
  .argv;

// Check if the "remove" command was used
if (argv._[0] === 'remove') {
  const title = argv.title;

  // Read existing notes from a file (if it exists)
  let notes = [];
  try {
    const data = fs.readFileSync('notes.json');
    notes = JSON.parse(data);
  } catch (e) {
    // Do nothing if file does not exist
  }

  // Find the index of the note to remove (if it exists)
  const index = notes.findIndex(note => note.title === title);

  if (index !== -1) {
    // Remove the note from the array
    notes.splice(index, 1);

    // Write the updated notes to the file
    const json = JSON.stringify(notes);
    fs.writeFileSync('notes.json', json);

    console.log(`Note with title "${title}" removed successfully!`);
  } else {
    console.log(`Note with title "${title}" not found`);
  }
} else {
  console.log('Invalid command');
}






