<template>
    <div class="field">
      <input class="input is-large" type="text" placeholder="O que você está produrando?">
      <button class="button is-info"><i class="ion-ios-search"></i></button>
    </div>
</template>


<style lang="scss">
  @import '~assets/scss/vars.scss';

  .field {
    display: flex;
    border: 1px solid $border-color;
    transition: border-color .4s ease;

    &:hover {
      border-color: darken($border-color, 20%);
    }


    .input {
      flex-grow: 5;
      border-width: 0;
      padding: 12px 16px;
      font-size: 16px;
      transition: box-shadow .4s ease;

      &:focus {
        outline: none;
        box-shadow: 0 0 4px $color-primary;
      }

    }
    .button {
      flex-grow: 1;
      border-width: 0;
      background-color: $button-default;
      color: text-color-background($button-default);
      transition: all .4s;
      cursor: pointer;

      &:focus,
      &:hover {
        background-color: $button-default-hover;
        color: text-color-background($button-default-hover);
      }
      &:active {
        background-color: $button-default-active;
        color: text-color-background($button-default-active);
        transition-duration: 0s;
      }

      i {
        font-size: 32px;
      }
    }
  }
</style>
