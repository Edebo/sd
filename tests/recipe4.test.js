/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { recipesFilePath } = require('../files')
const recipe = require(recipesFilePath)

describe('recipe data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of recipe', () => {
    expect(recipe).not.toBe('')
  })
})

describe('test recipe json-schema', () => {
  it('validates recipe json-schema', () => {
    const schema = {
      properties: {
        title: { type: 'string' },
        direction: { type: 'array', items: [{ type: 'string' }] },
        ingredients: { type: 'array', items: [{ type: 'string' }] },
        prep_time: { type: 'integer' },
        total_time: { type: 'integer' },
        recipe_yield: { type: 'integer' },
        img: { type: 'string' },
        url: { type: 'string' }

      },
      required: ['title', 'direction', 'ingredients', 'prep_time', 'total_time', 'recipe_yield', 'img', 'url']
    }
    expect({
      title: 'Godiva Angel Pie',
      direction: [
        'TO MAKE SHELL: Preheat oven to 300 degrees',
        'In mixer bowl, beat egg whites until foamy',
        'Beat in salt and cream of tartar and beat until soft peaks form'
      ],
      ingredients: [
        "4 (1 oz.) squares Godiva cooking chocolate or 4 oz. Baker's German sweet chocolate",
        '1/2 tsp vanilla',
        '1 cup pecans, finely chopped',
        '1/2 cup sugar',
        '1/8 tsp cream of tartar',
        '1/8 tsp salt'
      ],
      prep_time: 0,
      total_time: 0,
      recipe_yield: 10,
      img: '',
      url: 'everyrecipe.com'

    }).toMatchSchema(schema)
  })
})
