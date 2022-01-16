
```
ng new app04_typing
npm install bulma
npm install faker

# mozda zatreba ako vs ne prepoznaje tipove
npm install --save @types/faker
npm i @types/faker
```

# Things i noticed 
Object is possibly 'null' in $event.target.value in angular 12
```
Option 1: Send the event as argument

<input type="text" (change)="setNewUserName($event)" />

export class UsersListComponent {
   setNewUserName(event: any): void {
      console.log('setNewUserName', event.target.value)
   }
}

Option 2: Use a template reference variable

<input #userName type="text" (change)="setNewUserName(userName.value)" />

export class UsersListComponent {
   setNewUserName(userName: string): void {
      console.log('setNewUserName', userName)
   }
}

Option 3: Disable type checking using $any()

<input type="text" (change)="setNewUserName($any($event.target).value)" />

export class UsersListComponent {
   setNewUserName(userName: string): void {
      console.log('setNewUserName', userName)
   }
}
```

## Dockerize 
https://www.indellient.com/blog/how-to-dockerize-an-angular-application-with-nginx/
