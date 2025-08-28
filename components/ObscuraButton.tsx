//importa tipos para definir propriedades de componentes em React
import { ComponentProps } from "react";
//importa a biblioteca de ícones Ionicons (pacote do expo)
import { Ionicons } from "@expo/vector-icons";
//importa elementos e tipos do React Native
import {
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    ViewStyle,
} from "react-native";
//importa um objeto de cores customizao do projeto
import { Colors } from "@/constants/Colors";

//interface para tipar as props do botão
interface ObscuraButtonProps {
    onPress: () => void; //função chamada quando o botão é pressionado
    title?: string; //Texto opcional pode aparecer no botão
    iconName?: ComponentProps<typeof Ionicons>["name"];
    //nome do ícone da biblioteca Ionicons (ex.: "home", "camera")
    containerStyle?: StyleProp<ViewStyle>;
    //estlio adicional que pode ser passado para customizar o container
    iconSize?: number;
}

//Componente funcional que representa o botão
export default function ObscuraButton({
    onPress,
    iconName,
    title,
    containerStyle,
    iconSize,
}: ObscuraButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress} //chama a opção passada ao clicar
            style={[
                styles.container, //eslito base
                {
                    backgroundColor: Colors.dark.background, //cor vinda do tema
                    borderRadius: title ? 6 : 40, //bordas arredondadas (se tiver texto, menor radius; se for só ícone, circulo)
                    alignSelf: "flex-start", //faz o botão se ajustar ao conteúdo
                },
                containerStyle, //permite sobrescrever estilos ao usar o componente

            ]}
        >
            {/*Renderiza o ícone apenas se a prop iconName for passada*/}
            {iconName && (
                <Ionicons name={iconName} size={iconSize ?? 28} color={"white"} />
            )}

            {title ? (
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "600",
                        color: "white",
                    }}
                >
                    {title}
                </Text>
            ) : null}
        </TouchableOpacity>
    )
}

//estilos do container do botão
const styles = StyleSheet.create({
    container: {
        padding: 7, // espaçamento interno
        borderRadius: 40, //borda arrendodada (default, mas pode ser alterada dinamicamente)
        flexDirection: "row", //Alinha ícone e texto lado a lado
        alignItems: "center", //centraliza verticalmente ícone e texto
        gap: 7, //espaçamento entre ícone e texto
    },
});