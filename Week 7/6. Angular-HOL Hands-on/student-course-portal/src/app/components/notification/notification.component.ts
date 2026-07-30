import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

/*
 * Step 67: Code Comment Explanation:
 * ----------------------------------
 * Providing NotificationService at the component level via `providers: [NotificationService]`
 * instructs Angular's Dependency Injection system to create a NEW, SEPARATE service instance 
 * scoped specifically to this component (and any of its child components).
 * Unlike `providedIn: 'root'` (which creates a single application-wide singleton), component-level 
 * providers instantiate isolated state for each instance of the component.
 */
@Component({
  selector: 'app-notification',
  providers: [NotificationService], // Component-level provider
  template: `
    <div class="notification-box">
      <p>🔔 {{ notificationMessage }}</p>
    </div>
  `,
  styles: [`
    .notification-box { background-color: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; padding: 0.75rem 1rem; border-radius: 0.375rem; color: #f59e0b; margin-top: 1rem; font-size: 0.9rem; }
  `]
})
export class NotificationComponent implements OnInit {
  notificationMessage: string = '';

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationMessage = this.notificationService.getNotificationMessage();
  }
}
