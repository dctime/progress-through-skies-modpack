// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

// Startup script
StartupEvents.registry('fluid', event => {
	// These first examples are 1.16.5 and 1.18.2 syntax
	
	// Basic "thick" (looks like lava) fluid with red tint
	event.create('impure_copper')
	  .thickTexture(0x9c7f1f)
	  .bucketColor(0x9c7f1f)
	  .displayName('Impure Copper')
		.luminosity(5);
  })