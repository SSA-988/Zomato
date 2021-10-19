import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import Menu from "../components/Menu";
import hotelsData from "../data/hotelsData";
import menuData from "../data/menuData";
import { Pressable } from "react-native";
import ViewCart from "../components/ViewCart";
import { connect } from "react-redux";

const HotelRoom = () => {
  const route = useRoute();
  const menu = hotelsData;
  const fmenu = hotelsData[0].menuItems.menu[0];
  //  console.log(menu);
  //  console.log(route);
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();
  const restaurentName = route.params.name;
  console.log("name: ", restaurentName);
  const Onpress = () => {
    console.warn("button pressed");
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Pressable> */}
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back-outline"
            style={{
              marginLeft: 10,
              paddingRight: 5,
              backgroundColor: "#141E30",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              padding: 4,
            }}
            size={30}
            color="white"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 14,
            }}
          >
            <SimpleLineIcons
              style={{ paddingHorizontal: 8 }}
              name="camera"
              size={24}
              color="black"
            />
            <Ionicons
              style={{ paddingHorizontal: 5 }}
              name="bookmark-outline"
              size={24}
              color="black"
            />
            <MaterialCommunityIcons
              style={{ paddingHorizontal: 5 }}
              name="share-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.name}>{route.params.name}</Text>
            <Text style={styles.cuisines}>{route.params.cuisines}</Text>
            <Text style={styles.adress}>{route.params.smalladress}</Text>
          </View>
          <Pressable style={styles.rightContainer}>
            <Pressable
              onPress={() =>
                navigation.navigate("Review", {
                  aggregate_rating: route.params.aggregate_rating,
                  no_of_Delivery: route.params.no_of_Delivery,
                })
              }
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#3CB371",
                padding: 4,
                paddingHorizontal: 10,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 5,
              }}
            >
              <Text
                style={{
                  marginHorizontal: 3,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {route.params.aggregate_rating}
              </Text>
              <Ionicons name="star" size={20} color="white" />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Photos")}
              style={{
                marginTop: 10,
                backgroundColor: "#ee0979",
                paddingHorizontal: 10,
                padding: 5,
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>30</Text>
              <Text style={{ color: "white", fontWeight: "bold" }}>PHOTOS</Text>
            </Pressable>
          </Pressable>
        </View>
        <View
          style={{
            padding: 3,
            marginLeft: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              // paddingHorizontal: 10,
            }}
          >
            <MaterialCommunityIcons
              style={{
                backgroundColor: "#E0E0E0",
                borderRadius: 50,
                padding: 8,
              }}
              name="bike-fast"
              size={21}
              color="gray"
            />
            <View>
              <Text style={{ marginLeft: 8, fontSize: 14, color: "#707070" }}>
                Mode
              </Text>
              <Text style={{ marginLeft: 8 }}>Delivery</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <MaterialCommunityIcons
              style={{
                backgroundColor: "#E0E0E0",
                borderRadius: 50,
                padding: 8,
              }}
              name="timer-outline"
              size={21}
              color="gray"
            />
            <View>
              <View>
                <Text style={{ marginLeft: 6, fontSize: 14, color: "#707070" }}>
                  TIME
                </Text>
              </View>
              <Text style={{ marginLeft: 6 }}>30 mins or free</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              style={{
                backgroundColor: "#E0E0E0",
                borderRadius: 50,
                padding: 8,
              }}
              name="brightness-percent"
              size={21}
              color="blue"
            />
            <View>
              <View>
                <Text style={{ marginLeft: 6, fontSize: 14, color: "#707070" }}>
                  OFFERS
                </Text>
              </View>
              <Text style={{ marginLeft: 6 }}>View all</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 12,
            marginRight: 12,
            marginTop: 15,
            backgroundColor: "#E0E0E0",
            borderRadius: 10,
          }}
        >
          <Fontisto
            style={{ marginLeft: 7 }}
            name="motorcycle"
            size={22}
            color="#505050"
          />
          <Text style={{ marginLeft: 9, fontSize: 15 }}>
            ₹30 additional distance fee
          </Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "700" }}>Full Menu</Text>
          <Text
            style={{
              backgroundColor: "#ff1493",
              width: 74,
              height: 3,
              marginTop: 6,
            }}
          ></Text>
        </View>
        <FlatList
          // horizontal
          data={menuData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Menu menu={item} restaurentName={restaurentName} />
          )}
        />
        {/* </Pressable> */}
      </ScrollView>

      <ViewCart />
    </SafeAreaView>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItemToCart: (product) =>
//       dispatch({
//         type: "ADD_TO_CART",
//         payload: product,
//       }),
//   };
// };

export default HotelRoom;

const styles = StyleSheet.create({
  name: {
    marginHorizontal: 10,
    paddingBottom: 6,
    fontSize: 24,
    fontWeight: "700",
  },
  adress: {
    fontSize: 17,
    color: "gray",
    marginHorizontal: 10,
  },
  cuisines: {
    marginHorizontal: 10,
    paddingBottom: 6,
    fontSize: 17,
    color: "#303030",
  },
  rightContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
});