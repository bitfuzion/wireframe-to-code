import { Client, Account, Storage } from 'appwrite';

const client = new Client();

const appwriteEndpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '';
const appwriteProjectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

if (!appwriteProjectId) {
    throw new Error('Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID environment variable.');
}

client
    .setEndpoint(appwriteEndpoint)
    .setProject(appwriteProjectId);
if (!appwriteEndpoint) {
    throw new Error('Missing NEXT_PUBLIC_APPWRITE_ENDPOINT environment variable');
}
if (!appwriteProjectId) {
    throw new Error('Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID environment variable');
}

// The client is already configured above, so no need to set endpoint and project again.

const account = new Account(client);
const storage = new Storage(client);

export { client, account, storage };

