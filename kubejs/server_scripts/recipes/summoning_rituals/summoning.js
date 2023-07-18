ServerEvents.recipes(event => {
    event.recipes.summoningrituals
    .altar('tombstone:grave_dust')
    .mobOutput(
        SummoningOutput.mob('mutantmonsters:mutant_zombie')
            .count(1)
            .offset(0, 3, 0)
            .spread(4, 0, 4)
    )
    .input('64x minecraft:rotten_flesh')
    .input('64x minecraft:rotten_flesh')
    .input('64x minecraft:rotten_flesh')
    .recipeTime(200)
    .dayTime('night')
    .weather('rain');
});