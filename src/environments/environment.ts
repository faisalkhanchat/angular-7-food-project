// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url:'http://127.0.0.1:3002/v1/',
  // url: 'https://supershestg.appinventive.com/v1/',
  url: 'https://supershedev.appinventive.com/v1/',
  config: {
    AWS_BUCKET: 'appinventiv-development',
    AWS_ACCESS_KEY: 'AKIAJ3UHQTWRRT2AH3RA',
    AWS_SECRET_KEY: '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',
    AWS_REGION: 'us-east-1'
  },
  firebaseConfig: {
    apiKey: "AIzaSyDr7bKP_FxBTxD-tVo9NOBvMwEvAC01VE0",
    authDomain: "food-portal-62210.firebaseapp.com",
    databaseURL: "https://food-portal-62210.firebaseio.com",
    projectId: "food-portal-62210",
    storageBucket: "food-portal-62210.appspot.com",
    messagingSenderId: "844647151197",
    appId: "1:844647151197:web:ec6975fff85d6110a53fb4"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
