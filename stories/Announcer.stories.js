import React, { Component } from "react";
import CyverseAnnouncer, {
    announce,
    BOTTOM,
    ERROR,
    LEFT,
    RIGHT,
    TOP,
    WARNING
} from "../src/CyverseAnnouncer";


class AnnouncerTest extends Component {
    render() {
        let msgs = [
            {
                text: "this is test1",
                duration: 3000,
                vertical: TOP
            },
            {
                text: "this is test2",
                variant: ERROR,
                horizontal: RIGHT
            },
            {
                text: "this is test3",
                variant: WARNING,
                duration: 10000,
                horizontal: LEFT,
                vertical: BOTTOM,

            }];
        for (let i = 0; i < msgs.length; i++) {
            announce(msgs[i]);
        }

        return (
            <CyverseAnnouncer/>
        )
    }
}

export default AnnouncerTest;