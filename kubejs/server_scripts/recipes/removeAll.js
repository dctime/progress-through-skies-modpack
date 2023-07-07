// priority: 999

console.info('Removing Recipes')

ServerEvents.recipes(event => {
	event.remove({not: {mod: 'morphtool'}, not: {mod: 'progressthroughskies'}});
	event.remove({ id: 'morphtool:tool' });
})