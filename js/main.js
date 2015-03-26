define('main', ['draw', 'meta', 'NFA'], function(draw, meta, NFA) {
	function init(inputStr, regexpStr) {
		//draw.drawInput(inputStr);
		if (regexpStr === '') {
			return;
		} else if (/^\//.test(regexpStr) && /\/$/.test(regexpStr)) {
			regexpStr = regexpStr.replace(/^\//, '').replace(/\/$/, '');
		}
		try {
			var reg = new RegExp(regexpStr);
		} catch (e) {
			alert(e);
		}
		var metas = [];
		meta(regexpStr, metas);
		console.log(metas);
		var obj = document.getElementById('flowChart');
		draw.drawModel(metas, obj);
		console.log(inputStr);
		console.log(metas);
		//NFA(inputStr, meta, showMatch);
	}
	return {
		init: init
	}
});