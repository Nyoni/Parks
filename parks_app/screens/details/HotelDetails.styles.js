import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";



const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 20,
        flex:1, 


    },

    titleContainer: {
        margin: 15,
        backgroundColor: COLORS.lightWhite,
        height: 120,
        position: "absolute",

        top: 150,
        left: 0,
        right: 0,
        borderRadius: 20,
        zIndex: 1,
    },

    titleColumn: {

        padding: 15
    },

    bottom: {
        paddingHorizontal: 30,
        backgroundColor: COLORS.lightWhite,
         height: 90,
         paddingVertical: 20
    }

})


export default styles