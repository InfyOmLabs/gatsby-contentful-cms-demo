# Gatsby Contentful CMS Demo

This repo contains how you can use [Contentful](https://www.contentful.com/) CMS with [Gatsby](https://www.gatsbyjs.com/) to manage content in Contentful CMS while generating static site with Gatsby.

### Setup Contentful

- Create your account in [Contentful](https://www.contentful.com/sign-up/).
- Create content model following types :-
    - Title
        - Add `Title` model in two filed name `title` and `short_description`

    - Heading
        - Add `Heading` model in two filed name `title` and `description`

    - Service
        - Add `Service` model in two filed name `name` and `description`

    - About
        - Add `About` model in two filed name `title` and `description`

    - Team
        - Add `Team` model in four filed name `name`, `position`, `description` and `image`


- Create Content following types :-

    - Select content type `Title`
        - Add `title` filed in title and `short_description` filed in description then click on published

    - Select content type `Heading`
        - Add `title` filed in title and `description` filed in description then click on published

    - Select content type `Service`
        - Add `name` filed in name and `description` filed in description then click on published
        - create three entries (name and description)

    - Select content type `About`
        - Add `name` filed in name and `description` filed in description then click on published

    - Select content type `Team`
        - Add `name` filed in name, `position` filed in position, `description` filed in description and `image` filed in import image  then click on published
        - create four entries (name, position, description and image)

### Process to setup project :

- Clone the repo
- Open your terminal
- Run `npm install`
- Open contentful
    - click on `Settings` menu
    - click on `API keys`
    - click example key 1
    - copy `Space ID` and `Content Delivery API - access token`
- repo in open gatsby-config.js file
- find`gatsby-source-contentful` and paste your `spaceId` in your Space ID and `accessToken` in your Content Delivery API - access token
- run `npm run develop` OR `gatsby develop`
- Browser in check `http://localhost:8000/`
