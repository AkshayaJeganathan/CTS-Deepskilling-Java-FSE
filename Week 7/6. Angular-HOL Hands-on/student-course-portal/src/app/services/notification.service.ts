import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  private instanceId: number = Math.floor(Math.random() * 10000);

  getInstanceId(): number {
    return this.instanceId;
  }

  getNotificationMessage(): string {
    return `NotificationService Instance #${this.instanceId}: Component-scoped active alerts.`;
  }
}
