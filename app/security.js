const crypto = require('crypto');
const gelf = require('./gelf');

const interceptor1 = (req, res, next) => {
    const cpf = req.body.cpf;

    console.log("Requisição Interceptada #1: ", req.body);
    console.log('Criptografando dados------------------------');

    const newCpf = crypto.createHmac('sha256', '').update(cpf).digest('hex');
    console.log('CPF', newCpf);

    const payload = {
        "version": "1.1",
        "host": "myhost.com.br",
        "short_message": "cfps -> " + newCpf,
        "full_message": "cfp criptografado para o formato sha256 -> " + newCpf,
        "timestamp": Date.now() / 1000,
        "level": 1,
        "_user_id": 9001,
        "_some_info": "foo",
        "_some_env_var": "bar"
    };

    gelf.emit('gelf.log', payload);

    req.body = ({"cpfs": newCpf});
    next();
}

const interceptor2 = (req, res, next) => {
    console.log("Requisição Interceptada #2", req.body);
    next()
}

module.exports = {
    interceptor1,
    interceptor2
};