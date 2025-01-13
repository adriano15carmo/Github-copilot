
# Validação de Cartão de Crédito

Este projeto contém uma função de validação de cartão de crédito baseada nas regras fornecidas no arquivo `categoria cartão.txt`.

## Principais Prompts

### Função de Validação de Cartão de Crédito

A função `validarCartaoCredito` recebe um número de cartão de crédito como entrada e verifica se ele corresponde a uma das bandeiras definidas no arquivo `categoria cartão.txt`. Se corresponder, retorna a bandeira do cartão; caso contrário, retorna 'Cartão inválido'.

```javascript
function validarCartaoCredito(numeroCartao) {
    const regrasCartao = {
        Visa: /^4/,
        Mastercard: /^(5[1-5]|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/,
        Elo: /^(636368|438935|504175|451416|636297|5067|4576|4011|506699)/,
        'American Express': /^3[47]/,
        Diners: /^(301|305|36|3872)/,
        Discover: /^6/,
        Aura: /^50/,
        Enroute: /^20/,
        JCB: /^35/,
        Voyager: /^86/,
        HiperCard: /^(6062|38)/,
        Ourocard: /^498408/
    };

    for (const [bandeira, regex] of Object.entries(regrasCartao)) {
        if (regex.test(numeroCartao)) {
            return bandeira;
        }
    }

    return 'Cartão inválido';
}

// Exemplo de uso
const numeroCartao = '5376259768965102';
const resultado = validarCartaoCredito(numeroCartao);
console.log(`O cartão é da bandeira: ${resultado}`);

# Tabela de Regras de Validação
    A tabela abaixo contém as regras de validação para cada bandeira de cartão de crédito conforme especificado no arquivo categoria cartão.txt

|Bandeira|N° BIN|
|--------|-------|
|	Mastercard|51 a 55, 2221 a 2720|
|Elo|636368, 438935, 504175, 451416, 636297, 5067, 4576, 4011, 506699|
|	American Express|34, 37|
|Diners|300,301, 305, 36, 3872|
|Discover|6011,644,649|
|Aura|50|
|Enroute|2014,2149|
|	JCB|35|
|Voyager|86|
|Ourocard|4|
|Visa|4984, 08|
| HiperCard|60,38|

#Algoritmo Utilizado
    O algoritmo utilizado para a solução é baseado em expressões regulares (regex). Cada bandeira de cartão de crédito possui um padrão específico de números iniciais, e as expressões regulares são usadas para verificar se o número do cartão de crédito fornecido corresponde a um desses padrões. A função validarCartaoCredito itera sobre as regras definidas e utiliza o método test das expressões regulares para identificar a bandeira do cartão.
#Como Usar
1-Clone o repositório.
2-Navegue até o diretório do projeto.
3-Execute o arquivo index.js para validar um número de cartão de crédito.

|node src/index.js|
|------------------|

#Licença
    Este projeto está licenciado sob a MIT License.

 Este README.md fornece uma visão geral do projeto, incluindo a função de validação de cartão de crédito, a tabela de regras de validação, uma explicação sobre o algoritmo utilizado, instruções sobre como usar o projeto e uma nota no rodapé indicando que o projeto foi criado por IA com supervisão humana.