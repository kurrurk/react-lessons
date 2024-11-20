import Paragraph from "./Paragraph";

const ParagraphOutput = (props) => {

    console.log('Paragraph Component!');

    return <Paragraph>{props.isShown ? 'New Paragraph' : ''}</Paragraph>
}

export default ParagraphOutput;