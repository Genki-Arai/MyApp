import { Button, StyleSheet } from "react-native";

export default function NumButton(props) {

    return (
        <Button style={styles.btn} title={props.number} />
    )
}

const styles = StyleSheet.create({
    btn: {
        // borderWidth: 1,
        // borderColor: "black",
        // fontSize: 50,
        backgroundColor: "yellow",
    }
})