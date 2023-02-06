import{a as n,j as e,F as A}from"./jsx-runtime-670450c2.js";import{r as b}from"./index-f1f749bf.js";import{a4 as j,ce as R,ai as K,cv as H,cw as $,aj as x,ak as U}from"./SynapseContext-3300ccd2.js";import{g as q,B as P}from"./getEndpoint-5374ab4d.js";import{H as z,u as k}from"./AccessRequirementList-dd00a364.js";import{M as _}from"./Modal-29f84dca.js";import{T as G}from"./Typography-f91bff1f.js";import{S as D}from"./Skeleton-38aaf623.js";import{T as J}from"./Clear-ddba1ff0.js";import{B as W}from"./Button-7d415009.js";import{d as Q}from"./ToastMessage-808a1c1f.js";import{u as X,S as Y}from"./SchemaDrivenAnnotationEditor-cb904601.js";import{e as Z}from"./useEntity-7d14ccdc.js";import{S as ee}from"./SkeletonTable-0f4766bf.js";import{i as ae}from"./isEmpty-82be34f0.js";import{d as S}from"./dayjs.min-e0adaab4.js";import{f as g}from"./DateFormatter-f07c5cf3.js";import{g as te,a as ne}from"./FileHandleUtils-a3470089.js";import{U as C}from"./UserCard-489e76be.js";function I(a){const{copy:l,skeleton:t,...i}=a;return a.skeleton?e(D,{variant:"rectangular",width:150}):e(J,{title:i["data-tip"]??"",placement:"top",enterNextDelay:300,children:e(W,{...i,children:l})})}const M=a=>{var l;return n(_,{className:`FluidModal bootstrap-4-backport ${a.className??""}`,backdrop:"static",animation:!1,show:a.show,onHide:a.onClose,children:[e(_.Header,{closeButton:!0,children:e(_.Title,{children:n(G,{variant:"headline1",component:"span",children:[a.title,a.titlePopoverProps&&e(z,{placement:"right",...a.titlePopoverProps,className:"SRC-margin-left-5 "+(((l=a.titlePopoverProps)==null?void 0:l.className)??"")})]})})}),e(_.Body,{children:a.children}),n(_.Footer,{children:[a.secondaryActions&&a.secondaryActions.reverse().map((t,i)=>e(I,{variant:"outline",...t},i)),a.primaryAction&&e(I,{variant:"sds-primary",...a.primaryAction})]})]})};try{M.displayName="FluidModal",M.__docgenInfo={description:"Full-screen modal that scales with screen size. Fits requirements defined in SWC-5801",displayName:"FluidModal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | Element"}},titlePopoverProps:{defaultValue:null,description:"",name:"titlePopoverProps",required:!1,type:{name:"HelpPopoverProps"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"ModalAction"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"ModalAction[]"}}}}}catch{}const w=({entityId:a})=>{const{isInExperimentalMode:l}=j(),{entityMetadata:t,annotations:i,isLoading:u}=Z(a),{data:r}=X(a,{enabled:l});return u?e(ee,{numRows:3,numCols:2}):n(A,{children:[t&&i&&ae(i)?n("div",{className:"placeholder",children:["This"," ",R(K(t.concreteType))," ","has no annotations."]}):null,e("table",{className:"AnnotationsTable",children:n("tbody",{children:[i&&Object.keys(i).map(o=>n("tr",{className:"AnnotationsTable__Row",children:[e("td",{className:"AnnotationsTable__Row__Key",children:o}),e("td",{className:"AnnotationsTable__Row__Value",children:Array.isArray(i[o])?i[o].join(", "):i[o].toString()})]},o)),r&&l?n("tr",{className:"AnnotationsTable__Row",children:[e("td",{className:"AnnotationsTable__Row__Key Schema",children:"Validation Schema"}),e("td",{className:"AnnotationsTable__Row__Value",children:e("a",{href:`${q(P.REPO_ENDPOINT)}repo/v1/schema/type/registered/${r.jsonSchemaVersionInfo.$id}`,target:"_blank",rel:"noopener noreferrer",children:r.jsonSchemaVersionInfo.schemaName})})]}):null]})})]})};try{w.displayName="AnnotationsTable",w.__docgenInfo={description:"",displayName:"AnnotationsTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}const v=({entityId:a,versionNumber:l})=>{var o,d,y,c,m,p;const{data:t}=k(a,l),i=t&&H(t.entity),u=t?te(t):void 0;let r;return u&&(r=ne(u)),t?e("table",{className:"MetadataTable",children:n("tbody",{children:[n("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Name"}),e("td",{className:"MetadataTable__Row__Value",children:(o=t.entity)==null?void 0:o.name})]}),n("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Type"}),e("td",{className:"MetadataTable__Row__Value",children:R(t.entityType)})]}),n("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Synapse ID"}),e("td",{className:"MetadataTable__Row__Value",children:(d=t.entity)==null?void 0:d.id})]}),i&&n("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Version"}),e("td",{className:"MetadataTable__Row__Value",children:$(t.entity)})]}),r&&n("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Storage"}),e("td",{className:"MetadataTable__Row__Value",children:r})]}),n("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:" Last Modified By"}),n("td",{className:"MetadataTable__Row__Value",children:[e(C,{size:"SMALL USER CARD",ownerId:(y=t.entity)==null?void 0:y.modifiedBy})," ","at ",g(S((c=t.entity)==null?void 0:c.modifiedOn))]})]}),n("tr",{className:"MetadataTable__Row",children:[e("td",{className:"MetadataTable__Row__Key",children:"Created By"}),n("td",{className:"MetadataTable__Row__Value",children:[e(C,{size:"SMALL USER CARD",ownerId:(m=t.entity)==null?void 0:m.createdBy})," ","at ",g(S((p=t.entity)==null?void 0:p.createdOn))]})]})]})}):null};try{v.displayName="MetadataTable",v.__docgenInfo={description:"",displayName:"MetadataTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}}}catch{}var E=(a=>(a.METADATA="METADATA",a.ANNOTATIONS="ANNOTATIONS",a))(E||{});const O=({entityId:a,versionNumber:l,show:t,onClose:i,initialTab:u="METADATA",showTabs:r=!0})=>{const o=b.useRef(null),[d,y]=b.useState(u),[c,m]=b.useState(!1),[p,B]=b.useState(!1),{data:s}=k(a,l),F=s&&s.permissions.canEdit,N=s&&x(s.entityType),V=N&&s.entity.isLatestVersion;let h,T;return s?window.location.href.includes(a)||(h={skeleton:!1,copy:`Open ${R(s.entityType)}`,onClick:()=>window.open(`${q(P.PORTAL_ENDPOINT)}#!Synapse:${a}`,"_blank","noopener")}):(h={skeleton:!0},T=void 0),d==="ANNOTATIONS"&&(c?(h={copy:"Save Annotations",onClick:()=>{o.current.formElement.dispatchEvent(new CustomEvent("submit",{cancelable:!0,bubbles:!0}))}},T=[{copy:p?"Are you sure? Unsaved changes will be lost":"Cancel",onClick:()=>{p&&m(!1),B(!p)}}]):F&&(T=[{copy:"Edit",disabled:N&&!V,"data-for":"entityModalTooltip","data-tip":N&&!V?"Annotations can only be edited on the latest version":void 0,onClick:()=>{m(!0)}}])),e(A,{children:e(M,{className:`EntityMetadata ${c?"isInEditMode":""}`,title:s?e(_.Title,{children:s.entity.name}):e(D,{width:"40%"}),show:t,onClose:i,primaryAction:h,secondaryActions:T,children:n(A,{children:[r&&!c?e("div",{className:"Tabs",children:Object.keys(E).map(f=>e("div",{className:"Tab",role:"tab",onClick:L=>{L.stopPropagation(),y(E[f])},"aria-selected":f===d,children:f},f))}):null,e("div",{style:d==="ANNOTATIONS"?{}:{display:"none"},children:c?e(U,{children:e(Y,{entityId:a,formRef:o,onSuccess:()=>{Q("Annotations successfully updated.","success"),m(!1)},onCancel:()=>m(!1)})}):e(w,{entityId:a,versionNumber:l})}),e("div",{style:d==="METADATA"?{}:{display:"none"},children:e(v,{entityId:a,versionNumber:l})})]})})})};try{O.displayName="EntityModal",O.__docgenInfo={description:"",displayName:"EntityModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},initialTab:{defaultValue:{value:"EntityModalTabs.METADATA"},description:"",name:"initialTab",required:!1,type:{name:"enum",value:[{value:'"METADATA"'},{value:'"ANNOTATIONS"'}]}},showTabs:{defaultValue:{value:"true"},description:"",name:"showTabs",required:!1,type:{name:"boolean"}}}}}catch{}export{O as E,M as F,E as a};
//# sourceMappingURL=EntityModal-575cca9f.js.map
