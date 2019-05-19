import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private currentUser: User;
  isLoggedIn: boolean = false;

  langList = [
    { code: 'en', label: 'En' },
    { code: 'pt', label: 'Pt' }
  ];

  constructor(private authService: AuthService, private router: Router,
    @Inject(LOCALE_ID) protected lang: string) {
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isLoggedIn = false;
      this.currentUser = null;
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user;
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

  getUserDisplayName(): string {
    if (this.currentUser) {
      return this.currentUser.displayName ? this.currentUser.displayName : this.currentUser.email;
    } else {
      return '';
    }
  }

  getUserPhoto(): string {
    if (this.currentUser) {
      return this.currentUser.photoURL ? this.currentUser.photoURL : '/assets/images/neutral-user.png';
    } else {
      return '/assets/images/neutral-user.png';
    }
  }

}
