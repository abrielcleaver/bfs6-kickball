import { checkError, client } from './client';

export async function getTeams() {
  let resp = await client.from('teams').select().order('name');
  return checkError(resp);
}

export async function getTeamsById(id) {
  let resp = await client.from('teams').select('*, players(*)').match({ id });
  return checkError(resp);
}
