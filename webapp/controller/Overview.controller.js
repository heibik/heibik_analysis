	/* eslint-disable no-console */
	/*sap.ui.define([
		"sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"
	], function (Controller, MessageBox, MessageToast) {
		"use strict";

		return Controller.extend("ch05.chap05_overview_detail.controller.Overview", {

			onInit: function () {
				MessageToast.show("gestartet");
			},
			onDetail: function (oEvent) {
				//MessageBox.information("Detail gedrückt");
				console.log(oEvent);
				// var oClass = oEvent.getSource()._oSelectedItem.mProperties.description; // funktioniert
				// console.log(oClass);
				var classId = oEvent.getSource().getSelectedItem().getProperty("\description"); // funktioniert
				console.log(classId);
				var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Detail",{detailPath:classId});

			}

		});

	});*/






		/* eslint-disable no-console */
		sap.ui.define([
			"sap/ui/core/mvc/Controller", 
			"sap/m/MessageBox", 
			"sap/m/MessageToast",
			"sap/ui/model/json/JSONModel",
			"sap/ui/core/format/DateFormat",
			"sap/ui/integration/library"
		], function (Controller, MessageBox, MessageToast, JSONModel, DateFormat, integrationLibrary) {
			"use strict";
	
			return Controller.extend("ch05.chap05_overview_detail.controller.Overview", {
	
				onInit: function (oEvent) {
					$.sap.myVar = "var";
					
					MessageToast.show("gestartet");


					/*=====CARD=====*/
					var cardManifests = new JSONModel(),
					date = DateFormat.getDateInstance({style: "long"}).format(new Date());

					cardManifests.loadData(sap.ui.require.toUrl("ch05/chap05_overview_detail/model/cardManifests.json"));

					this.getView().setModel(cardManifests, "manifests");
					this.getView().setModel(new JSONModel({
						date: date
					}));

					/*===ODATA===
					var sPath = "/customerSet" + oEvent.getParameter("arguments").path;
					this.getView().bindElement({
						path: sPath
					})*/
				},
				onDetail: function (oEvent) {
					/*//MessageBox.information("Detail gedrückt");
					console.log(oEvent);
					// var oClass = oEvent.getSource()._oSelectedItem.mProperties.description; // funktioniert
					// console.log(oClass);
					var classId = oEvent.getSource().getSelectedItem().getProperty("\description"); // funktioniert
					console.log(classId);
					var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("Detail",{detailPath:classId});*/
				},
				onAction: function (oEvent) {
					/*if (oEvent.getParameter("type") === integrationLibrary.CardActionType.Navigation) {
						MessageToast.show("URL: " + oEvent.getParameter("parameters").url);
					}
					MessageToast.show("test");*/
				}
	
			});
	
		});