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
import Colors from "../Colors";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";
import styled from "styled-components";

const StyledCell = styled(TableCell)({
  " &.MuiTableCell-root": {
    // borderBottom: "none",
    fontSize: "16px",
    textAlign: "center",
    color: Colors.BLACK,
    textTransform: "capitalize",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
});

const StyledCellTitle = styled(TableCell)({
  " &.MuiTableCell-root": {
    borderTop: "none",
    fontWeight: "bold",
    fontSize: "18px",
    color: Colors.BLACK,
    textAlign: "center",
    borderRight: "none",
    borderLeft: "none",
    whiteSpace: "nowrap",
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
        // border="0.25px solid black"
        border={`1px solid ${Colors.BUTTON_COLOR}`}
        borderRadius="12px"
        display="flex"
        alignItems="center"
        width={{ xs: "90%", sm: "90%", md: "90%", lg: "70%" }}
        margin={"0 auto"}
        justifyContent="center"
        bgcolor={Colors.BUTTON_COLOR}
        boxShadow={"0px 2px 20px 0px"}
        // bgcolor={Colors.BUTTON_COLOR}
      >
        <TableContainer
          style={{
            width: "95%",
            paddingTop: "10px",
            // backgroundColor: Colors.BUTTON_COLOR,
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
                    // display: "flex",
                    whiteSpace: "normal",
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
                      ? data.time.join(", ").replace("-", " - ")
                      : data.time.replace("-", " - ")}
                  </StyledCell>
                  <StyledCell>{data.duration} hours</StyledCell>
                  <StyledCell>{data.amount}</StyledCell>
                  <StyledCell>
                    {" "}
                    <IconButton
                      style={{
                        color: "black",
                        padding: "8px",
                        borderRadius: "50%",
                      }}
                      onClick={() => handleRemoveItem(index)}
                    >
                      <CloseIcon
                        style={{
                          color: "red",
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
              <p style={{ color: "black", whiteSpace: "nowrap" }}>
                + Add more items
              </p>
            </Link>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
