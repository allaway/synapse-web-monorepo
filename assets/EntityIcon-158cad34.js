import{j as l,F as p}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{ce as m,E as e}from"./SynapseContext-3300ccd2.js";import{I as y,t as f}from"./IconSvg-55b995b5.js";const E=a=>{switch(a){case e.PROJECT:case e.FOLDER:case e.FILE:case e.TABLE:case e.LINK:case e.ENTITY_VIEW:case e.DOCKER_REPO:case e.SUBMISSION_VIEW:case e.DATASET:case e.DATASET_COLLECTION:case e.MATERIALIZED_VIEW:return f[a];default:return""}},r=a=>{const{type:t,style:i,className:s,includeTooltip:o=!0,...c}=a;if(!t)return l(p,{});const n=E(t);if(n==="")return console.warn("Could not retrieve icon for Entity with type: ",t),l(d.Fragment,{});const u=o?m(t):void 0;return l("span",{style:i,className:s,children:l(y,{icon:n,label:u,...c})})};try{r.displayName="EntityTypeIcon",r.__docgenInfo={description:"",displayName:"EntityTypeIcon",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SxProps<{}>"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"project"'},{value:'"folder"'},{value:'"file"'},{value:'"table"'},{value:'"link"'},{value:'"entityview"'},{value:'"dockerrepo"'},{value:'"submissionview"'},{value:'"dataset"'},{value:'"datasetcollection"'},{value:'"materializedview"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},includeTooltip:{defaultValue:null,description:"",name:"includeTooltip",required:!1,type:{name:"boolean"}}}}}catch{}export{r as E};
//# sourceMappingURL=EntityIcon-158cad34.js.map
