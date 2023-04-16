import {Component, Input} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;
  message?: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  onSubmit(): void {
    console.log("Login page: " + this.username);
    console.log("Login page: " + this.password);

    this.authService.login(this.username, this.password)
      .subscribe(data => {
        if (!data) {
          this.message = "Invalid credentials";
          return;
        }

        this.message = "Connected !";
        this.router.navigate(['/pokemon/all']);
      });
  }
}
