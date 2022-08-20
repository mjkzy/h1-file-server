import fs from "node:fs";
import { fileURLToPath } from 'node:url';
import express from 'express';
import path from "node:path";

const dirname = fileURLToPath(new URL(`.`, import.meta.url));

const app = express();

app.get(`/mods/:mod/:file`, (request, response) =>
{
    const { mod, file } = request.params;

    if (!mod || !file)
    {
        return;
    }

    const mod_dir = path.join(dirname, `..`, `mods/${ mod }/${ file }`);
    if (fs.existsSync(mod_dir))
    {
        console.log(mod_dir);
        response.download(mod_dir);
    }
});

app.listen(6969, () =>
{
    console.log(`listening on port 6969`);
});
