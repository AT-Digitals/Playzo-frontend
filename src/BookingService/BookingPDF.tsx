import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

import Colors from "../CommonComponents/Colors";
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
  logo: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 100,
    height: 50,
  },
});

const formatTimeRange = (startTime: any, endTime: any) => {
  const startDateTime = new Date(startTime);
  const endDateTime = new Date(endTime);

  const startHours = startDateTime.getHours();
  const endHours = endDateTime.getHours();
  const formattedStartTime = `${startHours % 12 || 12}:00`;
  const formattedEndTime = `${endHours % 12 || 12}:00 ${
    endHours < 12 ? "AM" : "PM"
  }`;

  return `${formattedStartTime} - ${formattedEndTime}`;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};

interface User {
  phone?: string;
  name?: string;
  email?: string;
}
export default function MyDocument({ allBookings }: any) {
  const totalAmount = allBookings.reduce(
    (accumulator: number, booking: { amount: string }) =>
      accumulator + (parseFloat(booking.amount) || 0),
    0
  );
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const parsedUserData = userData && JSON.parse(userData);

    if (parsedUserData) {
      setUser(parsedUserData);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <Document
      style={{
        border: "1px solid red",
        padding: "20px",
        backgroundColor: "#000333",
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
        <Image style={styles.logo} src={logo} />
        <Text
          style={{
            textAlign: "center",
            fontSize: "30px",
            paddingBottom: "5px",
            color: Colors.WHITE,
            fontStyle: "italic",
            backgroundColor: Colors.BUTTON_COLOR,
          }}
        >
          BOOKING CONFIRMATION
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            paddingBottom: "10px",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: "12px",
              color: Colors.BLACK,
              fontWeight: "bold",
              paddingTop: "10px",
            }}
          >
            Customer Name : {user ? user.name : null}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: "12px",
              color: Colors.BLACK,
              fontWeight: "bold",
            }}
          >
            Phone Number : {user ? user.phone : null}
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: "12px",
              color: Colors.BLACK,
              fontWeight: "bold",
              borderBottom: "1px solid black",
              paddingBottom: "10px",
            }}
          >
            E-mail : {user ? user.email : null}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.BUTTON_COLOR,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: "15px",
              color: Colors.WHITE,
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Bookings Summary
          </Text>
        </View>
        <View style={{ paddingBottom: "10px", paddingTop: "15px" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              borderBottom: `1px solid ${Colors.BUTTON_COLOR}`,
              paddingBottom: "5px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Service
            </Text>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Type
            </Text>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Date
            </Text>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                width: "20%",
              }}
            >
              Time
            </Text>

            <Text
              style={{
                fontSize: "15px",
                fontWeight: 700,
                width: "20%",
              }}
            >
              Amount
            </Text>
          </View>
          {allBookings.map((item: any, index: any) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                borderBottom: `1px solid ${Colors.BUTTON_COLOR}`,
                paddingBottom: "5px",
                paddingTop: "5px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                }}
              >
                {item.type}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                }}
              >
                {item.name}
              </Text>

              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                }}
              >
                {formatDate(item.startDate)}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                }}
              >
                {formatTimeRange(item.startTime, item.endTime)}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                }}
              >
                {item.amount}
              </Text>
            </View>
          ))}
        </View>
        ;
        <Text
          style={{
            fontSize: "12px",
            paddingTop: "10px",
            paddingLeft: "10px",
            fontWeight: 700,
            display: "flex",
            textAlign: "right",
            borderBottom: "1px solid black",
          }}
        >
          Total Amount:{" "}
          <Text
            style={{
              fontSize: "12px",
            }}
          >
            {totalAmount}
          </Text>
        </Text>
        <View style={styles.section}>
          <Text style={styles.title}>Thank You for Your Booking!</Text>
          <Text
            style={{
              fontSize: "12px",
            }}
          >
            We are delighted to confirm your booking. Please feel free to
            contact us if you have any questions or special requests.
          </Text>
        </View>
        <Text
          style={{
            fontSize: "12px",
            color: "black",
            textAlign: "right",
            paddingTop: "30px",
            marginTop: "30px",
          }}
        >
          39/6 KCP Thottam, Kumalan Kuttai, Erode,
        </Text>
        <Text
          style={{
            fontSize: "12px",
            color: "black",
            textAlign: "right",
          }}
        >
          Tamil Nadu - 638011
        </Text>
        <Text
          style={{
            fontSize: "12px",
            color: "black",
            textAlign: "right",
          }}
        >
          +91 70944 60944
        </Text>
        <Text
          style={{
            fontSize: "12px",
            color: "black",
            textAlign: "right",
          }}
        >
          +91 91088 83555
        </Text>
        <Text>
          ---------------------------------------------------------------------------------
        </Text>
      </Page>
    </Document>
  );
}
