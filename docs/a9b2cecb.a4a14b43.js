(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var l=a(3),r=a(7),i=(a(0),a(89)),n={id:"stores",title:"Formula Stores",sidebar_label:"Formula Stores"},s={unversionedId:"stores",id:"stores",isDocsHomePage:!1,title:"Formula Stores",description:"All the stores listed below are Svelte Writable Stores.",source:"@site/docs/stores.md",slug:"/stores",permalink:"/svelte-formula/docs/stores",version:"current",sidebar_label:"Formula Stores",sidebar:"someSidebar",previous:{title:"Formula Options",permalink:"/svelte-formula/docs/options"},next:{title:"Input: Text",permalink:"/svelte-formula/docs/fields-input-text"}},o=[{value:"<code>dirty</code>",id:"dirty",children:[{value:"Structure",id:"structure",children:[]},{value:"Emits",id:"emits",children:[]}]},{value:"<code>formValidity</code>",id:"formvalidity",children:[{value:"Structure",id:"structure-1",children:[]},{value:"Emits",id:"emits-1",children:[]}]},{value:"<code>formValues</code>",id:"formvalues",children:[{value:"Structure",id:"structure-2",children:[]},{value:"Emits",id:"emits-2",children:[]}]},{value:"<code>isFormValid</code>",id:"isformvalid",children:[{value:"Structure",id:"structure-3",children:[]},{value:"Emits",id:"emits-3",children:[]}]},{value:"<code>submitValues</code>",id:"submitvalues",children:[{value:"Structure",id:"structure-4",children:[]},{value:"Emits",id:"emits-4",children:[]}]},{value:"<code>touched</code>",id:"touched",children:[{value:"Structure",id:"structure-5",children:[]},{value:"Emits",id:"emits-5",children:[]}]},{value:"<code>validity</code>",id:"validity",children:[{value:"Structure",id:"structure-6",children:[]},{value:"Emits",id:"emits-6",children:[]}]}],u={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"All the stores listed below are Svelte Writable Stores."),Object(i.b)("h2",{id:"dirty"},Object(i.b)("inlineCode",{parentName:"h2"},"dirty")),Object(i.b)("h3",{id:"structure"},"Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Key - Single key for each ",Object(i.b)("inlineCode",{parentName:"li"},"name")," in the form, is a single key for both single and field groups"),Object(i.b)("li",{parentName:"ul"},"Value - Boolean value if the field value has been changed from the original value")),Object(i.b)("h3",{id:"emits"},"Emits"),Object(i.b)("p",null,"Emits when a user changes a field value then blurs"),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import {formula} from 'svelte-formula';\n  const {form, dirty} = formula();\n<\/script>\n<form use:form>\n  <label for='text-input'>Text Input</label>\n  <input type='text' required id='text-input' name='textvalue' />\n  <span hidden={!$dirty?.textvalue}>The value of this field has been changed</span>\n</form>\n")),Object(i.b)("h2",{id:"formvalidity"},Object(i.b)("inlineCode",{parentName:"h2"},"formValidity")),Object(i.b)("h3",{id:"structure-1"},"Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Key - Single key that is the name of the validation passed to ",Object(i.b)("inlineCode",{parentName:"li"},"formValidators")),Object(i.b)("li",{parentName:"ul"},"Value - A string value if validation has failed, or ",Object(i.b)("inlineCode",{parentName:"li"},"null")," if it passes")),Object(i.b)("h3",{id:"emits-1"},"Emits"),Object(i.b)("p",null,"Emits when a user changes a value, then custom ",Object(i.b)("inlineCode",{parentName:"p"},"formValidators")," have been passed"),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import {formula} from 'svelte-formula';\n  const {form, formValidity} = formula({\n  formValidators: {\n  passwordsMatch: (values) => values.password === values.passwordMatch ? null : 'Your passwords do not match'\n}\n});\n<\/script>\n<form use:form>\n  <label for='password'>Password</label>\n  <input type='password' required id='password' name='password' />\n  <label for='passwordMatch'>Password Match</label>\n  <input type='password' required id='passwordMatch' name='passwordMatch' />\n\n  <span hidden={!$formValidity?.passwordsMatch}>{$formValidity?.passwordsMatch}</span>\n</form>\n")),Object(i.b)("h2",{id:"formvalues"},Object(i.b)("inlineCode",{parentName:"h2"},"formValues")),Object(i.b)("h3",{id:"structure-2"},"Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Key - Single key for each ",Object(i.b)("inlineCode",{parentName:"li"},"name")," in the form, is a single key for both single and field groups"),Object(i.b)("li",{parentName:"ul"},"Value - Single value or Array of values from the fields")),Object(i.b)("h3",{id:"emits-2"},"Emits"),Object(i.b)("p",null,"Emits when a user changes a value anywhere in the form"),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import {formula} from 'svelte-formula';\n  const {form, formValues} = formula();\n\n  let total = 0;\n  $: formValues.subscribe(values => {\n  total = values?.value1 + values?.value2\n});\n<\/script>\n<form use:form>\n  <label for='value-1'>Value 1</label>\n  <input type='number' required id='value-1' name='value1' />\n  <label for='value-2'>Value 2</label>\n  <input type='number' required id='value-2' name='value2' />\n\n  <div>{$formValues?.value1} + {$formValues?.value2} = {total}</div>\n</form>\n")),Object(i.b)("h2",{id:"isformvalid"},Object(i.b)("inlineCode",{parentName:"h2"},"isFormValid")),Object(i.b)("h3",{id:"structure-3"},"Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A single boolean value")),Object(i.b)("h3",{id:"emits-3"},"Emits"),Object(i.b)("p",null,"When form validity changes"),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import {formula} from 'svelte-formula';\n  const {form, isFormValid} = formula();\n<\/script>\n<form use:form>\n  <label for='password'>Password</label>\n  <input type='password' required id='password' name='password' />\n  <label for='passwordMatch'>Password Match</label>\n  <input type='password' required id='passwordMatch' name='passwordMatch' />\n\n  <button disabled={!$isFormValid}>Submit</button>\n</form>\n")),Object(i.b)("h2",{id:"submitvalues"},Object(i.b)("inlineCode",{parentName:"h2"},"submitValues")),Object(i.b)("h3",{id:"structure-4"},"Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Key - Single key for each ",Object(i.b)("inlineCode",{parentName:"li"},"name")," in the form, is a single key for both single and field groups"),Object(i.b)("li",{parentName:"ul"},"Value - Single value or Array of values from the fields")),Object(i.b)("h3",{id:"emits-4"},"Emits"),Object(i.b)("p",null,"Emits when a user submits a ",Object(i.b)("inlineCode",{parentName:"p"},"<form>")," element"),Object(i.b)("h4",{id:"example-4"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import {formula} from 'svelte-formula';\n  const {form, submitValues} = formula();\n  const {apiCall} from './api-service.ts'\n\n  $: submitValues.subscribe(values => {\n  apiCall(values).then(result => {\n\n  })\n});\n<\/script>\n<form use:form>\n  <label for='password'>Password</label>\n  <input type='password' required id='password' name='password' />\n  <label for='passwordMatch'>Password Match</label>\n  <input type='password' required id='passwordMatch' name='passwordMatch' />\n\n  <button type='submit'>Submit</button>\n</form>\n")),Object(i.b)("h2",{id:"touched"},Object(i.b)("inlineCode",{parentName:"h2"},"touched")),Object(i.b)("h3",{id:"structure-5"},"Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Key - Single key for each ",Object(i.b)("inlineCode",{parentName:"li"},"name")," in the form, is a single key for both single and field groups"),Object(i.b)("li",{parentName:"ul"},"Value - Boolean value if the field has been touched")),Object(i.b)("h3",{id:"emits-5"},"Emits"),Object(i.b)("p",null,"Emits when a user focuses on a field"),Object(i.b)("h4",{id:"example-5"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import {formula} from 'svelte-formula';\n  const {form, touched} = formula();\n<\/script>\n<form use:form>\n  <label for='text-input'>Text Input</label>\n  <input type='text' required id='text-input' name='textvalue' />\n  <span hidden={!$touched?.textvalue}>The text input field has been touched</span>\n</form>\n")),Object(i.b)("h2",{id:"validity"},Object(i.b)("inlineCode",{parentName:"h2"},"validity")),Object(i.b)("h3",{id:"structure-6"},"Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Key - Single key for each ",Object(i.b)("inlineCode",{parentName:"li"},"name")," in the form, is a single key for both single and field groups"),Object(i.b)("li",{parentName:"ul"},"Value - An Object containing",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"valid")," - Boolean value if the field is valid"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"invalid")," - Boolean valid if the field is invalid"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"message")," - An text message returned by the validation - this will always be the most prominent message, HTML\nvalidation takes precedence over custom validation"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"errors")," - A key/value object containing keys of all errors applied to this field from both HTML and custom\nvalidation")))),Object(i.b)("h3",{id:"emits-6"},"Emits"),Object(i.b)("p",null,"Emits when a user changes a value anywhere in the form"),Object(i.b)("h4",{id:"example-6"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import {formula} from 'svelte-formula';\n  const {form, validity} = formula();\n<\/script>\n<form use:form>\n  <label for='text-input'>Text Input</label>\n  <input type='text' required id='text-input' name='textvalue' />\n  <span hidden={!$validity?.textvalue?.valid}>{$validity?.textvalue?.message}</span>\n</form>\n")))}d.isMDXComponent=!0}}]);