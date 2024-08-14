import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget-1",
          name: "Cloud Accounts",
          text: "Random data text here",
          type: "donut-chart",
          data: { connected: 2, notConnected: 1 }
        },
        {
          id: "widget-2",
          name: "Cloud Account Risk Assessment",
          text: "Random data text here",
          type: "pie-chart",
          data: { failed: 100, warning: 200, nonApplicable: 50, passed: 9650 }
        }
      ]
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "widget-3",
          name: "Top N Namespaces Specific Alerts",
          text: "No Graph Data Available",
          type: "bar-chart",
          data: null
        },
        {
          id: "widget-4",
          name: "Workload Alerts",
          text: "No Graph Data Available",
          type: "line-chart",
          data: null
        }
      ]
    },
    {
      name: "Registry Scan",
      widgets: [
        {
          id: "widget-5",
          name: "Image Risk Assessment",
          text: "Random data text here",
          type: "bar-chart",
          data: { critical: 10, high: 30 }
        },
        {
          id: "widget-6",
          name: "Image Security Issues",
          text: "Random data text here",
          type: "bar-chart",
          data: { critical: 5, high: 25 }
        }
      ]
    }
  ]
};

export const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      state.categories[categoryId].widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      state.categories[categoryId].widgets = state.categories[categoryId].widgets.filter(
        widget => widget.id !== widgetId
      );
    }
  }
});

export const { addWidget, removeWidget } = widgetsSlice.actions;
export default widgetsSlice.reducer;
