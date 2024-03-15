import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

import { BookingType } from "../CommonFiles/BookingType";
import Colors from "../CommonComponents/Colors";
import logo from "./favicon.png";

// import ProximaFont from '../assets/fonts/Proxima Nova/proximanova_black.otf'

// const { "Playzo (1).svg": logo } = assets;

Font.register({
  family: "Proxima",
  fonts: [
    {
      src: "../assets/fonts/Proxima Nova/proximanova_black.otf",
      fontWeight: 400,
    },
    {
      src: "../assets/fonts/Proxima Nova/proximanova_extrabold.otf", // Path to bold font file
      fontWeight: "bold", // Specify font weight as 'bold'
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#000333",
    padding: 10,
    border: "1px solid black",
    fontFamily: "Proxima",
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
    fontWeight: 700,
  },
  logo: {
    // position: "absolute",
    // top: 10,
    // right: 10,
    width: "120px",
    height: "50px",
    paddingBottom: "10px",
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
export default function MyDocument({ allBookings, numberofPersons }: any) {
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
          borderColor: Colors.BUTTON_COLOR,
          padding: "60px",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottom: `1px solid gray`,
            alignItems: "center",
          }}
        >
          <View
            style={{
              textAlign: "center",
            }}
          >
            <Image src={logo} style={styles.logo} />
          </View>

          <View
            style={{
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "10px",
                color: "gray",
                textAlign: "center",
              }}
            >
              playzo.erode@gmail.com
            </Text>
          </View>
          <View
            style={{
              textAlign: "right",
              paddingBottom: "10px",
            }}
          >
            <Text
              style={{
                fontSize: "10px",
                color: "gray",
                textAlign: "right",
              }}
            >
              39/6 KCP Thottam, Kumalan Kuttai, Erode,
            </Text>
            <Text
              style={{
                fontSize: "10px",
                color: "gray",
                textAlign: "right",
              }}
            >
              Tamil Nadu - 638011
            </Text>
            <Text
              style={{
                fontSize: "10px",
                color: "gray",
                textAlign: "right",
              }}
            >
              +91 70944 60944
            </Text>
            <Text
              style={{
                fontSize: "10px",
                color: "gray",
                textAlign: "right",
              }}
            >
              +91 91088 83555
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            marginTop: "20px",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: "15px",
              color: Colors.BLACK,
              fontWeight: "bold",
              padding: "3px",
            }}
          >
            SHIPPING INFORMATION
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "5px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: "12px",
                color: "gray",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              Customer Name -
            </Text>
            <Text
              style={{
                textAlign: "left",
                fontSize: "12px",
                color: Colors.BLACK,
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              {user ? user.name : null}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: "12px",
                color: "gray",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              Contact -
            </Text>
            <Text
              style={{
                textAlign: "left",
                fontSize: "12px",
                color: Colors.BLACK,
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              {user ? user.phone : null}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
          >
            <Text
              style={{
                textAlign: "left",
                fontSize: "12px",
                color: "gray",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              Email -
            </Text>

            <Text
              style={{
                textAlign: "left",
                fontSize: "12px",
                color: Colors.BLACK,
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              {user ? user.email : null}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "gray",
            marginTop: "10px",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: "15px",
              color: Colors.BLACK,
              fontWeight: "bold",
              padding: "3px",
            }}
          >
            BILLING INFORMATION
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            marginTop: "10px",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: "15px",
              color: Colors.BLACK,
              fontWeight: "bold",
              padding: "3px",
            }}
          >
            BOOKING INFORMATION
          </Text>
        </View>

        <View style={{ paddingBottom: "10px", paddingTop: "15px" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              borderBottom: `1px solid ${"gray"}`,
              paddingBottom: "5px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                width: "5%",
                textTransform: "uppercase",
              }}
            >
              #
            </Text>
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                width: "20%",
                textTransform: "uppercase",
              }}
            >
              Service
            </Text>
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                width: "20%",
                textTransform: "uppercase",
              }}
            >
              Type
            </Text>
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                width: "20%",
                textTransform: "uppercase",
              }}
            >
              Date
            </Text>
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                width: "20%",
                textTransform: "uppercase",
              }}
            >
              Time
            </Text>

            <Text
              style={{
                fontSize: "13px",
                fontWeight: 700,
                width: "20%",
                textTransform: "uppercase",
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
                borderBottom: `1px solid ${"gray"}`,
                paddingBottom: "5px",
                paddingTop: "5px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {" "}
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "5%",
                  color: "gray",
                }}
              >
                {index + 1}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                  color: "gray",
                  textTransform: "uppercase",
                }}
              >
                {item.type}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                  color: "gray",
                  textTransform: "uppercase",
                }}
              >
                {item.name}{" "}
                {item.type === BookingType.Badminton ? (
                  <Text>/ {item.numberOfPersons}</Text>
                ) : (
                  ""
                )}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                  color: "gray",
                }}
              >
                {formatDate(item.startDate)}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                  color: "gray",
                }}
              >
                {formatTimeRange(item.startTime, item.endTime)}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  width: "20%",
                  color: "gray",
                }}
              >
                {item.amount}
              </Text>
            </View>
          ))}
        </View>

        <Text
          style={{
            fontSize: "12px",
            paddingTop: "10px",
            paddingLeft: "10px",
            fontWeight: 700,
            display: "flex",
            textAlign: "right",
            borderBottom: "1px solid black",
            paddingBottom: "10px",
          }}
        >
          Total Amount:{" "}
          <Text
            style={{
              fontSize: "12px",
              color: "gray",
            }}
          >
            {totalAmount}
          </Text>
        </Text>
        <View style={styles.section}>
          <Text
            style={{
              fontSize: "12px",
              color: "gray",
              fontWeight: 700,
            }}
          >
            I accept the terms and conditioins By accessing and using our
            services, you agree to abide by the terms and conditions outlined
            herein. This agreement constitutes a legally binding contract
            between you and Playzo33, governing your use of our platform. You
            acknowledge and accept our privacy policy, usage guidelines, and any
            applicable licenses. Playzo33 bears no liability for any damages
            incurred due to misuse of our services. We reserve the right to
            terminate or suspend accounts violating these terms without prior
            notice. Your continued use of our services indicates your acceptance
            of any updates or modifications to these terms.
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: "12px",
              color: "gray",
            }}
          >
            DATE
          </Text>
        </View>
        <Text>
          ---------------------------------------------------------------------------------
        </Text>
      </Page>
    </Document>
  );
}
