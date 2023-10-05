const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

process.chdir(logsDirectory);

const numLogFiles = 10;

for (let i = 0; i < numLogFiles; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `This is the content of file ${i}.`;

    fs.writeFileSync(fileName, fileContent);
}

for (let i = 0; i < numLogFiles; i++) {
    console.log(`log${i}.txt`);
}
