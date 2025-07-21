// console.log("hi")

// for(let i=1 ; i<=100;i++)
// {
//     console.log(i);   
// }
// console.log("hi rea")

// let a = 1
// for(let i=1 ; i<=100000;i++)
// {
//    a*=i
//    console.log(i);
// }
// console.log(a);

// {
//    var a = 2
//    let b = 1
//    const c = 3 
// }
// console.log(a);
// console.log(b);
// console.log(c);

// let i=1

//  do{
//    console.log(i);
//    i++;
// }
// while (i<2)

// let i=0
// while (i<2) {
//    console.log(i);
//    i++;
// }  

// let i = {
//    1: "hello",
//    2: "hllo",
// }
// console.log(Object.keys(i))

// for (let i = 1; i <= 3; i++) {
//    console.log(i);

//    for (let j = 1; j <= 3; j++) {
//       console.log("hello");
//       for (let k = 5; k <= 8; k++) {
//          console.log(k)
//       }
//    }

// }

// const path = require('path');
// const filename =  Path.join('D:',' NJS ','Day 2' ,'one.js')
// console.log(filename)
// console.log(path.extname('one.js')); // .pdf

//new file creation
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'sales.txt');

fs.writeFile(filePath, 'Day 1 sales: ₹100', (err) => {
  if (err) console.log('❌ Error:', err);
  else console.log('✅ File created!');
});

//adding tha data

fs.appendFile(filePath, '\nDay 2 sales: ₹200', (err) => {
  if (err) console.log('❌ Error:', err);
  else console.log('✅ Data added!');
});

// readpana

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) console.log('❌ Error:', err);
  else console.log('📄 File content:\n', data);
});

// file irukkanu check pana

if (fs.existsSync(filePath)) {
  console.log('✅ File exists!');
} else {
  console.log('❌ File not found!');
}

// file delete panna

fs.unlink(filePath, (err) => {
  if (err) console.log('❌ Error deleting file:', err);
  else console.log('🗑️ File deleted!');
});

// folder create panna

const folderPath = path.join(__dirname, 'newFolder');

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log('📁 Folder created!');
} else {
  console.log('📂 Folder already exists!');
}

// empty folder delete pana

fs.rmdir(folderPath, (err) => {
  if (err) console.log('❌ Error:', err);
  else console.log('🗑️ Folder deleted!');
});

