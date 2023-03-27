/**!
 * @license Ace-Editor-Web-Component - A web component to easily add a code editor or editor(s) to your web page!
 * VERSION: 1.0.2
 * MORE INFO CAN BE FOUND AT https://github.com/MarketingPipeline/Ace-Editor-Web-Component
 */
let AceEditorWC_Is_AceEditorLoaded = false;

class AceEditorWC extends HTMLElement {
  connectedCallback() {


    // will be used to set language type for Ace Editor
    const language = this.getAttribute('language');

    if (!language) {
      return this.innerHTML = `<!--compress-->  <div  class="ace-editor-component">
  
<div class="ace-editor-wc "><div class="ace-editor-wc-pane"><div class="ace-editor-wc-title">Error!</div>
  
</div><div id="code_editor_text_value" class="ace-editor-wc-text" style="/* display: none; */">Error: Language Attribute Is Missing For Web Component ...
        </div>
        
      </div>
      <!--endcompress-->
      `
    }

    // disable spellcheck
    this.spellcheck = false;

    this.editorTitle = language

    if (this.getAttribute("editor-title")) {
      this.editorTitle = this.getAttribute("editor-title")
    }

    this.innerHTML = ` 
    
    <!--compress-->
    
    <div class="ace-editor-component">

<div class="ace-editor-wc"><div class="ace-editor-wc-pane"><div class="ace-editor-wc-title">${ this.editorTitle}</div>
  <div class="ace-editor-wc-mask">Copied to the clipboard.</div>
<div class="ace-editor-wc-ctrl">
<button class="ck-button"><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-copy-dark.svg"><span>copy</span></button></div>
</div><div id="code_editor_text_value" class="ace-editor-wc-text">${this.innerHTML}</div>
      </div>
      </div>
      
      <!--endcompress-->
    `;




    // language was found! 

    /// Render Ace Editor! 

    async function CreateAceEditorForAceEditorWC(element) {
      // Wait till AceEditor is loaded - so no errors occur.
      let isAceLoaded = await loadAceEditor()

      if (isAceLoaded.loaded === "true") {
        CreateAceEditor(element, element.getAttribute("language").toLowerCase()) //
      }

    }
    CreateAceEditorForAceEditorWC(this)


    // Handle Copy Button Clicks   
    this.querySelector('.ck-button').addEventListener('click', (e) => handleCopyBtnClick(this));

    function handleCopyBtnClick(html_element) {


      const editor = ace.edit(html_element.querySelector("#code_editor_text_value"))

      navigator.clipboard.writeText(editor.getValue())
      /// Set Copied To Clipboard Visible
      html_element.querySelector(".ace-editor-wc-mask").style.display = "flex"
      // then hide it after X seconds.. 
      setTimeout(() => {
        html_element.querySelector(".ace-editor-wc-mask").style.display = "none";
      }, "3000")

    }


  }
}


this.Ace_Editor_Path = `https://cdnjs.cloudflare.com/ajax/libs/ace/1.16.0/`


// allow AceEditor + resources needed to be installed locally. 
/* example of usage 
    let AceEditorWC_WC_Ace_Editor_Path = "path/to/files"
   */

if (typeof AceEditor_WC_Ace_Editor_Path != "undefined") {
  this.Ace_Editor_Path = AceEditor_WC_Ace_Editor_Path
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
this.gfgScript = [`${this.Ace_Editor_Path}ace.min.js`, `${this.Ace_Editor_Path}ext-modelist.js`, `${this.Ace_Editor_Path}ext-themelist.js`, 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.16.0/ext-error_marker.min.js']

if (typeof AceEditor_WC_Ace_Editor_EXTS != "undefined") {
  for (let item in AceEditor_WC_Ace_Editor_EXTS) {
    this.gfgScript.push(AceEditor_WC_Ace_Editor_EXTS[item])
  }
}
this.promiseData = [];


////


async function loadAceEditor() {


  // function to make sure scripts are not already loaded by user for another instance of ace editor etc... 
  function isFileAlreadyLoaded(url) {
    if (!url) url = "http://xxx.co.uk/xxx/script.js";

    var scripts = document.getElementsByTagName('script');

    for (var i = scripts.length; i--;) {
      if (scripts[i].src == url) return true;
    }
    return false;
  }

  if (AceEditorWC_Is_AceEditorLoaded === false) {

    this.gfgScript.forEach(function(info) {
      // make sure scripts are not already loaded by user for another instance of ace editor
      if (isFileAlreadyLoaded(info) === false) {
        this.promiseData.push(loadAceEditorScripts(info));
      }
    });
    const data = await Promise.all(this.promiseData).then(async function() {
      AceEditorWC_Is_AceEditorLoaded = true
      return {
        loaded: "true"
      }
    }).catch(function(gfgData) {
      console.log(`Ace Editor WC Error: ${gfgData} failed to load!`);
      return {
        loaded: "false"
      }
    });

    return data
  } else {
    //  Ace Editor has already been loaded to page
    return {
      loaded: "true"
    }
  }

}




/// function to create Ace Editors for AceEditorWC-WC

function CreateAceEditor(html_element, language) {

  // url to load Ace Editor + resources
  ace.config.set("basePath", this.Ace_Editor_Path);


  const text_value = html_element.querySelector("#code_editor_text_value").textContent

  const editor = ace.edit(html_element.querySelector("#code_editor_text_value"));

  editor.$blockScrolling = Infinity;

  if (!html_element.getAttribute("editor-theme")) {
    editor.setTheme("ace/theme/monokai");

  } else {
    // allow the Ace Editor theme to be changed. 

    const themelist = ace.require("ace/ext/themelist")

    const themes = themelist.themesByName //object hash of theme objects by name

    // check if theme name is valid.
    if (themes[html_element.getAttribute("editor-theme").toLowerCase()] != undefined) {
      // theme was valid!
      editor.setTheme(`ace/theme/${html_element.getAttribute("editor-theme").toLowerCase()}`);
    } else {
      //
      /// Theme choice was not valid
      console.log(`Ace Editor WC Error: ${html_element.getAttribute("editor-theme")} is not a valid theme - setting to default.`)


      editor.setTheme("ace/theme/monokai");

    }
  }

  if (language) {
    SetAceEditor_Mode()

  }

  function SetAceEditor_Mode() {
    const modelist = ace.require('ace/ext/modelist');
    if (modelist.modesByName[language] != undefined) {

      editor.getSession().setMode(`ace/mode/${language}`)
      editor.getSession().setAnnotations()
    } else {
      // language was not found
      console.log(`Ace Editor WC Error: Ace Editor Language Mode Could Not Be Found For ${language.charAt(0).toUpperCase() + language.slice(1)}`)
    } ////
  }
  editor.setShowPrintMargin(false);


  editor.setValue(text_value);



  editor.clearSelection();
  /// This will set editor to content length

  /// This will set editor to auto-expand 
  //editor.setOptions({
  //  maxLines: Infinity
  // });

  // allow custom editor options to be set
  if (html_element.getAttribute("editor-options")) {
    editor.setOptions(JSON.parse(html_element.getAttribute("editor-options")))
  } else {

    let MaxLines = Infinity

    // allow max-lines to be set...
    if (html_element.getAttribute("max-lines")) {
      MaxLines = Number(html_element.getAttribute("max-lines"))
    }

    editor.setOptions({
      maxLines: MaxLines
    });

  }


}

window.customElements.define('ace-editor', AceEditorWC);
