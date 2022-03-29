/*global QUnit*/

sap.ui.define([
	"fiorideve/fiori_cicd_module/controller/cicd_view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("cicd_view Controller");

	QUnit.test("I should test the cicd_view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
