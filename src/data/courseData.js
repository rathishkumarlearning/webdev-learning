export const courseData = {
  title: "Web Development for Kids",
  description: "Build your own websites with HTML, CSS & JavaScript — create cool pages the world can see!",
  chapters: [
    {
      id: 1,
      title: "Welcome to Web Dev!",
      lessons: [
        {
          id: "1-1",
          title: "How Websites Work",
          completed: false,
          content: {
            description: "Discover how websites work and meet the three languages that power every site on the internet!",
            sections: [
              {
                type: "text",
                content: "Every website you visit — YouTube, Google, TikTok — is built with just **three languages**: HTML, CSS, and JavaScript. Let's learn what each one does! 🌐"
              },
              {
                type: "heading",
                level: 2,
                content: "The Three Languages"
              },
              {
                type: "list",
                items: [
                  "**HTML** — The structure (skeleton). What's on the page: text, images, buttons",
                  "**CSS** — The style (skin & clothes). How it looks: colors, fonts, layout",
                  "**JavaScript** — The behavior (brain). What it does: clicks, animations, games"
                ]
              },
              {
                type: "code",
                language: "text",
                filename: "analogy.txt",
                code: "Think of a website like a person:\n\nHTML = Skeleton (structure)\n  └── Headings, paragraphs, images, links\n\nCSS = Skin & Clothes (appearance)\n  └── Colors, fonts, sizes, spacing\n\nJavaScript = Brain (behavior)\n  └── Click handlers, animations, logic"
              },
              {
                type: "tip",
                content: "You can build beautiful websites with JUST HTML and CSS! JavaScript adds interactivity but isn't always needed."
              },
              {
                type: "heading",
                level: 2,
                content: "What You'll Build"
              },
              {
                type: "list",
                items: [
                  "📄 Personal profile page",
                  "🎨 Styled cards and layouts",
                  "🖱️ Interactive buttons and forms",
                  "🎮 Simple browser games",
                  "🌐 A portfolio website!"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Tools You Need"
              },
              {
                type: "code",
                language: "text",
                filename: "tools.txt",
                code: "All you need:\n\n1. A TEXT EDITOR (pick one):\n   • VS Code (recommended!) - free\n   • Sublime Text - free\n   • Notepad++ - free\n   • Even regular Notepad works!\n\n2. A WEB BROWSER:\n   • Chrome (best for developers)\n   • Firefox\n   • Edge\n\nThat's it! No installation or signup required."
              },
              {
                type: "checkpoint",
                content: "Download VS Code from code.visualstudio.com and open it. Create a new file and save it as 'index.html' — you're ready to code!"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Your First Webpage",
          completed: false,
          content: {
            description: "Create your very first HTML page! See your code come to life in a browser.",
            sections: [
              {
                type: "text",
                content: "Let's write your first webpage! It only takes a few lines of code to create something you can see in a browser. 🚀"
              },
              {
                type: "heading",
                level: 2,
                content: "The Basic HTML Structure"
              },
              {
                type: "code",
                language: "html",
                filename: "index.html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Website</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is my first webpage. I made this!</p>\n</body>\n</html>"
              },
              {
                type: "heading",
                level: 2,
                content: "Understanding the Parts"
              },
              {
                type: "list",
                items: [
                  "**<!DOCTYPE html>** — Tells the browser this is HTML5",
                  "**<html>** — The root of your page, everything goes inside",
                  "**<head>** — Hidden info: title, settings, links to CSS",
                  "**<title>** — Text shown in the browser tab",
                  "**<body>** — The visible content of your page",
                  "**<h1>** — A big heading (h1 = largest, h6 = smallest)",
                  "**<p>** — A paragraph of text"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "How to View Your Page"
              },
              {
                type: "code",
                language: "text",
                filename: "view_page.txt",
                code: "1. Save the file as 'index.html'\n2. Find the file on your computer\n3. Double-click it!\n4. It opens in your default browser!\n\nOR in VS Code:\n• Install 'Live Server' extension\n• Right-click the file → 'Open with Live Server'\n• Changes update automatically!"
              },
              {
                type: "tip",
                content: "Always save your file (Ctrl+S) before refreshing the browser to see changes!"
              },
              {
                type: "heading",
                level: 2,
                content: "HTML Tags Explained"
              },
              {
                type: "code",
                language: "html",
                filename: "tags.html",
                code: "<!-- Tags have an opening and closing -->\n<p>This is inside the paragraph tag</p>\n\n<!-- Some tags are self-closing -->\n<br>  <!-- Line break -->\n<img>  <!-- Image -->\n<hr>  <!-- Horizontal line -->\n\n<!-- Tags can be nested (inside each other) -->\n<p>This is <strong>bold</strong> text</p>"
              },
              {
                type: "quiz",
                question: "What goes inside the <head> tag?",
                options: [
                  { id: "a", text: "The main content visitors see" },
                  { id: "b", text: "Hidden info like title and settings" },
                  { id: "c", text: "Images and videos" },
                  { id: "d", text: "Nothing, it should be empty" }
                ],
                correct: "b",
                explanation: "The <head> contains metadata — info about the page that isn't visible. The <title>, CSS links, and other settings go here."
              }
            ]
          }
        },
        {
          id: "1-3",
          title: "Essential HTML Tags",
          completed: false,
          content: {
            description: "Learn the most important HTML tags — headings, paragraphs, links, images, and lists!",
            sections: [
              {
                type: "text",
                content: "These tags are the building blocks of every website. Master them and you can build almost anything!"
              },
              {
                type: "heading",
                level: 2,
                content: "Headings"
              },
              {
                type: "code",
                language: "html",
                filename: "headings.html",
                code: "<h1>Heading 1 - Biggest</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6 - Smallest</h6>\n\n<!-- Use h1 for main title, h2 for sections, etc. -->"
              },
              {
                type: "heading",
                level: 2,
                content: "Text Formatting"
              },
              {
                type: "code",
                language: "html",
                filename: "text.html",
                code: "<p>This is a paragraph of text.</p>\n\n<p>Text can be <strong>bold</strong> or <em>italic</em>.</p>\n\n<p>You can also <mark>highlight text</mark>.</p>\n\n<p>Line one<br>Line two (br = line break)</p>\n\n<hr> <!-- Horizontal line -->"
              },
              {
                type: "heading",
                level: 2,
                content: "Links"
              },
              {
                type: "code",
                language: "html",
                filename: "links.html",
                code: "<!-- Basic link -->\n<a href=\"https://google.com\">Go to Google</a>\n\n<!-- Open in new tab -->\n<a href=\"https://youtube.com\" target=\"_blank\">YouTube</a>\n\n<!-- Link to another page on your site -->\n<a href=\"about.html\">About Me</a>\n\n<!-- Link to section on same page -->\n<a href=\"#contact\">Jump to Contact</a>"
              },
              {
                type: "heading",
                level: 2,
                content: "Images"
              },
              {
                type: "code",
                language: "html",
                filename: "images.html",
                code: "<!-- Basic image -->\n<img src=\"photo.jpg\" alt=\"My photo\">\n\n<!-- Image from the internet -->\n<img src=\"https://example.com/cat.jpg\" alt=\"A cute cat\">\n\n<!-- With size -->\n<img src=\"logo.png\" alt=\"Logo\" width=\"200\" height=\"100\">\n\n<!-- alt = description for accessibility & if image fails -->"
              },
              {
                type: "heading",
                level: 2,
                content: "Lists"
              },
              {
                type: "code",
                language: "html",
                filename: "lists.html",
                code: "<!-- Unordered list (bullets) -->\n<ul>\n    <li>Pizza</li>\n    <li>Tacos</li>\n    <li>Ice cream</li>\n</ul>\n\n<!-- Ordered list (numbers) -->\n<ol>\n    <li>Wake up</li>\n    <li>Eat breakfast</li>\n    <li>Code!</li>\n</ol>"
              },
              {
                type: "tip",
                content: "The 'alt' attribute on images is important! It helps blind users understand images, and shows text if the image fails to load."
              },
              {
                type: "checkpoint",
                content: "Create a page about yourself with: an h1 title, a paragraph, a list of hobbies, and a link to your favorite website!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: "CSS - Making It Pretty",
      lessons: [
        {
          id: "2-1",
          title: "Introduction to CSS",
          completed: false,
          content: {
            description: "Add colors, fonts, and style to your HTML! Transform boring pages into beautiful ones.",
            sections: [
              {
                type: "text",
                content: "**CSS** (Cascading Style Sheets) controls how your page LOOKS. Same HTML, different CSS = completely different appearance! 🎨"
              },
              {
                type: "heading",
                level: 2,
                content: "Three Ways to Add CSS"
              },
              {
                type: "code",
                language: "html",
                filename: "css_methods.html",
                code: "<!-- Method 1: Inline (on the element) -->\n<p style=\"color: red;\">Red text</p>\n\n<!-- Method 2: Internal (in head) -->\n<head>\n    <style>\n        p { color: blue; }\n    </style>\n</head>\n\n<!-- Method 3: External file (BEST!) -->\n<head>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>"
              },
              {
                type: "heading",
                level: 2,
                content: "CSS Syntax"
              },
              {
                type: "code",
                language: "css",
                filename: "style.css",
                code: "/* CSS Syntax */\nselector {\n    property: value;\n    another-property: value;\n}\n\n/* Example */\nh1 {\n    color: blue;\n    font-size: 48px;\n}\n\np {\n    color: gray;\n    font-family: Arial;\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Basic Properties"
              },
              {
                type: "code",
                language: "css",
                filename: "basics.css",
                code: "/* Colors */\ncolor: red;              /* Text color */\nbackground-color: yellow; /* Background */\n\n/* Text */\nfont-size: 20px;         /* Size */\nfont-family: Arial;      /* Font */\nfont-weight: bold;       /* Bold */\ntext-align: center;      /* Alignment */\n\n/* Spacing */\npadding: 20px;           /* Space inside */\nmargin: 10px;            /* Space outside */\n\n/* Size */\nwidth: 300px;\nheight: 200px;"
              },
              {
                type: "tip",
                content: "Use an external CSS file (style.css) for real projects! It keeps your code organized and lets you style multiple pages."
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Styled Page"
              },
              {
                type: "code",
                language: "css",
                filename: "first_style.css",
                code: "body {\n    background-color: #1a1a2e;\n    color: white;\n    font-family: Arial, sans-serif;\n    padding: 40px;\n}\n\nh1 {\n    color: #00d4ff;\n    text-align: center;\n}\n\np {\n    font-size: 18px;\n    line-height: 1.6;\n}"
              },
              {
                type: "quiz",
                question: "What does 'padding' do?",
                options: [
                  { id: "a", text: "Adds space outside the element" },
                  { id: "b", text: "Adds space inside the element" },
                  { id: "c", text: "Changes the font size" },
                  { id: "d", text: "Changes the color" }
                ],
                correct: "b",
                explanation: "Padding adds space INSIDE an element (between content and border). Margin adds space OUTSIDE (between elements)."
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "Selectors & Colors",
          completed: false,
          content: {
            description: "Target specific elements and master the art of color in web design!",
            sections: [
              {
                type: "text",
                content: "**Selectors** tell CSS WHICH elements to style. Let's learn the different ways to target elements! 🎯"
              },
              {
                type: "heading",
                level: 2,
                content: "Types of Selectors"
              },
              {
                type: "code",
                language: "css",
                filename: "selectors.css",
                code: "/* Element selector - all of that element */\np {\n    color: gray;\n}\n\n/* Class selector - elements with that class */\n.highlight {\n    background-color: yellow;\n}\n\n/* ID selector - ONE specific element */\n#main-title {\n    font-size: 48px;\n}\n\n/* Multiple selectors */\nh1, h2, h3 {\n    font-family: Georgia;\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Using Classes and IDs"
              },
              {
                type: "code",
                language: "html",
                filename: "classes.html",
                code: "<!-- Classes (can be used multiple times) -->\n<p class=\"highlight\">This is highlighted</p>\n<p class=\"highlight\">This too!</p>\n\n<!-- IDs (use only ONCE per page) -->\n<h1 id=\"main-title\">Welcome!</h1>\n\n<!-- Multiple classes -->\n<p class=\"highlight large bold\">Multiple classes!</p>"
              },
              {
                type: "heading",
                level: 2,
                content: "Color Formats"
              },
              {
                type: "code",
                language: "css",
                filename: "colors.css",
                code: "/* Named colors */\ncolor: red;\ncolor: blue;\ncolor: coral;\ncolor: darkviolet;\n\n/* Hex colors (#RRGGBB) */\ncolor: #ff0000;  /* Red */\ncolor: #00ff00;  /* Green */\ncolor: #0000ff;  /* Blue */\ncolor: #8b5cf6;  /* Purple */\n\n/* RGB */\ncolor: rgb(255, 0, 0);     /* Red */\ncolor: rgba(0, 0, 0, 0.5); /* Black, 50% transparent */\n\n/* HSL (Hue, Saturation, Lightness) */\ncolor: hsl(200, 100%, 50%);"
              },
              {
                type: "tip",
                content: "Use a color picker! Search 'color picker' on Google, or use coolors.co to find beautiful color combinations."
              },
              {
                type: "heading",
                level: 2,
                content: "Gradients"
              },
              {
                type: "code",
                language: "css",
                filename: "gradients.css",
                code: "/* Linear gradient */\nbackground: linear-gradient(to right, #8b5cf6, #ec4899);\n\n/* Diagonal gradient */\nbackground: linear-gradient(135deg, #667eea, #764ba2);\n\n/* Multiple colors */\nbackground: linear-gradient(to bottom, red, orange, yellow);\n\n/* Radial gradient (circle) */\nbackground: radial-gradient(circle, #00d4ff, #090979);"
              },
              {
                type: "checkpoint",
                content: "Create a page with 3 boxes: one with a class 'red-box', one with 'blue-box', one with an ID 'special-box'. Style each differently!"
              }
            ]
          }
        },
        {
          id: "2-3",
          title: "The Box Model",
          completed: false,
          content: {
            description: "Understand how every element is a box with content, padding, border, and margin!",
            sections: [
              {
                type: "text",
                content: "Every HTML element is a **box**. Understanding the box model is the key to perfect layouts! 📦"
              },
              {
                type: "heading",
                level: 2,
                content: "The Box Model"
              },
              {
                type: "code",
                language: "text",
                filename: "box_model.txt",
                code: "+----------------------------------+\n|            MARGIN                |\n|   +--------------------------+   |\n|   |        BORDER            |   |\n|   |   +------------------+   |   |\n|   |   |    PADDING       |   |   |\n|   |   |   +----------+   |   |   |\n|   |   |   | CONTENT  |   |   |   |\n|   |   |   +----------+   |   |   |\n|   |   +------------------+   |   |\n|   +--------------------------+   |\n+----------------------------------+"
              },
              {
                type: "heading",
                level: 2,
                content: "Box Model Properties"
              },
              {
                type: "code",
                language: "css",
                filename: "box.css",
                code: ".box {\n    /* Content size */\n    width: 200px;\n    height: 100px;\n    \n    /* Padding - space inside */\n    padding: 20px;           /* All sides */\n    padding: 10px 20px;      /* Top/bottom, left/right */\n    padding: 5px 10px 15px 20px; /* Top, right, bottom, left */\n    \n    /* Border */\n    border: 2px solid black;\n    border-radius: 10px;     /* Rounded corners! */\n    \n    /* Margin - space outside */\n    margin: 20px;\n    margin: 0 auto;          /* Center horizontally! */\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Border Styles"
              },
              {
                type: "code",
                language: "css",
                filename: "borders.css",
                code: "/* Border shorthand */\nborder: 3px solid #8b5cf6;\n\n/* Border styles */\nborder-style: solid;   /* Solid line */\nborder-style: dashed;  /* Dashed line */\nborder-style: dotted;  /* Dots */\nborder-style: double;  /* Double line */\n\n/* Individual sides */\nborder-top: 2px solid red;\nborder-bottom: 2px solid blue;\n\n/* Rounded corners */\nborder-radius: 10px;      /* All corners */\nborder-radius: 50%;       /* Perfect circle! */\nborder-radius: 20px 0 20px 0; /* Diagonal corners */"
              },
              {
                type: "warning",
                content: "By default, padding and border ADD to the width. Use 'box-sizing: border-box;' to include them in the width!"
              },
              {
                type: "heading",
                level: 2,
                content: "Card Example"
              },
              {
                type: "code",
                language: "css",
                filename: "card.css",
                code: ".card {\n    width: 300px;\n    background-color: white;\n    border-radius: 16px;\n    padding: 24px;\n    margin: 20px;\n    \n    /* Shadow for depth */\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n\n.card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);\n}"
              },
              {
                type: "quiz",
                question: "What does 'margin: 0 auto;' do?",
                options: [
                  { id: "a", text: "Removes all margins" },
                  { id: "b", text: "Centers the element horizontally" },
                  { id: "c", text: "Adds automatic margins everywhere" },
                  { id: "d", text: "Makes margins invisible" }
                ],
                correct: "b",
                explanation: "'margin: 0 auto' sets top/bottom to 0 and left/right to 'auto' — which centers a block element horizontally!"
              }
            ]
          }
        },
        {
          id: "2-4",
          title: "Flexbox Layout",
          completed: false,
          content: {
            description: "Master Flexbox — the modern way to create layouts! Align and distribute elements like a pro.",
            sections: [
              {
                type: "text",
                content: "**Flexbox** makes layouts easy! Center things, space them out, align them — all with a few properties. 🎯"
              },
              {
                type: "heading",
                level: 2,
                content: "Enable Flexbox"
              },
              {
                type: "code",
                language: "css",
                filename: "flex_basic.css",
                code: ".container {\n    display: flex;  /* Enables flexbox! */\n}\n\n/* Children automatically become flex items */\n/* They line up in a row by default */"
              },
              {
                type: "heading",
                level: 2,
                content: "Main Flexbox Properties"
              },
              {
                type: "code",
                language: "css",
                filename: "flexbox.css",
                code: ".container {\n    display: flex;\n    \n    /* Direction */\n    flex-direction: row;      /* Left to right (default) */\n    flex-direction: column;   /* Top to bottom */\n    \n    /* Horizontal alignment */\n    justify-content: flex-start;   /* Left */\n    justify-content: center;       /* Center */\n    justify-content: flex-end;     /* Right */\n    justify-content: space-between; /* Spread out */\n    justify-content: space-around;  /* Equal space */\n    \n    /* Vertical alignment */\n    align-items: flex-start;  /* Top */\n    align-items: center;      /* Middle */\n    align-items: flex-end;    /* Bottom */\n    align-items: stretch;     /* Fill height */\n    \n    /* Wrap items */\n    flex-wrap: wrap;  /* Allow items to wrap to new line */\n    \n    /* Gap between items */\n    gap: 20px;\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Center Anything!"
              },
              {
                type: "code",
                language: "css",
                filename: "center.css",
                code: "/* Perfect centering (horizontally AND vertically) */\n.center-me {\n    display: flex;\n    justify-content: center;  /* Horizontal */\n    align-items: center;      /* Vertical */\n    height: 100vh;            /* Full screen height */\n}\n\n/* This centers its children perfectly! */"
              },
              {
                type: "heading",
                level: 2,
                content: "Navigation Bar"
              },
              {
                type: "code",
                language: "css",
                filename: "navbar.css",
                code: ".navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 30px;\n    background: #1a1a2e;\n}\n\n.nav-links {\n    display: flex;\n    gap: 30px;\n}\n\n.nav-links a {\n    color: white;\n    text-decoration: none;\n}\n\n.nav-links a:hover {\n    color: #00d4ff;\n}"
              },
              {
                type: "tip",
                content: "Flexbox game! Play flexboxfroggy.com to master Flexbox in a fun way. It teaches all the properties through puzzles!"
              },
              {
                type: "heading",
                level: 2,
                content: "Card Grid"
              },
              {
                type: "code",
                language: "css",
                filename: "card_grid.css",
                code: ".card-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    justify-content: center;\n}\n\n.card {\n    width: 300px;\n    padding: 20px;\n    background: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n}"
              },
              {
                type: "checkpoint",
                content: "Create a navigation bar with a logo on the left and 3 links on the right using Flexbox!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: "JavaScript Basics",
      lessons: [
        {
          id: "3-1",
          title: "Introduction to JavaScript",
          completed: false,
          content: {
            description: "Add interactivity to your pages! Make things happen when users click, type, or hover.",
            sections: [
              {
                type: "text",
                content: "**JavaScript** brings your pages to life! It's the programming language of the web — click handlers, animations, games, and so much more! ⚡"
              },
              {
                type: "heading",
                level: 2,
                content: "Adding JavaScript"
              },
              {
                type: "code",
                language: "html",
                filename: "add_js.html",
                code: "<!-- Method 1: Inline (not recommended) -->\n<button onclick=\"alert('Hi!')\">Click me</button>\n\n<!-- Method 2: Internal script -->\n<script>\n    console.log('Hello from JavaScript!');\n</script>\n\n<!-- Method 3: External file (BEST!) -->\n<script src=\"script.js\"></script>\n\n<!-- Put scripts at the END of body! -->"
              },
              {
                type: "heading",
                level: 2,
                content: "Your First JavaScript"
              },
              {
                type: "code",
                language: "javascript",
                filename: "first.js",
                code: "// Print to the console (press F12 to see it!)\nconsole.log('Hello, JavaScript!');\n\n// Show an alert popup\nalert('Welcome to my website!');\n\n// This is a comment - notes for yourself"
              },
              {
                type: "heading",
                level: 2,
                content: "Variables"
              },
              {
                type: "code",
                language: "javascript",
                filename: "variables.js",
                code: "// Creating variables\nlet name = 'Alex';           // Can change later\nconst age = 14;              // Cannot change (constant)\nvar score = 100;             // Old way, avoid this\n\n// Data types\nlet text = 'Hello';          // String (text)\nlet number = 42;             // Number\nlet decimal = 3.14;          // Also a number\nlet isAwesome = true;        // Boolean (true/false)\n\n// Print them\nconsole.log('Name:', name);\nconsole.log('Age:', age);"
              },
              {
                type: "heading",
                level: 2,
                content: "String Concatenation"
              },
              {
                type: "code",
                language: "javascript",
                filename: "strings.js",
                code: "let firstName = 'John';\nlet lastName = 'Doe';\n\n// Old way (+ operator)\nlet fullName = firstName + ' ' + lastName;\n\n// Modern way (template literals) - RECOMMENDED!\nlet greeting = `Hello, ${firstName} ${lastName}!`;\nlet message = `You have ${100 - 25} coins left.`;\n\nconsole.log(greeting);  // Hello, John Doe!\nconsole.log(message);   // You have 75 coins left."
              },
              {
                type: "tip",
                content: "Use template literals (backticks `) for strings! They let you embed variables with ${variable} and span multiple lines."
              },
              {
                type: "quiz",
                question: "What's the difference between let and const?",
                options: [
                  { id: "a", text: "No difference" },
                  { id: "b", text: "let can be reassigned, const cannot" },
                  { id: "c", text: "const is faster" },
                  { id: "d", text: "let is for numbers, const is for text" }
                ],
                correct: "b",
                explanation: "'let' creates a variable you can change later. 'const' creates a constant that cannot be reassigned. Use const by default!"
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "DOM Manipulation",
          completed: false,
          content: {
            description: "Control HTML elements with JavaScript! Change text, styles, and content dynamically.",
            sections: [
              {
                type: "text",
                content: "The **DOM** (Document Object Model) is how JavaScript sees your HTML. You can find, change, add, and remove elements!"
              },
              {
                type: "heading",
                level: 2,
                content: "Selecting Elements"
              },
              {
                type: "code",
                language: "javascript",
                filename: "selecting.js",
                code: "// Get element by ID\nconst title = document.getElementById('main-title');\n\n// Get element by class (first match)\nconst card = document.querySelector('.card');\n\n// Get ALL elements with a class\nconst allCards = document.querySelectorAll('.card');\n\n// Get by tag name\nconst allParagraphs = document.querySelectorAll('p');"
              },
              {
                type: "heading",
                level: 2,
                content: "Changing Content"
              },
              {
                type: "code",
                language: "javascript",
                filename: "content.js",
                code: "const title = document.getElementById('title');\n\n// Change text\ntitle.textContent = 'New Title!';\n\n// Change HTML (can include tags)\ntitle.innerHTML = 'Hello <strong>World</strong>';\n\n// Change an attribute\nconst image = document.querySelector('img');\nimage.src = 'new-image.jpg';\nimage.alt = 'A new description';\n\n// Change a link\nconst link = document.querySelector('a');\nlink.href = 'https://newsite.com';"
              },
              {
                type: "heading",
                level: 2,
                content: "Changing Styles"
              },
              {
                type: "code",
                language: "javascript",
                filename: "styles.js",
                code: "const box = document.getElementById('box');\n\n// Change individual styles\nbox.style.backgroundColor = 'blue';\nbox.style.color = 'white';\nbox.style.padding = '20px';\nbox.style.borderRadius = '10px';\n\n// Note: CSS uses kebab-case (background-color)\n// JavaScript uses camelCase (backgroundColor)\n\n// Better: Add/remove CSS classes!\nbox.classList.add('highlight');\nbox.classList.remove('hidden');\nbox.classList.toggle('active');  // Add if missing, remove if present"
              },
              {
                type: "heading",
                level: 2,
                content: "Creating Elements"
              },
              {
                type: "code",
                language: "javascript",
                filename: "create.js",
                code: "// Create a new element\nconst newCard = document.createElement('div');\nnewCard.classList.add('card');\nnewCard.textContent = 'I am a new card!';\n\n// Add it to the page\nconst container = document.getElementById('container');\ncontainer.appendChild(newCard);\n\n// Remove an element\nconst oldElement = document.getElementById('old');\noldElement.remove();"
              },
              {
                type: "tip",
                content: "Prefer classList.add/remove over changing style directly. It keeps your JavaScript clean and your styles in CSS where they belong!"
              },
              {
                type: "checkpoint",
                content: "Create a page with a heading and button. When clicked, the button should change the heading text and color using JavaScript!"
              }
            ]
          }
        },
        {
          id: "3-3",
          title: "Events & Interactivity",
          completed: false,
          content: {
            description: "Make your page respond to user actions! Handle clicks, hovers, key presses, and more.",
            sections: [
              {
                type: "text",
                content: "**Events** are things that happen — clicks, key presses, mouse movements. JavaScript can listen for them and respond! 🖱️"
              },
              {
                type: "heading",
                level: 2,
                content: "Adding Event Listeners"
              },
              {
                type: "code",
                language: "javascript",
                filename: "events.js",
                code: "const button = document.getElementById('myButton');\n\n// When button is clicked\nbutton.addEventListener('click', function() {\n    alert('Button clicked!');\n});\n\n// Arrow function syntax (shorter)\nbutton.addEventListener('click', () => {\n    console.log('Clicked!');\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Common Events"
              },
              {
                type: "code",
                language: "javascript",
                filename: "common_events.js",
                code: "const element = document.getElementById('myElement');\n\n// Click\nelement.addEventListener('click', () => {\n    console.log('Clicked!');\n});\n\n// Mouse enter/leave (hover)\nelement.addEventListener('mouseenter', () => {\n    element.style.backgroundColor = 'blue';\n});\n\nelement.addEventListener('mouseleave', () => {\n    element.style.backgroundColor = 'white';\n});\n\n// Key press (on document or input)\ndocument.addEventListener('keydown', (event) => {\n    console.log('Key pressed:', event.key);\n});\n\n// Form submit\nform.addEventListener('submit', (event) => {\n    event.preventDefault(); // Stop page refresh!\n    console.log('Form submitted!');\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Click Counter"
              },
              {
                type: "code",
                language: "javascript",
                filename: "counter.js",
                code: "let count = 0;\nconst countDisplay = document.getElementById('count');\nconst button = document.getElementById('increment');\n\nbutton.addEventListener('click', () => {\n    count++;  // Same as count = count + 1\n    countDisplay.textContent = count;\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Toggle Dark Mode"
              },
              {
                type: "code",
                language: "javascript",
                filename: "darkmode.js",
                code: "const toggleBtn = document.getElementById('theme-toggle');\nconst body = document.body;\n\ntoggleBtn.addEventListener('click', () => {\n    body.classList.toggle('dark-mode');\n    \n    // Change button text\n    if (body.classList.contains('dark-mode')) {\n        toggleBtn.textContent = '☀️ Light Mode';\n    } else {\n        toggleBtn.textContent = '🌙 Dark Mode';\n    }\n});"
              },
              {
                type: "tip",
                content: "Use event.preventDefault() on forms to stop the page from refreshing! Otherwise your JavaScript gets interrupted."
              },
              {
                type: "quiz",
                question: "What does addEventListener do?",
                options: [
                  { id: "a", text: "Creates a new HTML element" },
                  { id: "b", text: "Waits for an event and runs code when it happens" },
                  { id: "c", text: "Adds a list to the page" },
                  { id: "d", text: "Changes the page title" }
                ],
                correct: "b",
                explanation: "addEventListener 'listens' for a specific event (like 'click') and runs your function when that event occurs!"
              }
            ]
          }
        },
        {
          id: "3-4",
          title: "Conditions & Loops",
          completed: false,
          content: {
            description: "Make decisions and repeat actions in JavaScript — the logic behind every interactive feature!",
            sections: [
              {
                type: "text",
                content: "**Conditions** let your code make decisions. **Loops** let your code repeat. Together, they're incredibly powerful!"
              },
              {
                type: "heading",
                level: 2,
                content: "If Statements"
              },
              {
                type: "code",
                language: "javascript",
                filename: "if.js",
                code: "const age = 15;\n\nif (age >= 18) {\n    console.log('You are an adult');\n} else if (age >= 13) {\n    console.log('You are a teenager');\n} else {\n    console.log('You are a child');\n}\n\n// Comparison operators:\n// ==  equal to (loose)\n// === equal to (strict, use this!)\n// !== not equal to\n// >   greater than\n// <   less than\n// >=  greater than or equal\n// <=  less than or equal"
              },
              {
                type: "heading",
                level: 2,
                content: "Logical Operators"
              },
              {
                type: "code",
                language: "javascript",
                filename: "logic.js",
                code: "const isLoggedIn = true;\nconst isAdmin = false;\n\n// AND (&&) - both must be true\nif (isLoggedIn && isAdmin) {\n    console.log('Show admin panel');\n}\n\n// OR (||) - at least one must be true\nif (isLoggedIn || isAdmin) {\n    console.log('Show dashboard');\n}\n\n// NOT (!) - flips true/false\nif (!isLoggedIn) {\n    console.log('Please log in');\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "For Loops"
              },
              {
                type: "code",
                language: "javascript",
                filename: "loops.js",
                code: "// Count from 1 to 5\nfor (let i = 1; i <= 5; i++) {\n    console.log(i);\n}\n\n// Loop through an array\nconst fruits = ['apple', 'banana', 'cherry'];\n\nfor (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n}\n\n// Better: for...of loop\nfor (const fruit of fruits) {\n    console.log(fruit);\n}\n\n// Even better: forEach\nfruits.forEach((fruit) => {\n    console.log(fruit);\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Display Items"
              },
              {
                type: "code",
                language: "javascript",
                filename: "display_items.js",
                code: "const items = ['Sword', 'Shield', 'Potion', 'Map'];\nconst container = document.getElementById('inventory');\n\nitems.forEach((item) => {\n    const div = document.createElement('div');\n    div.classList.add('item');\n    div.textContent = item;\n    container.appendChild(div);\n});"
              },
              {
                type: "warning",
                content: "Use === instead of == for comparisons! == can give weird results ('5' == 5 is true, but '5' === 5 is false)."
              },
              {
                type: "checkpoint",
                content: "Create a page that shows a list of 5 items. Use a loop to create the HTML elements from an array!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: "Forms & Input",
      lessons: [
        {
          id: "4-1",
          title: "HTML Forms",
          completed: false,
          content: {
            description: "Create forms to collect user input — text fields, checkboxes, buttons, and more!",
            sections: [
              {
                type: "text",
                content: "**Forms** let users enter data — signing up, logging in, searching, leaving comments. They're essential for interactive websites! 📝"
              },
              {
                type: "heading",
                level: 2,
                content: "Basic Form Structure"
              },
              {
                type: "code",
                language: "html",
                filename: "form.html",
                code: "<form id=\"signup-form\">\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" id=\"username\" name=\"username\" required>\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required>\n    \n    <label for=\"password\">Password:</label>\n    <input type=\"password\" id=\"password\" name=\"password\" required>\n    \n    <button type=\"submit\">Sign Up</button>\n</form>"
              },
              {
                type: "heading",
                level: 2,
                content: "Input Types"
              },
              {
                type: "code",
                language: "html",
                filename: "input_types.html",
                code: "<input type=\"text\">       <!-- Regular text -->\n<input type=\"email\">      <!-- Email validation -->\n<input type=\"password\">   <!-- Hidden characters -->\n<input type=\"number\">     <!-- Numbers only -->\n<input type=\"tel\">        <!-- Phone number -->\n<input type=\"date\">       <!-- Date picker -->\n<input type=\"color\">      <!-- Color picker -->\n<input type=\"range\">      <!-- Slider -->\n<input type=\"checkbox\">   <!-- Checkbox -->\n<input type=\"radio\">      <!-- Radio button -->\n<input type=\"file\">       <!-- File upload -->\n<textarea></textarea>     <!-- Multi-line text -->\n<select></select>         <!-- Dropdown -->"
              },
              {
                type: "heading",
                level: 2,
                content: "Dropdown & Checkboxes"
              },
              {
                type: "code",
                language: "html",
                filename: "selects.html",
                code: "<!-- Dropdown -->\n<label for=\"country\">Country:</label>\n<select id=\"country\" name=\"country\">\n    <option value=\"\">Select a country</option>\n    <option value=\"us\">United States</option>\n    <option value=\"uk\">United Kingdom</option>\n    <option value=\"ca\">Canada</option>\n</select>\n\n<!-- Checkboxes -->\n<p>Interests:</p>\n<input type=\"checkbox\" id=\"coding\" name=\"interests\" value=\"coding\">\n<label for=\"coding\">Coding</label>\n\n<input type=\"checkbox\" id=\"gaming\" name=\"interests\" value=\"gaming\">\n<label for=\"gaming\">Gaming</label>\n\n<!-- Radio buttons (only one can be selected) -->\n<p>Gender:</p>\n<input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n<label for=\"male\">Male</label>\n\n<input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n<label for=\"female\">Female</label>"
              },
              {
                type: "heading",
                level: 2,
                content: "Styling Forms"
              },
              {
                type: "code",
                language: "css",
                filename: "form_style.css",
                code: "form {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\nlabel {\n    display: block;\n    margin-top: 15px;\n    font-weight: bold;\n}\n\ninput, select, textarea {\n    width: 100%;\n    padding: 12px;\n    margin-top: 5px;\n    border: 2px solid #ddd;\n    border-radius: 8px;\n    font-size: 16px;\n}\n\ninput:focus {\n    border-color: #8b5cf6;\n    outline: none;\n}\n\nbutton {\n    margin-top: 20px;\n    padding: 12px 24px;\n    background: #8b5cf6;\n    color: white;\n    border: none;\n    border-radius: 8px;\n    cursor: pointer;\n}"
              },
              {
                type: "tip",
                content: "Always use <label> with inputs! The 'for' attribute should match the input's 'id'. This helps accessibility and lets users click the label."
              },
              {
                type: "checkpoint",
                content: "Create a contact form with: name, email, subject dropdown, message textarea, and a submit button. Style it nicely!"
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Form Handling with JavaScript",
          completed: false,
          content: {
            description: "Process form data with JavaScript! Validate input and respond to submissions.",
            sections: [
              {
                type: "text",
                content: "JavaScript lets you validate forms, get user input, and respond without refreshing the page!"
              },
              {
                type: "heading",
                level: 2,
                content: "Getting Form Values"
              },
              {
                type: "code",
                language: "javascript",
                filename: "form_values.js",
                code: "const form = document.getElementById('signup-form');\n\nform.addEventListener('submit', (event) => {\n    event.preventDefault();  // Stop page refresh!\n    \n    // Get input values\n    const username = document.getElementById('username').value;\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n    \n    console.log('Username:', username);\n    console.log('Email:', email);\n    console.log('Password:', password);\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Form Validation"
              },
              {
                type: "code",
                language: "javascript",
                filename: "validation.js",
                code: "form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    \n    const username = document.getElementById('username').value;\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n    const errorDiv = document.getElementById('error-message');\n    \n    // Validate\n    if (username.length < 3) {\n        errorDiv.textContent = 'Username must be at least 3 characters';\n        return;\n    }\n    \n    if (!email.includes('@')) {\n        errorDiv.textContent = 'Please enter a valid email';\n        return;\n    }\n    \n    if (password.length < 6) {\n        errorDiv.textContent = 'Password must be at least 6 characters';\n        return;\n    }\n    \n    // All good!\n    errorDiv.textContent = '';\n    alert('Form submitted successfully!');\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Real-time Validation"
              },
              {
                type: "code",
                language: "javascript",
                filename: "realtime.js",
                code: "const passwordInput = document.getElementById('password');\nconst strengthIndicator = document.getElementById('strength');\n\npasswordInput.addEventListener('input', () => {\n    const password = passwordInput.value;\n    \n    if (password.length < 4) {\n        strengthIndicator.textContent = 'Weak';\n        strengthIndicator.style.color = 'red';\n    } else if (password.length < 8) {\n        strengthIndicator.textContent = 'Medium';\n        strengthIndicator.style.color = 'orange';\n    } else {\n        strengthIndicator.textContent = 'Strong';\n        strengthIndicator.style.color = 'green';\n    }\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Checkboxes & Radio Buttons"
              },
              {
                type: "code",
                language: "javascript",
                filename: "checkbox_radio.js",
                code: "// Check if checkbox is checked\nconst agreeCheckbox = document.getElementById('agree');\nif (agreeCheckbox.checked) {\n    console.log('User agreed to terms');\n}\n\n// Get selected radio button\nconst genderRadios = document.querySelectorAll('input[name=\"gender\"]');\nlet selectedGender;\n\ngenderRadios.forEach((radio) => {\n    if (radio.checked) {\n        selectedGender = radio.value;\n    }\n});\n\nconsole.log('Selected gender:', selectedGender);"
              },
              {
                type: "tip",
                content: "Use event.preventDefault() on form submit to stop the page from refreshing. This lets you handle the data with JavaScript!"
              },
              {
                type: "quiz",
                question: "What does .value give you from an input element?",
                options: [
                  { id: "a", text: "The input's ID" },
                  { id: "b", text: "The text the user typed" },
                  { id: "c", text: "The input's type" },
                  { id: "d", text: "The input's placeholder" }
                ],
                correct: "b",
                explanation: "The .value property gives you what the user has typed or selected in that input field!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: "Build Projects!",
      lessons: [
        {
          id: "5-1",
          title: "Project: Profile Card",
          completed: false,
          content: {
            description: "Build a beautiful profile card with HTML and CSS — a great portfolio piece!",
            sections: [
              {
                type: "text",
                content: "Let's build a sleek profile card that looks professional! This is something you can actually use. 🎨"
              },
              {
                type: "heading",
                level: 2,
                content: "The HTML"
              },
              {
                type: "code",
                language: "html",
                filename: "profile.html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Profile Card</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <img src=\"avatar.jpg\" alt=\"Profile photo\" class=\"avatar\">\n        </div>\n        <div class=\"card-body\">\n            <h1>Alex Johnson</h1>\n            <p class=\"title\">Web Developer</p>\n            <p class=\"bio\">I love creating beautiful websites and learning new technologies!</p>\n            <div class=\"stats\">\n                <div class=\"stat\">\n                    <span class=\"number\">52</span>\n                    <span class=\"label\">Projects</span>\n                </div>\n                <div class=\"stat\">\n                    <span class=\"number\">1.2k</span>\n                    <span class=\"label\">Followers</span>\n                </div>\n                <div class=\"stat\">\n                    <span class=\"number\">890</span>\n                    <span class=\"label\">Following</span>\n                </div>\n            </div>\n            <button class=\"follow-btn\">Follow</button>\n        </div>\n    </div>\n</body>\n</html>"
              },
              {
                type: "heading",
                level: 2,
                content: "The CSS"
              },
              {
                type: "code",
                language: "css",
                filename: "style.css",
                code: "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(135deg, #1a1a2e, #16213e);\n    font-family: 'Segoe UI', sans-serif;\n}\n\n.card {\n    width: 350px;\n    background: white;\n    border-radius: 20px;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n\n.card-header {\n    height: 100px;\n    background: linear-gradient(135deg, #8b5cf6, #ec4899);\n    position: relative;\n}\n\n.avatar {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: 4px solid white;\n    position: absolute;\n    bottom: -50px;\n    left: 50%;\n    transform: translateX(-50%);\n    object-fit: cover;\n}\n\n.card-body {\n    padding: 60px 30px 30px;\n    text-align: center;\n}\n\n.card-body h1 {\n    font-size: 24px;\n    color: #1a1a2e;\n}\n\n.title {\n    color: #8b5cf6;\n    font-weight: 500;\n    margin: 5px 0 15px;\n}\n\n.bio {\n    color: #666;\n    font-size: 14px;\n    line-height: 1.6;\n}\n\n.stats {\n    display: flex;\n    justify-content: space-around;\n    margin: 25px 0;\n    padding: 20px 0;\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n}\n\n.stat {\n    text-align: center;\n}\n\n.number {\n    display: block;\n    font-size: 20px;\n    font-weight: bold;\n    color: #1a1a2e;\n}\n\n.label {\n    font-size: 12px;\n    color: #999;\n}\n\n.follow-btn {\n    width: 100%;\n    padding: 12px;\n    background: linear-gradient(135deg, #8b5cf6, #ec4899);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    font-size: 16px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.follow-btn:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);\n}"
              },
              {
                type: "tip",
                content: "Use object-fit: cover on images to make them fill their container without stretching!"
              },
              {
                type: "checkpoint",
                content: "Build this profile card, then customize it with YOUR information, photo, and favorite colors!"
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Project: Interactive Quiz",
          completed: false,
          content: {
            description: "Build a working quiz with JavaScript! Questions, answers, and score tracking.",
            sections: [
              {
                type: "text",
                content: "Let's build an interactive quiz that checks answers and tracks your score! 🧠"
              },
              {
                type: "heading",
                level: 2,
                content: "The HTML"
              },
              {
                type: "code",
                language: "html",
                filename: "quiz.html",
                code: "<div class=\"quiz-container\">\n    <h1>JavaScript Quiz</h1>\n    <div id=\"quiz\">\n        <div class=\"question\">\n            <p id=\"question-text\">Question goes here</p>\n            <div id=\"options\" class=\"options\">\n                <!-- Options will be added by JavaScript -->\n            </div>\n        </div>\n    </div>\n    <div class=\"controls\">\n        <button id=\"next-btn\">Next Question</button>\n    </div>\n    <div id=\"result\" class=\"result hidden\">\n        <h2>Quiz Complete!</h2>\n        <p>Your score: <span id=\"score\">0</span>/3</p>\n        <button id=\"restart-btn\">Restart</button>\n    </div>\n</div>"
              },
              {
                type: "heading",
                level: 2,
                content: "The JavaScript"
              },
              {
                type: "code",
                language: "javascript",
                filename: "quiz.js",
                code: "const questions = [\n    {\n        question: \"What does HTML stand for?\",\n        options: [\"Hyper Text Markup Language\", \"Hot Mail\", \"How To Make Lasagna\"],\n        correct: 0\n    },\n    {\n        question: \"What does CSS stand for?\",\n        options: [\"Computer Style Sheets\", \"Cascading Style Sheets\", \"Creative Style System\"],\n        correct: 1\n    },\n    {\n        question: \"Which symbol is used for comments in JavaScript?\",\n        options: [\"<!-- -->\", \"/* */\", \"//\"],\n        correct: 2\n    }\n];\n\nlet currentQuestion = 0;\nlet score = 0;\n\nconst questionText = document.getElementById('question-text');\nconst optionsContainer = document.getElementById('options');\nconst nextBtn = document.getElementById('next-btn');\nconst resultDiv = document.getElementById('result');\nconst scoreSpan = document.getElementById('score');\nconst restartBtn = document.getElementById('restart-btn');\n\nfunction showQuestion() {\n    const q = questions[currentQuestion];\n    questionText.textContent = q.question;\n    \n    optionsContainer.innerHTML = '';\n    q.options.forEach((option, index) => {\n        const button = document.createElement('button');\n        button.classList.add('option');\n        button.textContent = option;\n        button.addEventListener('click', () => selectAnswer(index));\n        optionsContainer.appendChild(button);\n    });\n}\n\nfunction selectAnswer(selected) {\n    const correct = questions[currentQuestion].correct;\n    const options = document.querySelectorAll('.option');\n    \n    options.forEach((opt, index) => {\n        opt.disabled = true;\n        if (index === correct) {\n            opt.classList.add('correct');\n        } else if (index === selected) {\n            opt.classList.add('wrong');\n        }\n    });\n    \n    if (selected === correct) {\n        score++;\n    }\n}\n\nnextBtn.addEventListener('click', () => {\n    currentQuestion++;\n    if (currentQuestion < questions.length) {\n        showQuestion();\n    } else {\n        showResult();\n    }\n});\n\nfunction showResult() {\n    document.getElementById('quiz').classList.add('hidden');\n    document.querySelector('.controls').classList.add('hidden');\n    resultDiv.classList.remove('hidden');\n    scoreSpan.textContent = score;\n}\n\nrestartBtn.addEventListener('click', () => {\n    currentQuestion = 0;\n    score = 0;\n    document.getElementById('quiz').classList.remove('hidden');\n    document.querySelector('.controls').classList.remove('hidden');\n    resultDiv.classList.add('hidden');\n    showQuestion();\n});\n\n// Start the quiz\nshowQuestion();"
              },
              {
                type: "heading",
                level: 2,
                content: "The CSS"
              },
              {
                type: "code",
                language: "css",
                filename: "quiz.css",
                code: ".quiz-container {\n    max-width: 500px;\n    margin: 50px auto;\n    padding: 30px;\n    background: white;\n    border-radius: 16px;\n    box-shadow: 0 10px 40px rgba(0,0,0,0.1);\n}\n\n.options {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 20px;\n}\n\n.option {\n    padding: 15px;\n    border: 2px solid #ddd;\n    border-radius: 10px;\n    background: white;\n    cursor: pointer;\n    transition: all 0.2s;\n}\n\n.option:hover {\n    border-color: #8b5cf6;\n}\n\n.option.correct {\n    background: #10b981;\n    border-color: #10b981;\n    color: white;\n}\n\n.option.wrong {\n    background: #ef4444;\n    border-color: #ef4444;\n    color: white;\n}\n\n.hidden {\n    display: none;\n}"
              },
              {
                type: "checkpoint",
                content: "Build the quiz, then add 5 more questions about topics YOU know well!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: "Publishing Your Site",
      lessons: [
        {
          id: "6-1",
          title: "Going Live!",
          completed: false,
          content: {
            description: "Put your website on the internet for free! Share your creations with the world.",
            sections: [
              {
                type: "text",
                content: "Your website deserves to be seen! Let's put it online for FREE. There are several easy options! 🌐"
              },
              {
                type: "heading",
                level: 2,
                content: "Free Hosting Options"
              },
              {
                type: "list",
                items: [
                  "**GitHub Pages** — Best for portfolios, free with github.com",
                  "**Netlify** — Drag and drop deployment, super easy",
                  "**Vercel** — Great for JavaScript projects",
                  "**Replit** — Code and host in one place"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "GitHub Pages (Recommended)"
              },
              {
                type: "code",
                language: "text",
                filename: "github_pages.txt",
                code: "1. Create a GitHub account (github.com)\n2. Create a new repository\n3. Name it: yourusername.github.io\n4. Upload your HTML, CSS, JS files\n5. Go to Settings → Pages\n6. Select 'main' branch as source\n7. Your site is live at: yourusername.github.io!"
              },
              {
                type: "heading",
                level: 2,
                content: "Netlify (Easiest)"
              },
              {
                type: "code",
                language: "text",
                filename: "netlify.txt",
                code: "1. Go to netlify.com (sign up free)\n2. Click 'Add new site' → 'Deploy manually'\n3. Drag your project folder onto the page\n4. Done! You get a URL like: random-name.netlify.app\n5. You can set a custom name in site settings"
              },
              {
                type: "heading",
                level: 2,
                content: "File Structure for Deployment"
              },
              {
                type: "code",
                language: "text",
                filename: "structure.txt",
                code: "your-project/\n├── index.html      ← Main page (REQUIRED!)\n├── about.html      ← Other pages\n├── style.css       ← Styles\n├── script.js       ← JavaScript\n└── images/         ← Images folder\n    ├── logo.png\n    └── photo.jpg\n\nIMPORTANT:\n• Main page MUST be named index.html\n• Use relative paths: 'images/logo.png' not 'C:/Users/...'"
              },
              {
                type: "tip",
                content: "Before uploading, open index.html locally and make sure everything works! Check that all images load and links work."
              },
              {
                type: "heading",
                level: 2,
                content: "Share Your Work!"
              },
              {
                type: "list",
                items: [
                  "📱 Share the link on social media",
                  "💼 Add it to your resume/portfolio",
                  "👥 Show friends and family",
                  "🎓 Include in school projects",
                  "💻 Put it on your GitHub profile"
                ]
              },
              {
                type: "checkpoint",
                content: "Deploy your profile card project to Netlify or GitHub Pages. Share the link with someone!"
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: "Congratulations! 🎉",
      lessons: [
        {
          id: "7-1",
          title: "You're a Web Developer!",
          completed: false,
          content: {
            description: "Amazing work! You've learned web development. Here's what's next!",
            sections: [
              {
                type: "text",
                content: "**CONGRATULATIONS!** 🎉 You're now a web developer! You can build real websites that the whole world can see!"
              },
              {
                type: "heading",
                level: 2,
                content: "What You Learned"
              },
              {
                type: "list",
                items: [
                  "✅ HTML — Structure and content",
                  "✅ CSS — Styling and layouts",
                  "✅ Flexbox — Modern layout system",
                  "✅ JavaScript — Interactivity and logic",
                  "✅ DOM manipulation — Controlling the page",
                  "✅ Event handling — Responding to users",
                  "✅ Forms — Collecting user input",
                  "✅ Deploying — Publishing sites live!"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "What's Next?"
              },
              {
                type: "list",
                items: [
                  "📱 **Responsive Design** — Make sites work on all devices",
                  "⚛️ **React/Vue** — Build complex web apps",
                  "🗄️ **Backend** — Node.js, databases, APIs",
                  "🎨 **Advanced CSS** — Animations, Grid, Sass",
                  "📦 **Version Control** — Git and GitHub",
                  "🚀 **Build Projects** — Best way to learn!"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Project Ideas"
              },
              {
                type: "list",
                items: [
                  "📝 Personal portfolio website",
                  "🎮 Browser game (Tic-tac-toe, Snake)",
                  "📋 To-do list app",
                  "🌤️ Weather app (with API)",
                  "🧮 Calculator",
                  "⏱️ Stopwatch/Timer",
                  "🎵 Music player interface",
                  "📰 Blog template"
                ]
              },
              {
                type: "tip",
                content: "Build projects you'll actually USE! A personal website, a tool to solve a problem you have, or something for a hobby."
              },
              {
                type: "text",
                content: "You started with nothing and now you can build websites from scratch. That's an incredible skill! Keep building, keep learning, and have fun creating things for the web! 🚀🌐"
              }
            ]
          }
        }
      ]
    }
  ]
};
