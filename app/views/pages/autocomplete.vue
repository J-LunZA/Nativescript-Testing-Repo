<template>
  <Page>
    <ActionBar>
      <Label text="AutoComplete Example"/>
    </ActionBar>

    <StackLayout>
      <TextField hint="Normal TextField 1"/>

      <RadAutoCompleteTextView
        ref="autocomplete"
        suggestMode="Suggest"
        :items="dataItems"
        hint="RadAutoComplete"
      />

      <TextField hint="Normal TextField 2"/>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { ObservableArray } from "@nativescript/core";
import Vue from "nativescript-vue";

import { getCountry, getCountriesCount } from '../../util/autoCompleteData';

  export default Vue.extend({

    data() {
      let dataItems = new ObservableArray();
      for (let i = 0; i < getCountriesCount(); i++) {
        dataItems.push(getCountry(i));
      }
      return {
        dataItems: dataItems
      };
    }
  });
</script>

<style scoped lang="scss">
</style>