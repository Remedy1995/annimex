const GenerateTransactionId = () => {
    let letters = 'ABCDEFGHIJLMNOPQRSTUVWXYZ';
    let numbers = '0123456789';
    let transactionId = '';
    for (let i = 0; i < 5; i++) {
        transactionId += letters.charAt(Math.floor(Math.random() * letters.length)) +
         numbers.charAt(Math.floor(Math.random() * numbers.length));;
    }
    return transactionId;
}

module.exports = {GenerateTransactionId}
