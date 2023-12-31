# Vue Page Tiles

**This package is still a work in progress and is not ready to be used in a real-life project**

This package let's you setup a Vue project where a user can generate page content interactively, save the data as JSON and display the content. This makes it super easy to create websites for clients who want the ability to update their content frequently without having to know a single line of code.

## Tiles in the package

### Currently available:

- Headings (h1-h6)
- Paragraph
- Columns
- Vertical spacer
- Banners
- Accordions

### Coming soon:

- Media (Images & videos)
- Tables

## Installation and usage

You can install the package either through Yarn or NPM

```
$ yarn add vue-page-tiles
$ npm install vue-page-tiles
```

### How to use

The package exports 2 main components, `<PageTiles />` and `<PageTileEditor />`. In addition, all tile-components are exported.

#### Project configuration

**IMPORTANT:** For the package to work correctly you need to globally register the tile components from the package in your consuming project. There are 2 scenarios to consider:

1. Your application will contain both the tile-displayer and the tile-editor inside the same project.
2. You will split the tile-displayer and tile-editor into two separate projects. For example as a client-facing site and a separate admin site.

##### Scenario 1

For **scenario 1**, you will only need to globally register the display components. These can be imported from `vue-page-tiles/display`, then looped over and registered in accordance with your framework.

##### Scenario 2

For **scenario 2**, you will have to register all components globally, as you would want to both edit and display the tiles. For this you can just import all components straight from the `vue-page-tiles` library, loop over them and register them in accordance with your framework.

#### How to display page content

First, create the reactive object which will hold the page content, it must have a property called "content" which should be set to an empty array as so:

```
import {reactive} from 'vue'

const page = reactive({
   content: []
})
```

An identical reactive object will be used when generating the page content as well, so if you've combined both the editor and displayed content into the same project make sure to create the reactive object somewhere both components can access it.
Proceed to insert the `<PageTiles />` component wherever you want the page content to be displayed, and pass the reactive object you just created as a prop called "page":

```
<PageTiles :page='page' />
```

The `<PageTiles />` component exposes a slot named "no-content" which can be used to display a custom message or loading component when there is no page content. By default it displays a message saying "No page content yet".

#### How to generate page content

Simply add the `<PageTileEditor />` wherever you want the user to be able to generate content, and bind the content array within the reactive object you created earlier with v-model:

```
<PageTileEditor v-model='page.content' />
```

#### IMPORTANT! Including styles

Remember to include the generated CSS from the package by importing it into your project's `main.css` file. Otherwise the package will not function correctly.

```
@import url("vue-page-tiles/dist/style.css");
```

#### Saving the page content

The `content` property of your reactive object is just an array of objects, so it can easily be stringified into JSON and saved to your database. When fetching the page content, just replace the `content` array in the reactive object and you're good to go!

### i18n

If your project uses any kind of internationalization, you can configure the package to allow users to add translated text for all components with written content. To do so;

1. Go to the reactive object containing the page content and add a property called `localeConfig`, which should be an object containing mandatory properties `locales` and `currLocale`. It should look like this:

```
const page = reactive({
  content: [],
  localeConfig: { locales: ["en", "es", "fr"], currLocale: "en" },
});
```

Alternatively, you can store the localeconfig object elsewhere in your application and pass it in where needed.

2. Pass the object to the `<PageTileEditor />` component in a prop called `locale-config` as so:

```
<PageTileEditor ... :locale-config='page.localeConfig' />
```

3. Pass the `currLocale` property to the `<PageTiles />` component in a prop called `locale`as so:

```
<PageTiles ... :locale='page.localeConfig.currLocale' />
```

By default a locale switcher component will be rendered inside the `<PageTileEditor />`, but if you wish to implement your own you can add the property `hideLocaleSwitcher: true` to the `localeConfig` object and switch the `currLocale` property manually.

Depending on your implementation you might also need access to the change event of when a locale is changed. The `<PageTileEditor />` component emits such an event at `@localeChanged` with a payload of the new locale code as a string.

Note that i18n support currently only applies to text content created by the user, and not package text such as tile names and placeholders.

### Optional TinyMCE integration

This package includes an optional integration with TinyMCE - one of the best WYSIWYG Rich Text Editors. Enabling it will replace standard input fields with a feature-rich text editor. To enable it;

1. Go to [https://www.tiny.cloud](https://www.tiny.cloud) and create a free account
2. Update your approved domains to include your site, and copy the generated API key
3. Store the API key in an environment variable, and pass it to the `<PageTileEditor />` component as so:

```
<PageTileEditor v-model='page.content' :tinymce-api-key='YOUR_API_KEY_VARIABLE' />
```

4. Add the prop `tinymce-enabled` to the `<PageTiles />` component as so:

```
<PageTiles :page='page' tinymce-enabled />
```

## Changelog

Details changed for each release are documented in the [release notes](https://github.com/dsilvaevje99/vue-page-tiles/releases/).
