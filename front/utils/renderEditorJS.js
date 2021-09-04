/* eslint-disable react/no-danger */

// Function select Heading level
function RenderHeading(block) {
  switch (block.data.level) {
    case 1:
      return <h1 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 2:
      return <h2 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 3:
      return <h3 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 4:
      return <h4 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 5:
      return <h5 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 6:
      return <h6 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    default:
      return <p key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
  }
}

// Main function
function RenderText(block) {
  switch (block.type) {
    case 'header':
      return RenderHeading(block);
    case 'paragraph':
      return <p key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
    case 'image':
      return <p>IMAGE</p>;
    default:
      return <p key={block.id}>Error</p>;
  }
}

export default RenderText;
