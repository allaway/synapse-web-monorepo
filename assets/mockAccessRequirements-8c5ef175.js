import{E as O,O as u}from"./SynapseContext-3300ccd2.js";import{R as A,a as R}from"./RestrictionInformation-4ed2591e.js";import{A as f}from"./SynapseConstants-6db32387.js";var t=(e=>(e.CREATE="CREATE",e.READ="READ",e.UPDATE="UPDATE",e.DELETE="DELETE",e.CHANGE_PERMISSIONS="CHANGE_PERMISSIONS",e.DOWNLOAD="DOWNLOAD",e.UPLOAD="UPLOAD",e.PARTICIPATE="PARTICIPATE",e.SUBMIT="SUBMIT",e.READ_PRIVATE_SUBMISSION="READ_PRIVATE_SUBMISSION",e.UPDATE_SUBMISSION="UPDATE_SUBMISSION",e.DELETE_SUBMISSION="DELETE_SUBMISSION",e.TEAM_MEMBERSHIP_UPDATE="TEAM_MEMBERSHIP_UPDATE",e.SEND_MESSAGE="SEND_MESSAGE",e.CHANGE_SETTINGS="CHANGE_SETTINGS",e.MODERATE="MODERATE",e.REVIEW_SUBMISSIONS="REVIEW_SUBMISSIONS",e))(t||{}),d=(e=>(e[e.STRING=0]="STRING",e[e.DOUBLE=1]="DOUBLE",e[e.LONG=2]="LONG",e[e.TIMESTAMP_MS=3]="TIMESTAMP_MS",e))(d||{});const r=999,p="myUserName",m={summary:"My summary bio",firstName:"First",lastName:"Last",location:"Seattle, WA, USA",industry:"Biotechnology",company:"Sage Bionetworks",position:"My Job Title",ownerId:r.toString(),userName:p,createdOn:"2018-06-18T21:42:48.000Z",url:"https://sagebase.org"},S={userId:r.toString(),userProfile:m,ORCID:"https://orcid.org/0000-0000-0000-0000",isCertified:!0,isVerified:!0,isACTMember:!1},N={ownerId:r.toString(),firstName:m.firstName,lastName:m.lastName,userName:p,email:"test-user-email@sagebase.org",displayName:"Display Name",isIndividual:!0},a=1e3,T="AnotherUser",l={summary:"This is the summary of an additional user",firstName:"John",lastName:"Doe",location:"Boston, MA, USA",industry:"Research Science",company:"Some Company Inc.",position:"Lead Scientist",ownerId:a.toString(),userName:T,createdOn:"2018-06-18T21:42:48.000Z",url:"https://sagebase.org"},W={userId:a.toString(),userProfile:l,ORCID:"https://orcid.org/0000-0000-0000-0000",isCertified:!0,isVerified:!0,isACTMember:!1},b={ownerId:a.toString(),firstName:l.firstName,lastName:l.lastName,userName:T,email:"another-test-user@sagebase.org",displayName:"Johnathan Doegherty",isIndividual:!0},D={id:r,userProfile:m,userBundle:S,userGroupHeader:N},k={id:a,userProfile:l,userBundle:W,userGroupHeader:b},M={id:f,userProfile:null,userBundle:null,userGroupHeader:{ownerId:f.toString(),userName:"Synapse Access and Compliance Team",isIndividual:!1}},F=[D,k,M],o="syn12345",c="A Mock Project",i={name:c,id:o,etag:"7849ff2c-1c93-4104-adcf-9e6d6b0c50b5",createdOn:"2020-11-18T20:05:06.519Z",modifiedOn:"2021-05-19T12:44:35.457Z",createdBy:`${r}`,modifiedBy:`${r}`,parentId:"syn4489",concreteType:"org.sagebionetworks.repo.model.Project"},U={entity:i,entityType:O.PROJECT,annotations:{id:o,etag:"7849ff2c-1c93-4104-adcf-9e6d6b0c50b5",annotations:{projectImage:{type:d.STRING,value:["69006408"]},projectDescription:{type:d.STRING,value:["WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW"]},projectDisplayName:{type:d.STRING,value:["WWWWWWWWWWWWWWWWWW"]}}},permissions:{canView:!0,canEdit:!0,canAddChild:!0,canCertifiedUserEdit:!0,canCertifiedUserAddChild:!0,isCertifiedUser:!0,canChangePermissions:!0,canChangeSettings:!0,canDelete:!0,canDownload:!0,canUpload:!0,canEnableInheritance:!1,ownerPrincipalId:r,canPublicRead:!0,canModerate:!0,isCertificationRequired:!0},path:{path:[{name:"root",id:"syn4489",type:"org.sagebionetworks.repo.model.Folder"},{name:"A Mock Project",id:o,type:"org.sagebionetworks.repo.model.Project"}]},hasChildren:!0,accessControlList:{id:o,creationDate:"2020-11-18T20:05:06.540Z",etag:"f143bbfd-ba09-4a42-b1e9-f9368777ad9b",resourceAccess:[{principalId:r,accessType:[t.DELETE,t.CHANGE_SETTINGS,t.MODERATE,t.CHANGE_PERMISSIONS,t.UPDATE,t.READ,t.DOWNLOAD,t.CREATE]},{principalId:273948,accessType:[t.READ]},{principalId:273949,accessType:[t.READ]}]},fileHandles:[],rootWikiId:"607416",benefactorAcl:{id:o,creationDate:"2020-11-18T20:05:06.540Z",etag:"f143bbfd-ba09-4a42-b1e9-f9368777ad9b",resourceAccess:[{principalId:r,accessType:[t.DELETE,t.CHANGE_SETTINGS,t.MODERATE,t.CHANGE_PERMISSIONS,t.UPDATE,t.READ,t.DOWNLOAD,t.CREATE]},{principalId:273948,accessType:[t.READ]},{principalId:273949,accessType:[t.READ]}]},doiAssociation:{associationId:"9606623",etag:"ddef9fe1-56b2-42f5-9a3c-db2d6f15401b",doiUri:`10.7303/${o}`,doiUrl:`https://repo-prod.prod.sagebase.org/repo/v1/doi/locate?id=${o}&type=ENTITY`,objectId:o,objectType:u.ENTITY,associatedBy:`${r}`,associatedOn:"2021-01-04T15:42:18.000Z",updatedBy:`${r}`,updatedOn:"2021-04-28T18:49:48.000Z"},threadCount:2,restrictionInformation:{restrictionLevel:A.OPEN,hasUnmetAccessRequirement:!1}},P={name:c,id:o,type:"org.sagebionetworks.repo.model.Project",versionNumber:1,versionLabel:"1",benefactorId:12345,createdOn:i.createdOn,modifiedOn:i.modifiedOn,createdBy:i.createdBy,modifiedBy:i.modifiedBy},B={id:o,name:c,lastActivity:"2021-04-28T18:49:48.000Z",modifiedBy:parseInt(i.modifiedBy),modifiedOn:i.modifiedOn},h={name:c,id:o,etag:i.etag,createdOn:i.createdOn,modifiedOn:i.modifiedOn,createdBy:i.createdBy,modifiedBy:i.modifiedBy,parentId:"syn4489",concreteType:"org.sagebionetworks.repo.model.Project"},w={id:o,name:c,entity:i,bundle:U,entityHeader:P,projectHeader:B,json:h},g={id:"123",etag:"00924558-f46d-4f05-9f62-0686ddecf8ed",createdOn:"2017-08-23T18:48:37.515Z",createdBy:r.toString(),modifiedOn:"2022-12-06T23:18:27.877Z",modifiedBy:a.toString(),title:"",markdown:"Access to these data is controlled at the request of the data contributor(s) and due to the sensitive nature of the data. Click the **Request Access** button below to start your application, where you will be prompted to enter information about yourself and your research project.",attachmentFileHandleIds:[]},E={id:"124",etag:"00924558-f46d-4f05-9f62-0686ddecf8ed",createdOn:"2017-08-23T18:48:37.515Z",createdBy:r.toString(),modifiedOn:"2022-12-06T23:18:27.877Z",modifiedBy:a.toString(),title:"",markdown:"You must accept the terms of this self-sign access requirement. The terms are described here, and you sign it yourself.",attachmentFileHandleIds:[]},J=[g,E],_="987654321",j="987654322",q={id:`${_}`,etag:"abc-deg-4028-8eb8-aaaaa",createdBy:`${r}`,createdOn:"2016-05-09T22:08:22.000Z",concreteType:"org.sagebionetworks.repo.model.file.S3FileHandle",contentType:"application/octet-stream",contentMd5:"123456789",fileName:"mock-file.raw",storageLocationId:1,contentSize:20,bucketName:"proddata.sagebase.org",key:`${r}/mock-s3-key/file1.txt`,previewId:`${j}`,isPreview:!1},x={id:"76215986",etag:"95404487-9f9a-46ce-bf97-03d434579fb1",createdBy:`${r}`,createdOn:"2021-05-17T19:29:37.000Z",concreteType:"org.sagebionetworks.repo.model.file.S3FileHandle",contentType:"text/plain",fileName:"preview.txt",storageLocationId:1,contentSize:100,bucketName:"proddata.sagebase.org",key:`${r}/mock-s3-key`,isPreview:!0},I=w.id,n={id:1,name:"Mocked access requirement",etag:"26489045-3a98-405f-b214-9e1c90208c64",createdOn:"2019-02-06T21:17:25.790Z",modifiedOn:"2020-07-24T18:11:35.323Z",versionNumber:1,subjectIds:[{id:"syn12664802",type:R.ENTITY}],createdBy:"1981374",modifiedBy:"1981374",accessType:t.DOWNLOAD},s={...n,id:1,concreteType:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",areOtherAttachmentsRequired:!0,isCertifiedUserRequired:!0,isDUCRequired:!0,isIDUPublic:!0,isIDURequired:!0,ducTemplateFileHandleId:q.id,expirationPeriod:1e3*60*60*24,isIRBApprovalRequired:!0,isValidatedProfileRequired:!0},v={wikiPageId:g.id,ownerObjectId:s.id.toString(),ownerObjectType:u.ACCESS_REQUIREMENT},L={...n,id:2,concreteType:"org.sagebionetworks.repo.model.TermsOfUseAccessRequirement",termsOfUse:""},y={...n,id:3,concreteType:"org.sagebionetworks.repo.model.SelfSignAccessRequirement",isCertifiedUserRequired:!1,isValidatedProfileRequired:!1},C={wikiPageId:E.id,ownerObjectId:y.id.toString(),ownerObjectType:u.ACCESS_REQUIREMENT},H={...n,id:4,concreteType:"org.sagebionetworks.repo.model.ACTAccessRequirement",actContactInfo:"not web engineering",openJiraIssue:!0},G={...n,id:5,concreteType:"org.sagebionetworks.repo.model.LockAccessRequirement"};s.id.toString(),s.createdOn,s.modifiedOn,s.name,s.versionNumber.toString(),r.toString();const V=[s,L,y,H,G],z=[v,C];export{d as A,r as M,x as a,t as b,w as c,_ as d,a as e,F as f,S as g,m as h,V as i,z as j,J as k,s as l,q as m,y as n};
//# sourceMappingURL=mockAccessRequirements-8c5ef175.js.map
