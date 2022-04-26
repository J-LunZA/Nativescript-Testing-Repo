import Vue from 'nativescript-vue'

import Chart from './views/pages/chart.vue'
import Home from './views/pages/listview.vue'
import Tabs from './views/pages/tabs.vue';
import AutoComplete from './views/pages/autocomplete.vue';

import RadListView from 'nativescript-ui-listview/vue';
import RadAutoComplete from 'nativescript-ui-autocomplete/vue';
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';
import { install } from '@nativescript-community/ui-chart';
install();

Vue.use(RadListView);
Vue.use(RadAutoComplete);
Vue.use(TabsPlugin);

Vue.registerElement('CandleStickChart', () => require('@nativescript-community/ui-chart/charts').CandleStickChart);
Vue.registerElement('LineChart', () => require('@nativescript-community/ui-chart/charts').LineChart);

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  render: (h) => h('frame', [h(AutoComplete)]),
}).$start()
