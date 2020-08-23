import Vue from 'vue'
import App from './App.vue'

import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

// var AWS = require("aws-sdk");
// var macaddress = require('macaddress');

// AWS.config.update({
// 	region: "eu-north-1"
// });

// var docClient = new AWS.DynamoDB.DocumentClient();
// var table = "kalmarmakerspace_tag"
// var tagId = 12345678
// var currentMachine = 3

// var params = {
// 	TableName: table,
// 	Key:{
// 		"tag": tagId
// 	}
// };

// AWS.config.getCredentials(function(err) {
//   if (err) console.log(err.stack);
// 	// credentials not loaded
//   else {
// 	console.log("Access key:", AWS.config.credentials.accessKeyId);
// 	docClient.get(params, function(err, data) {
// 		if (err) {
// 			console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
// 		} else {
// 			console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
// 			console.log("allowedmachines:", data.Item.allowedmachines);
// 			console.log("includes current machine?:", data.Item.allowedmachines.includes(currentMachine));
// 		}
// 	});
// 	macaddress.one(function (err, mac) {
// 		console.log("Mac address for this host: %s", mac);
// 	});
// 	}
// });

// Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
