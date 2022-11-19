/// Example on how to create a custom plugin / add custom features / buttons etc.. to the Ace-Editor WC
// https://github.com/MarketingPipeline/Ace-Editor-Web-Component




window.addEventListener('load', (event) => {

  
 


  function CreateButtonForAceEditorWC(el){
    
el.querySelector('.ace-editor-wc').insertAdjacentHTML('afterend', `<div class="output-container">
      <div class="buttons-container">
        <button id="execute" class="button ace-wc-run-plugin-btn" type="button">Run ›</button>
        <button type="button" class="button ace-wc-rest-plugin-btn">Reset</button>
      </div>
      <div id="console" class="output"><code></code></div>
    </div>`);
   
  }
   
  // Plugin functions handled nicely here! 
document.querySelectorAll("ace-editor").forEach((el) => {
  
    if (el.getAttribute("language").toLowerCase() === "md") {
    
     // render ace editor(s) for custom plugin
       ///  set Ace Editor to Markdown Mode
      CreateButtonForAceEditorWC(el)
      
  function callCustomFunction(el, runBtn){
    try {                                                        if (runBtn){
       AceEditorWC_Plugin_Run_Button(el)
    } else{
      AceEditorWC_Plugin_Reset_Button(el)    
    }
} catch (error) {
 // avoid any errors if RUN / RESET btn is not found on page etc..
}
  }
      
 // handle all clicks for custom plugin 
  el.querySelector('.ace-wc-run-plugin-btn').addEventListener('click', (e) => 
  callCustomFunction(el, "RunBTN")
)
      
   // handle all clicks for custom plugin 
  el.querySelector('.ace-wc-rest-plugin-btn').addEventListener('click', (e) => callCustomFunction(el))    
      
   
                   
  }
    

})


  
});
