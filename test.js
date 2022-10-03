import * as fs from 'fs';

fs.unlink('text.txt', function(error, data){
    if(error) console.log(error);
})