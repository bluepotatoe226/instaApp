import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert, Dimensions } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons"; 


const { width } = Dimensions.get("window");

const profilePic = { uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" };
const postImage = { uri: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg" };

const InstaPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={profilePic} style={styles.profilePic} />
          <Text style={styles.username}>ootd_everyday</Text>
        </View>

        <Image source={postImage} style={styles.postImage} />

        <View style={styles.actions}>
          <FontAwesome name="heart-o" size={24} color="black" />
          <FontAwesome name="comment-o" size={24} color="black" />
          <FontAwesome name="send-o" size={24} color="black" />
        </View>

        <Text style={styles.likes}>Liked by paisley.print.48 and others</Text>
        <Text style={styles.caption}>
          <Text style={{ fontWeight: "bold" }}>frenchie_fry39</Text> Fresh shot on a sunny day! 
        </Text>

        <Text style={styles.comment}>
          <Text style={{ fontWeight: "bold" }}>paisley.print.48</Text> Love this shot! 
        </Text>
        <Text style={styles.comment}>
          <Text style={{ fontWeight: "bold" }}>street.style99</Text> Nice pic!
        </Text>
        <Text style={styles.comment}>
          <Text style={{ fontWeight: "bold" }}>daily.fashion.tips</Text> So aesthetic! 
        </Text>
        <Text style={styles.viewMore}>View all 25 comments</Text>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.alertButton} onPress={() => Alert.alert("Alert Button pressed")}>
          <Text style={styles.alertText}>Alert</Text>
        </TouchableOpacity>

        <View style={styles.bottomNav}>
          <FontAwesome name="home" size={24} color="black" />
          <FontAwesome name="search" size={24} color="black" />
          <FontAwesome name="plus-square-o" size={24} color="black" />
          <FontAwesome name="heart-o" size={24} color="black" />
          <Image source={profilePic} style={styles.navProfilePic} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
 },
 
 scrollContainer: {
   flexGrow: 1,
   alignItems: "center",
   paddingBottom: 80,
 },
 
 header: {
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
   width: width * 0.95,
   paddingVertical: 10,
 },
 profilePic: {
   width: 40,
   height: 40,
   borderRadius: 20,
 },
 username: {
   fontWeight: "bold",
   fontSize: 16,
   flex: 1,
   marginLeft: 10,
 },
 
 postImage: {
   width: width * 0.9,
   height: width, 
   marginVertical: 10,
 },
 
 actions: {
   flexDirection: "row",
   width: width * 0.9,
   justifyContent: "flex-start",
   gap: 15,
   paddingVertical: 10,
 },
 
 likes: {
   fontWeight: "bold",
   width: width * 0.9,
   textAlign: "left",
 },
 caption: {
   marginTop: 5,
   width: width * 0.9,
   textAlign: "left",
 },
 
 comment: {
   width: width * 0.9,
   textAlign: "left",
   marginTop: 3,
 },
 viewMore: {
   width: width * 0.9,
   textAlign: "left",
   color: "#888",
   marginTop: 5,
 },
 
 bottomContainer: {
   width: width,
   alignItems: "center",
   position: "absolute",
   bottom: 0,
   backgroundColor: "#fff",
   borderTopWidth: 1,
   borderColor: "#ddd",
   paddingVertical: 15,
 },
 
 alertButton: {
   backgroundColor: "#000", 
   paddingVertical: 12,
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 8,
   width: width * 0.9,
   marginBottom: 15,
 },
 alertText: {
   color: "#fff",
   fontWeight: "bold",
   fontSize: 16,
 },
 
 bottomNav: {
   flexDirection: "row",
   justifyContent: "space-around",
   width: width,
   paddingVertical: 10,
 },
 navProfilePic: {
   width: 30,
   height: 30,
   borderRadius: 15,
 },
});

export default InstaPage;
