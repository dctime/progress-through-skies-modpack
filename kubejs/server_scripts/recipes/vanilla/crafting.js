// priority: 0
let MC = (id) => 'minecraft:' + id;
let PTS = (id) => 'progressthroughskies:' + id;
let COMP = (id) => 'compressium:' + id;
let ES = (id) => 'exnihilosequentia:' + id;
let ILW = (id) => 'ilikewood:' + id;
let Q = (id) => 'quark:' + id;
let C = (id) => 'create:' + id;
let CHIP = (id) => 'chipped:' + id;
let TRS = (id) => 'tinyredstone:' + id;
let OCC = (id) => 'occultism:' + id;
let EME = (id) => 'emendatusenigmatica:' + id;
let IE = (id) => 'immersiveengineering:' + id;

console.info('Adding Vanilla Recipes')

ServerEvents.recipes(event => {
    function compact_2(input, output)
    {
        event.shaped(
            Item.of(output, 1),
            [
                'AA',
                'AA'
            ],
            {
                'A': input
            }
        );
        
    }

    function expand(input, output)
    {
        event.shaped(
            Item.of(output, 4),
            [
                'A'
            ],
            {
                'A': input
            }
        );
        
    }

    function checker(input1, input2, output)
    {
        event.shaped(
            Item.of(output, 1),
            [
                'AB',
                'BA'
            ],
            {
                'A':input1,
                'B':input2
            }
        );
    }

    function plate(input, output)
    {
        event.shaped(   
            Item.of(output, 1),
            [
                'AA'
            ],
            {
                'A': input
            }
        );
    }

    function all(input1, input2, input3, input4, output)
    {
        event.shaped(
            Item.of(output, 1),
            [
                'AB',
                'CD'
            ],
            {
                'A': input1,
                'B': input2,
                'C': input3,
                'D': input4
            }
        );
    }

    function cookie_with_top(input_top, input_bottom, output)
    {
        event.shaped(
            Item.of(output, 1),
            [
                'AA',
                'BB'
            ],
            {
                'A': input_top,
                'B': input_bottom
            }
        )
    }


    compact_2(PTS('gravel_dust'), MC('gravel'));
    compact_2(PTS('sand_dust'), MC("sand"));
    checker(COMP('gravel_1'), COMP('sand_1'), MC('cobblestone'));
    plate(MC('cobblestone'), MC('stone_pressure_plate'));
    compact_2(MC('stone_pressure_plate'), ES('stone_barrel'));
    plate(MC('string'), ES('string_mesh'));
    all(MC('string'), MC('stick'), ILW('oak_log_pile'), MC('flint'), MC('campfire'));
    all(MC('stick'), MC('stone_pressure_plate'), MC('oak_log'), MC('oak_log'), ILW('oak_sawmill'));
    

    event.shaped(
        Item.of('tetra:modular_double', 1, '{"double/basic_hammer_left_material":"basic_hammer/oak","double/basic_hammer_right_material":"basic_hammer/oak","double/basic_handle_material":"basic_handle/stick","double/handle":"double/basic_handle","double/head_left":"double/basic_hammer_left","double/head_right":"double/basic_hammer_right"}'),
        [
            'A ',
            'B '
        ],
        {
            'A': ILW('oak_post'),
            'B': MC('stick')
        }
    );

    cookie_with_top(MC('white_wool'), MC('stick'), MC('white_bed'));
    compact_2(MC('string'), MC('light_gray_wool'));
    
    event.shaped(
        Item.of(MC('stonecutter'), 1),
        [
            'A ',
            'BC'
        ],
        {
            'A': MC('stone_pressure_plate'),
            'B': ILW('oak_log_pile'),
            'C': MC('cobblestone')
        }
    );

    event.shapeless(
        Item.of(MC('fire_charge'), 1),
        [
            MC('flint'),
            MC('oak_sapling')
        ]
    );

    event.shapeless(
        Item.of(MC('paper'), 3),
        [
            Q('paper_wall_big')
        ]
    );

    event.shapeless(
        Item.of(C('sand_paper'), 1),
        [
            MC('paper'),
            PTS('sand_dust')
        ]
    );

    event.shapeless(
        Item.of(CHIP('glassblower'), 1),
        [
            MC('blast_furnace'),
            MC('crafting_table')
        ]
    );

    event.shapeless(
        Item.of(CHIP('tinkering_table'), 1),
        [
            MC('redstone'),
            MC('crafting_table')
        ]
    );

    event.shapeless(
        Item.of(TRS('tiny_redstone'), 4),
        [
            MC('redstone')
        ]
    );

    event.shapeless(
        Item.of(MC('redstone'), 1),
        [
            '4x ' + TRS('tiny_redstone')
        ]
    );

    cookie_with_top(MC('polished_andesite'), MC('stick'), CHIP('mason_table'));
    cookie_with_top(MC('oak_slab'), MC('stick'), CHIP('carpenters_table'));

    event.shapeless(
        Item.of(OCC('chalk_gold_impure'), 1),
        [
            OCC('chalk_white_impure'),
            EME('gold_dirty_dust')
        ]
    );

    compact_2(MC('clay_ball'), MC('clay'));
    event.shapeless(
        Item.of(PTS('rain_wand')),
        [
            PTS('gravel_dust'),
            ES('stone_crook'),
            PTS('sand_dust')
        ]
    );

    cookie_with_top(MC('oak_slab'), MC('white_wool'), OCC('brush'));
    event.shaped(
        Item.of(IE('workbench'), 1),
        [
            'AB',
            'CC'
        ],
        {
            'A': MC('crafting_table'),
            'B': MC('dark_oak_log'),
            'C': MC('stick')
        }
    );
    compact_2(MC('gravel'), COMP('gravel_1'));
    expand(COMP('gravel_1'), MC('gravel'));
    compact_2(MC('sand'), COMP('sand_1'));
    expand(COMP('sand_1'), MC('sand'));
    compact_2(MC('cobblestone'), COMP('cobblestone_1'));
    expand(COMP('cobblestone_1'), MC('cobblestone'));
    event.shaped(
        Item.of("chiselsandbits:chisel_stone"),
        [
            'A',
            'B'
        ],
        {
            'A': MC('stone_pressure_plate'),
            'B': MC('stick')
        }
    )

    event.shaped(
        Item.of("exnihilosequentia:stone_crook"),
        [
            'AA',
            ' A'
        ],
        {
            'A': "minecraft:cobblestone"
        }
    )

    event.shaped(
        Item.of('create:turntable', 1),
        [
            'A',
            'B'
        ],
        {
            'A': 'minecraft:oak_slab',
            'B': 'create:shaft'
        }
    );

    event.shapeless(
        Item.of('electrodynamics:multimeter', 1),
        [
            'minecraft:stone_pressure_plate',
            'immersiveengineering:wire_copper'
        ]
    );

    event.shapeless(
        Item.of('constructionwand:infinity_wand', '{wand_options:{}}'),
        [
            'minecraft:amethyst_shard',
            'minecraft:stick'
        ]
    );

    compact_2(MC('snowball'), MC('snow_block'));
    compact_2(MC('snow_block'), MC('ice'));
})
