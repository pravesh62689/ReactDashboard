import create from 'zustand';

export const useStore = create((set) => ({
  categories: [
    { name: 'CSPM Executive Dashboard', widgets: [{ name: 'Widget1', text: 'Text1' }] }
  ],
  addWidget: (categoryName, widget) => set((state) => ({
    categories: state.categories.map((category) =>
      category.name === categoryName
        ? { ...category, widgets: [...category.widgets, widget] }
        : category
    ),
  })),
  removeWidget: (categoryName, widgetName) => set((state) => ({
    categories: state.categories.map((category) =>
      category.name === categoryName
        ? { ...category, widgets: category.widgets.filter((widget) => widget.name !== widgetName) }
        : category
    ),
  })),
}));
