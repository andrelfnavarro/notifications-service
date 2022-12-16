import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const notification = new Notification({
      content: new Content('You have a new notification'),
      category: 'social',
      recipientId: '123456',
    });

    expect(notification).toBeTruthy();
  });

  it('should not be able to create content with less than 5 characters', () => {
    expect(() => new Content('You')).toThrow();
  });

  it('should not be able to create content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
