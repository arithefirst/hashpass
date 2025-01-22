import type { Actions } from './$types';
import { generateHash, type HashType } from '$lib';
import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const preHashedString = `${data.get('username')}@${data.get('website')}:${data.get('masterpassword')}`;
      const b64hash = await generateHash(preHashedString, data.get('hashtype')! as HashType);
      const charLimit = parseInt(data.get('characterlimit')! as string, 10);
      if (charLimit == 0 || b64hash.slice(0, -1).length <= charLimit) {
        return { success: true, password: b64hash.slice(0, -1) };
      }
      return { success: true, password: b64hash.slice(0, charLimit) };
    } catch (e) {
      return fail(500, {
        success: false,
        e: e,
      });
    }
  },
} satisfies Actions;
