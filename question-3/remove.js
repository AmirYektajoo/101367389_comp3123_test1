const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDirectory)) {
    const logFiles = fs.readdirSync(logsDirectory);

    if (logFiles.length > 0) {
        logFiles.forEach((file) => {
            const filePath = path.join(logsDirectory, file);
                console.log(`delete files...${file}`);
                fs.unlinkSync(filePath);
        });
    }

} else {
  console.log('Logs directory does not exist.');
}

console.log('Remove operation completed.');
