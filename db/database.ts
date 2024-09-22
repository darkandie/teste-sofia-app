import { Database } from "@nozbe/watermelondb";
import { Favorite } from "./models/favorite";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { schema } from "./schemas/favoriteSchema";

const adapter = new SQLiteAdapter({
  schema,
  jsi: true,
});

export const database = new Database({
  adapter,
  modelClasses: [Favorite],
})
