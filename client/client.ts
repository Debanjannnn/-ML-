// Client
console.log("My address:", wallet.address);
const balance = await server.getAccount(wallet.address);
console.log(`My balance: ${balance.balances[0].balance} XLM`);