<template>
  <GridLayout rows="*">
    <RadListView
      :items="test"
      multipleSelection="false"
      selectionBehavior="Press"
    >
      <v-template>
        <GridLayout
          columns="*, *"
        >
          <Label col="0" :text="item.title" textWrap="true" />
          <Label col="1" :text="item.description" textWrap="true" />
        </GridLayout>
      </v-template>
    </RadListView>
  </GridLayout>
</template>

<script lang="ts">
  import { ObservableArray } from "@nativescript/core";
  import Vue from "nativescript-vue";

  export default Vue.extend({

    data() {
      return {
        test: new ObservableArray<{title: string, message: string}>([
          {
            title: "test",
            message: "hello"
          },
          {
            title: "test",
            message: "hello"
          },
          {
            title: "test",
            message: "hello"
          },
          {
            title: "test",
            message: "hello"
          },
          {
            title: "test",
            message: "hello"
          },
          {
            title: "test",
            message: "hello"
          },
          {
            title: "test",
            message: "hello"
          },
        ])
      };
    }
  });
</script>

<style scoped lang="scss">
</style>
