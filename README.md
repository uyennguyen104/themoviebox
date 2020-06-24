# themoviebox
This is a simple web application to display the movie information getting from TheMovieDb

## Features

Using VueJS as a library javascript, SCSS as a CSS preprocessor.

- Create the layout exactly like the homepage design with the assets required.
- Font-family is Helvetica
- The top banner is a carousel (a slideshow with 3 items)
- Request the Get Popular, Get Top Rated, Get Upcoming APIs and populate the data into the content grid view, scroll down the grid view to see more movies, select Popular/Top Rated/Upcoming to see the relevant content grid view.
- Request the Get Movie List or Get TV List APIs to get the genres and fill up to dropdown Genre
- The pages is responsive on different browsers

## Third parties

- element-ui https://element.eleme.io/
- lodash https://lodash.com/
- date-fns https://date-fns.org/


## Getting started

```bash
# install vue-cli globally
> npm install -g vue-cli
```

The stack is built using [vue-cli webpack](https://github.com/vuejs-templates/webpack) so to get started all you have to do is:

``` bash
# install dependencies
> npm install
# serve with hot reload at localhost:8080
> npm run serve
```

Other commands available are:

``` bash
# build for production with minification
npm run build

## To know

Current arbitrary choices are:

- Vuex modules for store
- Vue-axios for ajax requests
- 'nr' as prefix for components

These can be changed when the contributors reach a consensus.
