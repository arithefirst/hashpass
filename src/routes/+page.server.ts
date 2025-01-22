import type { Actions } from './$types';
import { generateHash, type HashType } from '$lib';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        const preHashedString = `${data.get('username')}@${data.get('website')}:${data.get('masterpassword')}`
        const b64hash = await generateHash(preHashedString, (data.get('hashtype')! as HashType))
        const charLimit = parseInt((data.get('characterlimit')! as string), 10)
        if (charLimit == 0 || b64hash.slice(0,-1).length <= charLimit) {
            return b64hash.slice(0,-1)
        } return b64hash.slice(0, charLimit)
	}
} satisfies Actions;