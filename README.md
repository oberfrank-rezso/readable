# Readable: A Content and Comment App

A React.js content and comment web application built with `redux` and `react-router` that allows you to post content to predefined categories, comment on posts, and vote on posts and comments. You can also edit and delete posts and comments.

Readable was created for the final assessment project for the **Udacity's Redux course**.

## Quickstart

Clone the repository and install dependecies. Run the development server using `npm start`.

```bash
$ git clone https://github.com/oberfrank-rezso/readable
$ cd readable
$ npm install
$ npm start
```

**Important** This project assumes that you are running the [api-server](https://github.com/udacity/reactnd-project-readable-starter/) provided by the course instructors on `localhost:3001`.

## Structure

The app has two screens:

* **Home** with path: `/:category?`
* **Single** with path: `/:category/:postId`

Folder structure is a blend of the [duck](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be) paradigm and [a proposal](https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346) by @ryanflorence.

State is mostly managed by **redux** meaning forms and individual loading flags of components are excluded from the store.

Network errors are handled as shown by @gaearon on [one of his egghead.io courses](https://egghead.io/lessons/javascript-redux-displaying-error-messages).

## Acknowledgments

Thanks to the instuctors at Udacity! Also, I've read a lot and watched countless videos on the way, I couldn't list them all even if I set out to but I wanted to show my gratitude somehow.

## Contributing

Both pull requests and bug reports are welcomed. Please don't hesitate to show me ideas and best practices if you feel like it.