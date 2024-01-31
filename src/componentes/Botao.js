import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "./Texto";

export default function Botao({children, style}) {
    let estiloBotao = estilos.botao;
    let estiloTexto = estilos.textoBotao;
    
    if (style?.fontWeight === 'bold') {
        estiloBotao = estilos.botao;
    } 
    
    return (
        <TouchableOpacity style={[style, estiloBotao]} onPress={() => {}}>
            <Texto style={[style, estiloTexto]}>{ children }</Texto>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }
})