// priority: 999

console.info('Removing Recipes')

ServerEvents.recipes(event => {
	event.remove({not: {mod: 'progressthroughskies'}, not: {mod: 'spoiled'}});

})