import React from 'react'
import { mount, render } from 'enzyme'

import Text from '../../Typography/Text/Text'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
import Radio from '../Radio'
import ColoredTextProvider from '../../Typography/ColoredTextProvider/ColoredTextProvider'

describe('Radio', () => {
  const defaultProps = {
    label: 'The radio',
    name: 'radio_group',
    value: 'the-value',
  }
  const doMount = (overrides = {}) => {
    const radio = mount(<Radio {...defaultProps} {...overrides} />)

    const findRadioElement = () => radio.find('input')

    return {
      radio,
      label: radio.find('label'),
      findRadioElement,
      findFakeRadio: () => radio.find('[data-testid="fake-radio"]'),
      findFakeInnerRadio: () => radio.find('[data-testid="fake-inner-radio"]'),
      findColoredLabel: () => radio.find(ColoredTextProvider),
      check: () => findRadioElement().simulate('change', { target: { checked: true } }),
      focus: (focusEvent = {}) => findRadioElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findRadioElement().simulate('blur', blurEvent),
    }
  }

  it('renders', () => {
    const radio = render(<Radio label="A label" name="the-group" value="the-value" />)

    expect(radio).toMatchSnapshot()
  })

  it('must have a label', () => {
    const { label } = doMount({ label: 'Some label' })

    expect(label).toContainReact(<Text size="medium">Some label</Text>)
  })

  it('must have a name and a value', () => {
    const { findRadioElement } = doMount({ name: 'some-radio-group', value: 'some-value' })

    expect(findRadioElement()).toHaveProp('name', 'some-radio-group')
    expect(findRadioElement()).toHaveProp('value', 'some-value')
  })

  describe('connecting the label to the radio', () => {
    it('connects the label to the radio', () => {
      const { label, findRadioElement } = doMount()

      expect(label.prop('htmlFor')).toEqual(findRadioElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { label, findRadioElement } = doMount({
        id: 'the-id',
        name: 'the-radio-group',
        value: 'the-value',
      })

      expect(label).toHaveProp('htmlFor', 'the-id')
      expect(findRadioElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name and the value when no id is provided', () => {
      const { label, findRadioElement } = doMount({ name: 'the-radio-group', value: 'the-value' })

      expect(label).toHaveProp('htmlFor', 'the-radio-group_the-value')
      expect(findRadioElement()).toHaveProp('id', 'the-radio-group_the-value')
    })
  })

  describe('interactivity', () => {
    it('can be unchecked', () => {
      const { findRadioElement, findFakeRadio, findFakeInnerRadio } = doMount({ checked: false })

      expect(findRadioElement()).toHaveProp('checked', false)
      expect(findFakeRadio()).toHaveClassName('unchecked')
      expect(findFakeInnerRadio()).toBeEmpty()
      expect(findFakeRadio().find(DecorativeIcon)).toBeEmpty()
    })

    it('can be checked', () => {
      const { findRadioElement, findFakeRadio, findFakeInnerRadio } = doMount({ checked: true })

      expect(findRadioElement()).toHaveProp('checked', true)
      expect(findFakeRadio()).toHaveClassName('checked')
      expect(findFakeInnerRadio()).toHaveClassName('innerChecked')
    })

    it('checks when clicking', () => {
      const { findRadioElement, findFakeRadio, findFakeInnerRadio, check } = doMount()

      check()

      expect(findRadioElement()).toHaveProp('checked', true)
      expect(findFakeRadio()).toHaveClassName('checked')
      expect(findFakeInnerRadio()).toHaveClassName('innerChecked')
    })

    it('notifies when it is checked', () => {
      const onChangeMock = jest.fn()
      const { check } = doMount({ onChange: onChangeMock })

      check()
      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { checked: true } })
      )
    })

    it('can receive a new value from a parent component', () => {
      const { radio, findRadioElement } = doMount({ checked: false })

      radio.setProps({ checked: true })

      expect(findRadioElement()).toHaveProp('checked', true)
    })
  })

  describe('focusing', () => {
    it('can be focused and unfocused', () => {
      const { findFakeRadio, focus, blur } = doMount()

      focus()
      expect(findFakeRadio()).toHaveClassName('focused unchecked')

      blur()
      expect(findFakeRadio()).not.toHaveClassName('focused')
      expect(findFakeRadio()).toHaveClassName('unchecked')
    })

    it('will notify when focus is gained', () => {
      const onFocusMock = jest.fn()
      const event = { target: { value: 'the value' } }

      const { focus } = doMount({ onFocus: onFocusMock })
      focus(event)

      expect(onFocusMock).toHaveBeenCalledWith(expect.objectContaining(event))
    })

    it('will notify when focus is lost', () => {
      const onBlurMock = jest.fn()
      const event = { target: { value: 'the value' } }

      const { blur } = doMount({ onBlur: onBlurMock })
      blur(event)

      expect(onBlurMock).toHaveBeenCalledWith(expect.objectContaining(event))
    })
  })

  describe('error', () => {
    it('can have an error feedback state', () => {
      const { findFakeRadio, findColoredLabel } = doMount({
        label: 'Some error',
        feedback: 'error',
      })

      expect(findColoredLabel()).toHaveProp('colorClassName', 'errorText')
      expect(findFakeRadio()).toHaveClassName('error')
      expect(findFakeRadio()).not.toHaveClassName('unchecked')
    })

    it('does not appear as an error when it is checked', () => {
      const { findFakeRadio, findColoredLabel, check } = doMount({
        label: 'Some error',
        feedback: 'error',
        checked: false,
      })

      check()

      expect(findColoredLabel()).toBeEmpty()
      expect(findFakeRadio()).toHaveClassName('checked')
      expect(findFakeRadio()).not.toHaveClassName('error')
    })
  })

  describe('disabled', () => {
    it('can be disabled', () => {
      const { findFakeRadio, findRadioElement, findColoredLabel } = doMount({
        label: 'A label',
        disabled: true,
      })

      expect(findColoredLabel()).toHaveProp('colorClassName', 'disabledText')
      expect(findRadioElement()).toHaveProp('disabled', true)
      expect(findFakeRadio()).toHaveClassName('disabled')
    })

    it('can be disabled and checked', () => {
      const { findFakeRadio, findFakeInnerRadio, findRadioElement, findColoredLabel } = doMount({
        label: 'A label',
        disabled: true,
        checked: true,
      })

      expect(findColoredLabel()).toHaveProp('colorClassName', 'disabledText')
      expect(findRadioElement()).toHaveProp('disabled', true)
      expect(findFakeRadio()).toHaveClassName('disabledChecked')
      expect(findFakeInnerRadio()).toHaveClassName('innerDisabledChecked')
    })
  })

  it('passes additional attributes to the radio', () => {
    const { findRadioElement } = doMount({
      disabled: true,
      'data-some-attr': 'some value',
    })
    expect(findRadioElement()).toHaveProp('disabled', true)
    expect(findRadioElement()).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const { findRadioElement } = doMount({
      className: 'my-custom-class',
      style: { color: 'hotpink' },
    })

    expect(findRadioElement()).not.toHaveProp('className', 'my-custom-class')
    expect(findRadioElement()).not.toHaveProp('style')
  })
})