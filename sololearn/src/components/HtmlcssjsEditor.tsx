import MonacoEditor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import "./Htmlcssjseditor.css";
import NavBarP from "./NavBarP";

const DEFAULT_HTML = "<h1>Hello, World!</h1>";
const DEFAULT_CSS = "body { font-family: sans-serif; background: #f9fafb; }";
const DEFAULT_JS = "console.log('Hello, World!');";

const TABS = [
  { key: "html", label: "HTML", language: "html" },
  { key: "css", label: "CSS", language: "css" },
  { key: "js", label: "JS", language: "javascript" }
];

const HtmlCssJsEditor = () => {
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [css, setCss] = useState(DEFAULT_CSS);
  const [js, setJs] = useState(DEFAULT_JS);
  const [srcDoc, setSrcDoc] = useState("");
  const [filename, setFilename] = useState("my_page");
  const [activeTab, setActiveTab] = useState("html");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const saveFile = () => {
    const safeName = filename.trim() === "" ? "my_page" : filename.trim();
    const code = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>${safeName}</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            ${js}
          <\/script>
        </body>
      </html>
    `;
    const blob = new Blob([code], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${safeName}.html`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  // Editor content based on active tab
  let value, onChange, language;
  if (activeTab === "html") {
    value = html;
    onChange = setHtml;
    language = "html";
  } else if (activeTab === "css") {
    value = css;
    onChange = setCss;
    language = "css";
  } else if (activeTab === "js") {
    value = js;
    onChange = setJs;
    language = "javascript";
  }

  return (
    <>
    <NavBarP/>
    <div className="web-editor-bg">
      <div className="web-editor-container">
        <h1 className="web-editor-title">HTML/CSS/JS Live Editor</h1>
        <div className="filename-row">
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            placeholder="Enter filename"
            className="filename-input"
          />
          <span className="filename-ext">.html</span>
          <button className="save-btn" onClick={saveFile}>
            Save HTML
          </button>
        </div>
        {/* Tab Bar */}
        <div className="tab-bar">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? "active" : ""} ${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Monaco Editor */}
        <div className="tab-editor">
          <div className={`editor-label ${activeTab}`}>{TABS.find(t => t.key === activeTab).label}</div>
          <MonacoEditor
            height="300px"
            theme="vs-dark"
            language={language}
            value={value}
            onChange={onChange}
            options={{
              fontFamily: "'Fira Mono', 'Consolas', 'Menlo', monospace",
              fontSize: 16,
              minimap: { enabled: false },
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              wordWrap: "on",
              automaticLayout: true,
              suggestOnTriggerCharacters: true,
              tabSize: 2
            }}
          />
        </div>
        <div className="preview-label">Live Preview</div>
        <div className="preview-pane">
          <iframe
            srcDoc={srcDoc}
            title="Live Preview"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            className="preview-iframe"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default HtmlCssJsEditor;
