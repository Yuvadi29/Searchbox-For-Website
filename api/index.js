
import express from "express";
const app = express();
import { Data } from "./data.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
    const { q } = req.query;

    //   const keys = ["first_name", "last_name", "email"];
    const keys = ["first_name", "last_name", "email", "company_name", "phone1", "phone2"];


    const search = (data) => {
        return Data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    q ? res.json(search(Data).slice(0, 10)) : res.json(Data.slice(0, 10));
});

app.listen(5000, () => console.log("API is working!"));

