import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

export default function Notification({
    notificationToggle,
    setNotificationToggle,
}) {
    const toggleSwitch = () => {
        setNotificationToggle((previousState) => !previousState);
    };
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Notificação</Text>
                <Switch
                    trackColor={{ false: "#797979", true: "#dbdbdb"}}
                    thumbColor={"#FFF"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={notificationToggle}
                    />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      },
      titleDisabled: {
        color: "#BBBB",
        fontSize: 20,
        marginRight: 10,
      },
      title: {
        color: "#FFF",
        fontSize: 20,
        marginRight: 10,
      },

})