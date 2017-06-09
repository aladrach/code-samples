{% if not craft.config.devMode %}
// jQuery
$.getScript('https://cdn.bluefoot.com/bluefoot/rebrand.js', function()
{
	{% if currentUser %}
    talkus('init', 'rmJMzaxnsdvsLWruY', {
    id: '{{currentUser.username}}',
    name: '{{currentUser.name}}',
    email: '{{currentUser.email}}',
    tag: 'bluefoot'
  });
    {% endif %}
});
{% else %}
/* Rebrand Scripts exluded in devMode */
 document.title = 'devMode - ' + document.title;
{% endif %}