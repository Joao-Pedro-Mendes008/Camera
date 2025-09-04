//Importa do expo-router
//Link: cria links de navegação
//Stack: manipula ações da tela - não estamos utilizando diretamente
//useLocalSearchParams: pega parâmetros passados pela rota (ex.: ?media=...&type=...)
//useRouter: permite navegação programática (ex.: voltar, avançar, etc.)
import { Link, useLocalSearchParams, useRouter } from "expo-router";

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

//Tela principal da rota "media"
export default function MediaScreen() {

    //pega os parametros da URL/rota (ex.: media e type)
    //media: caminho do arquivo
    //type: tipo de mídia (foto ou vídeo)
    const { media, type } = useLocalSearchParams();

    //hook de navegação programática
    const router = useRouter();

    //log dos parâmetros no console (bom para debug)
    console.log(media, type)

    return (
        <ThemedView style={styles.container}>
            {
                // se o tipo for foto, renderiza a imagem
                type === "photo" ? (
                    <Image
                        source={{ uri: `file://${media}` }} //caminho da imagem
                        style={{ width: "100%", height: "80%", resizeMode: "contain" }}
                    />
                ) : null
                //aqui poderia entrar um <video> para exibir vídeos no futuro
                // <Video source={{uri: media}} style={{width: "100%", height: "100%"}} />
            }

            {/*Botão customizado no componente para salvar a midia na galeria*/}
            <ObscuraButton
                title="Salvar na galeria"
                containerStyle={{ alignSelf: "center" }}
                onPress={async () => {
                    //salva a mídia no dispositivo
                    saveToLibraryAsync(media as string);

                    //alerta para o usuário
                    Alert.alert("Salvo na galeria!");

                    //volta para a tela anterior
                    router.back();
                }}
            />

            {/*link que apaga a mídia (lógica de exclusão ainda não implementada) e volta para a home*/}
            <Link href="/" style={styles.link}>
                <ThemedText type="link"> Deletear e voltar a tela inicial</ThemedText>
            </Link>
        </ThemedView>
    )
}

//StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1, //ocupa a tela inteira
        padding: 20, //espaçamento interno
    },
    link: {
        flex: 1, //ocupa a tela inteira
        paddingVertical: 20, //espaçamento interno em cima e embaixo
        alignSelf: "center" //centraliza o link horizontalmente
    },
});