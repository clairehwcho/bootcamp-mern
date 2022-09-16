const mongoose = require('mongoose');

const dbName = "team_manager"

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Established a connection to ${dbName}`);
    })
    .catch((error) => console.log(`Something went wrong when connecting to ${dbName}:`, error)
    );