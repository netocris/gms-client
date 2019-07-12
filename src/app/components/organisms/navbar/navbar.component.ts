import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'
import { Router } from '@angular/router';;
import { AuthService } from './../../../services/auth/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private currentUser: User;
  
  isLoggedIn: boolean = false;
  displayName: string = '';
  photo: string = '';

  constructor(private authService: AuthService, private router: Router,
    @Inject(LOCALE_ID) protected lang: string) { }

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
