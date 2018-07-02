# NG Bootstrap Modal Stack - Secondary Modal for [NG Bootstrap](https://ng-bootstrap.github.io/)

[![npm version](https://badge.fury.io/js/ng-bootstrap-modal-stack.svg)](https://badge.fury.io/js/ng-bootstrap-modal-stack)
[![devDependency Status](https://david-dm.org/bastienmoulia/ng-bootstrap-modal-stack/dev-status.svg?branch=master)](https://david-dm.org/bastienmoulia/ng-bootstrap-modal-stack#info=devDependencies)

This project is a workaround to display a secondary modal on top of the one from [NG Bootstrap](https://ng-bootstrap.github.io/).

## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
  - [SystemJS](#systemjs)
- [Supported browsers](#supported-browsers)
- [Contributing to the project](#contributing-to-the-project)
- [Getting Help](#getting-help)
- [You think you've found a bug?](#you-think-youve-found-a-bug)
- [Code of Conduct](#code-of-conduct)

## Demo

View it in action : https://stackblitz.com/edit/ng-bootstrap-modal-stack

## Dependencies
* [Angular](https://angular.io) (tested with 5.0.2)
* [Bootstrap 4](https://www.getbootstrap.com) (tested with 4.0.0)

## Installation
After installing the above dependencies, install `ng-bootstrap-modal-stack` via:
```shell
npm install --save ng-bootstrap-modal-stack
```
Once installed you need to import our main module:
```js
import {NgbModalStackModule} from 'ng-bootstrap-modal-stack';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice `NgbModalStackModule.forRoot()`):
```js
import {NgbModule} from 'ng-bootstrap-modal-stack';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgbModalStackModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import `NgbModalStackModule`:

```js
import {NgbModule} from 'ng-bootstrap-modal-stack';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgbModalStackModule, ...], 
})
export class OtherModule {
}
```
### SCSS

You need to import the custom scss for the secondary modal.
```scss
@import "~ng-bootstrap-modal-stack/index";
```

### SystemJS
If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.

In your systemjs config file, `map` needs to tell the System loader where to look for `ng-bootstrap-modal-stack`:
```js
map: {
  'ng-bootstrap-modal-stack': 'node_modules/ng-bootstrap-modal-stack/bundles/ng-bootstrap.js',
}
```
## Supported browsers

We support the same browsers and versions supported by both Bootstrap 4 and Angular, whichever is _more_ restrictive.
See [this](https://github.com/angular/angular/blob/master/README.md) for up-to-date Angular browser support.

* Chrome (45+)
* Firefox (40+)
* IE (10+) 
* Edge (20+)
* Safari (7+)

Also check [Bootstrap 4's notes](https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#supported-browsers) on browsers support.

## Contributing to the project

Please check the [CONTRIBUTING.md](CONTRIBUTING.md) doc for contribution guidelines.

## Getting Help

Please, do not open issues for the general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [StackOverflow](http://stackoverflow.com/questions/tagged/ng-bootstrap) where maintainers are looking at questions tagged with `ng-bootstrap`.

StackOverflow is a much better place to ask questions since:
* there are hundreds of people willing to help on StackOverflow
* questions and answers stay available for public viewing so your question / answer might help someone else
* SO voting system assures that the best answers are prominently visible.

To save your and our time we will be systematically closing all the issues that are requests for general support and redirecting people to StackOverflow.

## You think you've found a bug?

Oh, we are ashamed and want to fix it ASAP! But before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a _minimal_ reproduction scenario using http://plnkr.co. Having a live, reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:
* version of Angular used
* version of this library that you are using
* 3rd-party libraries used, if any
* and most importantly - a use-case that fails

A minimal reproduce scenario using http://plnkr.co/ allows us to quickly confirm a bug (or point out coding problem) as well as confirm that we are fixing the right problem.
The best part is that you do not need to create plunks from scratch - you can fork one from our [demo page](https://ng-bootstrap.github.io/#/components).

We will be insisting on a minimal reproduce scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal plunk. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

Unfortunately we are not able to investigate / fix bugs without a minimal reproduce scenario using http://plnkr.co, so if we don't hear back from you we are going to close an issue that don't have enough info to be reproduced.

## Code of Conduct

Please take a moment and read our [Code of Conduct](CODE_OF_CONDUCT.md)
