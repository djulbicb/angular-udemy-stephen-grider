# angular-udemy-stephen-grider

npm install -g @angular/cli
ng new app02_password_generator
cd app02_password_generator
ng serve --open

## delete if cant run
C:\Users\%username%\AppData\Roaming\npm\ng.ps1

## install bulma
npm install bulma
angular.json
```
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
            ],
            "styles": [
              "src/styles.css",
              "/node_modules/bulma/bulma.sass"
            ],
            "scripts": []
          },
```

## things i noticed
Use input event, not keydown. Keydown lags with value changes by 1
<input type="text" (keydown)="setLength($event)" />
<input type="text" (input)="setLength($event)" />