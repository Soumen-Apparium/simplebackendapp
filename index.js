
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Soumen-Apparium",
  "id": 199339866,
  "node_id": "U_kgDOC-GvWg",
  "avatar_url": "https://avatars.githubusercontent.com/u/199339866?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Soumen-Apparium",
  "html_url": "https://github.com/Soumen-Apparium",
  "followers_url": "https://api.github.com/users/Soumen-Apparium/followers",
  "following_url": "https://api.github.com/users/Soumen-Apparium/following{/other_user}",
  "gists_url": "https://api.github.com/users/Soumen-Apparium/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Soumen-Apparium/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Soumen-Apparium/subscriptions",
  "organizations_url": "https://api.github.com/users/Soumen-Apparium/orgs",
  "repos_url": "https://api.github.com/users/Soumen-Apparium/repos",
  "events_url": "https://api.github.com/users/Soumen-Apparium/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Soumen-Apparium/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-02-15T07:48:11Z",
  "updated_at": "2025-09-06T10:17:35Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/aboutus',(req,res)=>{
   
    res.send('<h1>About Us Page</h1>')
})
app.get('/github',(req,res)=>{

    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

