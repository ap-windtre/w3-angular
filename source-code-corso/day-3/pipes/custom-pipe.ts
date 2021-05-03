import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sayHello'
})
export class GreetingsPipe implements PipeTransform {
  public transform(name: string): string {
    return 'Hello, ' + name;
  }
}

// Registration
import { NgModule } from '@angular/core';
import { GreetingsPipe } from './greetings.pipe';
@NgModule({
   declarations: [
     GreetingsPipe
   ],
   exports: [
     GreetingsPipe
   ]
})
export class GreetingsPipeModule { }


// Usage
<div>
  <p>You are now logged in our application!</p>
  <p>{{ user.firstName | sayHello }}</p>
</div>


//...
export class FileSizePipe implements PipeTransform {
    transform(size: number, extension: string = 'MB'): string {
      return (size / (1024 * 1024)).toFixed(2) + extension;
    }
  }