var fs = require('fs');

//Rename file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err)  
{
    if (err) throw err;

    console.log('File Renamed!');
});

//Delete file
fs.unlink('mynewfile2.txt', function (err) 
{
  if (err) throw err;

  console.log('File deleted!');
});