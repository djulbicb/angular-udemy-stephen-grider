# angular-udemy-stephen-grider

```
npm install -g @angular/cli
ng new app02_password_generator
cd app02_password_generator
ng serve --open
```

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

## things learned
```
# Property binding
> .html
[value] = "getter()"
[value] = someProperty
> .ts
getter = () => { return some property}

# String interpolation syntax
> .html
{{some property}}
{{someProperty1 + " " + someProperty2}}

# Event binding
> .html
(change)="eventBindingSyntax()"

ovo je zamena za js
elem = document.querySelector('input');
elem.addEventListener('input', (event) => {
    console.log(event.target.value)
})

(input)="onChange($event.target.value)"

# Structural directive
Falsey and Truthy
*ngIf="somestring"

<p *ngIf="length > 0 && (useLetters || useNumbers || useSpecialChars)">
  {{ generated }}
</p>
```

## things i noticed
```
# On input text element use input event, not keydown. Keydown lags with value changes by 1
<input type="text" (keydown)="setLength($event)" />
<input type="text" (input)="setLength($event)" />

# Getting value
Checkbox input value
$event.target.checked
Textbox Input value
$event.target.value
```

## deploy on vercel (old now.sh)
```
npm install -g vercel
rm C:\Users\User\AppData\Roaming\npm\vercel.ps1

Vercel CLI 23.1.2
? Set up and deploy “C:\mel\angular-udemy-stephen-grider\app02_password_generator”? [Y/n] y
? Which scope do you want to deploy to? regnerish-gmailcom
? Link to existing project? [y/N] n
? What’s your project’s name? ss
? In which directory is your code located? ./
Auto-detected Project Settings (Angular):
- Build Command: ng build
- Output Directory: dist
- Development Command: ng serve --port $PORT
? Want to override the settings? [y/N] n

# to update
- update files
vercel
```