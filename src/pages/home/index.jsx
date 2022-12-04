import React, {useEffect, useState} from "react";

import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import LifeStatus from "../../components/common/lifeStatus";    
import StatusBar from "../../components/home/statusBar";
import CreateHabit from "../../components/home/createHabit"
import EditHabit from "../../components/home/editHabit";
import changeNavigationService from "../../services/changeNavigationService";
import habitsService from "../../services/habitsService";

export default function Home( { route } ) {
    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    const [robotDaysLife, setRobotDaysLife] = useState();
    const today = new Date();

    function handleNavExplanation() {
        navigation.navigate("AppExplanation");
    }

    const excludeArea = route.params?.excludeArea;

    useEffect(() => {
        habitsService.findByArea("Mente").then((mind) => {
            setMindHabit(mind[0]);
        });
        habitsService.findByArea("Financeiro").then((money) => {
            setMoneyHabit(money[0]);
        });
        habitsService.findByArea("Corpo").then((body) => {
            setBodyHabit(body[0]);
        });
        habitsService.findByArea("Humor").then((fun) => {
            setFunHabit(fun[0]);
        });

        if (excludeArea) {
            if(excludeArea == "Mente"){
                setMindHabit(null);
            }
            if(excludeArea == "Financeiro"){
                setMoneyHabit(null);
            }
            if(excludeArea == "Corpo"){
                setBodyHabit(null);
            }
            if(excludeArea == "Fun"){
                setFunHabit(null);
            }
        }

        changeNavigationService.checkShowHome(1)
            .then((showHome) => {
                const formDate = `${today.getFullYear()}-${today.getMonth}-${today.getDate}`;
                const checkDays = 
                    new Date(formDate) - new Date(showHome.appStartData) + 1;
                    setRobotDaysLife(checkDays.toString().padStart(2, "0"));
            })
            .catch((err) => console.log(err));
    }, [route.params]);

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.dailyChecks}>
                        ❤️ ${robotDaysLife} { robotDaysLife === "01" ? "dia": "dias" } • ✅ 80 Checks
                    </Text>

                    <LifeStatus/>
                    <StatusBar
                        mindHabit={mindHabit?.progressBar}
                        moneyHabit={moneyHabit?.progressBar}
                        bodyHabit={bodyHabit?.progressBar}
                        funHabit={funHabit?.progressBar}
                    />

                    { mindHabit ? (
                        <EditHabit
                            habit={mindHabit}
                            checkColor="#90b7f3"
                        />
                    ) : (
                        <CreateHabit
                            habitArea={"Mente"}
                            borderColor={"#90b7f3"}
                        />
                    )}

                    { moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit}
                            checkColor="#85bb65"
                        />
                    ) : (
                        <CreateHabit
                            habitArea={"Financeiro"}
                            borderColor={"#85bb65"}
                        />
                    )}

                    { bodyHabit ? (
                        <EditHabit
                            habit={bodyHabit}
                            checkColor="#ff0044"
                        />
                    ) : (
                        <CreateHabit
                            habitArea={"Corpo"}
                            borderColor={"#ff0044"}
                        />
                    )}

                    { funHabit ? (
                        <EditHabit
                            habit={funHabit}
                            checkColor="#fe7f23"
                        />
                    ) : (
                        <CreateHabit
                            habitArea={"Humor"}
                            borderColor={"#fe7f23"}
                        />
                    )}
                    
                </View>
                <Text 
                    style={styles.explanationText}
                    onPress={() => {
                        handleNavExplanation();
                    }}
                >
                    Ver explicações novamente.
                </Text>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
        color:  "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40,
    },
    explanationText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    },
})