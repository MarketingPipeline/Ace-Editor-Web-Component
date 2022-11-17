class CodeEditor extends HTMLElement {
	constructor() {
		super();

	}

	connectedCallback() {


		// will be used to set language type for Ace Editor
		const language = this.getAttribute('language');

	

		const styling = `<style>
    
    /*compress*/
    .code-editor-wc {
	 position: relative;
	 background-color: #3a3636;
	 background-color: var(--bg, #3a3636);
	 border-radius: 10px;
	 border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
}
 .code-editor-wc.line-number .AceEditor {
	 padding-left: 0px;
}
 .code-editor-wc img {
	 max-width: 90% !important;
	 display: inline-block !important;
	 border-radius: 0 !important;
	 box-shadow: none !important;
}
 .code-editor-wc .code-editor-wc-pane {
	 height: 40px;
	 display: flex;
	 border-radius: 3px;
}
 .code-editor-wc .code-editor-wc-pane .code-editor-wc-title {
	 flex: 1;
	 padding-left: 20px;
	 color: var(--title, #fff);
	 display: flex;
	 font-size: 14px;
	 font-family: 'Metropolis-Medium', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', sans-serif;
	 align-items: center;
	 opacity: 0.5;
	 text-transform: uppercase;
}
 .code-editor-wc .code-editor-wc-pane .code-editor-wc-ctrl {
	 flex: 1;
	 display: flex;
	 justify-content: flex-end;
}
 .code-editor-wc .code-editor-wc-pane button.ck-button {
	 height: 40px;
	 padding: 0 16px;
	 font-size: 14px;
	 background: transparent;
	 border: none;
	 border-radius: 0;
	 color: var(--button-text, wheat);
	 opacity: 0.8;
	 outline: none;
	 display: flex;
	 align-items: center;
	 box-shadow: -1px 0 0 0 var(--button-border, rgba(0, 0, 0, 0.5));
}
 .code-editor-wc .code-editor-wc-pane button.ck-button img {
	 height: 14px;
	 margin-right: 3px;
}
 .code-editor-wc .code-editor-wc-pane button.ck-button:hover {
	 opacity: 1;
}
 .code-editor-wc .code-editor-wc-pane button.ck-button:active {
	 opacity: 0.6;
}
 .code-editor-wc pre {
	 background: transparent;
	 color: var(--code, white);
	 border-bottom-left-radius: 3px;
	 border-bottom-right-radius: 3px;
}
 .code-editor-wc .AceEditor {
	 padding-left: 16px;
}
 .code-editor-wc .AceEditor, .code-editor-wc .code-editor-wc-text {
	 font-size: 14px;
	 line-height: 18px;
	 height: auto;
}
 .code-editor-wc .AceEditor pre, .code-editor-wc .code-editor-wc-text pre {
	 padding: 0 4px;
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
}
 .code-editor-wc .code-editor-wc-text {
	 color: var(--code, white);
	 border: none;
	 width: 100%;
	 height: 100%;
	 background: var(--code-bg, rgba(39, 40, 35, 1));
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
}
 .code-editor-wc .code-editor-wc-output {
	 display: none;
	 background: var(--bg, #3a3636);
	 font-family: 'Menlo', 'Roboto Mono', 'Courier New', Courier, monospace !important;
	 border-top: 1px solid var(--border, rgba(0, 0, 0, 0.1));
}
 .code-editor-wc .code-editor-wc-output .code-editor-wc-output-title {
	 color: var(--text, white);
	 opacity: 0.6;
	 font-size: 12px;
	 margin: 0 10px 0 20px;
	 padding: 4px 0;
	 font-family: "Metropolis-Medium" -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', sans-serif;
	 border-bottom-width: 1px;
	 border-bottom-style: solid;
	 border-bottom-color: rgba(255, 255, 255, 0.06);
}
 .code-editor-wc .code-editor-wc-output .code-editor-wc-output-content {
	 color: var(--text, white);
	 white-space: pre-line;
	 padding: 8px 12px 8px 20px;
	 font-size: 14px;
	 overflow: auto;
	 white-space: pre-wrap;
}
 .code-editor-wc .code-editor-wc-output.html-output .code-editor-wc-output-content {
	 max-width: 100% !important;
	 background: rgba(252, 253, 255, 1);
	 margin: 0 10px;
	 color: #000;
	 border-radius: 3px;
	 border: 1px solid var(--border, rgba(0, 0, 0, 0.1));
}
 .code-editor-wc .code-editor-wc-output.html-output .code-editor-wc-output-content .katex .base {
	 margin: 10px 0;
}
 .code-editor-wc .code-editor-wc-footer {
	 background-color: #3a3636;
	 background-color: var(--bg, #3a3636);
	 height: 10px;
	 border-bottom-left-radius: 10px;
	 border-bottom-right-radius: 10px;
}
 .code-editor-wc .code-editor-wc-mask {
	 display: none;
	 position: absolute;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 color: white;
	 z-index: 10;
	 align-items: center;
	 justify-content: center;
	 background: rgba(0, 0, 0, 0.4);
}
/*endcompress*/
 </style>
 `

		if (!language) {
			return this.innerHTML = `${styling}   <!--compress-->  <div>
  
<pre style="padding: 0px; --bg:rgb(58, 54, 54); --text:rgb(255, 255, 255); --border:rgba(0,0,0,0.3); --code:rgb(255, 255, 255); --code-bg:rgba(39, 40, 35, 1); --title:rgb(255, 255, 255); --button-text:wheat; --button-border:rgba(0,0,0,0.18);"><div class="code-editor-wc "><div class="code-editor-wc-pane"><div class="code-editor-wc-title">Error!</div>
  
</div><div id="code_editor_text_value" class="code-editor-wc-text" style="/* display: none; */">Error: Language Attribute Is Missing For Web Component ...
        </div>
        
      </div>
      </div>
      <!--endcompress-->
      `
		}
		
		 // disable spellcheck
	        this.spellcheck = false;

    this.editorTitle = language

    if (this.getAttribute("editor-title")){
      this.editorTitle = this.getAttribute("editor-title")
    }
    
		this.innerHTML = ` ${styling}
    
    <!--compress-->
    
    <div code-editor-component language=${language}>
  
<pre style="padding: 0px; --bg:rgb(58, 54, 54); --text:rgb(255, 255, 255); --border:rgba(0,0,0,0.3); --code:rgb(255, 255, 255); --code-bg:rgba(39, 40, 35, 1); --title:rgb(255, 255, 255); --button-text:wheat; --button-border:rgba(0,0,0,0.18);"><div class="code-editor-wc " data-lang="cpp" data-options=""><div class="code-editor-wc-pane"><div class="code-editor-wc-title">${ this.editorTitle}</div>
  <div class="code-editor-wc-mask">Copied to the clipboard.</div>
<div class="code-editor-wc-ctrl">
<button class="ck-button copy-button" code-editor-copy-button><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-copy-dark.svg"><span>copy</span></button></div>
  
</div><div id="code_editor_text_value" class="code-editor-wc-text" contenteditable style="/* display: none; */">${this.innerHTML}</div><div id="output_section" class="code-editor-wc-output text-output"><div class="code-editor-wc-output-title">Output</div><pre class="code-editor-wc-output-content" id="result">Loading..<br></pre></div></div></pre>
      </div>
      </div>
      
      <!--endcompress-->
    `;
  
    
   

    // language was found! 
    
    /// Render Ace Editor! 
        
async function CreateAceEditorForCodeEditorWC(element){
// Wait till AceEditor is loaded - so no errors occur.
 let isAceLoaded = await loadAceEditor()
 
 if (isAceLoaded.loaded === "true"){
        CreateAceCodeEditor(element, element.getAttribute("language").toLowerCase())//
    }     
  
} 
 CreateAceEditorForCodeEditorWC(this)    
    

 // Handle Copy Button Clicks   
this.querySelector('[code-editor-copy-button]').addEventListener('click', (e) => handleCopyBtnClick(this));

function handleCopyBtnClick(html_element) {
  
   navigator.clipboard.writeText(html_element.querySelector("#code_editor_text_value").innerText)
  /// Set Copied To Clipboard Visible
  html_element.querySelector(".code-editor-wc-mask").style.display = "flex"
   // then hide it after X seconds.. 
  setTimeout(() => {
   html_element.querySelector(".code-editor-wc-mask").style.display = "none";
}, "3000")

}
    

	}
}







