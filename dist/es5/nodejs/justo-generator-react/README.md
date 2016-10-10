[![Build Status](https://travis-ci.org/justojsg/justo-generator-react.svg?branch=master)](https://travis-ci.org/justojsg/justo-generator-react)
[![Dependency Status](https://david-dm.org/justojsg/justo-generator-react.svg)](https://david-dm.org/justojsg/justo-generator-react)
[![devDependency Status](https://david-dm.org/justojsg/justo-generator-react/dev-status.svg)](https://david-dm.org/justojsg/justo-generator-react#info=devDependencies)

Generator for *React* apps.

*Proudly made with ♥ in Valencia, Spain, EU.*

Features:

- Generate the app scaffolding.
- Allow to add router files to the `routes` directory.
- Allow to add routes to router files.
- Allow to add components to the `components` directory.
- Generate snippets for: `<form>`, `<input>`, `<label>` and `<Link>`.

Note. You can learn *React* and this generator, in Spanish, on [nodemy.com](http://nodemy.com).

## Install

```
npm install -g justo-cli justo-generator-react
```

## Creating a project scaffolding

```
justo -g react
```

## Adding components

To add a component to the `components` directory:

```
justo -g react component
```

Observations:

- An immutable component is a stateless component.
- A mutable component is a stateful component.

## Adding form components

To add a component to render a `<form>`:

```
justo -g react form
```

## Adding route files

To add a route file to the `routes` directory:

```
justo -g react route file
```

## Adding routes

To add a route to a file:

```
justo -g react route
```

## Adding views

To add a view component to the `views` directory:

```
justo -g react view
```

## Generating snippets

To generate snippets:

```
justo -g react snippet form
justo -g react snippet input
justo -g react snippet label
justo -g react snippet link
```
