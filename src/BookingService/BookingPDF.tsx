import {
  Document,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function BookingPDF() {
  const handlePdfGeneration = ({ blob }: any) => {
    // Handle PDF generation here if needed
    console.log("PDF generated");
  };

  return (
    <div>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="booking.pdf"
        download={handlePdfGeneration}
      >
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </div>
  );
}
function MyDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Bookings </Text>

          <Text>Dinesh Manikandan </Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}
