import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a new content', () => {
    const content = new Content('You have a new notification');

    expect(content).toBeTruthy();
  });

  it('should not be able to create content with less than 5 characters', () => {
    expect(() => new Content('You')).toThrow();
  });

  it('should not be able to create content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
