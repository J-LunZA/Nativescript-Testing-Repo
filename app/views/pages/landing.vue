<template>
  <Page>
    <ActionBar>
      <Label text="Landing"/>
    </ActionBar>

    <StackLayout>
      <Button
        text="Rad Auto Complete Example"
        @tap="$navigateTo(RadAutoComplete)"
      />

      <Button
        text="Community Chart Example"
        @tap="$navigateTo(CommunityChart)"
      />

      <Button
        text="Rad List View Example"
        @tap="$navigateTo(RadListView)"
      />

      <Button
        text="Community Tabs Example"
        @tap="$navigateTo(Tabs)"
      />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import RadAutoComplete from '~/views/pages/autocomplete.vue';
  import CommunityChart from '~/views/pages/chart.vue';
  import RadListView from '~/views/pages/listview.vue';
  import Tabs from '~/views/pages/tabs.vue';


  export default Vue.extend({

    data() {
      return {
        RadAutoComplete: RadAutoComplete,
        CommunityChart: CommunityChart,
        RadListView: RadListView,
        Tabs: Tabs
      };
    }
  });
</script>

<style scoped lang="scss">
</style>