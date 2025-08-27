//Importa do expo-router
//Link: cria links de navegação
//Stack: manipula ações da tela - não estamos utilizando diretamente
//useLocalSearchParams: pega parâmetros passados pela rota (ex.: ?media=...&type=...)
//useRouter: permite navegação programática (ex.: voltar, avançar, etc.)
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";

//Importa componentes do React Native
//Alert: exibe uma caixa de diálogo (popup)
//Image: renderizar imagens
//StyleSheet: criar e renderizar estilos
import { Alert, Image, StyleSheet } from "react-native";

//Importa componentes de suporte de temas
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

//Botão customizado - CRIAR COMPONENTE NA PRÓXIMA AULA
import ObscuraButton from "@/components/ObscuraButton";

//Função da expo media library para salvar arquivos (fotos/videos) na galeria do dispositivo
import { saveToLibraryAsync } from "expo-media-library";

//Tela principal da rota