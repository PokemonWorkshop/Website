export type ColumnSetup = '1/1' | '1/2' | '1/3 1/3 1/3' | '1/3 2/3' | '2/3 1/3' | '1/4 1/4 1/4 1/4' | '1/4 3/4' | '3/4 1/4';

type MultiColumnSectionStore = {
  itemTextClass: string[];
  containerClass: string[];
  columns: ColumnSetup;
  columnIndex: number;
}

export const multiColumnSectionStore: MultiColumnSectionStore = {
  containerClass: [],
  itemTextClass: [],
  columns: '1/1',
  columnIndex: 0,
}
