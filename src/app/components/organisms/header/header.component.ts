import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';;
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentUser: User;
  
  isLoggedIn: boolean = false;
  displayName: string = '';
  photo: string = '';
    
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isLoggedIn = false;
      this.currentUser = null;
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user;
        this.displayName = this.currentUser.displayName ? this.currentUser.displayName : this.currentUser.email;
        this.photo = this.currentUser.photoURL ? this.currentUser.photoURL : '/assets/images/neutral-user.png';;
        this.router.navigate(['/dashboard']);
      }
    });
  }

  public login(): void {
    this.authService.googleSignIn();
  }

  logout(): void {
    this.authService.signOut();
  }

}
