import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  content: Content;
  category: string;
  readAt?: Date | null;
  cancelledAt?: Date | null;
  createdAt: Date;

  recipientId: string;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.category = category;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.recipientId = recipientId;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get cancelledAt(): Date | null | undefined {
    return this.props.cancelledAt;
  }

  public cancel() {
    this.props.cancelledAt = new Date();
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
