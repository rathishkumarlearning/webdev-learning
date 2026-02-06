export const courseData = {
  title: "Web Development for Kids",
  description: "Build your own websites with HTML, CSS & JavaScript — create cool pages the world can see!",
  chapters: [
    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 1: WELCOME TO WEB DEV
    // ═══════════════════════════════════════════════════════════════
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
                content: "Every website you visit — YouTube, Google, TikTok, Wikipedia — is built with just **three languages**: HTML, CSS, and JavaScript. In this lesson, you'll learn what each one does and how they work together to create the web pages you see every day. By the end, you'll understand the entire journey from typing a URL to seeing a website on your screen! 🌐"
              },
              {
                type: "text",
                content: "When you type a web address and press Enter, your browser sends a request to a computer called a **server** somewhere in the world. That server sends back files — HTML, CSS, and JavaScript files — and your browser reads those files and displays the website. It's like ordering a build-your-own-LEGO set: the server sends the instructions and pieces, and your browser puts them together on screen."
              },
              {
                type: "heading",
                level: 2,
                content: "The Three Languages of the Web"
              },
              {
                type: "text",
                content: "Think of building a website like building a house. You need three things: the **structure** (walls, rooms, floors), the **decoration** (paint, furniture, curtains), and the **functionality** (electricity, plumbing, smart home features). Each web language handles one of these:"
              },
              {
                type: "list",
                items: [
                  "**HTML** (HyperText Markup Language) — The **structure**. It defines WHAT is on the page: headings, paragraphs, images, links, buttons, and forms. Without HTML, there would be nothing on the page at all.",
                  "**CSS** (Cascading Style Sheets) — The **style**. It controls HOW things look: colors, fonts, sizes, spacing, animations, and layout. CSS turns plain text into beautiful, professional designs.",
                  "**JavaScript** (JS) — The **behavior**. It makes things HAPPEN: button clicks, form validation, animations, games, and dynamic content that changes without reloading the page."
                ]
              },
              {
                type: "code",
                language: "text",
                filename: "analogy.txt",
                code: "Think of a website like building a person:\n\n🦴 HTML = Skeleton (structure)\n   └── Headings, paragraphs, images, links, buttons\n   └── Without it: nothing exists on the page\n\n👗 CSS = Skin & Clothes (appearance)\n   └── Colors, fonts, sizes, spacing, layout\n   └── Without it: ugly plain text on white background\n\n🧠 JavaScript = Brain (behavior)\n   └── Click handlers, animations, games, dynamic content\n   └── Without it: static page that never changes\n\n═══════════════════════════════════════════\nSame HTML + Different CSS = Completely different look!\nThat's the power of separating structure from style."
              },
              {
                type: "tip",
                content: "You can build beautiful websites with JUST HTML and CSS! JavaScript adds interactivity but isn't always needed. Many professional portfolios and business sites are pure HTML + CSS. Start simple, add complexity later."
              },
              {
                type: "heading",
                level: 2,
                content: "What You'll Build in This Course"
              },
              {
                type: "text",
                content: "This isn't just theory — you'll build real, working projects that you can show to friends and family:"
              },
              {
                type: "list",
                items: [
                  "📄 **Personal profile page** — Your own 'about me' webpage",
                  "🎨 **Styled cards and layouts** — Professional-looking designs with CSS",
                  "🖱️ **Interactive buttons and forms** — Pages that respond to user actions",
                  "🎮 **A working quiz game** — Built entirely with JavaScript",
                  "🃏 **Beautiful profile card** — A portfolio-worthy component",
                  "🌐 **A live website** — Published on the internet for anyone to visit!"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Tools You Need"
              },
              {
                type: "text",
                content: "One of the best things about web development is that you need almost NO special software. You probably already have everything!"
              },
              {
                type: "code",
                language: "text",
                filename: "tools.txt",
                code: "All you need (totally FREE!):\n\n1. A TEXT EDITOR (pick one):\n   ★ VS Code (RECOMMENDED!) - code.visualstudio.com\n     → Free, powerful, used by professional developers\n     → Has autocomplete, error highlighting, built-in terminal\n     → Install the 'Live Server' extension for instant previews!\n   • Sublime Text - sublimetext.com (free)\n   • Notepad++ - notepad-plus-plus.org (free, Windows)\n   • Even regular Notepad/TextEdit works for basics!\n\n2. A WEB BROWSER:\n   ★ Chrome (RECOMMENDED for developers)\n     → Press F12 to open Developer Tools\n     → Inspect any website's code!\n   • Firefox (also has great dev tools)\n   • Edge or Safari work too\n\n3. OPTIONAL BUT HELPFUL:\n   • Live Server extension for VS Code\n     (auto-refreshes browser when you save!)\n   • Emmet (built into VS Code — type shortcuts like\n     h1 then Tab to create <h1></h1> instantly!)\n\nThat's it! No signups, no payments, no installations\n(if you use a browser-based editor like CodePen)."
              },
              {
                type: "heading",
                level: 2,
                content: "How to View Your Code"
              },
              {
                type: "code",
                language: "text",
                filename: "viewing.txt",
                code: "THREE WAYS TO SEE YOUR WEBPAGE:\n\n1. DOUBLE-CLICK THE FILE\n   - Save your file as 'index.html'\n   - Find it in your file explorer\n   - Double-click → opens in your default browser!\n   - Refresh (Ctrl+R / Cmd+R) to see changes\n\n2. VS CODE LIVE SERVER (BEST!)\n   - Install the 'Live Server' extension\n   - Right-click your HTML file → 'Open with Live Server'\n   - Changes appear INSTANTLY when you save! (Ctrl+S)\n   - No manual refreshing needed!\n\n3. ONLINE EDITORS (no installation!)\n   - codepen.io — great for experimenting\n   - codesandbox.io — more full-featured\n   - jsfiddle.net — quick tests\n   - You see results side-by-side as you type!"
              },
              {
                type: "warning",
                content: "**Always save your file with the .html extension!** If you save as 'mypage.txt' instead of 'mypage.html', your browser won't know it's a webpage. Also, name your main file 'index.html' — this is the standard name that web servers look for."
              },
              {
                type: "heading",
                level: 2,
                content: "Practice: Set Up Your Workspace"
              },
              {
                type: "code",
                language: "text",
                filename: "setup_activity.txt",
                code: "DO THIS NOW:\n\n1. Download VS Code from code.visualstudio.com\n2. Install it and open it\n3. Create a new folder called 'my-website'\n4. In VS Code: File → Open Folder → select 'my-website'\n5. Create a new file: File → New File\n6. Save it as 'index.html' (Ctrl+S / Cmd+S)\n7. Type: Hello World!\n8. Save and double-click the file to open in browser\n\nCONGRATULATIONS! You just created your first webpage!\n(It's not pretty yet, but we'll fix that soon!)\n\nBONUS: Install these VS Code extensions:\n- Live Server (essential!)\n- Prettier (auto-formats your code)\n- Auto Rename Tag (renames matching HTML tags)"
              },
              {
                type: "checkpoint",
                content: "Download VS Code, create a folder called 'my-website', create 'index.html' inside it, type some text, save it, and open it in your browser. If you can see your text on screen, you're ready to start coding! 🎉"
              }
            ]
          }
        },
        {
          id: "1-2",
          title: "Your First Webpage",
          completed: false,
          content: {
            description: "Write your first real HTML page — learn the basic structure that every website uses!",
            sections: [
              {
                type: "text",
                content: "Let's write your first real webpage! Every website in the world — from Google to YouTube to Wikipedia — uses the same basic HTML structure. Once you learn it, you'll recognize it everywhere. It only takes a few lines of code to create something you can see in a browser! 🚀"
              },
              {
                type: "heading",
                level: 2,
                content: "The Basic HTML Structure"
              },
              {
                type: "text",
                content: "Every HTML page has the same skeleton. Think of it as the template that everything else goes into. Copy this into your 'index.html' file and open it in your browser:"
              },
              {
                type: "code",
                language: "html",
                filename: "index.html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Website</title>\n</head>\n<body>\n    <h1>Hello, World! 🌍</h1>\n    <p>This is my first webpage. I made this with HTML!</p>\n    <p>Web development is awesome! 🚀</p>\n</body>\n</html>"
              },
              {
                type: "heading",
                level: 2,
                content: "Understanding Every Line"
              },
              {
                type: "text",
                content: "Let's break down what each part does. Understanding this structure is crucial — you'll use it in every single webpage you create:"
              },
              {
                type: "list",
                items: [
                  "**<!DOCTYPE html>** — Tells the browser 'this is a modern HTML5 page.' Always put this first.",
                  "**<html>** — The root container. EVERYTHING on your page goes between <html> and </html>.",
                  "**<head>** — The 'behind the scenes' section. Contains info that visitors don't directly see: the page title, CSS links, settings. Think of it as the brain of the page.",
                  "**<title>** — The text shown in the browser TAB. Not on the page itself! This also appears in Google search results.",
                  "**<body>** — The visible content! Everything users see goes between <body> and </body>. This is where you'll spend most of your time.",
                  "**<h1>** — A heading (the biggest size). h1 through h6 give you 6 sizes of headings.",
                  "**<p>** — A paragraph of text. Browsers automatically add space between paragraphs."
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "How HTML Tags Work"
              },
              {
                type: "text",
                content: "HTML uses **tags** to define elements. Most tags come in pairs: an opening tag and a closing tag (with a /). The content goes between them. Some tags are self-closing (they don't need a closing tag)."
              },
              {
                type: "code",
                language: "html",
                filename: "tags_explained.html",
                code: "<!-- PAIRED TAGS (most common) -->\n<h1>This is a heading</h1>\n<p>This is a paragraph</p>\n<strong>This is bold text</strong>\n<em>This is italic text</em>\n\n<!-- SELF-CLOSING TAGS (no content inside) -->\n<br>     <!-- Line break (goes to next line) -->\n<hr>     <!-- Horizontal line (divider) -->\n<img>    <!-- Image (we'll add details later) -->\n\n<!-- NESTED TAGS (tags inside tags) -->\n<p>This is <strong>very</strong> <em>important</em> text!</p>\n\n<!-- THIS IS A COMMENT -->\n<!-- Browsers ignore comments -->\n<!-- Use them to leave notes for yourself! -->\n\n<!-- WRONG! Tags must be properly nested -->\n<p>This is <strong>wrong</p></strong>\n\n<!-- CORRECT! Close inner tags first -->\n<p>This is <strong>correct</strong></p>"
              },
              {
                type: "heading",
                level: 2,
                content: "Essential HTML Tags"
              },
              {
                type: "code",
                language: "html",
                filename: "essential_tags.html",
                code: "<!-- ═══ HEADINGS (6 sizes) ═══ -->\n<h1>Heading 1 - Page Title (biggest)</h1>\n<h2>Heading 2 - Section Title</h2>\n<h3>Heading 3 - Subsection</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6 - Smallest heading</h6>\n\n<!-- ═══ TEXT ═══ -->\n<p>A paragraph of text. Browsers add space above and below.</p>\n<p>Text can be <strong>bold</strong> or <em>italic</em> or\n   <mark>highlighted</mark> or <del>crossed out</del>.</p>\n<p>Line one<br>Line two (br = line break, no new paragraph)</p>\n<hr> <!-- Horizontal divider line -->\n\n<!-- ═══ LINKS ═══ -->\n<a href=\"https://google.com\">Go to Google</a>\n<a href=\"https://youtube.com\" target=\"_blank\">YouTube (new tab)</a>\n<a href=\"about.html\">My About Page</a>\n\n<!-- ═══ IMAGES ═══ -->\n<img src=\"photo.jpg\" alt=\"My photo\" width=\"300\">\n<img src=\"https://placekitten.com/200/200\" alt=\"A cute cat\">\n\n<!-- ═══ LISTS ═══ -->\n<h3>My Hobbies (unordered/bullets):</h3>\n<ul>\n    <li>Coding</li>\n    <li>Gaming</li>\n    <li>Drawing</li>\n</ul>\n\n<h3>Steps to Make a Website (ordered/numbered):</h3>\n<ol>\n    <li>Write the HTML</li>\n    <li>Add CSS styling</li>\n    <li>Make it interactive with JavaScript</li>\n</ol>"
              },
              {
                type: "tip",
                content: "**VS Code shortcut!** Type `!` and press Tab in an empty .html file — VS Code will generate the entire HTML skeleton for you instantly! This is called an Emmet abbreviation, and there are many more: `h1` + Tab, `p` + Tab, `ul>li*3` + Tab (creates a list with 3 items!)."
              },
              {
                type: "heading",
                level: 2,
                content: "Build Your 'About Me' Page"
              },
              {
                type: "code",
                language: "html",
                filename: "about_me.html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>About Me</title>\n</head>\n<body>\n    <h1>👋 Hi, I'm [Your Name]!</h1>\n    \n    <p>I'm learning web development and I'm excited to build\n    cool websites! This is my first ever webpage.</p>\n    \n    <h2>🎯 My Hobbies</h2>\n    <ul>\n        <li>🎮 Gaming</li>\n        <li>💻 Coding</li>\n        <li>📚 Reading</li>\n        <li>🎵 Music</li>\n    </ul>\n    \n    <h2>🌟 Fun Facts About Me</h2>\n    <ol>\n        <li>I can solve a Rubik's cube</li>\n        <li>My favorite color is blue</li>\n        <li>I've visited 5 countries</li>\n    </ol>\n    \n    <h2>🔗 My Favorite Websites</h2>\n    <p>Check out these cool sites:</p>\n    <ul>\n        <li><a href=\"https://youtube.com\" target=\"_blank\">YouTube</a></li>\n        <li><a href=\"https://scratch.mit.edu\" target=\"_blank\">Scratch</a></li>\n        <li><a href=\"https://github.com\" target=\"_blank\">GitHub</a></li>\n    </ul>\n    \n    <hr>\n    <p><em>Made with ❤️ by [Your Name] | My first webpage!</em></p>\n</body>\n</html>"
              },
              {
                type: "warning",
                content: "**The 'alt' attribute on images is NOT optional!** It describes the image for people who can't see it (screen readers for blind users), and it shows text if the image fails to load. It also helps with Google search rankings. Always add meaningful alt text!"
              },
              {
                type: "heading",
                level: 2,
                content: "Practice Exercises"
              },
              {
                type: "code",
                language: "text",
                filename: "exercises.txt",
                code: "BUILD THESE PAGES:\n\n1. ABOUT ME PAGE 👤\n   - Your name as h1\n   - A paragraph about yourself\n   - An unordered list of 5 hobbies\n   - An ordered list of your top 3 favorite foods\n   - Links to 3 websites you like\n\n2. RECIPE PAGE 🍕\n   - Recipe title as h1\n   - An image of the food\n   - Ingredients as an unordered list\n   - Instructions as an ordered list\n   - A 'Back to Home' link\n\n3. MY PETS PAGE 🐱\n   - Title and intro paragraph\n   - For each pet: name (h2), image, and description (p)\n   - Use <hr> to separate each pet\n\n4. EXPLORE CHALLENGE 🔍\n   - Right-click any website and select 'View Page Source'\n   - Can you spot the <html>, <head>, <body> tags?\n   - Find the <title> — does it match the browser tab?"
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
                explanation: "The <head> contains metadata — info about the page that isn't visible on screen. The <title>, CSS links, character encoding, and other settings go here. The visible content goes in <body>."
              },
              {
                type: "checkpoint",
                content: "Create your own 'About Me' page with: your name as an h1, at least 2 paragraphs, a list of hobbies, a list of favorite things, 3 links to websites you like, and proper HTML structure. View it in your browser — you're officially a web developer! 🎉"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 2: CSS - MAKING IT PRETTY
    // ═══════════════════════════════════════════════════════════════
    {
      id: 2,
      title: "CSS — Making It Pretty!",
      lessons: [
        {
          id: "2-1",
          title: "Introduction to CSS",
          completed: false,
          content: {
            description: "Transform boring HTML into beautiful designs! Learn CSS basics — colors, fonts, spacing, and more.",
            sections: [
              {
                type: "text",
                content: "**CSS** (Cascading Style Sheets) controls how your page LOOKS. Same HTML content, different CSS = completely different appearance! CSS is what turns plain text into a beautiful, professional website. Think of CSS as the interior designer for your HTML house — same rooms, but painted, furnished, and decorated. 🎨"
              },
              {
                type: "text",
                content: "CSS works by selecting HTML elements and applying styles to them. You say 'find all paragraphs and make them blue' or 'find the heading and make it big and centered.' The browser reads your CSS rules and applies them to the HTML, transforming the appearance without changing the content."
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
                code: "<!-- METHOD 1: Inline (on the element itself) -->\n<!-- Quick but messy — avoid for real projects! -->\n<p style=\"color: red; font-size: 20px;\">Red text</p>\n\n<!-- METHOD 2: Internal (in the <head> section) -->\n<!-- Good for single-page experiments -->\n<head>\n    <style>\n        p {\n            color: blue;\n            font-size: 18px;\n        }\n    </style>\n</head>\n\n<!-- METHOD 3: External file (THE BEST WAY!) -->\n<!-- Keeps code organized — use this for real projects! -->\n<head>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<!-- Then create a separate 'style.css' file -->"
              },
              {
                type: "heading",
                level: 2,
                content: "CSS Syntax — The Rules"
              },
              {
                type: "code",
                language: "css",
                filename: "syntax.css",
                code: "/* CSS Rule Structure:\n   selector {\n       property: value;\n       another-property: value;\n   }\n*/\n\n/* Example: Style ALL h1 elements */\nh1 {\n    color: #8b5cf6;        /* purple text */\n    font-size: 48px;       /* big text */\n    text-align: center;    /* centered */\n    margin-bottom: 20px;   /* space below */\n}\n\n/* Example: Style ALL paragraphs */\np {\n    color: #333333;        /* dark gray text */\n    font-family: Arial, sans-serif;\n    font-size: 18px;\n    line-height: 1.6;      /* spacing between lines */\n}\n\n/* Example: Style the entire page */\nbody {\n    background-color: #f5f5f5;  /* light gray background */\n    margin: 0;                   /* remove default margins */\n    padding: 40px;               /* add inner spacing */\n    font-family: 'Segoe UI', Arial, sans-serif;\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Essential CSS Properties"
              },
              {
                type: "code",
                language: "css",
                filename: "essential_properties.css",
                code: "/* ═══ COLORS ═══ */\ncolor: red;                    /* text color */\nbackground-color: #1a1a2e;     /* background color */\n/* Colors can be: names (red), hex (#ff0000), rgb(255,0,0) */\n\n/* ═══ TEXT ═══ */\nfont-size: 20px;               /* text size */\nfont-family: Arial, sans-serif; /* font (with fallback) */\nfont-weight: bold;             /* bold text */\nfont-style: italic;            /* italic text */\ntext-align: center;            /* left, center, right, justify */\ntext-decoration: none;         /* removes underlines from links */\ntext-transform: uppercase;     /* UPPERCASE, lowercase, capitalize */\nline-height: 1.6;              /* space between lines */\nletter-spacing: 2px;           /* space between letters */\n\n/* ═══ SPACING ═══ */\npadding: 20px;                 /* space INSIDE the element */\nmargin: 10px;                  /* space OUTSIDE the element */\n/* Think: padding = cushion inside a box */\n/*        margin = distance between boxes */\n\n/* ═══ SIZE ═══ */\nwidth: 300px;                  /* fixed width */\nmax-width: 800px;              /* won't get wider than this */\nheight: 200px;                 /* fixed height */\nmin-height: 100px;             /* won't get shorter */\n\n/* ═══ BORDERS ═══ */\nborder: 2px solid #8b5cf6;     /* width, style, color */\nborder-radius: 10px;           /* rounded corners! */\nborder-radius: 50%;            /* perfect circle! */"
              },
              {
                type: "heading",
                level: 2,
                content: "Your First Styled Page"
              },
              {
                type: "code",
                language: "css",
                filename: "style.css",
                code: "/* A beautiful dark theme! */\nbody {\n    background-color: #0f0f1a;\n    color: #e0e0e0;\n    font-family: 'Segoe UI', Arial, sans-serif;\n    max-width: 800px;\n    margin: 0 auto;        /* centers the page! */\n    padding: 40px 20px;\n    line-height: 1.8;\n}\n\nh1 {\n    color: #8b5cf6;        /* vibrant purple */\n    font-size: 42px;\n    text-align: center;\n    margin-bottom: 10px;\n}\n\nh2 {\n    color: #06b6d4;        /* cyan accent */\n    border-bottom: 2px solid #06b6d4;\n    padding-bottom: 10px;\n    margin-top: 40px;\n}\n\np {\n    font-size: 18px;\n    color: #b0b0b0;\n}\n\na {\n    color: #ec4899;        /* pink links */\n    text-decoration: none; /* no underline */\n}\n\na:hover {\n    color: #f472b6;        /* lighter pink on hover */\n    text-decoration: underline;\n}\n\nul, ol {\n    padding-left: 30px;\n}\n\nli {\n    margin-bottom: 8px;\n    font-size: 16px;\n}"
              },
              {
                type: "tip",
                content: "**Use an external CSS file for real projects!** Create a file called 'style.css' and link it in your HTML with `<link rel=\"stylesheet\" href=\"style.css\">`. This keeps your code organized, lets you style multiple HTML pages with the same CSS, and is how professional developers work."
              },
              {
                type: "heading",
                level: 2,
                content: "Selectors — Targeting Elements"
              },
              {
                type: "code",
                language: "css",
                filename: "selectors.css",
                code: "/* ELEMENT selector — targets ALL of that element */\np { color: gray; }         /* ALL paragraphs */\nh1 { font-size: 48px; }    /* ALL h1 headings */\n\n/* CLASS selector — targets elements with that class */\n/* Use a dot (.) before the class name */\n.highlight { background-color: yellow; }\n.big-text { font-size: 24px; }\n.card { border: 1px solid #ddd; padding: 20px; }\n\n/* ID selector — targets ONE specific element */\n/* Use a hash (#) before the ID name */\n#main-title { font-size: 48px; color: purple; }\n#footer { text-align: center; }\n\n/* MULTIPLE selectors — same styles for multiple */\nh1, h2, h3 { font-family: Georgia, serif; }\n\n/* DESCENDANT selector — elements INSIDE other elements */\n.card p { color: gray; }  /* paragraphs inside .card only */\nnav a { color: white; }   /* links inside nav only */\n\n/* PSEUDO-CLASS — element in a specific STATE */\na:hover { color: red; }         /* when mouse hovers */\nbutton:active { background: blue; } /* when being clicked */\ninput:focus { border-color: purple; } /* when selected */"
              },
              {
                type: "code",
                language: "html",
                filename: "using_selectors.html",
                code: "<!-- Classes (reusable — use on MANY elements) -->\n<p class=\"highlight\">This is highlighted!</p>\n<p class=\"highlight big-text\">Highlighted AND big!</p>\n<p>This has no special styling</p>\n\n<!-- IDs (unique — use ONCE per page) -->\n<h1 id=\"main-title\">Welcome!</h1>\n\n<!-- Multiple classes on one element -->\n<div class=\"card highlight\">I have two classes!</div>"
              },
              {
                type: "heading",
                level: 2,
                content: "Colors in CSS"
              },
              {
                type: "code",
                language: "css",
                filename: "colors.css",
                code: "/* Named colors (140+ built-in names) */\ncolor: red;\ncolor: coral;\ncolor: darkviolet;\ncolor: tomato;\n\n/* Hex colors (#RRGGBB) — most common! */\ncolor: #ff0000;   /* red */\ncolor: #00ff00;   /* green */\ncolor: #0000ff;   /* blue */\ncolor: #8b5cf6;   /* nice purple */\ncolor: #06b6d4;   /* nice cyan */\ncolor: #ffffff;   /* white */\ncolor: #000000;   /* black */\n\n/* RGB — Red, Green, Blue (0-255 each) */\ncolor: rgb(255, 0, 0);       /* red */\ncolor: rgba(0, 0, 0, 0.5);   /* black at 50% transparent! */\n\n/* Gradients — smooth color transitions */\nbackground: linear-gradient(to right, #8b5cf6, #ec4899);\nbackground: linear-gradient(135deg, #667eea, #764ba2);\nbackground: radial-gradient(circle, #06b6d4, #0f0f1a);"
              },
              {
                type: "warning",
                content: "**Classes vs IDs:** Use classes (`.name`) for styles you'll reuse on multiple elements. Use IDs (`#name`) for ONE unique element. A common mistake is using IDs everywhere — stick to classes for styling, and save IDs for JavaScript targeting."
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
                explanation: "Padding adds space INSIDE an element — between the content and its border. Margin adds space OUTSIDE — between the element and its neighbors. Remember: Padding = inside cushion, Margin = outside gap."
              },
              {
                type: "checkpoint",
                content: "Take your 'About Me' page and create an external 'style.css' file. Add a dark background, colorful headings, styled links with hover effects, and nice spacing. Make it look professional! Link the CSS file in your HTML head."
              }
            ]
          }
        },
        {
          id: "2-2",
          title: "The Box Model & Flexbox Layout",
          completed: false,
          content: {
            description: "Master the Box Model and Flexbox — the secrets to perfect page layouts!",
            sections: [
              {
                type: "text",
                content: "Every HTML element is a **box**. Understanding how these boxes work — and how to arrange them — is THE key skill in CSS. In this lesson, you'll master the Box Model (how each box is structured) and Flexbox (how to arrange boxes on the page). These two concepts solve 90% of all layout challenges. 📦"
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
                code: "Every HTML element is a box with 4 layers:\n\n┌────────────────────────────────────┐\n│            MARGIN                  │ ← Space OUTSIDE (gap between boxes)\n│   ┌────────────────────────────┐   │\n│   │         BORDER             │   │ ← The visible edge\n│   │   ┌────────────────────┐   │   │\n│   │   │     PADDING        │   │   │ ← Space INSIDE (cushion)\n│   │   │   ┌────────────┐   │   │   │\n│   │   │   │  CONTENT   │   │   │   │ ← Your text, images, etc.\n│   │   │   └────────────┘   │   │   │\n│   │   └────────────────────┘   │   │\n│   └────────────────────────────┘   │\n└────────────────────────────────────┘\n\nReal-world analogy:\n• CONTENT = The gift inside a box\n• PADDING = The bubble wrap around the gift\n• BORDER  = The cardboard box itself\n• MARGIN  = The space between boxes on a shelf"
              },
              {
                type: "code",
                language: "css",
                filename: "box_model.css",
                code: "/* Apply box-sizing to ALL elements (best practice!) */\n* {\n    box-sizing: border-box;\n    /* This makes width include padding + border */\n    /* Without this, padding ADDS to the width — confusing! */\n}\n\n.card {\n    /* Content size */\n    width: 300px;\n    height: auto;        /* height adjusts to content */\n    \n    /* Padding (space inside) */\n    padding: 24px;                    /* all 4 sides */\n    /* padding: 10px 20px;           top/bottom, left/right */\n    /* padding: 5px 10px 15px 20px;  top, right, bottom, left */\n    \n    /* Border */\n    border: 2px solid #8b5cf6;\n    border-radius: 16px;              /* rounded corners */\n    \n    /* Margin (space outside) */\n    margin: 20px;\n    /* margin: 0 auto;  ← CENTER a block element horizontally! */\n    \n    /* Visual extras */\n    background-color: white;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n\n.card:hover {\n    transform: translateY(-5px);      /* float up on hover */\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);\n    transition: all 0.3s ease;        /* smooth animation */\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Flexbox — The Layout Superpower"
              },
              {
                type: "text",
                content: "**Flexbox** is the modern way to arrange elements on a page. Before Flexbox, centering something was notoriously difficult. Now it's just 3 lines of CSS! Flexbox lets you align items, distribute space, and create responsive layouts with ease."
              },
              {
                type: "code",
                language: "css",
                filename: "flexbox.css",
                code: "/* Step 1: Make the parent a flex container */\n.container {\n    display: flex;  /* This is the magic line! */\n    /* Children automatically become flex items */\n    /* They line up in a ROW by default */\n}\n\n/* ═══ DIRECTION ═══ */\n.container {\n    flex-direction: row;      /* Left to right (default) */\n    flex-direction: column;   /* Top to bottom */\n}\n\n/* ═══ HORIZONTAL ALIGNMENT (justify-content) ═══ */\n.container {\n    justify-content: flex-start;    /* Left (default) */\n    justify-content: center;        /* Center */\n    justify-content: flex-end;      /* Right */\n    justify-content: space-between; /* Even space, edges flush */\n    justify-content: space-around;  /* Even space, including edges */\n    justify-content: space-evenly;  /* Perfectly even spaces */\n}\n\n/* ═══ VERTICAL ALIGNMENT (align-items) ═══ */\n.container {\n    align-items: flex-start;  /* Top */\n    align-items: center;      /* Middle (vertically!) */\n    align-items: flex-end;    /* Bottom */\n    align-items: stretch;     /* Fill height (default) */\n}\n\n/* ═══ WRAPPING (for responsive grids) ═══ */\n.container {\n    flex-wrap: wrap;    /* Items wrap to new line if needed */\n    gap: 20px;          /* Space between items */\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Common Flexbox Patterns"
              },
              {
                type: "code",
                language: "css",
                filename: "flex_patterns.css",
                code: "/* PATTERN 1: Center ANYTHING (the holy grail!) */\n.center-everything {\n    display: flex;\n    justify-content: center;  /* horizontal center */\n    align-items: center;      /* vertical center */\n    min-height: 100vh;        /* full screen height */\n}\n\n/* PATTERN 2: Navigation bar */\n.navbar {\n    display: flex;\n    justify-content: space-between; /* logo left, links right */\n    align-items: center;\n    padding: 15px 30px;\n    background: #1a1a2e;\n}\n\n.nav-links {\n    display: flex;\n    gap: 30px;                      /* space between links */\n}\n\n/* PATTERN 3: Card grid */\n.card-grid {\n    display: flex;\n    flex-wrap: wrap;          /* wrap to new rows */\n    gap: 20px;\n    justify-content: center;  /* center the grid */\n}\n\n.card-grid .card {\n    width: 300px;             /* each card is 300px wide */\n    /* Cards will wrap to new rows when space runs out! */\n}\n\n/* PATTERN 4: Footer at bottom */\n.page {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.page main {\n    flex: 1;  /* main content takes ALL remaining space */\n}\n/* Footer naturally sits at the bottom! */"
              },
              {
                type: "tip",
                content: "**Play Flexbox Froggy!** Go to flexboxfroggy.com — it's a free game that teaches Flexbox through 24 puzzles. It's the most fun way to master Flexbox and takes about 30 minutes. You'll be a Flexbox pro by the end!"
              },
              {
                type: "heading",
                level: 2,
                content: "Build a Card Layout"
              },
              {
                type: "code",
                language: "html",
                filename: "cards.html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Card Layout</title>\n    <style>\n        * { box-sizing: border-box; margin: 0; padding: 0; }\n        \n        body {\n            background: #0f0f1a;\n            padding: 40px;\n            font-family: 'Segoe UI', sans-serif;\n        }\n        \n        h1 {\n            color: white;\n            text-align: center;\n            margin-bottom: 30px;\n        }\n        \n        .card-grid {\n            display: flex;\n            flex-wrap: wrap;\n            gap: 20px;\n            justify-content: center;\n        }\n        \n        .card {\n            width: 280px;\n            background: #1e1e30;\n            border-radius: 16px;\n            padding: 24px;\n            color: white;\n            border: 1px solid #333;\n            transition: transform 0.3s, box-shadow 0.3s;\n        }\n        \n        .card:hover {\n            transform: translateY(-8px);\n            box-shadow: 0 12px 40px rgba(139, 92, 246, 0.3);\n            border-color: #8b5cf6;\n        }\n        \n        .card h3 { color: #8b5cf6; margin-bottom: 10px; }\n        .card p { color: #999; font-size: 14px; line-height: 1.6; }\n    </style>\n</head>\n<body>\n    <h1>My Projects</h1>\n    <div class=\"card-grid\">\n        <div class=\"card\">\n            <h3>🎮 Game Project</h3>\n            <p>A fun browser game built with JavaScript.</p>\n        </div>\n        <div class=\"card\">\n            <h3>🎨 Art Portfolio</h3>\n            <p>A gallery of my digital artwork.</p>\n        </div>\n        <div class=\"card\">\n            <h3>📱 App Design</h3>\n            <p>UI mockups for a mobile app concept.</p>\n        </div>\n    </div>\n</body>\n</html>"
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
                explanation: "'margin: 0 auto' sets top/bottom margins to 0 and left/right margins to 'auto' — which automatically distributes equal space on both sides, centering a block element horizontally! This only works when the element has a set width."
              },
              {
                type: "checkpoint",
                content: "Build a page with a centered navigation bar (logo left, 3 links right) and a grid of 4 cards below it, using only Flexbox for layout. Add hover effects on the cards!"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 3: JAVASCRIPT BASICS
    // ═══════════════════════════════════════════════════════════════
    {
      id: 3,
      title: "JavaScript — Making It Interactive!",
      lessons: [
        {
          id: "3-1",
          title: "Introduction to JavaScript",
          completed: false,
          content: {
            description: "Add interactivity to your pages! Learn variables, data types, and your first JavaScript code.",
            sections: [
              {
                type: "text",
                content: "**JavaScript** brings your pages to life! It's the programming language of the web — every interactive feature you've ever used (clicking buttons, submitting forms, playing videos, infinite scrolling) is powered by JavaScript. It's also the most widely-used programming language in the world! ⚡"
              },
              {
                type: "heading",
                level: 2,
                content: "Adding JavaScript to Your Page"
              },
              {
                type: "code",
                language: "html",
                filename: "add_js.html",
                code: "<!-- METHOD 1: External file (BEST WAY!) -->\n<!-- Put this at the END of <body>, before </body> -->\n<body>\n    <h1>My Page</h1>\n    <p>Content here...</p>\n    \n    <!-- JavaScript goes at the BOTTOM! -->\n    <script src=\"script.js\"></script>\n</body>\n\n<!-- METHOD 2: Internal script (for quick tests) -->\n<script>\n    console.log('Hello from JavaScript!');\n</script>\n\n<!-- WHY at the bottom?\n     HTML loads top-to-bottom. If JS is at the top,\n     it runs before the HTML elements exist!\n     Bottom = all HTML is loaded first ✅ -->"
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
                code: "// ═══════════════════════════════════════\n// CONSOLE.LOG — Your debugging best friend!\n// ═══════════════════════════════════════\n// Press F12 in your browser → Console tab to see output!\nconsole.log('Hello, JavaScript!');\nconsole.log('I can print numbers:', 42);\nconsole.log('And do math:', 10 + 20);\n\n// ALERT — Show a popup (use sparingly!)\nalert('Welcome to my website!');\n\n// ═══════════════════════════════════════\n// VARIABLES — Storing data\n// ═══════════════════════════════════════\n// let = can change later\nlet name = 'Alex';\nlet age = 14;\nlet score = 0;\n\n// const = CANNOT change (use this by default!)\nconst PI = 3.14159;\nconst MAX_LIVES = 3;\nconst MY_NAME = 'Alex';\n\n// ═══════════════════════════════════════\n// DATA TYPES\n// ═══════════════════════════════════════\nlet text = 'Hello';          // String (text in quotes)\nlet number = 42;             // Number (integer)\nlet decimal = 3.14;          // Number (decimal)\nlet isAwesome = true;        // Boolean (true/false)\nlet nothing = null;          // Null (intentionally empty)\nlet unknown;                 // Undefined (not set yet)\nlet fruits = ['apple', 'banana']; // Array (list)\n\n// Check what type something is:\nconsole.log(typeof text);    // 'string'\nconsole.log(typeof number);  // 'number'\nconsole.log(typeof isAwesome); // 'boolean'\n\n// ═══════════════════════════════════════\n// TEMPLATE LITERALS (modern string magic!)\n// ═══════════════════════════════════════\nlet firstName = 'Alex';\nlet greeting = `Hello, ${firstName}! You are ${age} years old.`;\nconsole.log(greeting);\n// Output: Hello, Alex! You are 14 years old.\n\nlet result = `2 + 3 = ${2 + 3}`;\nconsole.log(result); // '2 + 3 = 5'"
              },
              {
                type: "heading",
                level: 2,
                content: "Operators and Conditions"
              },
              {
                type: "code",
                language: "javascript",
                filename: "operators.js",
                code: "// ═══════════════════════════════════════\n// MATH OPERATORS\n// ═══════════════════════════════════════\nlet a = 10 + 5;   // 15 (addition)\nlet b = 10 - 5;   // 5  (subtraction)\nlet c = 10 * 5;   // 50 (multiplication)\nlet d = 10 / 3;   // 3.33... (division)\nlet e = 10 % 3;   // 1  (remainder/modulo)\nlet f = 2 ** 3;   // 8  (exponent: 2³)\n\n// Short forms\nlet score = 0;\nscore++;          // score = score + 1 → 1\nscore += 10;      // score = score + 10 → 11\nscore -= 5;       // score = score - 5 → 6\n\n// ═══════════════════════════════════════\n// COMPARISON OPERATORS\n// ═══════════════════════════════════════\nconsole.log(5 === 5);   // true  (strict equal — USE THIS!)\nconsole.log(5 !== 3);   // true  (not equal)\nconsole.log(10 > 5);    // true  (greater than)\nconsole.log(3 < 7);     // true  (less than)\nconsole.log(5 >= 5);    // true  (greater or equal)\nconsole.log(3 <= 2);    // false (less or equal)\n\n// ═══════════════════════════════════════\n// IF/ELSE — Making decisions!\n// ═══════════════════════════════════════\nlet age = 15;\n\nif (age >= 18) {\n    console.log('You are an adult');\n} else if (age >= 13) {\n    console.log('You are a teenager');\n} else {\n    console.log('You are a child');\n}\n\n// LOGICAL OPERATORS\nlet isLoggedIn = true;\nlet isAdmin = false;\n\nif (isLoggedIn && isAdmin) {       // AND: both must be true\n    console.log('Admin access');\n}\nif (isLoggedIn || isAdmin) {       // OR: at least one true\n    console.log('Some access');\n}\nif (!isAdmin) {                     // NOT: flips the value\n    console.log('Not an admin');\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "Arrays and Loops"
              },
              {
                type: "code",
                language: "javascript",
                filename: "arrays_loops.js",
                code: "// ═══════════════════════════════════════\n// ARRAYS — Lists of items\n// ═══════════════════════════════════════\nconst fruits = ['apple', 'banana', 'cherry', 'date'];\n\nconsole.log(fruits[0]);       // 'apple' (first item, index 0)\nconsole.log(fruits.length);   // 4\nfruits.push('elderberry');     // add to end\nfruits.pop();                 // remove from end\nfruits.includes('banana');    // true\n\n// ═══════════════════════════════════════\n// LOOPS — Repeat actions\n// ═══════════════════════════════════════\n\n// for loop (classic)\nfor (let i = 0; i < 5; i++) {\n    console.log(`Count: ${i}`);\n}\n\n// for...of loop (modern, cleaner)\nfor (const fruit of fruits) {\n    console.log(`I like ${fruit}`);\n}\n\n// forEach (array method)\nfruits.forEach((fruit, index) => {\n    console.log(`${index + 1}. ${fruit}`);\n});\n\n// ═══════════════════════════════════════\n// FUNCTIONS — Reusable code blocks\n// ═══════════════════════════════════════\n\n// Function declaration\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\nconsole.log(greet('Alex')); // 'Hello, Alex!'\n\n// Arrow function (modern, shorter)\nconst add = (a, b) => a + b;\nconsole.log(add(5, 3)); // 8\n\nconst isEven = (num) => num % 2 === 0;\nconsole.log(isEven(4)); // true"
              },
              {
                type: "tip",
                content: "**Use `const` by default, `let` when you need to change the value.** Never use `var` (the old way) — it has confusing scoping rules. Also, ALWAYS use `===` instead of `==` for comparisons. `==` does weird type conversions: `'5' == 5` is true, but `'5' === 5` is false (different types)."
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
                explanation: "'let' creates a variable you can change later (reassign). 'const' creates a constant that cannot be reassigned — if you try, you get an error. Use const by default for safety!"
              },
              {
                type: "checkpoint",
                content: "Create a script.js file that: declares 3 variables (your name, age, hobby), prints a greeting using template literals, uses an if/else to check if you're a teen/adult, loops through an array of 5 foods and prints each one, and defines a function that calculates your age in months."
              }
            ]
          }
        },
        {
          id: "3-2",
          title: "DOM Manipulation & Events",
          completed: false,
          content: {
            description: "Control HTML with JavaScript! Change text, styles, and make things happen when users click!",
            sections: [
              {
                type: "text",
                content: "The **DOM** (Document Object Model) is how JavaScript sees your HTML page. It turns your HTML into a tree of objects that JavaScript can find, read, change, and create. This is where the magic happens — you can change anything on the page without reloading! 🪄"
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
                code: "// Get ONE element by ID (fastest, most specific)\nconst title = document.getElementById('main-title');\n\n// Get ONE element by CSS selector (very flexible!)\nconst card = document.querySelector('.card');\nconst firstLink = document.querySelector('a');\nconst special = document.querySelector('#hero .subtitle');\n\n// Get ALL matching elements (returns a list!)\nconst allCards = document.querySelectorAll('.card');\nconst allParagraphs = document.querySelectorAll('p');\n\n// Loop through all matched elements\nallCards.forEach((card) => {\n    console.log(card.textContent);\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Changing Content and Styles"
              },
              {
                type: "code",
                language: "javascript",
                filename: "changing.js",
                code: "const title = document.getElementById('title');\n\n// Change text content\ntitle.textContent = 'New Title!';\n\n// Change HTML (can include tags)\ntitle.innerHTML = 'Hello <strong>World</strong>!';\n\n// Change styles directly\nconst box = document.getElementById('box');\nbox.style.backgroundColor = '#8b5cf6';\nbox.style.color = 'white';\nbox.style.padding = '20px';\nbox.style.borderRadius = '12px';\n// Note: CSS kebab-case → JS camelCase\n// background-color → backgroundColor\n\n// BETTER: Add/remove CSS classes!\nbox.classList.add('active');      // add a class\nbox.classList.remove('hidden');   // remove a class\nbox.classList.toggle('dark-mode'); // add if missing, remove if present\nbox.classList.contains('active'); // returns true/false\n\n// Create NEW elements\nconst newCard = document.createElement('div');\nnewCard.classList.add('card');\nnewCard.textContent = 'I am a new card!';\ndocument.getElementById('container').appendChild(newCard);\n\n// Remove an element\nconst oldElement = document.getElementById('old');\noldElement.remove();"
              },
              {
                type: "heading",
                level: 2,
                content: "Events — Responding to Users!"
              },
              {
                type: "code",
                language: "javascript",
                filename: "events.js",
                code: "// ═══════════════════════════════════════\n// addEventListener — The professional way!\n// ═══════════════════════════════════════\nconst button = document.getElementById('myButton');\n\nbutton.addEventListener('click', () => {\n    console.log('Button was clicked!');\n    alert('You clicked the button!');\n});\n\n// ═══════════════════════════════════════\n// COMMON EVENTS\n// ═══════════════════════════════════════\n\n// Click\nelement.addEventListener('click', () => { /* ... */ });\n\n// Mouse hover\nelement.addEventListener('mouseenter', () => {\n    element.style.backgroundColor = 'blue';\n});\nelement.addEventListener('mouseleave', () => {\n    element.style.backgroundColor = 'white';\n});\n\n// Keyboard\ndocument.addEventListener('keydown', (event) => {\n    console.log('Key pressed:', event.key);\n    if (event.key === 'Enter') {\n        console.log('Enter was pressed!');\n    }\n});\n\n// Form submit\nform.addEventListener('submit', (event) => {\n    event.preventDefault(); // STOP page refresh!\n    console.log('Form submitted!');\n});\n\n// Input change (real-time)\ninput.addEventListener('input', (event) => {\n    console.log('Current value:', event.target.value);\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Practical Example: Click Counter"
              },
              {
                type: "code",
                language: "javascript",
                filename: "counter.js",
                code: "// HTML:\n// <h2 id=\"count\">0</h2>\n// <button id=\"increment\">Click Me! +1</button>\n// <button id=\"decrement\">-1</button>\n// <button id=\"reset\">Reset</button>\n\nlet count = 0;\nconst display = document.getElementById('count');\n\ndocument.getElementById('increment').addEventListener('click', () => {\n    count++;\n    display.textContent = count;\n    display.style.color = count > 0 ? '#10b981' : count < 0 ? '#ef4444' : 'white';\n});\n\ndocument.getElementById('decrement').addEventListener('click', () => {\n    count--;\n    display.textContent = count;\n    display.style.color = count > 0 ? '#10b981' : count < 0 ? '#ef4444' : 'white';\n});\n\ndocument.getElementById('reset').addEventListener('click', () => {\n    count = 0;\n    display.textContent = count;\n    display.style.color = 'white';\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Dark Mode Toggle"
              },
              {
                type: "code",
                language: "javascript",
                filename: "darkmode.js",
                code: "const toggleBtn = document.getElementById('theme-toggle');\nconst body = document.body;\n\ntoggleBtn.addEventListener('click', () => {\n    body.classList.toggle('dark-mode');\n    \n    if (body.classList.contains('dark-mode')) {\n        toggleBtn.textContent = '☀️ Light Mode';\n    } else {\n        toggleBtn.textContent = '🌙 Dark Mode';\n    }\n});\n\n// In your CSS:\n// .dark-mode { background: #0f0f1a; color: #e0e0e0; }\n// .dark-mode .card { background: #1e1e30; }"
              },
              {
                type: "tip",
                content: "**Prefer classList over style!** Instead of `element.style.backgroundColor = 'blue'`, define a CSS class `.active { background: blue; }` and toggle it with `element.classList.toggle('active')`. This keeps your JavaScript clean and your styles in CSS where they belong."
              },
              {
                type: "warning",
                content: "**Always use event.preventDefault() on form submit!** Without it, the browser refreshes the page when you submit a form, which erases everything JavaScript was doing. This is the #1 beginner mistake with forms!"
              },
              {
                type: "checkpoint",
                content: "Build an interactive page with: a heading that changes text when you click a button, a click counter that goes up and down, and a dark mode toggle button. Use addEventListener for all interactions!"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 4: FORMS & INPUT
    // ═══════════════════════════════════════════════════════════════
    {
      id: 4,
      title: "Forms & User Input",
      lessons: [
        {
          id: "4-1",
          title: "HTML Forms",
          completed: false,
          content: {
            description: "Create forms that collect user input — text fields, checkboxes, dropdowns, and styled buttons!",
            sections: [
              {
                type: "text",
                content: "**Forms** are how users interact with websites — signing up, logging in, searching, writing comments, taking quizzes. Every website that collects information uses forms. In this lesson, you'll learn to build beautiful, functional forms! 📝"
              },
              {
                type: "heading",
                level: 2,
                content: "Form Structure & Input Types"
              },
              {
                type: "code",
                language: "html",
                filename: "form.html",
                code: "<form id=\"signup-form\">\n    <label for=\"username\">Username:</label>\n    <input type=\"text\" id=\"username\" name=\"username\"\n           placeholder=\"Enter your name\" required>\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\"\n           placeholder=\"you@example.com\" required>\n    \n    <label for=\"password\">Password:</label>\n    <input type=\"password\" id=\"password\" name=\"password\"\n           placeholder=\"Min 6 characters\" required minlength=\"6\">\n    \n    <label for=\"age\">Age:</label>\n    <input type=\"number\" id=\"age\" name=\"age\" min=\"1\" max=\"120\">\n    \n    <label for=\"birthday\">Birthday:</label>\n    <input type=\"date\" id=\"birthday\" name=\"birthday\">\n    \n    <label for=\"color\">Favorite Color:</label>\n    <input type=\"color\" id=\"color\" name=\"color\" value=\"#8b5cf6\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n        <option value=\"\">Select a country...</option>\n        <option value=\"us\">United States</option>\n        <option value=\"uk\">United Kingdom</option>\n        <option value=\"ca\">Canada</option>\n        <option value=\"in\">India</option>\n    </select>\n    \n    <label for=\"bio\">About You:</label>\n    <textarea id=\"bio\" name=\"bio\" rows=\"4\"\n              placeholder=\"Tell us about yourself...\"></textarea>\n    \n    <div class=\"checkbox-group\">\n        <input type=\"checkbox\" id=\"agree\" name=\"agree\" required>\n        <label for=\"agree\">I agree to the terms</label>\n    </div>\n    \n    <button type=\"submit\">Sign Up!</button>\n</form>"
              },
              {
                type: "heading",
                level: 2,
                content: "Styling Forms"
              },
              {
                type: "code",
                language: "css",
                filename: "form_styles.css",
                code: "form {\n    max-width: 450px;\n    margin: 40px auto;\n    background: #1e1e30;\n    padding: 30px;\n    border-radius: 16px;\n    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);\n}\n\nlabel {\n    display: block;\n    margin-top: 18px;\n    margin-bottom: 6px;\n    color: #b0b0b0;\n    font-weight: 500;\n    font-size: 14px;\n}\n\ninput, select, textarea {\n    width: 100%;\n    padding: 12px 16px;\n    border: 2px solid #333;\n    border-radius: 10px;\n    background: #0f0f1a;\n    color: white;\n    font-size: 16px;\n    transition: border-color 0.3s;\n}\n\ninput:focus, select:focus, textarea:focus {\n    border-color: #8b5cf6;  /* purple glow on focus! */\n    outline: none;\n    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);\n}\n\nbutton[type=\"submit\"] {\n    width: 100%;\n    margin-top: 24px;\n    padding: 14px;\n    background: linear-gradient(135deg, #8b5cf6, #ec4899);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    font-size: 18px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\nbutton[type=\"submit\"]:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 5px 20px rgba(139, 92, 246, 0.4);\n}"
              },
              {
                type: "tip",
                content: "**Always use `<label>` with inputs!** The `for` attribute should match the input's `id`. This helps accessibility (screen readers), and lets users click the label to focus the input — a small detail that makes a big UX difference!"
              },
              {
                type: "checkpoint",
                content: "Create a styled contact form with: name, email, subject dropdown (3 options), message textarea, and a submit button. Use the dark theme styling above. It should look professional!"
              }
            ]
          }
        },
        {
          id: "4-2",
          title: "Form Handling with JavaScript",
          completed: false,
          content: {
            description: "Process form data with JavaScript — validate input, show errors, and respond to user submissions!",
            sections: [
              {
                type: "text",
                content: "Now that you can build forms, let's make them actually DO something! JavaScript lets you read what users type, validate their input (check if it's correct), show helpful error messages, and process the data — all without refreshing the page!"
              },
              {
                type: "heading",
                level: 2,
                content: "Getting Form Values"
              },
              {
                type: "code",
                language: "javascript",
                filename: "form_handling.js",
                code: "const form = document.getElementById('signup-form');\n\nform.addEventListener('submit', (event) => {\n    event.preventDefault();  // CRITICAL: Stop page refresh!\n    \n    // Get all input values\n    const username = document.getElementById('username').value;\n    const email = document.getElementById('email').value;\n    const password = document.getElementById('password').value;\n    \n    console.log('Username:', username);\n    console.log('Email:', email);\n    \n    // You now have the data — validate it!\n});"
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
                code: "const form = document.getElementById('signup-form');\nconst errorDiv = document.getElementById('error-message');\n\nform.addEventListener('submit', (event) => {\n    event.preventDefault();\n    errorDiv.textContent = '';  // clear previous errors\n    errorDiv.style.color = '#ef4444';\n    \n    const username = document.getElementById('username').value.trim();\n    const email = document.getElementById('email').value.trim();\n    const password = document.getElementById('password').value;\n    \n    // Validate username\n    if (username.length < 3) {\n        errorDiv.textContent = '❌ Username must be at least 3 characters';\n        return; // stop here!\n    }\n    \n    // Validate email (simple check)\n    if (!email.includes('@') || !email.includes('.')) {\n        errorDiv.textContent = '❌ Please enter a valid email';\n        return;\n    }\n    \n    // Validate password\n    if (password.length < 6) {\n        errorDiv.textContent = '❌ Password must be at least 6 characters';\n        return;\n    }\n    \n    // All good! Show success\n    errorDiv.style.color = '#10b981';\n    errorDiv.textContent = '✅ Account created successfully!';\n    \n    // In a real app, you'd send data to a server here\n    console.log('Form submitted:', { username, email });\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Real-time Password Strength"
              },
              {
                type: "code",
                language: "javascript",
                filename: "password_strength.js",
                code: "const passwordInput = document.getElementById('password');\nconst strengthBar = document.getElementById('strength-bar');\nconst strengthText = document.getElementById('strength-text');\n\npasswordInput.addEventListener('input', () => {\n    const password = passwordInput.value;\n    let strength = 0;\n    \n    if (password.length >= 6) strength++;\n    if (password.length >= 10) strength++;\n    if (/[A-Z]/.test(password)) strength++;  // has uppercase\n    if (/[0-9]/.test(password)) strength++;  // has number\n    if (/[^A-Za-z0-9]/.test(password)) strength++; // has symbol\n    \n    const levels = [\n        { text: 'Very Weak', color: '#ef4444', width: '20%' },\n        { text: 'Weak', color: '#f97316', width: '40%' },\n        { text: 'Fair', color: '#eab308', width: '60%' },\n        { text: 'Strong', color: '#22c55e', width: '80%' },\n        { text: 'Very Strong', color: '#10b981', width: '100%' }\n    ];\n    \n    const level = levels[Math.min(strength, 4)];\n    strengthBar.style.width = level.width;\n    strengthBar.style.backgroundColor = level.color;\n    strengthText.textContent = level.text;\n    strengthText.style.color = level.color;\n});"
              },
              {
                type: "tip",
                content: "**Use `.trim()` on input values!** `' hello '.trim()` removes whitespace from both ends, giving you `'hello'`. Without trimming, a user could type just spaces and pass your 'not empty' validation. Always trim text inputs!"
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
                explanation: "The .value property gives you whatever the user has typed or selected in that input field. It's always a string, even for number inputs (use parseInt() to convert)."
              },
              {
                type: "checkpoint",
                content: "Build a signup form with real-time validation: username (min 3 chars), email (must contain @ and .), password (min 6 chars with strength indicator). Show error messages in red, success in green!"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 5: BUILD PROJECTS
    // ═══════════════════════════════════════════════════════════════
    {
      id: 5,
      title: "Build Real Projects!",
      lessons: [
        {
          id: "5-1",
          title: "Project: Profile Card",
          completed: false,
          content: {
            description: "Build a beautiful, professional profile card — a portfolio piece you'll be proud of!",
            sections: [
              {
                type: "text",
                content: "Let's build a sleek profile card that looks like it belongs on a professional website! This project combines everything you've learned — HTML structure, CSS styling with Flexbox, gradients, hover effects, and box shadows. This is something you can actually use as part of a portfolio. 🎨"
              },
              {
                type: "heading",
                level: 2,
                content: "The Complete Profile Card"
              },
              {
                type: "code",
                language: "html",
                filename: "profile.html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Profile Card</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <img src=\"https://i.pravatar.cc/200\" alt=\"Profile\" class=\"avatar\">\n        </div>\n        <div class=\"card-body\">\n            <h1>Alex Johnson</h1>\n            <p class=\"title\">Web Developer ✨</p>\n            <p class=\"bio\">I love creating beautiful websites and\n            learning new technologies! Currently building cool\n            stuff with HTML, CSS & JavaScript.</p>\n            <div class=\"stats\">\n                <div class=\"stat\">\n                    <span class=\"number\">52</span>\n                    <span class=\"label\">Projects</span>\n                </div>\n                <div class=\"stat\">\n                    <span class=\"number\">1.2k</span>\n                    <span class=\"label\">Followers</span>\n                </div>\n                <div class=\"stat\">\n                    <span class=\"number\">890</span>\n                    <span class=\"label\">Following</span>\n                </div>\n            </div>\n            <button class=\"follow-btn\" id=\"follow-btn\">Follow</button>\n        </div>\n    </div>\n    <script>\n        const btn = document.getElementById('follow-btn');\n        let following = false;\n        btn.addEventListener('click', () => {\n            following = !following;\n            btn.textContent = following ? '✓ Following' : 'Follow';\n            btn.style.background = following\n                ? '#333' : 'linear-gradient(135deg, #8b5cf6, #ec4899)';\n        });\n    </script>\n</body>\n</html>"
              },
              {
                type: "code",
                language: "css",
                filename: "style.css",
                code: "* { margin: 0; padding: 0; box-sizing: border-box; }\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(135deg, #0f0f1a, #1a1a2e);\n    font-family: 'Segoe UI', sans-serif;\n}\n\n.card {\n    width: 360px;\n    background: #1e1e30;\n    border-radius: 24px;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);\n    border: 1px solid #333;\n}\n\n.card-header {\n    height: 120px;\n    background: linear-gradient(135deg, #8b5cf6, #ec4899);\n    position: relative;\n}\n\n.avatar {\n    width: 110px;\n    height: 110px;\n    border-radius: 50%;\n    border: 5px solid #1e1e30;\n    position: absolute;\n    bottom: -55px;\n    left: 50%;\n    transform: translateX(-50%);\n    object-fit: cover;\n}\n\n.card-body {\n    padding: 70px 30px 30px;\n    text-align: center;\n}\n\n.card-body h1 {\n    font-size: 26px;\n    color: white;\n}\n\n.title {\n    color: #8b5cf6;\n    font-weight: 500;\n    margin: 5px 0 15px;\n    font-size: 15px;\n}\n\n.bio {\n    color: #888;\n    font-size: 14px;\n    line-height: 1.7;\n}\n\n.stats {\n    display: flex;\n    justify-content: space-around;\n    margin: 25px 0;\n    padding: 20px 0;\n    border-top: 1px solid #333;\n    border-bottom: 1px solid #333;\n}\n\n.number {\n    display: block;\n    font-size: 22px;\n    font-weight: bold;\n    color: white;\n}\n\n.label {\n    font-size: 12px;\n    color: #666;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n.follow-btn {\n    width: 100%;\n    padding: 14px;\n    background: linear-gradient(135deg, #8b5cf6, #ec4899);\n    color: white;\n    border: none;\n    border-radius: 12px;\n    font-size: 16px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: transform 0.2s, box-shadow 0.2s;\n}\n\n.follow-btn:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);\n}"
              },
              {
                type: "tip",
                content: "**Use `object-fit: cover` on images** to make them fill their container without stretching! Combined with `border-radius: 50%`, you get perfectly circular profile photos every time."
              },
              {
                type: "checkpoint",
                content: "Build this profile card, then customize it with YOUR name, bio, and stats. Change the gradient colors to your favorites. Make the Follow button actually toggle between 'Follow' and 'Following' with JavaScript!"
              }
            ]
          }
        },
        {
          id: "5-2",
          title: "Project: Interactive Quiz Game",
          completed: false,
          content: {
            description: "Build a working quiz game with questions, scoring, and results — using HTML, CSS, and JavaScript together!",
            sections: [
              {
                type: "text",
                content: "Let's build an interactive quiz that tracks score, shows right/wrong answers with colors, and displays results at the end! This project combines everything: DOM manipulation, events, arrays, loops, and conditions. It's a real application! 🧠"
              },
              {
                type: "heading",
                level: 2,
                content: "The Quiz JavaScript"
              },
              {
                type: "code",
                language: "javascript",
                filename: "quiz.js",
                code: "const questions = [\n    {\n        question: 'What does HTML stand for?',\n        options: ['Hyper Text Markup Language', 'Hot Mail', 'How To Make Lasagna'],\n        correct: 0\n    },\n    {\n        question: 'What does CSS stand for?',\n        options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Styling System'],\n        correct: 1\n    },\n    {\n        question: 'Which symbol starts a JavaScript comment?',\n        options: ['<!-- -->', '/* */', '//'],\n        correct: 2\n    },\n    {\n        question: 'What does the <a> tag create?',\n        options: ['An image', 'A link', 'A paragraph'],\n        correct: 1\n    },\n    {\n        question: 'Which CSS property changes text color?',\n        options: ['text-color', 'font-color', 'color'],\n        correct: 2\n    }\n];\n\nlet currentQuestion = 0;\nlet score = 0;\nlet answered = false;\n\nconst questionEl = document.getElementById('question');\nconst optionsEl = document.getElementById('options');\nconst nextBtn = document.getElementById('next-btn');\nconst scoreEl = document.getElementById('score');\nconst resultEl = document.getElementById('result');\nconst progressEl = document.getElementById('progress');\n\nfunction showQuestion() {\n    answered = false;\n    const q = questions[currentQuestion];\n    questionEl.textContent = q.question;\n    progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;\n    \n    optionsEl.innerHTML = '';\n    q.options.forEach((option, index) => {\n        const btn = document.createElement('button');\n        btn.classList.add('option-btn');\n        btn.textContent = option;\n        btn.addEventListener('click', () => selectAnswer(index, btn));\n        optionsEl.appendChild(btn);\n    });\n}\n\nfunction selectAnswer(selected, clickedBtn) {\n    if (answered) return; // prevent double-clicking!\n    answered = true;\n    \n    const correct = questions[currentQuestion].correct;\n    const allBtns = document.querySelectorAll('.option-btn');\n    \n    allBtns.forEach((btn, index) => {\n        btn.style.pointerEvents = 'none'; // disable all\n        if (index === correct) {\n            btn.classList.add('correct'); // green\n        } else if (index === selected && selected !== correct) {\n            btn.classList.add('wrong'); // red\n        }\n    });\n    \n    if (selected === correct) score++;\n}\n\nnextBtn.addEventListener('click', () => {\n    currentQuestion++;\n    if (currentQuestion < questions.length) {\n        showQuestion();\n    } else {\n        showResult();\n    }\n});\n\nfunction showResult() {\n    document.getElementById('quiz-area').style.display = 'none';\n    resultEl.style.display = 'block';\n    \n    const percentage = Math.round((score / questions.length) * 100);\n    let emoji = percentage >= 80 ? '🎉' : percentage >= 50 ? '👍' : '📚';\n    \n    scoreEl.innerHTML = `\n        <h2>${emoji} Quiz Complete!</h2>\n        <p class=\"final-score\">You scored ${score}/${questions.length} (${percentage}%)</p>\n        <p>${percentage >= 80 ? 'Amazing!' : percentage >= 50 ? 'Good job!' : 'Keep practicing!'}</p>\n        <button onclick=\"location.reload()\">Try Again</button>\n    `;\n}\n\n// Start the quiz!\nshowQuestion();"
              },
              {
                type: "code",
                language: "css",
                filename: "quiz_styles.css",
                code: ".option-btn {\n    display: block;\n    width: 100%;\n    padding: 15px 20px;\n    margin-bottom: 10px;\n    background: #1e1e30;\n    color: white;\n    border: 2px solid #333;\n    border-radius: 12px;\n    font-size: 16px;\n    cursor: pointer;\n    text-align: left;\n    transition: all 0.2s;\n}\n\n.option-btn:hover {\n    border-color: #8b5cf6;\n    background: #252540;\n}\n\n.option-btn.correct {\n    background: #065f46;\n    border-color: #10b981;\n    color: #6ee7b7;\n}\n\n.option-btn.wrong {\n    background: #7f1d1d;\n    border-color: #ef4444;\n    color: #fca5a5;\n}"
              },
              {
                type: "tip",
                content: "**Want to add more questions?** Just add more objects to the `questions` array! You can also randomize the order with `questions.sort(() => Math.random() - 0.5)` at the start."
              },
              {
                type: "checkpoint",
                content: "Build the complete quiz: HTML structure, CSS styling, and JavaScript logic. Add 5+ questions about topics YOU know. Make it look professional with your own color scheme!"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 6: RESPONSIVE DESIGN
    // ═══════════════════════════════════════════════════════════════
    {
      id: 6,
      title: "Responsive Design & Animations",
      lessons: [
        {
          id: "6-1",
          title: "Making Sites Work on All Devices",
          completed: false,
          content: {
            description: "Make your websites look great on phones, tablets, and desktops — responsive design essentials!",
            sections: [
              {
                type: "text",
                content: "Over 60% of web traffic comes from mobile phones! If your website only looks good on a desktop, you're losing most of your visitors. **Responsive design** makes your site adapt to ANY screen size — phone, tablet, laptop, or giant monitor. 📱💻🖥️"
              },
              {
                type: "heading",
                level: 2,
                content: "The Viewport Meta Tag"
              },
              {
                type: "code",
                language: "html",
                filename: "viewport.html",
                code: "<!-- ALWAYS add this in your <head>! -->\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n<!-- Without this, mobile browsers zoom out to show\n     the desktop version, making everything tiny! -->"
              },
              {
                type: "heading",
                level: 2,
                content: "Media Queries — Different Styles for Different Screens"
              },
              {
                type: "code",
                language: "css",
                filename: "responsive.css",
                code: "/* Default styles (mobile first!) */\n.card-grid {\n    display: flex;\n    flex-direction: column;  /* stack vertically on mobile */\n    gap: 20px;\n    padding: 20px;\n}\n\n.card {\n    width: 100%;  /* full width on mobile */\n}\n\n/* Tablet (768px and up) */\n@media (min-width: 768px) {\n    .card-grid {\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    .card {\n        width: 45%;  /* 2 cards per row */\n    }\n}\n\n/* Desktop (1024px and up) */\n@media (min-width: 1024px) {\n    .card {\n        width: 30%;  /* 3 cards per row */\n    }\n}\n\n/* Responsive font sizes */\nh1 {\n    font-size: 28px;  /* mobile */\n}\n@media (min-width: 768px) {\n    h1 { font-size: 42px; }  /* tablet+ */\n}\n\n/* Hide/show elements on different screens */\n.mobile-menu { display: block; }\n.desktop-menu { display: none; }\n\n@media (min-width: 768px) {\n    .mobile-menu { display: none; }\n    .desktop-menu { display: flex; }\n}"
              },
              {
                type: "heading",
                level: 2,
                content: "CSS Transitions & Animations"
              },
              {
                type: "code",
                language: "css",
                filename: "animations.css",
                code: "/* TRANSITIONS — Smooth changes on hover/click */\n.card {\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.card:hover {\n    transform: translateY(-8px) scale(1.02);\n    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);\n}\n\n/* BUTTON with satisfying click */\n.btn {\n    transition: all 0.2s ease;\n}\n.btn:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);\n}\n.btn:active {\n    transform: translateY(0);\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n\n/* KEYFRAME ANIMATIONS */\n@keyframes fadeIn {\n    from { opacity: 0; transform: translateY(20px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n\n.fade-in {\n    animation: fadeIn 0.6s ease forwards;\n}\n\n@keyframes pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n}\n\n.pulse {\n    animation: pulse 2s ease-in-out infinite;\n}\n\n@keyframes gradient {\n    0% { background-position: 0% 50%; }\n    50% { background-position: 100% 50%; }\n    100% { background-position: 0% 50%; }\n}\n\n.animated-bg {\n    background: linear-gradient(270deg, #8b5cf6, #ec4899, #06b6d4);\n    background-size: 600% 600%;\n    animation: gradient 6s ease infinite;\n}"
              },
              {
                type: "tip",
                content: "**Mobile-first design** means writing your default CSS for mobile, then using `@media (min-width: ...)` to ADD styles for larger screens. This is the professional approach because it's easier to add complexity for bigger screens than to remove it for smaller ones."
              },
              {
                type: "checkpoint",
                content: "Make your profile card responsive: stacked on mobile, side-by-side on tablet. Add smooth hover animations to cards and buttons. Test by resizing your browser window!"
              }
            ]
          }
        },
        {
          id: "6-2",
          title: "CSS Grid & Advanced Layouts",
          completed: false,
          content: {
            description: "Master CSS Grid for complex layouts — photo galleries, dashboards, and magazine-style pages!",
            sections: [
              {
                type: "text",
                content: "**CSS Grid** is Flexbox's powerful sibling. While Flexbox is great for one-dimensional layouts (a row OR a column), Grid handles **two-dimensional** layouts (rows AND columns simultaneously). Together, Flexbox + Grid can create any layout imaginable! 🎯"
              },
              {
                type: "heading",
                level: 2,
                content: "CSS Grid Basics"
              },
              {
                type: "code",
                language: "css",
                filename: "grid.css",
                code: "/* Create a grid container */\n.gallery {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */\n    gap: 20px;\n    padding: 20px;\n}\n\n/* Responsive grid */\n.gallery {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 20px;\n    /* Automatically fills as many 250px+ columns as will fit! */\n    /* Responsive without media queries! */\n}\n\n/* Dashboard layout */\n.dashboard {\n    display: grid;\n    grid-template-columns: 250px 1fr;    /* sidebar + main */\n    grid-template-rows: 60px 1fr 50px;   /* header, content, footer */\n    min-height: 100vh;\n    gap: 0;\n}\n\n.header  { grid-column: 1 / -1; }  /* span full width */\n.sidebar { grid-row: 2 / 3; }\n.main    { grid-row: 2 / 3; }\n.footer  { grid-column: 1 / -1; }"
              },
              {
                type: "tip",
                content: "**Use `repeat(auto-fill, minmax(250px, 1fr))` for responsive grids!** This magical one-liner creates as many columns as will fit (min 250px each), and they grow to fill remaining space. No media queries needed — it's responsive automatically!"
              },
              {
                type: "heading",
                level: 2,
                content: "Flexbox vs Grid"
              },
              {
                type: "code",
                language: "text",
                filename: "comparison.txt",
                code: "When to use each:\n\nFLEXBOX (1D)                    │ GRID (2D)\n────────────────────────────────┼────────────────────────────────\n• Navigation bars               │ • Photo galleries\n• Card rows                     │ • Dashboard layouts\n• Centering things              │ • Magazine-style pages\n• Aligning items in a row/col   │ • Complex multi-area layouts\n• Simple component layouts      │ • When you need rows AND columns\n\nPRO TIP: Use BOTH together!\n• Grid for the overall page layout\n• Flexbox for components within grid cells"
              },
              {
                type: "checkpoint",
                content: "Create a photo gallery using CSS Grid that automatically adjusts from 1 column on mobile to 2 on tablet to 3+ on desktop, using only `repeat(auto-fill, minmax(250px, 1fr))`!"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 7: PUBLISHING YOUR SITE
    // ═══════════════════════════════════════════════════════════════
    {
      id: 7,
      title: "Publishing Your Site!",
      lessons: [
        {
          id: "7-1",
          title: "Going Live on the Internet",
          completed: false,
          content: {
            description: "Put your website on the internet for FREE! Deploy with GitHub Pages or Netlify.",
            sections: [
              {
                type: "text",
                content: "Your website deserves to be seen by the world! Let's put it online for FREE. In just a few minutes, you'll have a real URL that anyone on the planet can visit. This is one of the most exciting moments in web development — when your creation goes live! 🌐"
              },
              {
                type: "heading",
                level: 2,
                content: "Free Hosting Options"
              },
              {
                type: "list",
                items: [
                  "**GitHub Pages** ⭐ — Best for portfolios, free with github.com account",
                  "**Netlify** ⭐ — Drag-and-drop deployment, incredibly easy",
                  "**Vercel** — Great for JavaScript projects and frameworks",
                  "**Cloudflare Pages** — Fast CDN, generous free tier"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Deploy with Netlify (Easiest Method!)"
              },
              {
                type: "code",
                language: "text",
                filename: "netlify_deploy.txt",
                code: "NETLIFY — Deploy in 30 seconds!\n\n1. Go to netlify.com (sign up free with email or GitHub)\n2. Click 'Add new site' → 'Deploy manually'\n3. DRAG your project folder onto the upload area\n4. Wait 10 seconds...\n5. DONE! 🎉 You get a URL like: funny-name-123.netlify.app\n6. Optional: Go to Site Settings → Change site name\n   → yourname.netlify.app\n\nEvery time you want to update:\n- Go to Deploys → drag the folder again\n- New version is live in seconds!"
              },
              {
                type: "heading",
                level: 2,
                content: "Deploy with GitHub Pages"
              },
              {
                type: "code",
                language: "text",
                filename: "github_pages.txt",
                code: "GITHUB PAGES — Professional deployment!\n\n1. Create a GitHub account at github.com\n2. Create a new repository (green '+' button)\n3. Name it: yourusername.github.io\n4. Upload your HTML, CSS, and JS files\n   (main file MUST be named index.html!)\n5. Go to Settings → Pages\n6. Under 'Source', select 'main' branch\n7. Wait 1-2 minutes...\n8. Your site is live at: yourusername.github.io! 🎉\n\nFor project sites (not your main page):\n- Create repo with any name (e.g., 'my-quiz')\n- Upload files, enable Pages\n- URL: yourusername.github.io/my-quiz/"
              },
              {
                type: "heading",
                level: 2,
                content: "Pre-Deployment Checklist"
              },
              {
                type: "code",
                language: "text",
                filename: "checklist.txt",
                code: "BEFORE YOU DEPLOY — Check these!\n\n✅ Main file is named 'index.html' (not 'home.html'!)\n✅ All file names are lowercase (no spaces!)\n   Good: style.css, script.js, images/photo.jpg\n   Bad:  Style.CSS, My Script.js, My Photo.JPG\n✅ Use RELATIVE paths, not absolute:\n   Good: 'images/logo.png' or './style.css'\n   Bad:  'C:\\Users\\Alex\\Desktop\\images\\logo.png'\n✅ All images load correctly\n✅ All links work (test every one!)\n✅ Page looks good on mobile (resize your window)\n✅ No console errors (F12 → Console tab)"
              },
              {
                type: "tip",
                content: "**Share your URL everywhere!** Put it on your resume, social media profiles, and share it with friends and family. Having a live website is a real accomplishment and looks great to schools and employers!"
              },
              {
                type: "checkpoint",
                content: "Deploy your best project to either Netlify (easiest) or GitHub Pages. Share the live URL with at least one person! Then try updating the site — change some text, redeploy, and verify the changes are live."
              }
            ]
          }
        },
        {
          id: "7-2",
          title: "Portfolio & Next Steps",
          completed: false,
          content: {
            description: "Build a portfolio page linking all your projects, and discover what to learn next!",
            sections: [
              {
                type: "text",
                content: "The best way to show off your skills is with a **portfolio website** — a single page that links to all your projects. Think of it as your web development resume! Let's build one, and then I'll show you where to go from here."
              },
              {
                type: "heading",
                level: 2,
                content: "Portfolio Page Structure"
              },
              {
                type: "code",
                language: "html",
                filename: "portfolio.html",
                code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My Portfolio</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"portfolio.css\">\n</head>\n<body>\n    <header>\n        <h1>Hi, I'm [Your Name] 👋</h1>\n        <p>Web Developer | Creator | Learner</p>\n    </header>\n    \n    <section class=\"projects\">\n        <h2>My Projects</h2>\n        <div class=\"project-grid\">\n            <a href=\"/profile-card/\" class=\"project-card\">\n                <h3>🃏 Profile Card</h3>\n                <p>A beautiful profile card with follow button.</p>\n            </a>\n            <a href=\"/quiz/\" class=\"project-card\">\n                <h3>🧠 Quiz Game</h3>\n                <p>Interactive quiz with scoring and results.</p>\n            </a>\n            <a href=\"/gallery/\" class=\"project-card\">\n                <h3>📸 Photo Gallery</h3>\n                <p>Responsive CSS Grid gallery.</p>\n            </a>\n        </div>\n    </section>\n    \n    <section class=\"skills\">\n        <h2>Skills</h2>\n        <div class=\"skill-tags\">\n            <span class=\"tag\">HTML5</span>\n            <span class=\"tag\">CSS3</span>\n            <span class=\"tag\">JavaScript</span>\n            <span class=\"tag\">Flexbox</span>\n            <span class=\"tag\">CSS Grid</span>\n            <span class=\"tag\">Responsive Design</span>\n        </div>\n    </section>\n    \n    <footer>\n        <p>Built with ❤️ by [Your Name] | 2025</p>\n    </footer>\n</body>\n</html>"
              },
              {
                type: "heading",
                level: 2,
                content: "What To Learn Next"
              },
              {
                type: "list",
                items: [
                  "📱 **Responsive Design** — Master media queries and mobile-first design",
                  "⚛️ **React or Vue** — Build complex, dynamic web applications",
                  "🗄️ **Backend (Node.js)** — Create servers, APIs, and databases",
                  "🎨 **Tailwind CSS** — Utility-first CSS framework used by pros",
                  "📦 **Git & GitHub** — Version control (track changes like a pro)",
                  "🔥 **TypeScript** — JavaScript with superpowers (type safety)",
                  "🚀 **Build, build, build!** — The best way to learn is by making things!"
                ]
              },
              {
                type: "heading",
                level: 2,
                content: "Project Ideas to Keep Learning"
              },
              {
                type: "list",
                items: [
                  "📝 **To-do list app** — Create, check off, and delete tasks",
                  "🧮 **Calculator** — Functional calculator with clean design",
                  "⏱️ **Stopwatch/Timer** — With start, stop, and lap buttons",
                  "🌤️ **Weather app** — Fetch real weather data from an API",
                  "🎮 **Tic-tac-toe** — Two-player game with win detection",
                  "📰 **Blog template** — Multi-page site with articles",
                  "🎵 **Music player UI** — Beautiful player interface",
                  "💰 **Expense tracker** — Log and categorize spending"
                ]
              },
              {
                type: "text",
                content: "🎉 **CONGRATULATIONS!** You've completed the Web Development course! You can now build real websites with HTML, CSS, and JavaScript — and put them on the internet for the world to see. That's an incredible skill that most people don't have. Keep building, keep learning, and keep creating amazing things for the web! 🚀🌐"
              },
              {
                type: "checkpoint",
                content: "Build a portfolio page that links to at least 2 of your projects. Deploy it live. Share the URL — you're officially a web developer with a published portfolio! 🎉"
              }
            ]
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // CHAPTER 8: BONUS — ADVANCED JAVASCRIPT
    // ═══════════════════════════════════════════════════════════════
    {
      id: 8,
      title: "Bonus: Advanced JavaScript",
      lessons: [
        {
          id: "8-1",
          title: "Objects, JSON & Local Storage",
          completed: false,
          content: {
            description: "Level up with objects, JSON data, and saving data in the browser — essential skills for real web apps!",
            sections: [
              {
                type: "text",
                content: "Ready to level up? In this bonus chapter, we'll cover three powerful JavaScript concepts: **Objects** (structured data), **JSON** (data format used everywhere), and **Local Storage** (saving data in the browser). These are essential for building real web applications! 🚀"
              },
              {
                type: "heading",
                level: 2,
                content: "Objects — Structured Data"
              },
              {
                type: "code",
                language: "javascript",
                filename: "objects.js",
                code: "// Objects store related data together\nconst user = {\n    name: 'Alex',\n    age: 14,\n    hobbies: ['coding', 'gaming', 'art'],\n    isStudent: true,\n    \n    // Methods (functions in objects)\n    greet() {\n        return `Hi, I'm ${this.name}!`;\n    }\n};\n\nconsole.log(user.name);          // 'Alex'\nconsole.log(user['age']);         // 14\nconsole.log(user.hobbies[0]);    // 'coding'\nconsole.log(user.greet());       // 'Hi, I'm Alex!'\n\n// Add new properties\nuser.email = 'alex@email.com';\n\n// Array of objects (very common!)\nconst products = [\n    { name: 'Laptop', price: 999, inStock: true },\n    { name: 'Phone', price: 699, inStock: true },\n    { name: 'Tablet', price: 449, inStock: false }\n];\n\n// Filter, map, find\nconst inStock = products.filter(p => p.inStock);\nconst names = products.map(p => p.name);\nconst laptop = products.find(p => p.name === 'Laptop');\nconsole.log(inStock, names, laptop);"
              },
              {
                type: "heading",
                level: 2,
                content: "Local Storage — Save Data in the Browser!"
              },
              {
                type: "code",
                language: "javascript",
                filename: "storage.js",
                code: "// LOCAL STORAGE persists even after closing the browser!\n\n// Save a simple value\nlocalStorage.setItem('username', 'Alex');\nlocalStorage.setItem('highScore', '42');\n\n// Read a value\nconst name = localStorage.getItem('username'); // 'Alex'\nconst score = localStorage.getItem('highScore'); // '42' (always string!)\n\n// Save an object (must convert to JSON string!)\nconst settings = { theme: 'dark', fontSize: 18, sound: true };\nlocalStorage.setItem('settings', JSON.stringify(settings));\n\n// Read an object (parse the JSON string back!)\nconst loaded = JSON.parse(localStorage.getItem('settings'));\nconsole.log(loaded.theme); // 'dark'\n\n// Delete\nlocalStorage.removeItem('username');\nlocalStorage.clear(); // delete EVERYTHING\n\n// PRACTICAL: Remember dark mode preference!\nconst toggleBtn = document.getElementById('theme-toggle');\nconst savedTheme = localStorage.getItem('theme');\n\nif (savedTheme === 'dark') {\n    document.body.classList.add('dark-mode');\n}\n\ntoggleBtn.addEventListener('click', () => {\n    document.body.classList.toggle('dark-mode');\n    const isDark = document.body.classList.contains('dark-mode');\n    localStorage.setItem('theme', isDark ? 'dark' : 'light');\n});"
              },
              {
                type: "tip",
                content: "**Local Storage only stores strings!** Always use `JSON.stringify()` when saving objects/arrays, and `JSON.parse()` when reading them back. Forgetting this is the #1 Local Storage bug!"
              },
              {
                type: "checkpoint",
                content: "Build a to-do list that saves tasks to Local Storage! When you refresh the page, your tasks should still be there. Include: add task, mark complete, delete task."
              }
            ]
          }
        },
        {
          id: "8-2",
          title: "Fetching Data from APIs",
          completed: false,
          content: {
            description: "Connect to the real world! Fetch live data from APIs — weather, jokes, Pokémon, and more!",
            sections: [
              {
                type: "text",
                content: "An **API** (Application Programming Interface) lets your website get real data from the internet — live weather, random jokes, Pokémon stats, movie info, and much more. This is how real web apps work: they fetch data from servers and display it dynamically! 🌐"
              },
              {
                type: "heading",
                level: 2,
                content: "Fetch API — Getting Data"
              },
              {
                type: "code",
                language: "javascript",
                filename: "fetch.js",
                code: "// ═══ Fetch a random joke ═══\nasync function getJoke() {\n    const response = await fetch(\n        'https://official-joke-api.appspot.com/random_joke'\n    );\n    const joke = await response.json();\n    \n    document.getElementById('setup').textContent = joke.setup;\n    document.getElementById('punchline').textContent = joke.punchline;\n}\n\ndocument.getElementById('joke-btn').addEventListener('click', getJoke);\n\n// ═══ Fetch Pokémon data ═══\nasync function getPokemon(name) {\n    try {\n        const response = await fetch(\n            `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`\n        );\n        \n        if (!response.ok) throw new Error('Pokémon not found!');\n        \n        const pokemon = await response.json();\n        \n        document.getElementById('pokemon-name').textContent =\n            pokemon.name.toUpperCase();\n        document.getElementById('pokemon-img').src =\n            pokemon.sprites.front_default;\n        document.getElementById('pokemon-type').textContent =\n            pokemon.types.map(t => t.type.name).join(', ');\n        document.getElementById('pokemon-hp').textContent =\n            pokemon.stats[0].base_stat;\n    } catch (error) {\n        alert(error.message);\n    }\n}\n\n// Search for a Pokémon\ndocument.getElementById('search-btn').addEventListener('click', () => {\n    const name = document.getElementById('pokemon-search').value;\n    if (name) getPokemon(name);\n});"
              },
              {
                type: "heading",
                level: 2,
                content: "Free APIs to Try"
              },
              {
                type: "code",
                language: "text",
                filename: "free_apis.txt",
                code: "FUN FREE APIs (no key needed!):\n\nJokes:    official-joke-api.appspot.com/random_joke\nPokémon:  pokeapi.co/api/v2/pokemon/{name}\nDog pics: dog.ceo/api/breeds/image/random\nCat facts: catfact.ninja/fact\nAdvice:   api.adviceslip.com/advice\nTrivia:   opentdb.com/api.php?amount=10\nCountries: restcountries.com/v3.1/name/{name}\n\nWEATHER (free key needed):\nopenweathermap.org/api — real weather data!"
              },
              {
                type: "warning",
                content: "**Always use try/catch with fetch!** Network requests can fail (no internet, server down, wrong URL). Without error handling, your app will crash silently. The try/catch pattern catches errors and lets you show a helpful message instead."
              },
              {
                type: "text",
                content: "🎉 **You've completed the entire Web Development course!** You can build HTML pages, style them beautifully with CSS, make them interactive with JavaScript, deploy them live, and even fetch real data from APIs. These skills open doors to building real applications, getting jobs, or creating your own projects. The web is your canvas — go create something amazing! 🚀"
              },
              {
                type: "checkpoint",
                content: "Build a Pokémon search app or random joke generator using the Fetch API. Display the data in a beautifully styled card. Deploy it live on Netlify — this is a great portfolio piece!"
              }
            ]
          }
        }
      ]
    }
  ]
};