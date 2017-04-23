# vx-select

A VxSelect Component

[![Build Status](https://travis-ci.org/vx-components/select.svg?branch=master)](https://travis-ci.org/vx-components/select)
[![bitHound Dependencies](https://www.bithound.io/github/vx-components/select/badges/dependencies.svg)](https://www.bithound.io/github/vx-components/select/master/dependencies/npm)

## Install
```sh
npm install --save @vx-components/select
```

## VxSelect API

### props 
- `v-model` ***String*** (*optional*) 
Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type. 

- `id` ***String*** (*optional*) 
Defines a unique identifier (ID) which must be unique in the whole document. 

- `autofocus` ***Boolean*** (*optional*) 
This Boolean property lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. 

- `disabled` ***Boolean*** (*optional*) `default: false` 
This Boolean property indicates that the user cannot interact with the control. 

- `hidden` ***Boolean*** (*optional*) 
This Boolean property indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. Browsers won't render the composant with the hidden property set. 

- `title` ***String*** (*optional*) 
Contains a text representing advisory information related to the element it belongs to. It's also use to display an error message when the input is invalid. 

- `multiple` ***Boolean*** (*optional*) 
This Boolean property indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. 

- `name` ***String*** (*optional*) 
The name of the control. 

- `placeholder` ***String*** (*optional*) 
A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint. 

- `required` ***Boolean*** (*optional*) `default: false` 
A Boolean property indicating that an option with a non-empty string value must be selected. 

- `size` ***Number*** (*optional*) 
If the control is presented as a scrolled list box, this property represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0. 

- `options` ***Array*** (*optional*) 
The list of items of the control 

- `dataClassError` ***String*** (*optional*) `default: 'uk-form-danger'` 

### events 
- `invalid` Fired when a submittable element has been checked and doesn't satisfy its constraints. The validity of submittable elements is checked before submitting their owner form. 
- `input` Fired when the value is changed. 
- `change` Fired when a change to the initial element's value is committed by the user. Unlike the `input` event, the change event is not necessarily fired for each change to an element's value. 

### methods 
- `isEmpty()` 
Define if the control value is empty of not. 

- `setError()` 
Set a message error 

- `clearError()` 
clear the message error 


## Usage

```html
<template>
  <vx-select
    v-model="value"
    :options="options"
    :placeholder="placeholder"
    @change="onChange" />
</template>

<script>
  import VxSelect from '@vx-components/select/vx.vue'
  
  export default {
    data: () => ({
      value: 2,
      placeholder: 'Select an item',
      options: [
        { value: 1, label: 'First' },
        { value: 2, label: 'Second' }
      ]
    }),
    methods: {
      onChange () {
        // this.value contains the new value
      }
    },
    components: { VxSelect }
  }
</script>
```

## License

Under the MIT license. See [LICENSE](https://github.com/vx-components/select/blob/master/LICENSE) file for more details.
