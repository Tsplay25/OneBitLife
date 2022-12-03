import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import DefaultButton from "../../components/common/defaultButton";
import ExplanationCard from "../../components/explanation/explanationCard";

export default function AppExplanation() {

    function handleSetShowHome(){
        console.log("Botão clicado!");
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"}eu te explicar...
                    </Text>
                    <ExplanationCard/>
                    <Text style = {styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text style = {styles.description}>
                        Na próxima tela você vai poder escolher {"\n"}seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center",
        marginVertical: 60,
    },
    descriptionCta: {
        color: "#FFF",
        fontWeight: "bold",
        fontsize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        color: "#FFF",
        textAlign: "center",
        marginBottom: 30,
    },
});