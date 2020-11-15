/*global QUnit*/

sap.ui.define([
	"ch05/chap05_overview_detail/controller/App1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App1 Controller");

	QUnit.test("I should test the App1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});