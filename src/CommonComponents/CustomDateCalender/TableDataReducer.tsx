import React, { ReactNode, createContext, useContext, useReducer } from "react";

// Action types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_ITEM = "UPDATE_ITEM";

// Types
interface TableDataItem {
  // Define the structure of your table data item here
  // For example:
  name: string;
  date: string;
  time: string;
  duration: number;
  amount: number;
}

interface TableDataContextProps {
  tableData: TableDataItem[];
  addItem: (item: TableDataItem) => void;
  removeItem: (index: number) => void;
  updateItem: (index: number, updatedItem: TableDataItem) => void;
}

// Reducer function
const tableDataReducer = (state: TableDataItem[], action: any) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_ITEM:
      const updatedState = [...state];
      updatedState[action.payload.index] = action.payload.updatedItem;
      return updatedState;
    default:
      return state;
  }
};

// Initial state
const initialTableData: TableDataItem[] = [];

// Context for the store
const TableDataContext = createContext<TableDataContextProps | undefined>(
  undefined
);

// Provider component
export const TableDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tableData, dispatch] = useReducer(tableDataReducer, initialTableData);

  // Action creators
  const addItem = (item: TableDataItem) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const removeItem = (index: number) => {
    dispatch({ type: REMOVE_ITEM, payload: index });
  };

  const updateItem = (index: number, updatedItem: TableDataItem) => {
    dispatch({ type: UPDATE_ITEM, payload: { index, updatedItem } });
  };

  return (
    <TableDataContext.Provider
      value={{ tableData, addItem, removeItem, updateItem }}
    >
      {children}
    </TableDataContext.Provider>
  );
};

// Hook to use the table data and actions
export const useTableData = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useTableData must be used within a TableDataProvider");
  }
  return context;
};
