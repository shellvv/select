<template>
  <div>
    <select class="uk-select" v-model="value"
      :id="id" 
      :autofocus="autofocus"
      :disabled="disabled" 
      :class="classes"
      :hidden="hidden"
      :multiple="multiple" 
      :name="name"
      :title="title"
      :required="required" 
      @invalid="invalid"
      @change="input">
      <option value="" class="placeholder">
        {{ placeholder }}</option>
      <option v-for="item of options"
        :value="item.value || item.label">
          {{ item.label }}</option>
    </select>
    <div v-if="errorMessage" class="uk-alert-danger" uk-alert>
      {{ errorMessage }}</div>
  </div>
</template>

<script>
  /**
   * The custom HTML <select> element represents a control that provides a menu of options
   */
  export default {
    name: 'vx-select',
    props: {
      /**
       * Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type.
       * @model
       */
      value: { type: String },

      /**
       * Defines a unique identifier (ID) which must be unique in the whole document.
       */
      id: { type: String },

      /**
       * This Boolean property lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control.
       */
      autofocus: { type: Boolean },

      /**
       * This Boolean property indicates that the user cannot interact with the control.
       */
      disabled: { type: Boolean, default: false },

      /**
       * This Boolean property indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. Browsers won't render the composant with the hidden property set.
       */
      hidden: { type: Boolean },

      /**
       * Contains a text representing advisory information related to the element it belongs to. It's also use to display an error message when the input is invalid.
       */
      title: { type: String },

      /**
       * The maximum number of characters (Unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
       * TODO Need to be implemented
       * @private
       */
      maxlength: { type: Number, validation: (value) => value > 0 },

      /**
       * The minimum number of characters (Unicode code points) required that the user should enter.
       * TODO Need to be implemented
       * @private
       */
      minlength: { type: Number, validation: (value) => value >= 0 },

      /**
       * This Boolean property indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time.
       */
      multiple: { type: Boolean },

      /**
       * The name of the control.
       */
      name: { type: String },

      /**
       * A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
       */
      placeholder: { type: String },

      /**
       * This Boolean property indicates that the user cannot modify the value of the control. Unlike the disabled property, the readonly property does not prevent the user from clicking or selecting in the control.
       * TODO Need to be implemented
       * @private
       */
      readonly: { type: Boolean },

      /**
       * A Boolean property indicating that an option with a non-empty string value must be selected.
       */
      required: { type: Boolean, default: false },

      /**
       * If the control is presented as a scrolled list box, this property represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.
       */
      size: { type: Number, default: 0, validation: (value) => value >= 0 },

      /**
       * The list of items of the control
       */
      options: { type: Array },

      dataClassError: { type: String, default: 'uk-form-danger' }
    },
    data () {
      return {
        initialValue: null,
        hasError: false,
        errorMessage: null
      }
    },
    computed: {
      classes () {
        return {
          [this.dataClassError]: this.hasError,
          empty: this.isEmpty()
        }
      },
      currentValue () {
        return this.value
      }
    },
    created () {
      this.initialValue = this.value
    },
    methods: {
      /**
       * Define if the control value is empty of not.
       */
      isEmpty () {
        return !this.value || this.value.length === 0
      },

      /**
       * @private
       */
      invalid (e) {
        this.setError(this.title)

        /**
         * Fired when a submittable element has been checked and doesn't satisfy its constraints. The validity of submittable elements is checked before submitting their owner form.
         */
        this.$emit('invalid', e)
      },

      /**
       * @private
       */
      input (e) {
        this.clearError()

        /**
         * Fired when the value is changed.
         */
        this.$emit('input', this.value)

        if (this.value !== this.initialValue) {
          /**
           * Fired when a change to the initial element's value is committed by the user. Unlike the `input` event, the change event is not necessarily fired for each change to an element's value.
           */
          this.$emit('change')
        }
      },

      /**
       * Set a message error
       */
      setError (message) {
        this.hasError = true
        this.errorMessage = message
      },

      /**
       * clear the message error
       */
      clearError () {
        this.hasError = false
        this.errorMessage = null
      }
    }
  }
</script>

<style scoped>
  .empty, .placeholder {
    color: #999
  }
  
  select {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  select.placeholder:focus {
    color: inherit
  }
  
  select + .uk-alert-danger {
    font-size: .9em;
    text-align: left;
    margin-top: 0;
    padding-top: 7px;
    padding-bottom: 7px;
  }
</style>
