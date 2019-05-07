import '@babel/polyfill';
import 'colors';

import server from './server';

const port = server.get('port');

function main() {
    server.listen(port, () => {
        console.log('Server Port:'.rainbow, port);
    });
}

main();