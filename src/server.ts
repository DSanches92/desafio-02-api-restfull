import app from './app';

app.listen({ port: 3333, host: '127.0.0.1' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server listening on ${address}`);
});
