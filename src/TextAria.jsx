import React, { useState } from "react";
import { marked } from "marked";
import DOMPurify from 'dompurify';

marked.setOptions({
    gfm: true,
});

function TextArea() {
    const beginText = `# Heading 1 (H1)
## Heading 2 (H2)
visit [Duck](https://duckduckgo.com/)
inline code: \`const x = 10;\`
code block below:
\`\`\`
const hel = 'Hello';
console.log(hel);
\`\`\`
Here's a list item:
- li 1
- li 2
> This is a blockquote.
![Image](https://www.dummyimg.in/placeholder)
bold text: **bolded text**.`;

    const [unFormattedText, setUnFormattedText] = useState(beginText);
    const [showText, setShowText] = useState(DOMPurify.sanitize(marked.parse(beginText)));

    function handleChange(event) {
        const text = event.target.value;
        setUnFormattedText(text);
        setShowText(DOMPurify.sanitize(marked.parse(text)));
    }

    return (
        <div className="text-center">
            <textarea
                id="editor"
                onChange={handleChange}
                value={unFormattedText}
            />
            <h2>Preview:</h2>
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: showText }}
            />
        </div>
    );
}

export default TextArea;