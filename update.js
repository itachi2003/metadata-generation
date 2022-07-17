const fs = require("fs");
const args = process.argv.slice(2);
const inputFolder = args[0];
const dir = `${__dirname}/${inputFolder}/`;
const inputFiles =fs.readdirSync(dir).sort();

inputFiles.forEach((file) => {
    let id = file.split(".").shift();
    let data = JSON.parse(fs.readFileSync(`${dir}/${file}`   ));

    data.tokenId = 'edition'
    data.name = `star ${id}`;
    data.image = `ipfs://QmZj7aNaNhKaJUbHEmk6RnuYNiS8dHntheh2kW5d2HV9SW/${id}.png`;

    fs.writeFileSync(`${dir}/${file}` , JSON.stringify(data, null, 2));
    console.log(data);



});
