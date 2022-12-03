import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function AppExplanation() {

    function handleSetShowHome(){
        console.log("Botão clicado!");
    }

    return(
        <View style={StyleSheet.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text styles={styles.title}>
                        Antes, deixa {"\n"}eu te explicar...
                    </Text>
                    <Text styles = {styles.descriptionCta}>
                        Pronto(a) para subir de nível na vida?
                    </Text>
                    <Text styles = {styles.description}>
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
        marginVertical: 40,
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