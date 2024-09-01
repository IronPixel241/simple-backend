require('dotenv').config()
const express = require('express')

const app = express()   // Ek bohot powerful tool hai

const port = 3000

const githubData = {
  "login": "IronPixel241",
  "id": 113410259,
  "node_id": "U_kgDOBsKA0w",
  "avatar_url": "https://avatars.githubusercontent.com/u/113410259?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/IronPixel241",
  "html_url": "https://github.com/IronPixel241",
  "followers_url": "https://api.github.com/users/IronPixel241/followers",
  "following_url": "https://api.github.com/users/IronPixel241/following{/other_user}",
  "gists_url": "https://api.github.com/users/IronPixel241/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/IronPixel241/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/IronPixel241/subscriptions",
  "organizations_url": "https://api.github.com/users/IronPixel241/orgs",
  "repos_url": "https://api.github.com/users/IronPixel241/repos",
  "events_url": "https://api.github.com/users/IronPixel241/events{/privacy}",
  "received_events_url": "https://api.github.com/users/IronPixel241/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sounak Nandi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 34,
  "public_gists": 0,
  "followers": 18,
  "following": 20,
  "created_at": "2022-09-13T04:30:30Z",
  "updated_at": "2024-08-30T03:14:32Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github' , (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})