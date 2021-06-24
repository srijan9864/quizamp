sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			// var oData = {
			// 	"category": [
			// 		{ "topic": "Any Category" },
			// 		{ "topic": "Linux" },
			// 		{ "topic": "Bash" },
			// 		{ "topic": "Uncategorized" },
			// 		{ "topic": "Docker" },
			// 		{ "topic": "SQL" },
			// 		{ "topic": "CMS" },
			// 		{ "topic": "Code" },
			// 		{ "topic": "DevOps" }
			// 	],

			// 	"difficulty": [
			// 		{ "level": "Any Difficulty" },
			// 		{ "level": "Easy" },
			// 		{ "level": "Medium" },
			// 		{ "level": "Hard" }

			// 	],

			// 	"questions": [
			// 		{ "number": 5 },
			// 		{ "number": 10 },
			// 		{ "number": 15 },
			// 		{ "number": 20 }
			// 	]
			// }
			// oModel.setData(oData);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});