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
	const exampleBody = `<div class="_5pbx userContent" data-ft="{&quot;tn&quot;:&quot;K&quot;}" id="js_im"><div id="id_59f3b8d5dc4884c58050810" class="text_exposed_root"><p>Trafik mai ebéd!<br> Magyaros gombaleves<br> Csirkemell paprikás mártás, galuska<br> Paradicsomos-fetás húsgombóc, rozmaringos krumpli<br> Zöldséges rizottó parmezánnal<span class="text_exposed_hide">...</span><span class="text_exposed_show"><br> Almás pite<br> Jó étvágyat!</span></p><span class="text_exposed_hide"> <span class="text_exposed_link"><a class="see_more_link" onclick="var func = function(e) { e.preventDefault(); }; var parent = Parent.byClass(this, &quot;text_exposed_root&quot;); if (parent &amp;&amp; parent.getAttribute(&quot;id&quot;) == &quot;id_59f3b8d5dc4884c58050810&quot;) { CSS.addClass(parent, &quot;text_exposed&quot;); Arbiter.inform(&quot;reflow&quot;); }; func(event); " href="/trafikapollo/posts/1816237528404244" data-ft="{&quot;tn&quot;:&quot;e&quot;}"><span class="see_more_link_inner">Továbbiak</span></a></span></span></div></div>`;

	const dailyMenu = restaurant.getMenu(exampleBody);

	t.truthy(dailyMenu);
	t.true(Array.isArray(dailyMenu));
	t.truthy(dailyMenu.length);
});
