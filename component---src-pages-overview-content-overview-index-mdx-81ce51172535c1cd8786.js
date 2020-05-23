(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{dFaY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i,l={},b=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:l},s=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Get familiar with using the ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/"}),"IBM Garage for Cloud Developer Tools"))),Object(n.b)("h2",null,"Developer Tools"),Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools is an environment for developing cloud-native applications for deployment\nto Kubernetes and Red Hat OpenShift. It embodies IBM Garage Method principles and practices for consistently developed\napplications incorporating best practices that increase developer velocity for efficient delivery of business value."),Object(n.b)("p",null,"The IBM GSI Enablement uses these assets to make the delivery of Cloud Native solutions with RedHat OpenShift on IBM Cloud as easy as possible. The following explains the design principles behind these assets. They are fully open source and can be extend, forked and branded to support your cloud native project requirements."),Object(n.b)("h3",null,"Overview"),Object(n.b)("p",null,"The to make production cloud native microservices you need to understand how DevOps works, this short video introducing the concepts of DevOps with Red Hat OpenShift"),Object(n.b)("iframe",{width:"80%",height:"500",src:"https://www.youtube.com/embed/GOPWObjFTsI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(n.b)("p",null),Object(n.b)("p",null,"Each development team installs its own copy of the Developer Tools environment into the team’s account.\nThe environment includes several features that support IBM Garage Method best practices for consistent and rapid development of cloud-native applications:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Installation"),": The Developer Tools are able to install themselves as a new environment "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Cluster"),": A Kubernetes or OpenShift cluster that both hosts the tools and itself is a deployment target for application builds"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"SDLC"),": Deployment target environments that support the application development lifecycle: ",Object(n.b)("em",{parentName:"li"},"dev"),", ",Object(n.b)("em",{parentName:"li"},"test"),", and ",Object(n.b)("em",{parentName:"li"},"staging")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Backend services"),": Cloud services commonly required by cloud-native applications for monitoring, security, and persistence"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CI/CD"),": A prebuilt, ready-to-run continuous delivery pipeline incorporating best-of-breed open source software tools"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Starter Kits"),": Prebuilt code templates for common application components and tasks incorporating best practices that developers can add to their codebase as needed"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Dashboard"),": A centralized tool to help developers use the environment’s other tools, Starter Kits, and so on"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Red Hat CRC"),": The tools can be installed into the RedHat CodeReady Containers environment")),Object(n.b)("p",null,"Some of the tools are sourced from the ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/catalog?search=label%3Ahelm#software"}),"IBM Bitnami Software Catalog")," that can be found in the IBM Cloud. This approach helps assemble these reliable open source development tools into an end-to-end developer experience that is fully integrated with IBM Cloud’s managed container services."),Object(n.b)("p",null,"Typically a ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/admin/overview"}),"Cloud System Admin")," or ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/culture/practice-building-effective-squads/"}),"squad leader")," installs and sets up a new Developer Tools environment after the ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/think/inception"}),"initial inception workshop"),",\nproviding a place for the developers to start developing the\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/think/inception/practice_minimum_viable_product"}),"minimum viable product (MVP)"),".\nThe objective is to reduce the time required for a team to configure and prepare their development environment.\nThe key benefit is to make the end-to-end\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_continuous_delivery/"}),"CI/CD development lifecycle"),"\nconsistent across each platform and make the out-of-the-box developer experience as simple as possible."),Object(n.b)("p",null,"The installation is performed using ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/terraform"}),"Terraform"),",\nwith a ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"}),"modular configuration")," so unneeded tools can be easily disabled or new tools added.\nThe combination of tools selected are proven in the industry to deliver real value for modern cloud-native development."),Object(n.b)("p",null,Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/rht-labs/labs-ci-cd"}),"Red Hat Open Innovation Labs CI/CD components")," embodies a very similar approach to how they deliver success with OpenShift."),Object(n.b)("h3",null,"Environment components"),Object(n.b)("p",null,"After installation, the Developer Tools environment consists of the following components and development tools:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A development cluster"),Object(n.b)("li",{parentName:"ul"},"A set of backend services"),Object(n.b)("li",{parentName:"ul"},"A set of continuous delivery tools")),Object(n.b)("p",null,"This diagram illustrates the Development Tools environment:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAADA0lEQVQoz0WSW2/iRhiG/Xf7A3rXmypUibRatWrVm10pkbpJ1dVudldpRcQCSRNzcGISgzkZMBiDzcFgMNjGp/G8dVypHembi5Hm0aPvfRka+OivLHTWNuhhjxlfBI0JquIK5s6Dd3Bj17FheX7j+tW3mcaf57hlSxF7X46Ll+eU/eMNvf6ap43cOb0t5ilDYoq+E6FrRynQ7nDwfQ/1gQ3DdBAGh3i9A9btsfj53dsTfTTAZDIhc20BvloGX7pDqynClm4h1B7A2O0HROMO4sTUcx24YQzXceFFAdzDIYH7MZJjbR3x6sfvTsbVPMSGSFqSQtm/Lmm78Jk2ezIdKBN6d89SZtnJwzL6CHo1zO8usfUTUxpDr1zD2yxBKFJgSIj4+9nbY7XbgtLvk4WxpaW/b9DgOSjqBFtzjVqtBkbeNjBbCaCeD2e/R2CsXv4jUho4bAz4QZgCbS8Qc78cnSybZXSGMhFaXVrNfoKS/whZHkLTNFQqFTBBROHUviIYPSNYzqGfXSShxAhTqxhBEKRAEoTiq7PT40epjX6vS3pSj2ZviiiLTcwmM+gzHVyVA+N7B+y9EHb3EW7vESv7gJgQJBcCP7F2nBSYqIrfXJwefxlKGMgysdYmvWLL+I27gtguYL3a4uEhAUaJQM9gMTY78N0A4K9Q1Ef4WW4jp49fUCnQj6L6x9c/ZZS6AGk0ILqm0myhiGy5gGabx3SigS2xYMIgwsJUsdkZSUVCzCUB/ZmGp+kYA11DHEX/hkJR/5I5yiiFNjpNkwz4Ff3A3uF9uQKzrUCaqKjxSSi248DabJNFz9AajmGFM2hWE/NNA7jh0BwP4w9r/YVZf//mdUbiK+Af66QuNGk+l6NcqUyf+Bp9ehZosVikTBRFaZE31h6mZWFvb2A5ZjrewsB2t4sXrp0CC79+/4PaEiCvnZi7vcd0aWKQzcJI7NRRB8LzMxgjqYnruv+N4/w/dlLs5C0GBTzPa5y+uzjqK1OoUy3o9WQy0XQiCQKZqiqRk6A4jiP/AMoEV6yOvZJ3AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Provisioned environment",title:"Provisioned environment",src:"/cloud-enterprise-examples/static/24e3dafaa58ff90ca780b38d7fb11ef4/3cbba/catalyst-provisioned-environment.png",srcSet:["/cloud-enterprise-examples/static/24e3dafaa58ff90ca780b38d7fb11ef4/7fc1e/catalyst-provisioned-environment.png 288w","/cloud-enterprise-examples/static/24e3dafaa58ff90ca780b38d7fb11ef4/a5df1/catalyst-provisioned-environment.png 576w","/cloud-enterprise-examples/static/24e3dafaa58ff90ca780b38d7fb11ef4/3cbba/catalyst-provisioned-environment.png 1152w","/cloud-enterprise-examples/static/24e3dafaa58ff90ca780b38d7fb11ef4/90155/catalyst-provisioned-environment.png 1375w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The diagram shows the components in the environment: the cluster, the deployment target environments, the cloud services, and the tools."),Object(n.b)("h4",null,"Development cluster"),Object(n.b)("p",null,"The heart of the the Developer Tools environment is a cluster:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An ",Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/container-service"}),"IBM Cloud Kubernetes Service"),"\nor ",Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/openshift"}),"Red Hat OpenShift on IBM Cloud")," 3-node cluster"),Object(n.b)("li",{parentName:"ul"},"Cluster namespace that encapsulates the tooling installed in the cluster: ",Object(n.b)("em",{parentName:"li"},"tools")),Object(n.b)("li",{parentName:"ul"},"Cluster namespaces for deployment target environments: ",Object(n.b)("em",{parentName:"li"},"dev"),", ",Object(n.b)("em",{parentName:"li"},"test"),", and ",Object(n.b)("em",{parentName:"li"},"staging"))),Object(n.b)("h4",null,"Backend services"),Object(n.b)("p",null,"The following IBM Cloud services are created and bound to the cluster:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Service"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Logging"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-getting-started"}),"LogDNA Logging")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Manage app logging LogDNA")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Monitoring"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started"}),"SysDig Monitoring")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Manage monitoring of apps with SysDig")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"AppID"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-service-access-management"}),"AppID Application Authentication")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Secure your apps, APIs and Kubernetes Ingress end points")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Cloudant"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Cloudant?topic=cloudant-getting-started"}),"Cloudant NoSQL Database")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"NoSQL Database commonly used for data persistence")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Cloud Object Storage"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/cloud-object-storage?topic=cloud-object-storage-getting-started"}),"Cloud Object Storage Storage")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Storage service commonly used for binary content")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"PostreSQL"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/databases-for-postgresql?topic=databases-for-postgresql-about"}),"PostgreSQL")," (used by SonarQube)"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"SQL Database used for structure data persistence")))),Object(n.b)("h4",null,"Continuous delivery tools"),Object(n.b)("p",null,"The following best-of-breed open source software tools are installed in the cluster’s ",Object(n.b)("em",{parentName:"p"},"tools")," namespace:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Tool"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Bitnami"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Integration"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://jenkins.io/"}),"Jenkins CI")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Jenkins is a common tool for Continuous Integration")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Integration"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://tekton.dev/"}),"Tekton CI")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Tekton is an emerging tool for Continuous Integration with Kubernetes and OpenShift")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Code Analysis"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://www.sonarqube.org/"}),"SonarQube")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"SonarQube can scan code and display the results in a dashboard")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Artifact and Helm Storage"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://jfrog.com/open-source/"}),"Artifactory")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Artifactory is an artifact storage and Helm chart repository")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Deployment"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://argoproj.github.io/argo-cd/"}),"ArgoCD")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"ArgoCD support Continuous Delivery with GitOps")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Contract API Testing"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://docs.pact.io/"}),"Pact")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Pact enables API contract testing")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Web IDE"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://www.eclipse.org/che/"}),"Eclipse CHE")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"IDE for editing and managing code in a web browser")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-content-overview-index-mdx-81ce51172535c1cd8786.js.map