import express from "express";
import multer from "multer";

let app = express();
app.set("view engine", "ejs");


let uploadr = multer({ dest: "./uploads" });

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/form", uploadr.single("file"), (req, res) => {
    res.send("ok");
});

app.listen(3000, () => console.log("server is on"));
