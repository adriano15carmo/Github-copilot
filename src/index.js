function validarCartaoCredito(numeroCartao) {
    const regrasCartao = {
        Visa: /^4/,
        Mastercard: /^(5[1-5]|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/,
        Elo: /^(636368|438935|504175|451416|636297|5067|4576|4011|506699)/,
        'American Express': /^3[47]/,
        Diners: /^(300|301|305|36|3872)/,
        Discover: /^(6011|644|649|65)/,
        Aura: /^50/,
        Enroute: /^(2014|2149)/,
        JCB: /^35/,
        Voyager: /^86/,
        HiperCard: /^(60|38)/,
        Ourocard: /^(4984|08)/
    };

    for (const [bandeira, regex] of Object.entries(regrasCartao)) {
        if (regex.test(numeroCartao)) {
            return bandeira;
        }
    }

    return 'Cartão inválido';
}


// Exemplo de uso
const numeroCartao ='5033 9885 5526 9618';
const resultado = validarCartaoCredito(numeroCartao);
console.log(`O cartão é da bandeira: ${resultado}`);