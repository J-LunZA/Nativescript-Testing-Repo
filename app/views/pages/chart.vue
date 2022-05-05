<template>
  <Page>
    <ActionBar>
      <Label text="Candle Chart"/>
    </ActionBar>

    <GridLayout rows="auto, *" columns="*, *">
      <Button
        row="0"
        col="0"
        text="show Candle"
        @tap="toggelChart = !toggelChart"
      />

      <Button
        row="0"
        col="1"
        text="Show Line"
        @tap="toggelChart = !toggelChart"
      />

      <LineChart
        v-if="toggelChart"
        row="1"
        colSpan="2"
        ref="lineChart"
        height="100%"
        @loaded="onLineLoaded"
      />

      <CandleStickChart
        v-if="!toggelChart"
        row="1"
        colSpan="2"
        ref="candleChart"
        height="100%"
        @loaded="onCandleLoaded"
      />
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { EventData } from "@nativescript-community/observable";
import { CandleStickChart, LineChart } from "@nativescript-community/ui-chart";
import { XAxisPosition } from "@nativescript-community/ui-chart/components/XAxis";
import { AxisDependency } from "@nativescript-community/ui-chart/components/YAxis";
import { CandleDataSet } from "@nativescript-community/ui-chart/data/CandleDataSet";
import { Style } from '@nativescript-community/ui-canvas';
import Vue from "nativescript-vue";
import { CandleData } from "@nativescript-community/ui-chart/data/CandleData";
import { Color } from "@nativescript/core";
import { LineData } from "@nativescript-community/ui-chart/data/LineData";
import { LineDataSet } from "@nativescript-community/ui-chart/data/LineDataSet";

export default Vue.extend({

  data() {
    return {
      toggelChart: false,
      range: 100,
      count: 400
    };
  },

  methods: {
    onLineLoaded(args: EventData) {
      const chart = <LineChart>args.object;

      // Gestures
      chart.setTouchEnabled(true);
      chart.setPinchZoom(true);
      chart.setDragEnabled(true);
      chart.setAutoScaleMinMaxEnabled(true);
      chart.setScaleEnabled(true);
      chart.setDoubleTapToZoomEnabled(true);
      chart.setDragDecelerationEnabled(true);

      // // Highlight
      chart.setHighlightPerDragEnabled(false);
      chart.setHighlightPerTapEnabled(true);

      chart.getLegend().setEnabled(false);
      chart.setDrawGridBackground(false);
      chart.setVisibleXRangeMaximum(30);

      // X Axis
      const xAxis = chart.getXAxis();
      xAxis.setPosition(XAxisPosition.BOTTOM);
      xAxis.setDrawGridLines(false);
      xAxis.setTextColor('white');

      // Left Axis
      const leftAxis = chart.getAxisLeft();
      leftAxis.setEnabled(true);
      leftAxis.setLabelCount(7, false);
      leftAxis.setDrawGridLines(false);
      leftAxis.setDrawAxisLine(false);

      const myData = new Array(500).fill(0).map((v, i) => ({
        index: i,
        value: Math.random() * 1,
      }));

      const sets = [];
      const set = new LineDataSet(myData, 'Legend Label', 'index', 'value');
      set.setColor('blue');
      sets.push(set);

      // Create a data object with the data sets
      const ld = new LineData(sets);

      // Set data
      chart.setData(ld);
      chart.setDragEnabled(true);

    },

    onCandleLoaded(args: EventData) {
      const chart = <CandleStickChart>args.object;

      chart.drawFrameRate = false;
      chart.hardwareAccelerated = true;

            // Highlight
      chart.setHighlightPerDragEnabled(false);
      chart.setHighlightPerTapEnabled(true);

      chart.getLegend().setEnabled(false);
      chart.setDrawGridBackground(false);
      chart.setVisibleXRangeMaximum(60);

      // X Axis
      const xAxis = chart.getXAxis();
      xAxis.setPosition(XAxisPosition.BOTTOM);
      xAxis.setDrawGridLines(false);
      // xAxis.setTextColor(this.isDarkTheme ? 'white' : 'white');
      xAxis.setTextColor('red');

      // Left Axis
      const leftAxis = chart.getAxisLeft();
      leftAxis.setEnabled(true);
      leftAxis.setLabelCount(7, false);
      leftAxis.setDrawGridLines(false);
      leftAxis.setDrawAxisLine(false);
      /**
       * For reasons unknown, when setting the set setAxisDependency to the right axis, the bottom the x axis values dont appear
       * quick work around is to enable left axis, set setAxisDependency to left and make the labels invisible then all works as expected
       */
      leftAxis.setTextColor('transparent');

      // Right Axis
      const rightAxis = chart.getAxisRight();
      rightAxis.setEnabled(true);
      rightAxis.setLabelCount(7, false);
      rightAxis.setDrawGridLines(false);
      rightAxis.setDrawAxisLine(false);
      rightAxis.setTextColor('red');
      // SET CHART DATA
      chart.resetTracking();

      // Create chart data array
      const values = [];
      for (let i = 0; i < this.count; i++) {
          const multi = this.range + 1;
          const val = Math.random() * 40 + multi;

          const high = Math.random() * 9 + 8;
          const low = Math.random() * 9 + 8;

          const open = Math.random() * 6 + 1;
          const close = Math.random() * 6 + 1;

          const even = i % 2 == 0;

          values.push({
            high: val + high,
            low: val - low,
            open: even ? val + open : val - open,
            close: even ? val - close : val + close,
          });
      }
      const set1 = new CandleDataSet(values, 'Data Set');
      set1.setDrawIcons(false);
      set1.setAxisDependency(AxisDependency.RIGHT);
      set1.setShadowColor('darkgray');
      set1.setShadowWidth(0.7);
      set1.setDecreasingColor('red');
      set1.setDecreasingPaintStyle(Style.FILL);
      set1.setIncreasingColor(new Color(255, 122, 242, 84));
      set1.setIncreasingPaintStyle(Style.STROKE);
      set1.setNeutralColor('blue');

      const data = new CandleData([set1]);

      chart.setData(data);
      chart.invalidate();

      // Intentionally set gestures after chart data has been set
      // Gestures
      chart.setTouchEnabled(true);
      chart.setPinchZoom(true);
      chart.setDragEnabled(true);
      chart.setAutoScaleMinMaxEnabled(true);
      chart.setScaleEnabled(true);
      chart.setDoubleTapToZoomEnabled(true);
      chart.setDragDecelerationEnabled(true);

    }
  }
});
</script>

<style scoped lang="scss">
</style>
