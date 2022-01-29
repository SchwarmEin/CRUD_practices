const mongoose = require('mongoose');
mongoose.connect('[[mongo db altas connection]]', {useNewUrlParser:true}, (err) =>{
    if (!err) {
        console.log('MongoDB Connection Succeeded!!');    
    } else {
        console.log('Error in DB connection :' + err)
    };
});

require('./employee_model');