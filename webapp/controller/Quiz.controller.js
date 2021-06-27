sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Core",
	"sap/ui/layout/HorizontalLayout",
	"sap/ui/layout/VerticalLayout",
	"sap/m/Dialog",
	"sap/m/DialogType",
	"sap/m/Button",
	"sap/m/ButtonType",
	"sap/m/Label",
	"sap/m/MessageToast",
	"sap/m/Text",
	"sap/m/TextArea",
	"sap/ui/core/routing/History"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Core, HorizontalLayout, VerticalLayout, Dialog, DialogType, Button, ButtonType, Label, MessageToast,History, Text, TextArea) {
		"use strict";

		return Controller.extend("sap.quizamp.quizamp.controller.Quiz", {
			onInit: function () {
				
			},
			goBack: function () {
				var oHistory = new sap.ui.core.routing.History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("RouteMain", true);
				}
			}

		});
	});
