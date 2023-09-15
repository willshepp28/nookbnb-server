const express = require('express');
const application = express('express');


const PORT = process.env.PORT || 5001;

application.get('/', (request, response) => {
    return response.json({ message: 'Success'})
});

if(process.env.NODE_ENV !== 'test') {
    application.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
}

module.exports = application;