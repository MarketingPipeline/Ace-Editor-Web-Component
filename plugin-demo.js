/// Example on how to create a custom plugin / add custom features / buttons etc.. to the Ace-Editor WC
// https://github.com/MarketingPipeline/Ace-Editor-Web-Component




window.addEventListener('load', (event) => {

  
  // function to do something on button click!
function renderMarkdown(html_element){
/// do something custom with your button click!
 /// yourCoolFunctionHere()
 
   // get the text value from the Ace Editor 
let AceEditorWC_Value = html_element.querySelector('.ace_content').innerText
  
  console.log(AceEditorWC_Value)
  
  
  
}


  function CreateButtonForAceEditorWC(el){
    
el.querySelector('.ace-editor-wc-ctrl').insertAdjacentHTML('afterbegin', '<button class="ck-button custom-button"><img src="https://lyricat.github.io/code-knack/demo/lib/code-knack/images/icon-copy-dark.svg"><span>Custom Button</span></button>');
   
  }
   
  // Plugin functions handled nicely here! 
document.querySelectorAll("ace-editor").forEach((el) => {
  
    if (el.getAttribute("language").toLowerCase() === "md") {
    
     // render ace editor(s) for custom plugin
       ///  set Ace Editor to Markdown Mode
      CreateButtonForAceEditorWC(el)
  
 // handle all clicks for custom plugin 
  el.querySelector('.custom-button').addEventListener('click', (e) => renderMarkdown(el))
      
   
                   
  }
    

})


  
});
