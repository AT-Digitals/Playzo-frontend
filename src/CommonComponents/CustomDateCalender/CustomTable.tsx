import * as React from "react";

import {
  Box,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
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
        // display="flex"
        display={{ xs: "none", sm: "none", md: "flex", lg: "flex" }}
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

      {/* Card for responsive view  */}

      {tableData.length > 0 ? (
        <Box
          display={{ xs: "flex", sm: "flex", md: "none", lg: "none" }}
          width={"100%"}
        >
          <Card
            sx={
              {
                width: { xs: "90%", sm: "70%", md: "70%" }, // Adjust as needed
                margin: "0 auto",
                boxShadow: "0px 2px 20px 0px",
                backgroundColor: Colors.WHITE,
                marginBottom: "20px", // Adjust as needed
              } as any
            }
          >
            <Box
              mb={1}
              bgcolor={Colors.BUTTON_COLOR}
              style={{
                position: "sticky", // Fix the header
                top: 0, // Position it at the top
                zIndex: 1, // Ensure it's above the scrollable content
              }}
              padding={"0 20px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography p={1} color={"black"} fontWeight={700}>
                CHECKOUT
              </Typography>
              <Link
                onClick={handleAddmore}
                to={routes.BOOKING_SERVICE}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                }}
              >
                <p
                  style={{
                    color: "black",
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                  }}
                >
                  + Add more items
                </p>
              </Link>
            </Box>
            <CardContent
              style={{
                overflowY: "auto",
                scrollbarWidth: "thin",
                position: "relative",
                padding: 0,
                maxHeight: 550,
              }}
            >
              <div>
                {tableData.map((data: any, index: any) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "10px",
                      borderBottom: "1px solid white",
                      // padding: "0 20px",
                    }}
                  >
                    <Box
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      display={"flex"}
                      borderBottom={`3px solid ${Colors.BUTTON_COLOR}`}
                      padding={"0 20px"}
                      mb={1}
                    >
                      <Typography fontWeight={700}>Item:{index + 1}</Typography>
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
                    </Box>
                    <Box padding={"0 20px"}>
                      <Box display={"flex"} gap={"1rem"}>
                        <Typography
                          textTransform={"capitalize"}
                          fontWeight={900}
                          fontSize={"16px"}
                        >
                          {" "}
                          Service:
                        </Typography>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                          fontWeight={600}
                        >
                          {" "}
                          {data.type}
                        </Typography>
                      </Box>

                      <Box display={"flex"} gap={"1rem"}>
                        <Typography
                          textTransform={"capitalize"}
                          fontWeight={900}
                          fontSize={"16px"}
                        >
                          {" "}
                          Service Type:
                        </Typography>
                        <Typography
                          fontWeight={600}
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                        >
                          {" "}
                          {data.name}
                        </Typography>
                      </Box>
                      <Box
                        border={` 1px solid ${Colors.BUTTON_COLOR}`}
                        width={"15%"}
                        mt={1}
                        mb={1}
                      ></Box>
                      <Box display={"flex"} gap={"1rem"}>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                          fontWeight={900}
                        >
                          {" "}
                          Date:
                        </Typography>
                        <Typography
                          fontWeight={600}
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                        >
                          {" "}
                          {data.date && isValid(new Date(data.date))
                            ? format(new Date(data.date), "dd MMM yyyy")
                            : "Invalid Date"}
                        </Typography>
                      </Box>
                      <Box display={"flex"} gap={"1rem"}>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                          fontWeight={900}
                        >
                          {" "}
                          Time:
                        </Typography>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                          fontWeight={600}
                        >
                          {" "}
                          {Array.isArray(data.time)
                            ? data.time.join(", ").replace("-", " - ")
                            : data.time.replace("-", " - ")}
                        </Typography>
                      </Box>

                      <Box display={"flex"} gap={"1rem"} pb={1}>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                          fontWeight={900}
                        >
                          {" "}
                          Qty:
                        </Typography>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                          fontWeight={600}
                        >
                          {" "}
                          {data.duration}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        gap={"1rem"}
                        pb={2}
                        justifyContent={"space-between"}
                        borderTop={` 1px solid ${Colors.BUTTON_COLOR}`}
                        borderBottom={` 1px solid ${Colors.BUTTON_COLOR}`}
                        pt={1}
                      >
                        <Typography
                          textTransform={"capitalize"}
                          fontWeight={900}
                          fontSize={"16px"}
                          color={Colors.BUTTON_COLOR}
                        >
                          Amount:
                        </Typography>
                        <Typography
                          textTransform={"capitalize"}
                          fontSize={"16px"}
                          fontWeight={600}
                        >
                          {" "}
                          {data.amount}
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
