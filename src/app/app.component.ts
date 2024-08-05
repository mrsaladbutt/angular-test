import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordComponent } from './password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
