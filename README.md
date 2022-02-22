<h1 align="center"><img src="https://assets.infyom.com/open-source/infyom-logo.png" alt="InfyOm"></h1>

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

## Support Us

We have created [14+ Laravel packages](https://github.com/InfyOmLabs) and invested a lot of resources into creating these all packages and maintaining them.

You can support us by either sponsoring us or buying one of our paid products. Or help us by spreading the word about us on social platforms via tweets and posts.

### Buy our Paid Products

[![InfyCare](https://assets.infyom.com/open-source/new/infycare-banner.png)](https://1.envato.market/rnJ2RQ)

You can also check out our other paid products on [CodeCanyon](https://1.envato.market/BXAnR1).

### Sponsors

[Become a sponsor](https://opencollective.com/infyomlabs#sponsor) and get your logo on our README on Github with a link to your site.

<a href="https://opencollective.com/infyomlabs#sponsor"><img src="https://opencollective.com/infyomlabs/sponsors.svg?width=890"></a>

### Backers

[Become a backer](https://opencollective.com/infyomlabs#backer) and get your image on our README on Github with a link to your site.

<a href="https://opencollective.com/infyomlabs#backer"><img src="https://opencollective.com/infyomlabs/backers.svg?width=890"></a>

### Follow Us

- [Twitter](https://twitter.com/infyom)
- [Facebook](https://www.facebook.com/infyom)
- [LinkedIn](https://in.linkedin.com/company/infyom-technologies)
- [Youtube](https://www.youtube.com/channel/UC8IvwfChD6i7Wp4yZp3tNsQ)
- [Contact Us](https://infyom.com/contact-us)

## Made with InfyOm Generator

Also, Do not forget to add your website to [Made with InfyOm Generator List](https://github.com/InfyOmLabs/laravel-generator/blob/develop/made-with-generator.md) list.

## Security

If you discover any security-related issues, create an issue using the issue tracker.

## Credits

- [InfyOm Technologies](https://github.com/infyomlabs)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
