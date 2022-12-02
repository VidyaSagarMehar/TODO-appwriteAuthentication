import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint('http://localhost/v1').setProject('638860f9ebbb8f67e41c');

export const account = new Account(client);

// Database

export const databases = new Databases(client, '638861786ee460620070');
