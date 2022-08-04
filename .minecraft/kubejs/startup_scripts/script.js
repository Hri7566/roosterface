// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

	event.create('suspicious_object', 'sword')
		.tier('netherite')
		.attackDamageBaselne(40.0)
		.displayName('Suspicious Object');
});

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
});
