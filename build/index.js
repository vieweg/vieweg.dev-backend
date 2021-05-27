"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const data_1 = require("./data");
const express = require('express');
const app = express();
const port = 3333;
app.use(express.json());
app.get('/user', (req, res) => {
    const data = {
        user: data_1.user.data,
        links: data_1.links.data,
        menu: data_1.menu.data,
    };
    res.json(data);
});
app.get('/posts', (req, res) => {
    res.json(data_1.articles.data);
});
app.get('/post/:slug', (req, res) => {
    const { slug } = req.params;
    if (slug) {
        const post = data_1.articles.data.find((post) => post.slug === slug);
        if (post) {
            res.json(post);
        }
    }
    res.status(404).send();
});
app.listen(port, () => {
    console.log(` ⚡️ [server]: Server is running at https://localhost:${port}`);
});
