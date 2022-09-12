// Import installed package from node_modules
const mongoose = require('mongoose');

// Normally the db name or connection string would go in a .env or config file
// that's git ignored so the prod app can choose a different name if needed.
const dbName = "jokes_api"

mongoose.connect(`mongodb://localhost/${dbName}`, {
    // These may not be needed in newest version?
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Established a connection to ${dbName}`);
    })
    .catch((error) => console.log(`Something went wrong when connecting to ${dbName}:`, error)
    );