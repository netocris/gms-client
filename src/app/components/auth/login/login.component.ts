import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) {    
  }

  ngOnInit() {
  }

  onSubmit(formData){
    if(formData.valid){    
      this.authService.loginWithEmailAndPassword(
        formData.value.email, formData.value.password);
    }
  }

}
