import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notification-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    return this.notifications.find((n) => n.id === notificationId) || null;
  }

  async save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex((n) => n.id === notification.id);

    if (index === -1) {
      throw new Error(`Notification with id ${notification.id} not found`);
    }

    this.notifications[index] = notification;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter((n) => n.recipientId === recipientId)
      .length;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter((n) => n.recipientId === recipientId);
  }
}
