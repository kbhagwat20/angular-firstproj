# Firstproj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
## interpolation
to display dynamic data on html page

## what we cannot achive in interpolation
use of new keyboard
increament operator
<h2>{{title= "Hello"}}</h2>
use of typeof 

# componenet inline style ans inline template
ng g c user-list --inline-style 
ng g c student-list --inline-template
ng g c country-list --inline-style --inline-template
why we need inline style?
when we need very less style in component

# what is module
it is a complete functionality in itself which contain multiple components like login, registration,forgot pasword, api call(service),helper(pipes) etc.
module is not reusable
ng generate module user-auth
ng g m user-auth
component in user-auth: ng g c user-auth/login
to use component login: register this module in app.module.ts
then export component in user-auth.module

# Styling priority
inline style > internal style > component style > global style
=== also check type and match