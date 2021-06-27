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
	"sap/m/TextArea"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Core, HorizontalLayout, VerticalLayout, Dialog, DialogType, Button, ButtonType, Label, MessageToast, Text, TextArea) {
		"use strict";

		return Controller.extend("sap.quizamp.quizamp.controller.Main", {
			onInit: function () {
				var oModel = new sap.ui.model.json.JSONModel();
				var oData = {
					"category": [
						{ "topic": "Any Category" },
						{ "topic": "Linux" },
						{ "topic": "Bash" },
						{ "topic": "Uncategorized" },
						{ "topic": "Docker" },
						{ "topic": "SQL" },
						{ "topic": "CMS" },
						{ "topic": "Code" },
						{ "topic": "DevOps" }
					],

					"difficulty": [
						{ "level": "Any Difficulty" },
						{ "level": "Easy" },
						{ "level": "Medium" },
						{ "level": "Hard" }

					],

					"questions": [
						{ "number": 5 },
						{ "number": 10 },
						{ "number": 15 },
						{ "number": 20 }
					]
				}
				oModel.setData(oData);
				this.getView().setModel(oModel);
			},
			onBtnPress: function () {
				var that = this;
				if (!this.oSubmitDialog) {
					this.oSubmitDialog = new Dialog({
						type: DialogType.Message,
						title: "Name",
						content: [
							new Label({
								text: "Please Enter Your Name",
								labelFor: "submissionNote"
							}),
							new TextArea("submissionNote", {
								width: "100%",
								placeholder: "Name (required)",
								liveChange: function (oEvent) {
									var sText = oEvent.getParameter("value");
									this.oSubmitDialog.getBeginButton().setEnabled(sText.length > 0);
								}.bind(this)
							})
						],
						beginButton: new Button({
							type: ButtonType.Emphasized,
							text: "Submit",
							enabled: false,
							press: function () {
								var sText = Core.byId("submissionNote").getValue();
								MessageToast.show("Starting Quiz for : " + sText);
								this.oSubmitDialog.close();
								var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
								oRouter.navTo("QuizPage");
							}.bind(this)
						}),
						endButton: new Button({
							text: "Cancel",
							press: function () {
								this.oSubmitDialog.close();
							}.bind(this)
						})
					});
				}

				this.oSubmitDialog.open();
			}

		});
	});
