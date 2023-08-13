ServerEvents.recipes(event => {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
          {
            "item":"minecraft:cobbled_deepslate"
          }
        ],
        "results": [
          {
            "item" : "chipped:cobbled_blackstone",
            "count": 1
          }
        ]
      })

  event.custom({
    "type": "create:splashing",
    "ingredients": [
      {
        "item":'immersiveengineering:hemp_fiber'
      }
    ],
    "results": [
      {
        "item" : 'minecraft:string',
        "count": 1
      }
    ]
  })
})