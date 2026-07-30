import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  template: '<nav class="navbar"><div class="portal-brand">🎓 Student Course Portal</div><ul class="nav-links"><li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li><li><a routerLink="/courses" routerLinkActive="active">Courses</a></li><li><a routerLink="/profile" routerLinkActive="active">Profile</a></li></ul></nav>',
  styles: ['.navbar { display: flex; justify-content: space-between; padding: 1rem 2rem; background-color: var(--card-bg); border-bottom: 1px solid var(--border-color); } .portal-brand { font-weight: 700; font-size: 1.2rem; } .nav-links { display: flex; list-style: none; gap: 1.5rem; } .nav-links a { color: var(--text-muted); } .nav-links a.active { color: var(--text-main); font-weight: 600; }']
})
export class HeaderComponent {}
