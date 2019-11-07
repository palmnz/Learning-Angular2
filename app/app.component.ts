import {Component, Directive} from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'my-app',
    template: `
    <h1>The courses</h1>
    <courses></courses>
    <h1>The authors</h1>
    <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent, AutoGrowDirective]
})
export class AppComponent { }