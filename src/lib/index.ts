import crypto from 'crypto';
import bcrypt from 'bcrypt';

export type HashType = 'md5' | 'sha256' | 'sha512' | 'bcrypt';
export async function generateHash(input: string, hashType: HashType): Promise<string> {
    switch (hashType) {
        case 'md5':
            return crypto.createHash('md5').update(input).digest('base64');
        case 'sha256':
            return crypto.createHash('sha256').update(input).digest('base64');
        case 'sha512':
            return crypto.createHash('sha512').update(input).digest('base64');
        case 'bcrypt':
            return Buffer.from(await bcrypt.hash(input, 10)).toString('base64');
        default:
            throw new Error('Invalid hash type');
    }
};