import * as React from "react";

import {
  Box,
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
  tableData,
  handleRemoveItem,
  serviceName,
  serviceType,
  setTableData,
  handleAddmore,
}: TableProps) {
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
            width: "95%",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledCellTitle>Service</StyledCellTitle>
                <StyledCellTitle>Service Type</StyledCellTitle>
                <StyledCellTitle>Date</StyledCellTitle>
                <StyledCellTitle>Time</StyledCellTitle>
                <StyledCellTitle>Qty</StyledCellTitle>
                <StyledCellTitle>Rate</StyledCellTitle>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((data: any, index: any) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "white",
                  }}
                >
                  <StyledCell>{data.type}</StyledCell>
                  <StyledCell>{data.name}</StyledCell>
                  <StyledCell>
                    {data.date && isValid(new Date(data.date))
                      ? format(new Date(data.date), "dd MMM yyyy")
                      : "Invalid Date"}
                  </StyledCell>
                  <StyledCell>
                    {Array.isArray(data.time)
                      ? data.time.join(", ")
                      : data.time}
                  </StyledCell>
                  <StyledCell>{data.duration} hours</StyledCell>
                  <StyledCell>{data.amount}</StyledCell>
                  <StyledCell>
                    <IconButton
                      style={{
                        color: "black",
                        padding: "8px",
                        borderRadius: "4px",
                      }}
                      onClick={() => handleRemoveItem(index)}
                    >
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
    </Box>
  );
}
