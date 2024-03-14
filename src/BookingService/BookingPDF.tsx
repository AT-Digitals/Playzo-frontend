import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import React from "react";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
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
        }}
      >
        <Text style={styles.title}>Booking Details</Text>
        {allBookings.map((item: any, index: any) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Text style={styles.itemName}>Name: {item.name}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Start Date: {item.startDate}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
