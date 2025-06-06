// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const IdentityAccessTokensSchema = z.object({
  id: z.string(),
  accessTokenTTL: z.coerce.number().default(2592000),
  accessTokenMaxTTL: z.coerce.number().default(2592000),
  accessTokenNumUses: z.coerce.number().default(0),
  accessTokenNumUsesLimit: z.coerce.number().default(0),
  accessTokenLastUsedAt: z.date().nullable().optional(),
  accessTokenLastRenewedAt: z.date().nullable().optional(),
  isAccessTokenRevoked: z.boolean().default(false),
  identityUAClientSecretId: z.string().nullable().optional(),
  identityId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().nullable().optional(),
  authMethod: z.string(),
  accessTokenPeriod: z.coerce.number().default(0)
});

export type TIdentityAccessTokens = z.infer<typeof IdentityAccessTokensSchema>;
export type TIdentityAccessTokensInsert = Omit<z.input<typeof IdentityAccessTokensSchema>, TImmutableDBKeys>;
export type TIdentityAccessTokensUpdate = Partial<Omit<z.input<typeof IdentityAccessTokensSchema>, TImmutableDBKeys>>;
