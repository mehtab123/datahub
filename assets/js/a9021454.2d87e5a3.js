(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7959],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(4137)),o=["components"],l={title:"SQL Profiles",sidebar_label:"SQL Profiles",slug:"/metadata-ingestion/source_docs/sql_profiles",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/sql_profiles.md"},s="SQL Profiles",u={unversionedId:"metadata-ingestion/source_docs/sql_profiles",id:"metadata-ingestion/source_docs/sql_profiles",isDocsHomePage:!1,title:"SQL Profiles",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/sql_profiles.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/sql_profiles",permalink:"/docs/metadata-ingestion/source_docs/sql_profiles",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/sql_profiles.md",version:"current",frontMatter:{title:"SQL Profiles",sidebar_label:"SQL Profiles",slug:"/metadata-ingestion/source_docs/sql_profiles",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/sql_profiles.md"},sidebar:"overviewSidebar",previous:{title:"Snowflake",permalink:"/docs/metadata-ingestion/source_docs/snowflake"},next:{title:"Other SQLAlchemy databases",permalink:"/docs/metadata-ingestion/source_docs/sqlalchemy"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Capabilities",id:"capabilities",children:[]},{value:"Quickstart recipe",id:"quickstart-recipe",children:[]},{value:"Config details",id:"config-details",children:[]},{value:"Compatibility",id:"compatibility",children:[]},{value:"Questions",id:"questions",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sql-profiles"},"SQL Profiles"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To install this plugin, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[sql-profiles]'"),"."),(0,i.kt)("p",null,"The SQL-based profiler does not run alone, but rather can be enabled for other SQL-based sources.\nEnabling profiling will slow down ingestion runs."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Running profiling against many tables or over many rows can run up significant costs.\nWhile we've done our best to limit the expensiveness of the queries the profiler runs, you\nshould be prudent about the set of tables profiling is enabled on or the frequency\nof the profiling runs."))),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"Extracts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Row and column counts for each table"),(0,i.kt)("li",{parentName:"ul"},"For each column, if applicable:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"null counts and proportions"),(0,i.kt)("li",{parentName:"ul"},"distinct counts and proportions"),(0,i.kt)("li",{parentName:"ul"},"minimum, maximum, mean, median, standard deviation, some quantile values"),(0,i.kt)("li",{parentName:"ul"},"histograms or frequencies of unique values")))),(0,i.kt)("p",null,"Supported SQL sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/athena"},"AWS Athena")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/bigquery"},"BigQuery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/druid"},"Druid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/hive"},"Hive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/mssql"},"Microsoft SQL Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/mysql"},"MySQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/oracle"},"Oracle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/postgres"},"Postgres")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/redshift"},"Redshift")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/snowflake"},"Snowflake")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/sqlalchemy"},"Generic SQLAlchemy source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_docs/trino"},"Trino"))),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: <sql-source> # can be bigquery, snowflake, etc - see above for the list\n  config:\n    # ... any other source-specific options ...\n\n    # Options\n    profiling:\n      enabled: true\n\nsink:\n  # sink configs\n")),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"profiling.enabled")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether profiling should be done.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"profiling.limit")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Max number of documents to profile. By default, profiles all documents.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"profiling.offset")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Offset in documents to profile. By default, uses no offset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"profile_pattern.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to profile.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"profile_pattern.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to not profile.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"profile_pattern.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"profile.send_sample_values")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to send sample values or not.")))),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Coming soon!"),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}c.isMDXComponent=!0}}]);