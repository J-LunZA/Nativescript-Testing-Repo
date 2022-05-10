<template>
  <Page>
    <ActionBar>
      <Label text="tabs"/>

      <NavigationButton
        class="far t-10"
        icon.decode="font://&#xf191;"
        @tap="$navigateBack()"
      />
    </ActionBar>

    <MDTabs
      selectedIndex="0"
      tabsPosition="bottom"
      swipeEnabled="false"
      titleVisibility="Always"
    >
      <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
      <MDTabStrip>
        <MDTabStripItem>
          <Label text="test 1" />
          <Image
            class="fas"
            src.decode="font://&#xf015;"
          />
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="test 2" />
          <Image
            class="fas"
            src.decode="font://&#xf015;"
          />
        </MDTabStripItem>
        <MDTabStripItem class="special">
          <Label text="test 3" />
          <Image
            class="fas"
            src.decode="font://&#xf015;"
          />
        </MDTabStripItem>
      </MDTabStrip>

      <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
      <MDTabContentItem>
        <GridLayout rows="auto, auto">
          <Label text="Home Page" class="h2 text-center"></Label>
          <Button
            row="1"
            text="Go to Rad List View"
            @tap="$navigateTo(RadListView)"
          />
        </GridLayout>
      </MDTabContentItem>
      <MDTabContentItem>
        <Frame id="ListView">
          <Label text="Home Page" class="h2 text-center"></Label>
        </Frame>
      </MDTabContentItem>
      <MDTabContentItem>
        <GridLayout>
          <Label text="Search Page" class="h2 text-center"></Label>
        </GridLayout>
      </MDTabContentItem>
    </MDTabs>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";

  import ListView from '~/views/components/listview.vue';

  import RadListView from '~/views/pages/listview.vue';

  export default Vue.extend({

    components: {
      'list-view': ListView,
    },

    data() {
      return {
        RadListView: RadListView,
      };
    }
  });
</script>

<style scoped lang="scss">
</style>
