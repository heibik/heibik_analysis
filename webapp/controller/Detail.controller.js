sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"
], function (Controller, MessageBox, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ch05.chap05_overview_detail.controller.Detail", {

		onInit: function () {
			/*var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
			this.getView().setModel(this.getView().getModel());*/
		},
		_onObjectMatched: function (oEvent) {
			// this.getView().bindElement({
			// 	path: "/CLASS/" + oEvent.getParameter("arguments").detailPath
			// });
			/*var aFilter = [];
			var sQuery = oEvent.getParameter("arguments").detailPath;
			if(sQuery){
				aFilter.push(new Filter("CID",FilterOperator.EQ, sQuery));
			}
			var oList = this.getView().byId("idPupils");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);*/
		}


	});

});