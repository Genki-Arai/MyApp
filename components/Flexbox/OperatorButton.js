import React from 'react';
import { Button, StyleSheet } from 'react-native';

export default function OperatorButton(props) {
    const styles = StyleSheet.create({
        btn: {
            // borderWidth: 1,
            // borderColor: "black",
            // fontSize: 50,
            backgroundColor: "yellow",
            flex: props.flex,
        }
    })
    return (
        <Button style={styles.btn} title={props.operator} />
    )
    }
