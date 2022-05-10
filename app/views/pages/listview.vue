<template>
  <Page>
    <ActionBar>
      <Label text="List View"/>

      <NavigationButton
        class="far t-10"
        icon.decode="font://&#xf191;"
        @tap="$navigateBack()"
      />
    </ActionBar>

    <GridLayout>
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
  </Page>
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
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
