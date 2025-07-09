require('dotenv').config();
const keyId = process.env.ConsumerID;
const secret = process.env.ConsumerSecret;
module.exports = {  
	market: {
	HubUrl: "wss://fc-datahub.ssi.com.vn/",
	ApiUrl: "https://fc-data.ssi.com.vn/",
	ConsumerId: keyId,
	ConsumerSecret: secret
	},
};

console.log(keyId);
console.log(secret);