// function to load Ace Editor to page 
  function loadAceEditorScripts(info) {
            return new Promise(function(resolve, reject) {
                let gfgData = document.createElement('script');
                gfgData.src = info;
                gfgData.async = false;
                gfgData.onload = () => {
                    resolve(info);
                };
                gfgData.onerror = () => {
                    reject(info);
                };
                document.body.appendChild(gfgData);
            });
        };
         this.gfgScript = ['https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/ace.min.js', 'https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/ext-modelist.js', "https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/ext-themelist.js"]  
        this.promiseData = [];
    
  
   

this.isAceLoadedAlready = false
async function loadAceEditor(){

        if(this.isAceLoadedAlready === false){
          
        this.gfgScript.forEach(function(info) {
            this.promiseData.push(loadAceEditorScripts(info));
        });
       const data = await Promise.all(this.promiseData).then(async function() {
       return {loaded: "true"}
        }).catch(function(gfgData) {
         this.isAceLoadedAlready  = true
         return {loaded: "false"}
         console.log(`Code Editor WC Error: ${gfgData} failed to load!`);
        });
    
      return data
      } else{
        // Ace Editor has already been loaded to page
      }
    
    }





/// function to create Ace Editors for CodeEditor-WC

function CreateAceCodeEditor(html_element, language){
  
    // url to load Ace Editor + resources
    ace.config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/");
  
  
const text_value = html_element.querySelector("#code_editor_text_value").textContent

const editor = ace.edit(html_element.querySelector("#code_editor_text_value"));
  
editor.$blockScrolling = Infinity;
 
    if (!html_element.getAttribute("editor-theme")){
editor.setTheme("ace/theme/monokai");
      
    } else{
  // allow the Ace Editor theme to be changed. 
  
 const themelist = ace.require("ace/ext/themelist")
     
const themes = themelist.themesByName //object hash of theme objects by name
 
// check if theme name is valid.
if(themes[html_element.getAttribute("editor-theme").toLowerCase()] != undefined) { 
  // theme was valid!
  editor.setTheme(`ace/theme/${html_element.getAttribute("editor-theme").toLowerCase()}`);
} else{
  //
  /// Theme choice was not valid
  console.log(`Code Editor WC Error: ${html_element.getAttribute("editor-theme")} is not a valid theme - setting to default.`)
  
  
  editor.setTheme("ace/theme/monokai");
  
}
    }
      
 if (language){
  SetAceEditor_Mode()

 }
  function SetAceEditor_Mode(){
   const modelist = ace.require('ace/ext/modelist');
if(modelist.modesByName[language] != undefined) {

     editor.getSession().setMode(`ace/mode/${language}`)
} else{
  // language was not found
  console.log(`Code Editor WC Error: Ace Editor Language Mode Could Not Be Found For ${language.charAt(0).toUpperCase() + language.slice(1)}`)
}////
  }
editor.setShowPrintMargin(false);

  
editor.setValue(text_value);


  
editor.clearSelection();
/// This will set editor to content length

 /// This will set editor to auto-expand 
//editor.setOptions({
  //  maxLines: Infinity
// });
editor.setOptions({
   maxLines: Infinity
 });
}
  

  


window.customElements.define('code-editor', CodeEditor);
