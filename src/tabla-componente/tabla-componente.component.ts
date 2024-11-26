import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser'

@Component({
  selector: 'tabla-comp',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <tbody>
        <tr>
          <th *ngFor="let field of items[0] | keyvalue">{{field.key}}</th>
        </tr>
        <tr *ngFor="let item of items">
          <td *ngFor="let field of item | keyvalue">{{field.value}}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class App {
  items = [
    { id: 'one', status: 'complete', task: 'build' },
    { id: 'two', status: 'working', task: 'test' },
    { id: 'three', status: 'failed', task: 'deploy' }
  ]
}

bootstrapApplication(App);


export class TablaComponenteComponent {

}
