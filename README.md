# Ace-Editor-Web-Component



<div align="center"> 

![image](https://user-images.githubusercontent.com/86180097/202600069-4a82c9b8-a033-4d04-a32d-e784906cbf01.png)

A web component that allows you to easily add code editor(s) to your web page powered via [Ace Editor](https://github.com/ajaxorg/ace) <br>
  <small> <b><i>Show your support!</i> </b></small>
  <br>
   <a href="https://github.com/MarketingPipeline/Ace-Editor-Web-Component">
    <img title="Star on GitHub" src="https://img.shields.io/github/stars/MarketingPipeline/Ace-Editor-Web-Component.svg?style=social&label=Star">
  </a>
  <a href="https://github.com/MarketingPipeline/Ace-Editor-Web-Component/fork">
    <img title="Fork on GitHub" src="https://img.shields.io/github/forks/MarketingPipeline/Ace-Editor-Web-Component.svg?style=social&label=Fork">
  </a>

</div>





## Example and usage

You can view a demo of the Ace Editor web component in use [here.](https://marketingpipeline.github.io/Ace-Editor-Web-Component/demo.html)


How to use the <b><i>Ace Editor Web Component</b></i>:

Set a <code>language</code> attribute to a [supported programming language](#supported-languages) you prefer to use - example below


```html
<ace-editor language="python"></ace-editor>
```    




   include this [script](https://github.com/MarketingPipeline/Ace-Editor-Web-Component/blob/main/dist/ace-editor-wc.min.js) in your HTML document.
         
  ```html
    <script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Ace-Editor-Web-Component@1.0.0/dist/ace-editor-wc.min.js" defer></script> 
   ```
    
    
    
and include this [CSS](https://github.com/MarketingPipeline/Ace-Editor-Web-Component/blob/main/dist/ace-editor-wc.min.css) file in your HTML document.

```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MarketingPipeline/Ace-Editor-Web-Component@v1.0.0/dist/ace-editor-wc.min.css">
```

<b>Note</b>: you can easily customize the look of this web component by hosting your own customized CSS file - feel free to add your custom stylesheet to the theme list [here](THEMES.md)!    


<br>


How to use the <b><i>Ace Editor Web Component</b></i>: with <b>Pre-Defined Code</b>:

You can pre-define a code example inside the editor, simply by inserting the code inside of a <code>ace-editor</code> element like so - 

```html
<ace-editor language="python">print('hello world')</ace-editor>
```    


    
    
### Options



<table>
<tr>
<th>Attribute</th>
<th>Meaning</th>
<th>Default</th>
<th>Required</th>
</tr>
<tr>
<td>language</td>
 <td> The language mode to use for Ace Editor</b></td>
<td><code>Undefined</code></td>
<td>Yes</td>
</tr>
<tr>
<td>editor-title</td>
 <td>The editor title to use</b></td>
<td><code>Language</code></td>
<td>No</td>
</tr>
<tr>
<td> editor-theme</td>
 <td>The Ace Editor theme to use</b></td>
<td><code>Monokai</code></td>
<td>No</td>
</tr>








</table>


## Supported Languages

`ABAP`,
`ABC`,
`ActionScript`,
`ADA`,
`Apache_Conf`,
`AsciiDoc`,
`Assembly_x86`,
`AutoHotKey`,
`BatchFile`,
`C9Search`,
`C_Cpp`,
`Cirru`,
`Clojure`,
`Cobol`,
`coffee`,
`ColdFusion`,
`CSharp`,
`CSS`,
`Curly`,
`D`,
`Dart`,
`Diff`,
`Dockerfile`,
`Dot`,
`Dummy`,
`DummySyntax`,
`Eiffel`,
`EJS`,
`Elixir`,
`Elm`,
`Erlang`,
`Forth`,
`FTL`,
`Gcode`,
`Gherkin`,
`Gitignore`,
`Glsl`,
`golang`,
`Groovy`,
`HAML`,
`Handlebars`,
`Haskell`,
`haXe`,
`HTML`,
`HTML_Ruby`,
`INI`,
`Io`,
`Jack`,
`Jade`,
`Java`,
`JavaScript`,
`JSON`,
`JSONiq`,
`JSP`,
`JSX`,
`Julia`,
`LaTeX`,
`LESS`,
`Liquid`,
`Lisp`,
`LiveScript`,
`LogiQL`,
`LSL`,
`Lua`,
`LuaPage`,
`Lucene`,
`Makefile`,
`Markdown`,
`Mask`,
`MATLAB`,
`MEL`,
`MUSHCode`,
`MySQL`,
`Nix`,
`ObjectiveC`,
`OCaml`,
`Pascal`,
`Perl`,
`pgSQL`,
`PHP`,
`Powershell`,
`Praat`,
`Prolog`,
`Properties`,
`Protobuf`,
`Python`,
`R`,
`RDoc`,
`RHTML`,
`Ruby`,
`Rust`,
`SASS`,
`SCAD`,
`Scala`,
`Scheme`,
`SCSS`,
`SH`,
`SJS`,
`Smarty`,
`snippets`,
`Soy_Template`,
`Space`,
`SQL`,
`Stylus`,
`SVG`,
`Tcl`,
`Tex`,
`Text`,
`Textile`,
`Toml`,
`Twig`,
`Typescript`,
`Vala`,
`VBScript`,
`Velocity`,
`Verilog`,
`VHDL`,
`XML`,
`XQuery`,
`YAML`

<b>Note</b>: the web component will still work with an un-supported language mode for the Ace Editor - tho syntax highlighting, auto-indentation features & etc.. will not work. 

## Install locally

The web component loads all resources for Ace Editor via CDN. You can change this to load all the resource / file paths from a local path. To set files to be loaded from your local path define a variable ```AceEditor_WC_Ace_Editor_Path``` with the path to load the files from. Example below -

```js
let AceEditor_WC_Ace_Editor_Path = "path/to/files/"
```

You can download / find the version of Ace Editor used in the web-component [here](https://cdn.jsdelivr.net/npm/ace-min-noconflict@1.1.9/)

## Themes

You can view a list of themes / CSS stylesheet(s) that work with this web component [here](THEMES.md).

## Contributing ![GitHub](https://img.shields.io/github/contributors/MarketingPipeline/Ace-Editor-Web-Component)

Want to improve this? Create a pull request with detailed changes / improvements! If approved you will be added to the list of contributors of this awesome project!


See also the list of
[contributors](https://github.com/MarketingPipeline/Ace-Editor-Web-Component/graphs/contributors) who
participate in this project.

## License ![GitHub](https://img.shields.io/github/license/MarketingPipeline/Ace-Editor-Web-Component)

This project is licensed under the MIT License - see the
[LICENSE.md](https://github.com/MarketingPipeline/Ace-Editor-Web-Component/blob/main/LICENSE) file for
details.
