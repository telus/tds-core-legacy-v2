import React from 'react'
import { mount } from 'enzyme'

import Text from '../../Typography/Text/Text'
import DecorativeIcon from '../../Icons/DecorativeIcon/DecorativeIcon'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  const defaultProps = {
    label: 'The checkbox',
  }
  const doMount = (overrides = {}) => {
    const checkbox = mount(<Checkbox {...defaultProps} {...overrides} />)

    const findCheckboxElement = () => checkbox.find('input')

    return {
      checkbox,
      label: checkbox.find('label'),
      findCheckboxElement,
      findFakeCheckbox: () => checkbox.find('[data-testid="fake-checkbox"]'),

      check: () => findCheckboxElement().simulate('change', { target: { checked: true } }),
      uncheck: () => findCheckboxElement().simulate('change', { target: { checked: false } }),
      focus: (focusEvent = {}) => findCheckboxElement().simulate('focus', focusEvent),
      blur: (blurEvent = {}) => findCheckboxElement().simulate('blur', blurEvent),
    }
  }

  // it('renders', () => {
  //   const checkbox = doShallow()
  //
  //   expect(checkbox).toMatchSnapshot()
  // })
  //

  it('must have a label', () => {
    const { label } = doMount({ label: 'Some label' })

    expect(label).toContainReact(<Text size="medium">Some label</Text>)
  })

  describe('connecting the label to the checkbox', () => {
    it('connects the label to the checkbox', () => {
      const { label, findCheckboxElement } = doMount()

      expect(label.prop('htmlFor')).toEqual(findCheckboxElement().prop('id'))
    })

    it('uses the id when provided', () => {
      const { label, findCheckboxElement } = doMount({
        id: 'the-id',
        name: 'the-name',
        label: 'The label',
      })

      expect(label).toHaveProp('htmlFor', 'the-id')
      expect(findCheckboxElement()).toHaveProp('id', 'the-id')
    })

    it('uses the name when no id is provided', () => {
      const { label, findCheckboxElement } = doMount({ name: 'the-name', label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-name')
      expect(findCheckboxElement()).toHaveProp('id', 'the-name')
    })

    it('generates an id from the label when no id or name is provided', () => {
      const { label, findCheckboxElement } = doMount({ label: 'The label' })

      expect(label).toHaveProp('htmlFor', 'the-label')
      expect(findCheckboxElement()).toHaveProp('id', 'the-label')
    })
  })

  describe('interactivity', () => {
    it('can be unchecked', () => {
      const { findCheckboxElement, findFakeCheckbox } = doMount({ checked: false })

      expect(findCheckboxElement()).toHaveProp('checked', false)
      expect(findFakeCheckbox()).toHaveClassName('unchecked')
      expect(findFakeCheckbox().find(DecorativeIcon)).toBeEmpty()
    })

    it('can be checked', () => {
      const { findCheckboxElement, findFakeCheckbox } = doMount({ checked: true })

      expect(findCheckboxElement()).toHaveProp('checked', true)
      expect(findFakeCheckbox()).toHaveClassName('checked')
      expect(findFakeCheckbox()).toContainReact(
        <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
      )
    })

    it('checks and unchecks when clicking', () => {
      const { findCheckboxElement, findFakeCheckbox, check, uncheck } = doMount()

      check()

      expect(findCheckboxElement()).toHaveProp('checked', true)
      expect(findFakeCheckbox()).toHaveClassName('checked')
      expect(findFakeCheckbox()).toContainReact(
        <DecorativeIcon symbol="checkmark" size={16} variant="inverted" />
      )

      uncheck()

      expect(findCheckboxElement()).toHaveProp('checked', false)
      expect(findFakeCheckbox()).toHaveClassName('unchecked')
      expect(findFakeCheckbox().find(DecorativeIcon)).toBeEmpty()
    })

    it('notifies when it is checked or unchecked', () => {
      const onChangeMock = jest.fn()
      const { check, uncheck } = doMount({ onChange: onChangeMock })

      check()
      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { checked: true } })
      )

      uncheck()
      expect(onChangeMock).toHaveBeenCalledWith(
        expect.objectContaining({ target: { checked: false } })
      )
    })

    it('can receive a new value from a parent component', () => {
      const { checkbox, findCheckboxElement } = doMount({ checked: false })

      checkbox.setProps({ checked: true })

      expect(findCheckboxElement()).toHaveProp('checked', true)
    })
  })

  describe('focusing', () => {
    it('can be focused and unfocused', () => {
      const { findFakeCheckbox, focus, blur } = doMount()

      focus()
      expect(findFakeCheckbox()).toHaveClassName('focused unchecked')

      blur()
      expect(findFakeCheckbox()).not.toHaveClassName('focused')
      expect(findFakeCheckbox()).toHaveClassName('unchecked')
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

  it('can have an error feedback state', () => {
    const { checkbox } = doMount({ label: 'Some error', feedback: 'error' })

    expect(checkbox.find('[colorClassName="errorText"]')).toBePresent()
  })

  //
  // it('passes additional attributes to the element', () => {
  //   const checkbox = doShallow({
  //     disabled: 'true',
  //     'data-some-attr': 'some value',
  //   })
  //   expect(findInputElement(checkbox)).toHaveProp('disabled', 'true')
  //   expect(findInputElement(checkbox)).toHaveProp('data-some-attr', 'some value')
  // })
  //
  // it('does not allow custom CSS', () => {
  //   const checkbox = doShallow({
  //     className: 'my-custom-class',
  //     style: { color: 'hotpink' },
  //   })
  //
  //   expect(findInputElement(checkbox)).not.toHaveProp('className', 'my-custom-class')
  //   expect(findInputElement(checkbox)).not.toHaveProp('style')
  // })
})
