const mongoose = require("mongoose");
const Shcema = mongoose.Schema;

const listingSchema = new Shcema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/rocks-by-body-of-water-during-daytime-v17IhTzLICs",
        set: (v) => v === "" ? "https://unsplash.com/photos/rocks-by-body-of-water-during-daytime-v17IhTzLICs" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
