import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.createUserWithEmailAndPassword(
        formData.value.email, formData.value.password);
    }
  }

}
