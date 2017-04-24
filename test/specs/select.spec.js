'use strict'

import Vue from 'vue'
import Input from '../../vx.vue'

const DEFAULT_DISABLED = false
const DEFAULT_REQUIRED = false

const PROP_NAME = 'usergender'
const PROP_VALUE = 'male'
const PROP_TITLE = 'Please select an item'
const PROP_PLACEHOLDER = 'your gender'
const PROP_DISABLED = false
const PROP_REQUIRED = true
const PROP_MULTIPLE = true

/* global describe it expect */

describe('component', () => {
  it('should have a created hook', () =>
    expect(typeof Input.created).toBe('function'))
})

describe('methods', () => {
  it('should have a isEmpty method', () =>
    expect(typeof Input.methods.isEmpty).toBe('function'))

  it('should have a invalid method', () =>
    expect(typeof Input.methods.invalid).toBe('function'))

  it('should have a input method', () =>
    expect(typeof Input.methods.input).toBe('function'))

  it('should have a setError method', () =>
    expect(typeof Input.methods.setError).toBe('function'))

  it('should have a clearError method', () =>
    expect(typeof Input.methods.clearError).toBe('function'))
})

describe('data', () => {
  it('should be a function', () =>
    expect(typeof Input.data).toBe('function'))

  const defaultData = Input.data()

  it('should have initialValue with default value', () =>
    expect(defaultData.initialValue).toBe(null))

  it('should have hasError with default value', () =>
    expect(defaultData.hasError).toBe(false))

  it('should have errorMessage with default value', () =>
    expect(defaultData.errorMessage).toBe(null))
})

describe('mount with default props', () => {
  const Constructor = Vue.extend(Input)
  const component = new Constructor().$mount()

  it('should have default disabled value', () =>
    expect(component.disabled).toBe(DEFAULT_DISABLED))

  it('should have default required value', () =>
    expect(component.required).toBe(DEFAULT_REQUIRED))
})

describe('correctly sets props', () => {
  const Constructor = Vue.extend(Input)
  const component = new Constructor({
    propsData: {
      name: PROP_NAME,
      value: PROP_VALUE,
      title: PROP_TITLE,
      placeholder: PROP_PLACEHOLDER,
      multiple: PROP_MULTIPLE,
      disabled: PROP_DISABLED,
      required: PROP_REQUIRED
    }
  }).$mount()

  const input = () => component.$el.querySelector('select')
  const attr = (name) => input().getAttribute(name)
  const bool = (name, value) => value ? name : null
  const placeholder = input().options[0].textContent.trim()

  it('should correctly set name prop', () =>
    expect(attr('name')).toBe(PROP_NAME))

  it('should correctly set value prop', () =>
    expect(component.value).toBe(PROP_VALUE))

  it('should not be empty', () =>
    expect(component.isEmpty()).toBe(false))

  it('should correctly set title prop', () =>
    expect(attr('title')).toBe(PROP_TITLE))

  it('should correctly set placeholder prop', () =>
    expect(placeholder).toBe(PROP_PLACEHOLDER))

  it('should have default multiple prop value', () =>
    expect(attr('multiple')).toBe(bool('multiple', PROP_MULTIPLE)))

  it('should correctly set disabled prop', () =>
    expect(attr('disabled')).toBe(bool('disabled', PROP_DISABLED)))

  it('should correctly set required prop', () =>
    expect(attr('required')).toBe(bool('required', PROP_REQUIRED)))
})
