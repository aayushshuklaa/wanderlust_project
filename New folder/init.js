const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=>{
        console.log("Connection successful");
    })
    .catch((err)=>{
        console.log(err);
    });

    async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    }

    let allChats=[
        
            {
                from: "Arjun",
                to: "Maya",
                msg: "Can you share the project files?",
                created_at: new Date()
            },
            {
                from: "Sofia",
                to: "Karan",
                msg: "Please send me your notes.",
                created_at: new Date()
            },
            {
                from: "Ravi",
                to: "Anita",
                msg: "Did you finish the assignment? Share it with me.",
                created_at: new Date()
            },
            {
                from: "Lila",
                to: "Nikhil",
                msg: "I need your presentation slides.",
                created_at: new Date()
            },
            {
                from: "Tariq",
                to: "Saanvi",
                msg: "Could you send me the research paper?",
                created_at: new Date()
            },
            {
                from: "Deepa",
                to: "Raj",
                msg: "Please forward me your exam results.",
                created_at: new Date()
            },
            {
                from: "Ayaan",
                to: "Zara",
                msg: "Send me the latest updates on the project.",
                created_at: new Date()
            },
            {
                from: "Vikram",
                to: "Pooja",
                msg: "Can you share the feedback from the last meeting?",
                created_at: new Date()
            },
            {
                from: "Sneha",
                to: "Dev",
                msg: "Please send the files by tomorrow.",
                created_at: new Date()
            },
            {
                from: "Kiran",
                to: "Tanya",
                msg: "I need your input on the report.",
                created_at: new Date()
            },
        
];

Chat.insertMany(allChats);

    
    // chat1.save()
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });