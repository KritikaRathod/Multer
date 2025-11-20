// import express from "express";
// import multer from "multer";

// let app = express();
// app.set("view engine", "ejs");


// let uploadr = multer({ dest: "./uploads" });

// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.post("/form", uploadr.single("file"), (req, res) => {
//     res.send("ok");
// });

// app.listen(3000, () => console.log("server is on"));
import express from "express";
import multer from "multer";
import path from "path";

let app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", "./views");

// Multer custom storage
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads"); // folder jaha file save hogi
    },

    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname); // file ka extension (.jpg/.png/.pdf)
        let uniqueName = file.fieldname + "-" + Date.now() + ext;
        cb(null, uniqueName);
    }
});

let uploadr = multer({ storage: storage });

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.post("/form", uploadr.single("file"), (req, res) => {
    res.send("File uploaded with custom name!");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
