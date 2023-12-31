import json
import sys

def twos_complement(val, bits):
    if val < 0:
        val = (1 << bits) + val
    else:
        if (val & (1 << (bits - 1))) != 0:
            val = val - (1 << bits)
    return val

chemical_dict = {
    'dense_sulfuric_acid': '246106',
    'copper_ii_sulfate': '2d90f9',
    'sulfuric_acid': '246106',
    'copper_i_oxide': '70b596',
    'liquid_oxygen': '77c0d8',
    'sulfurous_acid': 'bbc35d',
    'liquid_hydrogen': 'cedfe0',
    'sulfur_dioxide': 'f2ec44',
    'hydrogen_sulfide': 'b4c708',
    'wet_slurries_of_algae': '5d7a0b',
    'carbon_dioxide': 'deebff',
    'lubricant': 'fab219',
    'heavy_unprocessed_oil': '1f1400',
    'light_unprocessed_oil': 'f7b743',
    'natural_acid': '004d03',
    'liquid_air': 'a6e7ff',
    'nitrogen': '8f8fff',
    'ammonia': 'ffe2c2',
    'carbon': '232323',
    'sodium_carbonate': 'c9c9c9',
    'carbon_monoxide': 'd9d9d9',
    'sodium': '808080',
    'sodium_peroxide': 'c9c720',
    'hydrogen_peroxide': 'e8e8e1',
    'solder_mask': '1ea600',
    'chlorine': '00ff00',
    'sodium_hydroxide': 'dbdbdb',
    'bio_waste': '16e31a',
    'ammonium_bicarbonate': 'd4d4d4',
    'sodium_bicarbonate': 'e0dcdc',
    'ammonium_chloride': 'e6e1e1',
    'calcium_chloride': 'f2f4e8',
    'calcium_oxide': 'd4d4d4',
    'hydrochloric_acid': 'ffe9a8'
}
for key, value in chemical_dict.items():
  id = key
  color_hex_string = value

  # id = sys.argv[1]
  # color_hex_string = sys.argv[2]
  color = int(color_hex_string, 16)

  print(f'id:{id}, color_hex:{color_hex_string}')
  print(f'color:{color}')

  twos_color = twos_complement(-color, 24)
  print(f"twos_color:{twos_color}")
  twos_hex_string = hex(twos_color)[2:]
  print(f"twos_hex_string:{twos_hex_string}")

  data = {
      "id": id,
      "source": "modded",
      "localizedName": id.replace("_", " ").title(),
      "processedTypes": [
          "dust",
          "fluid",
          "gas",
          "slurry",
          "crystal",
          "dirty_dust",
          "infuse_type"
      ],
      "colors": {
        "fluidColor": "-"+twos_hex_string,
        "materialColor": color_hex_string,
        "gasColor":color_hex_string
      },
      "gas": {
        "isBurnable": False,
        "isRadioactive": False,
        "radioactivity": 0,
        "isCoolant": False,
        "conductivity": 3
      }
    }

  with open(id+'.json', 'w') as f:
      json.dump(data, f)