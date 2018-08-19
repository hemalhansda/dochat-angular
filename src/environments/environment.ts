// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCTq9Ng2wbrpPvuD6QA9GtAJ2xLIUM0PPw',
    authDomain: 'dochat-angular.firebaseapp.com',
    databaseURL: 'https://dochat-angular.firebaseio.com',
    projectId: 'dochat-angular',
    storageBucket: 'dochat-angular.appspot.com',
    messagingSenderId: '514217326761'
  }
};
