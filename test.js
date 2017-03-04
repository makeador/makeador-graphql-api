import {exec} from 'child_process';
import test from 'ava';
import {Lokka} from 'lokka';
import {Transport} from 'lokka-transport-http';
import {MAKEA, NO_MAKEA, NOT_SURE_IF_MAKEA} from 'makeador-core';
import delay from 'delay';

let server;
let client;

test.before('start server', async () => {
  server = exec('yarn start');
  await delay(5000);
  client = new Lokka({
    transport: new Transport('http://localhost:8000')
  });
});

test('response succeeds and matches expected values', async t => {
  const response = await client.query(`
    {
      makea
    }
  `);
  t.true([MAKEA, NO_MAKEA, NOT_SURE_IF_MAKEA].includes(response.makea));
});

test.after('kill server', () => {
  server.kill();
});
