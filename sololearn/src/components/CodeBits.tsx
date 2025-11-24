
import { useState } from "react";
import "./CodeBits.css";
import { Link } from 'react-router-dom';
import NavBarP from "./NavBarP";


// Language configuration array
const LANGUAGES = [
  {
    id: 71,
    name: "Python",
    label: "PY",
    defaultCode: 'print("Hello, World!")',
    extension: "py",
  },
  {
    id: 62,
    name: "Java",
    label: "JAVA",
    defaultCode: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
    extension: "java",
  },
  {
    id: 50,
    name: "C",
    label: "C",
    defaultCode: `#include <stdio.h>\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}`,
    extension: "c",
    },
  {
    id: 54,
    name: "C++",
    label: "C++",
    defaultCode: `#include <iostream>\nint main() {\n  std::cout << "Hello, World!";\n  return 0;\n}`,
    extension: "cpp",
  },
  {
    id: 51,
    name: "C#",
    label: "C#",
    defaultCode: `using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}`,
    extension: "cs",
  },
  {
    id: 82,
    name: "SQL",
    label: "SQL",
    defaultCode: `SELECT 'Hello, World!';`,
    extension: "sql",
    },
];

const RAPIDAPI_KEY = "1d5296acf5msh3755041e9ff4288p12b62djsne2f37a3551f4"; 



const CompilerPage = () => {
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(selected.defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [filename, setFilename] = useState("my_code");

  // Update code and reset filename/output when language changes
  const handleLanguageChange = (lang: typeof LANGUAGES[0]) => {
    setSelected(lang);
    setCode(lang.defaultCode);
    setOutput("");
    setFilename("my_code");
  };

  const executeCode = async () => {
    setIsRunning(true);
    setOutput("Running...");
    try {
      const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?wait=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": RAPIDAPI_KEY,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
          body: JSON.stringify({
            language_id: selected.id,
            source_code: code,
            stdin: "",
          }),
        }
      );
      const result = await response.json();
      setOutput(result.stdout || result.stderr || result.compile_output || "No output");
    } catch (error) {
      setOutput("Error running code.");
    }
    setIsRunning(false);
  };

  const saveFile = () => {
    const safeName = filename.trim() === "" ? "my_code" : filename.trim();
    const blob = new Blob([code], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${safeName}.${selected.extension}`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <>
    <NavBarP/>
    <div className="compiler-page-bg">
      <div className="compiler-page-container">
        <h1 className="compiler-title">Online Code Compiler</h1>
        <div className="language-selector">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.id}
              className={`lang-btn ${selected.id === lang.id ? "active" : ""}`}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang.name}
            </button>
          ))}
          <Link to='/htmlcssjsEditor'>
            <button className="html lang-btn "><style>{`.html{color: white}`}</style>
              Web
              
            </button>
            </Link>
          
        </div>
        <div className="filename-row">
          <input
            type="text"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            placeholder="Enter filename"
            className="filename-input"
          />
          <span className="filename-ext">.{selected.extension}</span>
        </div>
        <div className="compiler-panels">
          <div className="panel code-panel">
            <div className="panel-header">
              <span className="panel-label">{selected.label}</span>
              <span className="panel-lang">{selected.name}</span>
            </div>
            <textarea
              className="code-editor"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
            />
          </div>
          <div className="panel output-panel">
            <div className="panel-header">
              <span className="panel-label">OUTPUT</span>
            </div>
            <pre className="output-content">
              {output || "Click RUN to see output here..."}
            </pre>
          </div>
        </div>
        <div className="run-btn-row">
          <button
            className="run-btn"
            onClick={executeCode}
            disabled={isRunning}
          >
            {isRunning ? "Running..." : "Run Code"}
          </button>
          <button
            className="save-btn"
            onClick={saveFile}
            style={{ marginLeft: "12px" }}
          >
            Save Code
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CompilerPage;
