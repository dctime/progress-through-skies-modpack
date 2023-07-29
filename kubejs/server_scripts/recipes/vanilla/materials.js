ServerEvents.recipes(event => {
    function block_ingot_nugget(material)
    {
        event.shapeless(
            'emendatusenigmatica:'+material+'_ingot',
            [
                '9x emendatusenigmatica:'+material+'_nugget'
            ]
        );
    
        event.shapeless(
            '9x emendatusenigmatica:'+material+'_nugget',
            [
                'emendatusenigmatica:'+material+'_ingot'
            ]
        );
    
        event.shapeless(
            'emendatusenigmatica:'+material+'_block',
            [
                '9x emendatusenigmatica:'+material+'_ingot'
            ]
        );
    
        event.shapeless(
            '9x emendatusenigmatica:'+material+'_ingot',
            [
                'emendatusenigmatica:'+material+'_block'
            ]
        );
    
    }

    var list = 
    [
        "iron",
        "copper"
    ];
    list.forEach(function(material) {
        block_ingot_nugget(material)
    });
})

