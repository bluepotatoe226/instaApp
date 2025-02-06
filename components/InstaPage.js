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



export default InstaPage;
