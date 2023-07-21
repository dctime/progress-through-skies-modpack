ServerEvents.recipes(event => {
    event.custom({
        "type": "botania:runic_altar",
        "output": {
            
            "type": "forge:nbt",
            "item": 'minecraft:bundle',
            "nbt": {Items:[{Count:1,id:"ferdinandsflowers:hawthorne"},{Count:1,id:"ferdinandsflowers:iris"},{Count:1,id:"ferdinandsflowers:larkspur"},{Count:1,id:"ferdinandsflowers:dried_sunflower"},{Count:1,id:"ferdinandsflowers:parrot_flower"},{Count:1,id:"ferdinandsflowers:pitcher_plant"},{Count:1,id:"ferdinandsflowers:lewisia"},{Count:1,id:"ferdinandsflowers:purple_calla_lily"},{Count:1,id:"ferdinandsflowers:lantana"}]}
            
        },
        "mana": 10000,
        "ingredients": [
          {"item": 'botania:rune_spring'},
          {"item": 'botania:rune_wrath'},
          {"item": 'botania:rune_water'},
          {"item": 'botania:rune_earth'}
        ]
    })
})