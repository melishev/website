import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Text } from 'components/typography';

// import Image from 'components/media/article/image';

// Function select Heading level
function RenderHeading(block) {
  switch (block.data.level) {
    case 1:
      return <Heading1 key={block.id}>{block.data.text}</Heading1>;
    case 2:
      return <Heading2 key={block.id}>{block.data.text}</Heading2>;
    case 3:
      return <Heading3 key={block.id}>{block.data.text}</Heading3>;
    case 4:
      return <Heading4 key={block.id}>{block.data.text}</Heading4>;
    case 5:
      return <Heading5 key={block.id}>{block.data.text}</Heading5>;
    case 6:
      return <Heading6 key={block.id}>{block.data.text}</Heading6>;
    default:
      return <p key={block.id}>{block.data.text}</p>;
  }
}

// Main function
function RenderText(block) {
  switch (block.type) {
    case 'header':
      return RenderHeading(block);
    case 'paragraph':
      return <Text key={block.id}>{block.data.text}</Text>;
    case 'image':
      return <Text>Error</Text>;
      // return <Image key={block.id} mask="2x1" src={block.data.file.url} alt={block.data.file.alternativeText} withBorder={block.data.withBorder} stretched={block.data.stretched} withBackground={block.data.withBackground} />;
    default:
      return <p key={block.id}>Error</p>;
  }
}

export default RenderText;
