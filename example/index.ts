import { Client } from '../lib';

const PetsInstance = new Client({
  isSandbox: true,
  apiCredentials: {
    clientId: 'meuidsecreto',
    clientSecret: 'meuSecret'
  }
})
