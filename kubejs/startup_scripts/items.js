// Listen to item registry event
StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('incomplete_volatile_scrap')
    event.create('incomplete_printed_circuit_board')
    event.create('incomplete_prediction_matrix')
    
    
})