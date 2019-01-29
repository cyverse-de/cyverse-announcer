import React from "react";
import { storiesOf } from "@storybook/react";

import AnnouncerTest from "./Announcer.stories";

storiesOf("Announcer", module).add("with app", () => <AnnouncerTest/>);
