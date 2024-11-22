import Paragraph from "./Paragraph";
import React from "react";

const ParagraphOutput = (props) => {

    console.log('ParagraphOutput Component!');

    return <Paragraph>{props.isShown ? 'New Paragraph' : ''}</Paragraph>
}

export default React.memo(ParagraphOutput);