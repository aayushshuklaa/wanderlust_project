const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/booking"

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/booking");
}

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("I am root");
});

// INdex Route
app.get("/listings", async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// show Route
app.get("/listings/:id", async (req, res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listing/show.ejs", {listing});
});

// app.get("/listing", async(req,res)=>{
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "Beach",
//         price: 1200,
//         location: "Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successful test");
// });

app.listen(8080 ,()=>{
    console.log("server is listening");
});