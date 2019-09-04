<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
# Prisma Skeleton Starter

An opinionated but bare bones Gatsby Starter.

Demo: https://prisma-ph-gatsby-starter.netlify.com/

Features Included:
- Prismic CMS
- Styled Components
- Search
- Netlify for hosting

Components:
- Header
- Layout
- Search
- SEO

## Install 

1. Start New Gatsby Project
``` 
gatsby New https://github.com/PHironaka/Gatsby-Default-Prisma-Starter 
```
2. Install dependencies
``` 
yarn
```
3. Assuming you have signed up for a Prismic Account, you need to create a new prismic repo. Once created, click into Settings in the bottom left of the screen. 

From Settings, select API & Security and fill out the Application Name. The callback URL can be left blank. Once you've entered the name, select Add This Application. 

4. Once you've completed step 3, a Secret Access token will be generated in Prismic. Copy and paste that key into a file titled `.env.development` in the root directory of your Gatsby project folder (if you want to test a local build of your project, also create `.env.production` in the same location.)

5. If you plan on deploying your Gatsby site to Netlify, follow the following steps:
    1. Deploy site & sync w/git repo
    2. Go to Settings > Build & Deploy > Environment
    3. Create a new environment and title it `API_KEY`. Drop in the same access token you have set up with your .env file.


## Project Scaffold

A quick look at the top-level files and directories you'll see in this starter

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md





## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/PHironaka/Gatsby-Default-Prisma-Starter)

<!-- AUTO-GENERATED-CONTENT:END -->
