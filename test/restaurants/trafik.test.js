import test from 'ava';
import restaurant from '../../restaurants/trafik';

test('returns an object', t => {
	t.true(typeof restaurant === 'object');
});

test('has a name property', t => {
	t.truthy(restaurant.name);
});

test('has an url property', t => {
	t.truthy(restaurant.url);
});

test('has a getMenu method', t => {
	t.truthy(restaurant.getMenu);
	t.true(typeof restaurant.getMenu === 'function');
});

test('getMenu() given the http response body as argument, returns a non-empty array of the daily menu items', t => {
	const exampleBody = `<div class="_5pbx userContent" data-ft="{&quot;tn&quot;:&quot;K&quot;}" id="js_6"><div id="id_59df1d2e1e9037173418046" class="text_exposed_root text_exposed"><p>Mai Napi 10.12.</p><p> - Francia hagymaleves</p><p> - Chili con carne házi lepénnyel<span class="text_exposed_hide">...</span><span class="text_exposed_show"><br> - Aquadella joghurtos salátával<br> - Baconös csirketekercs krumplipürével</span></p><div class="text_exposed_show"><p> - Rizskoch baracklekvárral</p></div><span class="text_exposed_hide"> <span class="text_exposed_link"><a class="see_more_link" onclick="var func = function(e) { e.preventDefault(); }; var parent = Parent.byClass(this, &quot;text_exposed_root&quot;); if (parent &amp;&amp; parent.getAttribute(&quot;id&quot;) == &quot;id_59df1d2e1e9037173418046&quot;) { CSS.addClass(parent, &quot;text_exposed&quot;); Arbiter.inform(&quot;reflow&quot;); }; func(event); " href="/trafikapollo/posts/1801182013243129" data-ft="{&quot;tn&quot;:&quot;e&quot;}"><span class="see_more_link_inner">Továbbiak</span></a></span></span></div></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody);

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
