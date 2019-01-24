import {fork} from 'child_process';
import {join} from 'path';

export const tilgungsPlanServiceFactory = () => ({
    createTilgungsplan(data) {
        return new Promise(resolve => {
            const forked = fork(join(__dirname, 'tilgungsPlanServiceFactory'), ['-r', 'ts-node/register']);
            forked.send(data);
            forked.on('message', resolve);
        });
    },
});

const createTilgungsPlan = (data) => ({});

process.on('message', async (data) => {
    if (process.send) {
        process.send(createTilgungsPlan(data));
    }
});
