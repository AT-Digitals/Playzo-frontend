import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { Box } from "@mui/material";
import Colors from "../CommonComponents/Colors";
import React from "react";
import assets from "../assets";

const { "Playzo (1).svg": logo } = assets;

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#000333",
    padding: 10,
    border: "1px solid black",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  itemName: {
    fontWeight: "bold",
  },
});

export default function MyDocument({ allBookings }: any) {
  const startDateTime = new Date(allBookings.startTime);
  const endDateTime = new Date(allBookings.endTime);

  const startHours = startDateTime.getHours();
  const endHours = endDateTime.getHours();
  const formattedStartTime = `${startHours % 12 || 12}:00`;
  const formattedEndTime = `${endHours % 12 || 12}:00 ${
    endHours < 12 ? "AM" : "PM"
  }`;

  const formattedTimeRange = ` ${formattedStartTime} - ${formattedEndTime}`;
  return (
    <Document
      style={{
        border: "1px solid red",
        padding: "20px",
      }}
    >
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          borderColor: "red",
          padding: "60px",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: "25px",
            paddingBottom: "5px",
            color: Colors.BUTTON_COLOR,
          }}
        >
          Playzo33
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: "15px",
            paddingBottom: "5px",
          }}
        >
          Booking Details
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: "12px",
            paddingBottom: "10px",
          }}
        >
          Thank you for your <br /> Bookings
        </Text>

        <Text
          style={{
            textAlign: "left",
            fontSize: "12px",
            borderBottom: "1px solid black",
            color: "red",
            paddingBottom: "30px",
          }}
        >
          Thank you for choosing us for your bookings! We appreciate your trust
          in our services.
        </Text>

        {allBookings.map((item: any, index: any) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "space-around",
              borderBottom: "1px solid black", // Add bottom border
              paddingBottom: "10px", // Add some padding to separate bookings visually
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
              }}
            >
              Name: {item.name}
            </Text>
            <Text
              style={{
                fontSize: "15px",
              }}
            >
              Type: {item.type}
            </Text>
            <Text
              style={{
                fontSize: "15px",
              }}
            >
              Start Time: {formattedTimeRange}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
