import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const listaCategoria = ["Alimentação", "Transporte", "Moradia", "Lazer"];

function GerenciarDespesa() {
    const [categoria, setCategoria] = useState("");

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => console.log("Botão pressionado! categoria:", categoria)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Gerenciar Despesa</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 8 },
    button: {
        backgroundColor: "#2196F3",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: { color: "#fff", fontWeight: "600" },
});

export default GerenciarDespesa;