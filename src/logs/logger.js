import pino from 'pino';

const logger = pino ({
    transport : {
        target:'pino-pretty',
        options : {
        traslateTime: 'SYS:dd-mm-yyyy HH:mm:ss',
    },
},
});

export default logger;