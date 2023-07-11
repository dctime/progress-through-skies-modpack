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
	function create_fluid_and_gas(id, name, color_in_hex)
	{
		event.create(id)
	  	.thickTexture(color_in_hex)
		.bucketColor(color_in_hex)
		.displayName(name)

		event.create('gaseous_'+id)
		.thickTexture(color_in_hex)
	  	.bucketColor(color_in_hex)
	  	.displayName('Gaseous '+name)
	  	.gaseous()
	}

	create_fluid_and_gas('dense_sulfuric_acid', 'Dense Sulfuric Acid', 0x246106); // DENSE H2SO4
	create_fluid_and_gas('copper_ii_sulfate', 'Copper Ii Sulfate', 0x2d90f9); // CuSO4
	create_fluid_and_gas('sulfuric_acid', 'Sulfuric Acid', 0x246106); // H2SO4
	create_fluid_and_gas('copper_i_oxide', 'Copper I Oxide', 0x70b596); // Cu2O
	create_fluid_and_gas('liquid_oxygen', 'Liquid Oxygen', 0x77c0d8); // O2
	create_fluid_and_gas('sulfurous_acid', 'Sulfurous acid', 0xbbc35d) //H2SO3
	create_fluid_and_gas('liquid_hydrogen', 'Liquid Hydrogen', 0xcedfe0) //H2



	
  })