require('dotenv').config();
import { Request, Response } from "express";
import { user, articles, links, menu } from './data';

const express = require('express')
const app = express()
const port = 3333;

app.use(express.json());

app.get('/user', (req: Request, res: Response) => {
  const data = {
    user: user.data,
    links: links.data,
    menu: menu.data,
  };

  res.json(data);

})

app.get('/posts', (req: Request, res: Response) => {
  res.json(articles.data)
})

app.get('/post/:slug', (req: Request, res: Response) => {
  const { slug } = req.params;
  if(slug){
    const post = articles.data.find((post) => post.slug === slug);
    if(post){
      res.json(post);
    }
  }
  res.status(404).send();
})

app.listen(port, () => {
  console.log(` ⚡️ [server]: Server is running at https://localhost:${port}`)
})
