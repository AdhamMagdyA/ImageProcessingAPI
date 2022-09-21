# ImageProcessingAPI

## Table of Contents

* [Description](#Description)
* [Technologies](#Technologies)
* [Instructions](#Instructions)
* [Endpoints](#Endpoints)
* [Footer](#Footer)

## Description

Node.js application that uses [sharp](https://www.npmjs.com/package/sharp) to resize images. the application is built as an API service using the Express.js framework.

## Technologies
- Node
- Express
- Sharp

## Instructions

1. clone the project
    * `git clone https://github.com/AdhamMagdyA/ImageProcessingAPI.git`
    * `cd landing-page`
2. install dependencies
    * `npm install`
3. build & run
    * `npm run build`
    * `npm start`
4. important scripts
    * test the jasmine specs `npm test`
    * run the linter `npm run lint`
    * fix the linter issues `npm run lint:f`
    * run the development version with nodemon `npm run dev`

## Endpoints
 **GET `api/image`**
- **Parameters**

| Name | Required |  Type   | Description |
| -------------:|:--------:|:-------:| ------------|
|`filename` | required | string  | the name of the desired image in `assets/full` directory |
|`width` | required | number  | the desired width of the image |
|`height` | required | number | the desired height of the image |

- **Example**
`http://localhost:3000/api/image?filename=fjord&width=200&height=200`
## Footer
Dont forget to leave a star if you like the repository. 😉
check my [profile](https://github.com/AdhamMagdyA) for more repositories. 🤩
