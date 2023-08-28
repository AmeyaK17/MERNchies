const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ameyakale:mernchies@cluster0.vl6npam.mongodb.net/mernchies?retryWrites=true&w=majority"

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {useNewUrlParser : true})
        console.log("Connected")
        const fetchedData = await mongoose.connection.db.collection("food-items")
        const data = await fetchedData.find({}).toArray()
        //console.log(data)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = mongoDB