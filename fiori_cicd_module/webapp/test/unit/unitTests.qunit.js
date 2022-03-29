/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fiorideve/fiori_cicd_module/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
