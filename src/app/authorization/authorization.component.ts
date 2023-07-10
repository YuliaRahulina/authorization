import { Component } from '@angular/core';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  emailValue = ''
  passValue = ''

  async onSubmit() {
    try {
      const response = await fetch('http://localhost:3000/auth', {
        body: JSON.stringify({login: this.emailValue, pass: this.passValue}),
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        alert(data.message)
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

