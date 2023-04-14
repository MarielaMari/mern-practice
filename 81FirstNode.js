
const fs = require('fs');

const userName = 'Mari';

fs.writeFile('user-data.txt', 'Name: ', + userName, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Wrote File")
})

