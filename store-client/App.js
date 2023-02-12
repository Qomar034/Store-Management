import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.upperBox}>
          <View style={styles.middleBox}>
            <Text style={styles.text2}>KODE TOKO: 12019982 | PADANG</Text>
            <Text style={styles.text1}>TOKO SUMBER JAYA</Text>
            <Text style={styles.text2}>Sales: THEO ADIPTA</Text>
          </View>

          <View style={styles.lowerBox}>
              <View style={styles.container3}>
                <Text style={styles.text3}>Ringkasan Pesanan</Text>
              </View>
              <View style={styles.container2}>
                  <View style={styles.displayBox}>
                    <Text style={styles.text4}>Pending</Text>
                    <Text style={styles.text5}>0</Text>
                  </View>
                  <View style={styles.displayBox}>
                    <Text style={styles.text4}>Dalam Proses</Text>
                    <Text style={styles.text5}>0</Text>
                  </View>
              </View>
              <View style={styles.container4}>
                  <Text style={styles.text6}>Total Tagihan</Text>
                  <Text style={styles.text7}>Rp. 0</Text>
              </View>
          </View>

          <View style={styles.menuBox}>
            <View style={styles.menuRow}>
              <View style={styles.menu}>
                <View style={styles.iconContainer}>
                  <Image 
                  source={require("./assets/doc.png")}
                  style={styles.icon} ></Image>
                </View>
                <Text style={styles.text8}>Buat</Text>
                <Text style={styles.text8}>Pesanan</Text>
              </View>
              <View style={styles.menu}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={require("./assets/cart.png")}
                    style={styles.icon} ></Image>
                </View>
                <Text style={styles.text8}>Riwayat</Text>
                <Text style={styles.text8}>Pesanan</Text>
              </View>
              <View style={styles.menu}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={require("./assets/wallet.png")}
                    style={styles.icon} ></Image>
                </View>
                <Text style={styles.text8}>Riwayat</Text>
                <Text style={styles.text8}>Bayar</Text>
              </View>
            </View>
            <View style={styles.menuRow}>
              <View style={styles.menu}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={require("./assets/people.png")}
                    style={styles.icon} ></Image>
                </View>
                <Text style={styles.text8}>Daftar</Text>
                <Text style={styles.text8}>Supir</Text>
              </View>
              <View style={styles.menu}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={require("./assets/location.png")}
                    style={styles.icon} ></Image>
                </View>
                <Text style={styles.text8}>Daftar</Text>
                <Text style={styles.text8}>Alamat</Text>
              </View>
              <View style={styles.menu}>
                <View style={styles.iconContainer}>
                  <Image 
                    source={require("./assets/switch.png")}
                    style={styles.icon} ></Image>
                </View>
                <Text style={styles.text8}>Retur</Text>
                <Text style={styles.text8}>Barang</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef9ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperBox: {
    flex: 1,
    width: "100%",
    height: "25%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#ff6823",
    position: 'absolute',
    top: "0%",
  },
  middleBox: {
    width: "90%",
    height: "50%",
    backgroundColor: "transparent",
    marginVertical: 8,
    position: "relative",
    top: "5%",
    left: "5%"
  },
  lowerBox: {
    width: "90%",
    height: "90%",

    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: "white",
    shadowColor: "black",

    position: 'relative',
    left: "5%",

    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 1,
  },

  text1: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 2,
  },

  text2: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 3,
  },

  text3: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },

  text4: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold"
  },

  text5: {
    marginLeft: 25,
    fontSize: 25,
    fontWeight: "bold"
  },

  text6: {
    fontSize: 15,
    fontWeight: "bold"
  },

  text7: {
    fontSize: 20,
    color: "tomato",
    fontWeight: "bold"
  },

  container2: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 5,
    width: "100%",
    height: "40%",
  },

  container3: {
    flex : 1,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    width: "85%",
    height: "40%",
  },

  container4: {
    flex : 2,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    width: "80%",
    height: "40%",
  },

  displayBox: {
    width: "40%",
    height: "100%",
    backgroundColor: "#fef9ed",
    marginHorizontal: 15,
    borderRadius: 25,
  },

  menuBox: {
    width: "90%",
    height: "150%",
    backgroundColor: "transparent",
    flexDirection: "column",
    position: 'relative',
    left: "5%",
    marginTop: 20,
  },

  menuRow: {
    marginTop: 5,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: "50%",
    backgroundColor: "transparent",
    flexWrap: "wrap"
  },

  menu: {
    width: "30%",
    height: "80%",
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    width: "40%",
    height: "45%",
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  icon: {
    width: "75%",
    height: "75%",
  },

  text8: {
    color: "#ff6823",
    fontSize: 15,
    textAlign: "center",
  },
});
