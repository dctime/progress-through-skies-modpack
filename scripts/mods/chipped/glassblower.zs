import crafttweaker.api.item.IItemStack;

var glass_machine_list =
[
    <item:cyclic:solidifier>,
    <item:cyclic:melter>,
    <item:minecraft:glass>,
    <item:mekanism:ultimate_universal_cable>,
    <item:mekanism:ultimate_mechanical_pipe>,
    <item:mekanism:ultimate_pressurized_tube>,
    <item:mekanism:ultimate_logistical_transporter>,
    <item:mekanism:ultimate_thermodynamic_conductor>,
    <item:mekanism:ultimate_fluid_tank>,
    <item:mekanism:basic_universal_cable>,
    <item:mekanism:basic_mechanical_pipe>,
    <item:mekanism:basic_pressurized_tube>,
    <item:mekanism:basic_logistical_transporter>
] as IItemStack[];

for item in glass_machine_list
{
    <tag:items:forge:glass_machine>.add(item);
}

<recipetype:chipped:glassblower>.removeAll();

<recipetype:chipped:glassblower>.addJsonRecipe("glass_blowing",
    {
        "type": "chipped:glassblower",
        "tags": 
        [
            "forge:glass_machine"
        ]
    }
);