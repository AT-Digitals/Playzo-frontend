import * as React from "react";

import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { format, isValid } from "date-fns";

import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import styled from "styled-components";
import { useTableData } from "./TableDataReducer";

const StyledCell = styled(TableCell)({
  " &.MuiTableCell-root": {
    borderBottom: "none",
    fontSize: "18px",
  },
});

const StyledCellTitle = styled(TableCell)({
  " &.MuiTableCell-root": {
    borderBottom: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
});
interface TableProps {
  tableData: any;
  handleRemoveItem: any;
  serviceName: any;
  serviceType: any;
  setTableData?: any;
  handleAddmore?: any;
}

export default function CustomTable({
  // tableData,
  // handleRemoveItem,
  serviceName,
  // serviceType,
  setTableData,
  handleAddmore,
}: TableProps) {
  const { tableData, removeItem } = useTableData();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"2rem"}
    >
      <Box
        border="0.25px solid black"
        borderRadius="12px"
        display="flex"
        alignItems="center"
        width={{ xs: "90%", sm: "90%", md: "90%", lg: "70%" }}
        margin={"0 auto"}
        justifyContent="center"
      >
        <TableContainer
          style={{
            width: "85%",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledCellTitle>Items</StyledCellTitle>
                <StyledCellTitle>Type</StyledCellTitle>
                <StyledCellTitle>Date</StyledCellTitle>
                <StyledCellTitle>Time</StyledCellTitle>
                <StyledCellTitle>Qty</StyledCellTitle>
                <StyledCellTitle>Rate</StyledCellTitle>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((data: any, index: any) => (
                <TableRow key={index}>
                  <StyledCell>{serviceName}</StyledCell>
                  <StyledCell>{data.name}</StyledCell>
                  <StyledCell>
                    {data.date && isValid(new Date(data.date))
                      ? format(new Date(data.date), "dd MMM yyyy")
                      : "Invalid Date"}
                  </StyledCell>

                  <StyledCell>
                    {" "}
                    {Array.isArray(data.time)
                      ? data.time.join(", ")
                      : data.time}
                  </StyledCell>
                  <StyledCell>{data.duratoin}hours</StyledCell>
                  <StyledCell>{data.amount}</StyledCell>
                  <StyledCell>
                    <IconButton onClick={() => removeItem(index)}>
                      <CloseIcon
                        style={{
                          color: "black",
                        }}
                      />
                    </IconButton>
                  </StyledCell>
                </TableRow>
              ))}
            </TableBody>
            <Link
              onClick={handleAddmore}
              to={routes.BOOKING_SERVICE}
              style={{
                textDecoration: "none",
              }}
            >
              <p style={{ color: "#666666" }}>+ Add more items</p>
            </Link>
          </Table>
        </TableContainer>
      </Box>
      <Link to={routes.PAYMENT_BOOKING} onClick={() => setTableData(tableData)}>
        <Button
          sx={{
            background: "var(--primary-3, #15B5FC)",
            color: "white",
            textTransform: "none",
            maxWidth: 247,
            width: "100%",
            padding: {
              xs: "6px 40px",
              sm: "6px 40px",
              md: "6px 40px",
              lg: "6px 8px",
            },
          }}
        >
          Proceed to payment{" "}
        </Button>
      </Link>
    </Box>
  );
}
