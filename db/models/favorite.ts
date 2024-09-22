import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export interface IFavorite {
  postId: number;
  userId: number;
  title: string;
  body: string;
}

export class Favorite extends Model implements IFavorite {
  static table = 'favorites';

  @field('post_id') postId!: number;
  @field('user_id') userId!: number;
  @field('title') title!: string;
  @field('body') body!: string;
}