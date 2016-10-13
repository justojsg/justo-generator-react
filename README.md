[![NPM version](http://img.shields.io/npm/v/justo-generator-react.svg)](https://www.npmjs.org/package/justo-generator-react)
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
- Support *Flux*.

Note. You can learn *React*, *Flux* and this generator, in Spanish, on [nodemy.com](http://nodemy.com).

## Install

```
npm install -g justo-cli justo-generator-react
```

## Help

```
justo -g react help
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

## Adding Flux-specific folders (Flux)

This command must be executed after `justo -g react` for creating the *Flux*-specific folders and files:

```
justo -g react flux
```

## Adding action file (Flux)

```
justo -g react flux action file
```

## Adding action to action file (Flux)

You can add an action and its creator method using this command:

```
justo -g react flux action
```

## Adding React component (Flux)

When the *React* component accesses a store, you must use this command, instead of `component`:

```
justo -g react flux component
```

## Adding store (Flux)

```
justo -g react flux store
```
