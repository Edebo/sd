/* global test, describe, it, expect */
'use strict'
const { measurementsFilePath } = require('../../../files.js')
const measurements = require(measurementsFilePath)

describe('measurements data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of measurement', () => {
    expect(measurements).not.toBe('')
  })
})
