// Whole website Replace text to text
jQuery(document).ready(function() {
    // Use a function to traverse all text nodes
    function replaceTextInNode(node) {
        if (node.nodeType === 3) { // Check if it's a text node
            var text = node.nodeValue;
            var newText = text.replace(/Lifepro/g, "<span class='lifepro-mark'>Lifepro</span>");
            if (newText !== text) {
                var span = document.createElement("span");
                span.innerHTML = newText;
                node.parentNode.replaceChild(span, node);
            }
        } else if (node.nodeType === 1) { // Check if it's an element node
            // Recursively traverse child nodes
            for (var i = 0; i < node.childNodes.length; i++) {
                replaceTextInNode(node.childNodes[i]);
            }
        }
    }

    // Start the text replacement process from the body element
    replaceTextInNode(document.body);
});


 // Replace "Lifepro" with "<span class='lifepro-mark'>Lifepro</span>" in all text nodes

        jQuery(document).ready(function() {
            jQuery("body").find("*").addBack().contents().filter(function() {
                return this.nodeType === 3; // Filter for text nodes
            }).each(function() {
                jQuery(this).replaceWith(jQuery(this).text().replace(/Lifepro/g, "<span class='lifepro-mark'>Lifepro</span>"));
            });
  });
