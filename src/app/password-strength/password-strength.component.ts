import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'password-strength',
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class PasswordComponent {
  password: string = '';
  strengthColor: string[] = ['grey', 'grey', 'grey'];

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.strengthColor = ['grey', 'grey', 'grey'];
    } else if (this.password.length < 8) {
      this.strengthColor = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasNumbers = /\d/.test(this.password);
      const hasSymbols = /[^a-zA-Z0-9]/.test(this.password);

      if (hasLetters && hasNumbers && hasSymbols) {
        this.strengthColor = ['green', 'green', 'green'];
      } else if (
        (hasLetters && hasNumbers) ||
        (hasLetters && hasSymbols) ||
        (hasNumbers && hasSymbols)
      ) {
        this.strengthColor = ['yellow', 'yellow', 'grey'];
      } else {
        this.strengthColor = ['red', 'grey', 'grey'];
      }
    }
  }
}
