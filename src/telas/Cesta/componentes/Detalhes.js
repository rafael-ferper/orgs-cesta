import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";



export default function Detalhes({ nome, logoFazenda, nomeFazenda, preco, texto, botao }) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.texto}>{texto}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <Botao>{botao}</Botao>
            
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    texto: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        lineHeight: 42,
        fontSize: 26,
        marginTop: 8,
    },
})
