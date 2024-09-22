import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const schema = appSchema({
  version: 11,
  tables: [
    tableSchema({
      name: 'favorites',
      columns: [
        { name: 'post_id', type: 'number' },
        { name: 'user_id', type: 'number' },
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' },
      ],
    }),
  ],
});