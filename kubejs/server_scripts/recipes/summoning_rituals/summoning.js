ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar('tinyredstone:tiny_redstone_torch')
        .mobOutput(
            SummoningOutput.mob('twilightforest:carminite_golem')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
        )
        .input('64x botania:livingrock')
        .input('64x minecraft:redstone')
        .input('64x immersiveengineering:wire_copper')
        .recipeTime(200);

    event.recipes.summoningrituals
        .altar('tinyredstone:tiny_redstone_torch')
        .mobOutput(
            SummoningOutput.mob('twilightforest:yeti')
                .count(1)
                .offset(0, 3, 0)
                .spread(4, 0, 4)
        )
        .input('64x minecraft:rotten_flesh')
        .input('64x minecraft:white_wool')
        .recipeTime(200)
});