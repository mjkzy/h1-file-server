import express from 'express';

const app = express();

app.use(`/mods`, express.static(`../mods`));
app.use(`/usermaps`, express.static(`../usermaps`));
app.set(`views`, `./`);
app.set(`view engine`, `ejs`);

app.get(`/`, (request, response) =>
{
    response.render(`index`);
});

app.listen(6969, () =>
{
    console.log(`h1 file server listening on port 6969`);
});
