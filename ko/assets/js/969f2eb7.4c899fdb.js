(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),l=n(8),o=(n(0),n(151)),a={title:"selector(options)",sidebar_label:"selector()"},c={unversionedId:"api-reference/core/selector",id:"api-reference/core/selector",isDocsHomePage:!1,title:"selector(options)",description:'Selector\ub294 Recoil\uc5d0\uc11c \ud568\uc218\ub098 \ud30c\uc0dd\ub41c \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc885\uc18d\uc131 \uac12 \uc9d1\ud569\uc5d0 \ub300\ud574 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \uac12\uc744 \ubc18\ud658\ud558\ub294 \ubd80\uc791\uc6a9\uc774 \uc5c6\ub294 "\uc21c\uc218\ud568\uc218"\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4. get \ud568\uc218\ub9cc \uc81c\uacf5\ub418\uba74 Selector\ub294 \uc77d\uae30\ub9cc \uac00\ub2a5\ud55c RecoilValueReadOnly \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4. set \ud568\uc218 \ub610\ud55c \uc81c\uacf5\ub418\uba74 Selector\ub294 \uc4f0\uae30 \uac00\ub2a5\ud55c RecoilState \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/selector.md",slug:"/api-reference/core/selector",permalink:"/ko/docs/api-reference/core/selector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/selector.md",version:"current",sidebar_label:"selector()",sidebar:"docs",previous:{title:"atom(options)",permalink:"/ko/docs/api-reference/core/atom"},next:{title:"class Loadable",permalink:"/ko/docs/api-reference/core/Loadable"}},i=[{value:"\ub3d9\uc801 \uc758\uc874\uc131",id:"\ub3d9\uc801-\uc758\uc874\uc131",children:[]},{value:"\uc4f0\uae30 \uac00\ub2a5\ud55c Selector",id:"\uc4f0\uae30-\uac00\ub2a5\ud55c-selector",children:[]},{value:"\ube44\ub3d9\uae30 Selector",id:"\ube44\ub3d9\uae30-selector",children:[]},{value:"\uc608\uc2dc (\ub3d9\uae30)",id:"\uc608\uc2dc-\ub3d9\uae30",children:[]},{value:"\uc608\uc2dc (\ube44\ub3d9\uae30)",id:"\uc608\uc2dc-\ube44\ub3d9\uae30",children:[]}],s={toc:i};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Selector"),"\ub294 Recoil\uc5d0\uc11c \ud568\uc218\ub098 ",Object(o.b)("strong",{parentName:"p"},"\ud30c\uc0dd\ub41c \uc0c1\ud0dc"),'\ub97c \ub098\ud0c0\ub0b8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc885\uc18d\uc131 \uac12 \uc9d1\ud569\uc5d0 \ub300\ud574 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \uac12\uc744 \ubc18\ud658\ud558\ub294 \ubd80\uc791\uc6a9\uc774 \uc5c6\ub294 "\uc21c\uc218\ud568\uc218"\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4. ',Object(o.b)("inlineCode",{parentName:"p"},"get")," \ud568\uc218\ub9cc \uc81c\uacf5\ub418\uba74 Selector\ub294 \uc77d\uae30\ub9cc \uac00\ub2a5\ud55c ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly")," \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4. ",Object(o.b)("inlineCode",{parentName:"p"},"set")," \ud568\uc218 \ub610\ud55c \uc81c\uacf5\ub418\uba74 Selector\ub294 \uc4f0\uae30 \uac00\ub2a5\ud55c ",Object(o.b)("inlineCode",{parentName:"p"},"RecoilState")," \uac1d\uccb4\ub97c \ubc18\ud658\ud55c\ub2e4."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function selector<T>({\n  key: string,\n\n  get: ({\n    get: GetRecoilValue\n  }) => T | Promise<T> | RecoilValue<T>,\n\n  set?: (\n    {\n      get: GetRecoilValue,\n      set: SetRecoilState,\n      reset: ResetRecoilState,\n    },\n    newValue: T | DefaultValue,\n  ) => void,\n\n  dangerouslyAllowMutability?: boolean,\n})\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"type ValueOrUpdater<T> =\n  | T\n  | DefaultValue\n  | ((prevValue: T) => T | DefaultValue);\ntype GetRecoilValue = <T>(RecoilValue<T>) => T;\ntype SetRecoilState = <T>(RecoilState<T>, ValueOrUpdater<T>) => void;\ntype ResetRecoilState = <T>(RecoilState<T>) => void;\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," - \ub0b4\ubd80\uc801\uc73c\ub85c atom\uc744 \uc2dd\ubcc4\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \uace0\uc720\ud55c \ubb38\uc790\uc5f4. \uc774 \ubb38\uc790\uc5f4\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc804\uccb4\uc5d0\uc11c \ub2e4\ub978 atom\uacfc selector\uc5d0 \ub300\ud574 \uace0\uc720\ud574\uc57c \ud55c\ub2e4. \uc9c0\uc18d\uc131\uc744 \uc704\ud558\uc5ec \uc0ac\uc6a9\ub41c\ub2e4\uba74 \uc2e4\ud589 \uc804\ubc18\uc5d0 \uac78\uccd0 \uc548\uc815\uc801\uc77c \ud544\uc694\uac00 \uc788\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get")," - \ud30c\uc0dd\ub41c \uc0c1\ud0dc\uc758 \uac12\uc744 \ud3c9\uac00\ud558\ub294 \ud568\uc218. \uac12\uc744 \uc9c1\uc811 \ubc18\ud658\ud558\uac70\ub098 \ube44\ub3d9\uae30\uc801\uc778 ",Object(o.b)("inlineCode",{parentName:"li"},"Promise"),"\ub098 \ub610\ub294 \uac19\uc740 \uc720\ud615\uc744 \ub098\ud0c0\ub0b4\ub294 \ub2e4\ub978 atom\uc774\ub098 selector\ub97c \ubc18\ud658\ud560 \uc218 \uc788\ub2e4. \uccab \ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub85c \ub2e4\uc74c \uc18d\uc131\uc744 \ud3ec\ud568\ud558\ub294 \uac1d\uccb4\ub97c \uc804\ub2ec\ud55c\ub2e4:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get")," - \ub2e4\ub978 atom\uc774\ub098 selector\ub85c\ubd80\ud130 \uac12\uc744 \ucc3e\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \ud568\uc218. \uc774 \ud568\uc218\uc5d0 \uc804\ub2ec\ub41c \ubaa8\ub4e0 atom\uacfc selector\ub294 \uc554\uc2dc\uc801\uc73c\ub85c selector\uc5d0 \ub300\ud55c ",Object(o.b)("strong",{parentName:"li"},"\uc758\uc874\uc131")," \ubaa9\ub85d\uc5d0 \ucd94\uac00\ub41c\ub2e4. Selector\uc758 \uc758\uc874\uc131\uc774 \ubcc0\uacbd\ub418\uba74 Selector\uac00 \ub2e4\uc2dc \ud3c9\uac00\ub41c\ub2e4."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set?")," - \uc774 \uc18d\uc131\uc774 \uc124\uc815\ub418\uba74 selector\ub294 ",Object(o.b)("strong",{parentName:"li"},"\uc4f0\uae30 \uac00\ub2a5\ud55c")," \uc0c1\ud0dc\ub97c \ubc18\ud658\ud55c\ub2e4. \uccab\ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub85c \ucf5c\ubc31 \uac1d\uccb4\uc640 \uc0c8\ub85c \uc785\ub825 \uac12\uc774 \uc804\ub2ec\ub41c\ub2e4. \uc0ac\uc6a9\uc790\uac00 selector\ub97c \uc7ac\uc124\uc815\ud560 \uacbd\uc6b0 \uc0c8\ub85c \uc785\ub825 \uac12\uc740 ",Object(o.b)("inlineCode",{parentName:"li"},"T")," \ud0c0\uc785\uc758 \uac12 \ub610\ub294 ",Object(o.b)("inlineCode",{parentName:"li"},"DefaultValue")," \ud0c0\uc785\uc758 \uac1d\uccb4\uc77c \uc218 \uc788\ub2e4. \ucf5c\ubc31\uc5d0\ub294 \ub2e4\uc74c\uc774 \ud3ec\ud568\ub41c\ub2e4.:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"get")," - \ub2e4\ub978 atom\uc774\ub098 selector\ub85c\ubd80\ud130 \uac12\uc744 \ucc3e\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \ud568\uc218. \uc774 \ud568\uc218\ub294 selector\ub97c \uc8fc\uc5b4\uc9c4 atom\uc774\ub098 selector\ub97c \uad6c\ub3c5\ud558\uc9c0 \uc54a\ub294\ub2e4."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"set")," - \uc5c5\uc2a4\ud2b8\ub9bc Recoil \uc0c1\ud0dc\uc758 \uac12\uc744 \uc124\uc815\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 \ud568\uc218. \uccab \ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub294 Recoil \uc0c1\ud0dc, \ub450 \ubc88\uc9f8 \ub9e4\uac1c\ubcc0\uc218\ub294 \uc0c8\ub85c\uc6b4 \uac12\uc774\ub2e4. \uc0c8\ub85c\uc6b4 \uac12\uc740 \uc5c5\ub370\uc774\ud2b8 \ud568\uc218\ub098 \uc7ac\uc124\uc815 \uc561\uc158\uc744 \uc804\ud30c\ud558\ub294 ",Object(o.b)("inlineCode",{parentName:"li"},"DefalutValue")," \uac1d\uccb4\uc77c \uc218 \uc788\ub2e4."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability"),' - Selector\ub294 \ud30c\uc0dd\ub41c \uc0c1\ud0dc\uc758 "\uc21c\uc218 \ud568\uc218"\ub97c \ub098\ud0c0\ub0b4\uba70 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \uc758\uc874\uc131 \uc785\ub825 \uac12 \uc9d1\ud569\uc5d0 \ub300\ud558\uc5ec \ub3d9\uc77c\ud55c \uac12\uc744 \ubc18\ud658\ud574\uc57c \ud55c\ub2e4. \uc774\ub97c \ubcf4\ud638\ud558\uae30 \uc704\ud574 selector\uc5d0 \uc800\uc7a5\ub41c \ubaa8\ub4e0 \uac12\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uace0\uc815\ub418\uc5b4 \uc788\ub2e4. \uacbd\uc6b0\uc5d0 \ub530\ub77c \uc774 \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc7ac\uc815\uc758\ud574\uc57c \ud560 \uc218 \uc788\ub2e4.')),Object(o.b)("hr",null),Object(o.b)("p",null,"\ub2e8\uc21c\ud55c \uc815\uc801\uc778 \uc758\uc874\uc131\uc774 \uc788\ub294 Selector:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => get(myAtom) * 100,\n});\n")),Object(o.b)("h3",{id:"\ub3d9\uc801-\uc758\uc874\uc131"},"\ub3d9\uc801 \uc758\uc874\uc131"),Object(o.b)("p",null,"\uc77d\uae30\ub9cc \uac00\ub2a5\ud55c selector\ub294 \uc758\uc874\uc131\uc744 \uae30\uc900\uc73c\ub85c selector\uc758 \uac12\uc744 \ud3c9\uac00\ud558\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"get")," \uba54\uc11c\ub4dc\ub97c \uac16\ub294\ub2e4. \uc758\uc874\uc131 \uc911 \uc5b4\ub5a0\ud55c \uac83\uc774 \uc5c5\ub370\uc774\ud2b8 \ub418\uba74 selector\ub294 \ub2e4\uc2dc \ud3c9\uac00\ub41c\ub2e4. Selector\ub97c \ud3c9\uac00\ud560 \ub54c \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud558\ub294 atom\uc774\ub098 selector\ub97c \uae30\ubc18\uc73c\ub85c \uc758\uc874\uc131\uc774 \ub3d9\uc801\uc73c\ub85c \uacb0\uc815\ub41c\ub2e4. \uc774\uc804 \uc758\uc874\uc131\uc758 \uac12\uc5d0 \ub530\ub77c \ub2e4\ub978 \ucd94\uac00\uc801\uc778 \uc758\uc874\uc131\uc744 \ub3d9\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. Recoil\uc740 Selector\uac00 \ud604\uc7ac \uc5c5\ub370\uc774\ud2b8\ub418\uc5b4\uc9c4 \uc758\uc874\uc131 \uc9d1\ud569\ub9cc \uad6c\ub3c5\ud558\ub3c4\ub85d \ud604\uc7ac \ub370\uc774\ud130 \ud750\ub984 \uadf8\ub798\ud504\ub97c \uc790\ub3d9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud55c\ub2e4."),Object(o.b)("p",null,"\uc544\ub798 \uc608\uc2dc\uc5d0\uc11c ",Object(o.b)("inlineCode",{parentName:"p"},"mySelector"),"\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"toggleState")," atom\ubfd0\ub9cc \uc544\ub2c8\ub77c ",Object(o.b)("inlineCode",{parentName:"p"},"toggleState"),"\uc5d0 \uc758\uc874\ud558\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"selectorA")," \ub610\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"selectorB")," selector\ub3c4 \uc758\uc874\ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const toggleState = atom({key: 'Toggle', default: false});\n\nconst mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => {\n    const toggle = get(toggleState);\n    if (toggle) {\n      return get(selectorA);\n    } else {\n      return get(selectorB);\n    }\n  },\n});\n")),Object(o.b)("h3",{id:"\uc4f0\uae30-\uac00\ub2a5\ud55c-selector"},"\uc4f0\uae30 \uac00\ub2a5\ud55c Selector"),Object(o.b)("p",null,"\uc591\ubc29\ud5a5 selector\ub294 \uc785\ub825 \uac12\uc744 \ub9e4\uac1c\ubcc0\uc218\ub85c \ubc1b\uace0 \ub370\uc774\ud130 \ud750\ub984 \uadf8\ub798\ud504\ub97c \ub530\ub77c \uc5c5\uc2a4\ud2b8\ub9bc\uc5d0\uc11c \ubcc0\uacbd\uc0ac\ud56d\uc744 \uc804\ud30c\ud558\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \uc0ac\uc6a9\uc790\uac00 selector\ub97c \uc0c8 \uac12\uc73c\ub85c \uc124\uc815\ud558\uac70\ub098 selector\ub97c \uc7ac\uc124\uc815\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc785\ub825 \uac12\uc740 selector\uac00 \ub098\ud0c0\ub0b4\ub294 \ud0c0\uc785\uacfc \ub3d9\uc77c\ud558\uac70\ub098 \uc7ac\uc124\uc815 \uc791\uc5c5\uc744 \ub098\ud0c0\ub0b4\ub294 ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultValue")," \uac1d\uccb4 \uc911 \ud558\ub098\uc774\ub2e4."),Object(o.b)("p",null,"\uc774 \uac04\ub2e8\ud55c selector\ub294 \uae30\ubcf8\uc801\uc73c\ub85c atom\uc744 \uac10\uc2f8\uc11c \ud544\ub4dc\ub97c \ucd94\uac00\ud55c\ub2e4. \uc774\uac83\uc740 \ub2e8\uc9c0 \uc124\uc815\uacfc \uc7ac\uc124\uc815 \uc791\uc5c5\uc744 \uc5c5\uc2a4\ud2b8\ub9bc atom\uae4c\uc9c0 \ud1b5\uacfc\ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const proxySelector = selector({\n  key: 'ProxySelector',\n  get: ({get}) => ({...get(myAtom), extraField: 'hi'}),\n  set: ({set}, newValue) => set(myAtom, newValue),\n});\n")),Object(o.b)("p",null,"\uc774 selector\ub294 \ub370\uc774\ud130\ub97c \ubcc0\ud658\ud558\ubbc0\ub85c \uc785\ub825 \uac12\uc774 ",Object(o.b)("inlineCode",{parentName:"p"},"DefaultValue"),"\uc778\uc9c0 \ud655\uc778\ud574\uc57c \ud55c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const transformSelector = selector({\n  key: 'TransformSelector',\n  get: ({get}) => get(myAtom) * 100,\n  set: ({set}, newValue) =>\n    set(myAtom, newValue instanceof DefaultValue ? newValue : newValue / 100),\n});\n")),Object(o.b)("h3",{id:"\ube44\ub3d9\uae30-selector"},"\ube44\ub3d9\uae30 Selector"),Object(o.b)("p",null,"Selector\ub294 \ub610\ud55c \ube44\ub3d9\uae30 \ud3c9\uac00 \ud568\uc218\ub97c \uac00\uc9c0\uace0 \uc788\uc73c\uba70 ",Object(o.b)("inlineCode",{parentName:"p"},"Promise"),"\ub97c \ucd9c\ub825\uac12\uc73c\ub85c \ubc18\ud658\ud560 \uc218 \uc788\ub2e4. \uc790\uc138\ud55c \uc815\ubcf4\ub294 \uc774 ",Object(o.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"\uac00\uc774\ub4dc"),"\ub97c \ubcf4\uba74 \ub41c\ub2e4."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const myQuery = selector({\n  key: 'MyQuery',\n  get: async ({get}) => {\n    return await myAsyncQuery(get(queryParamState));\n  },\n});\n")),Object(o.b)("h3",{id:"\uc608\uc2dc-\ub3d9\uae30"},"\uc608\uc2dc (\ub3d9\uae30)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilState, DefaultValue} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelcius = selector({\n  key: 'tempCelcius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) =>\n    set(\n      tempFahrenheit,\n      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32,\n    ),\n});\n\nfunction TempCelcius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelcius);\n  const resetTemp = useResetRecoilState(tempCelcius);\n\n  const addTenCelcius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n  const reset = () => resetTemp();\n\n  return (\n    <div>\n      Temp (Celcius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelcius}>Add 10 Celcius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n      <br />\n      <button onClick={reset}>>Reset</button>\n    </div>\n  );\n}\n")),Object(o.b)("h3",{id:"\uc608\uc2dc-\ube44\ub3d9\uae30"},"\uc608\uc2dc (\ube44\ub3d9\uae30)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import {selector, useRecoilValue} from 'recoil';\n\nconst myQuery = selector({\n  key: 'MyDBQuery',\n  get: async () => {\n    const response = await fetch(getMyRequestUrl());\n    return response.json();\n  },\n});\n\nfunction QueryResults() {\n  const queryResults = useRecoilValue(myQuery);\n\n  return <div>{queryResults.foo}</div>;\n}\n\nfunction ResultsSection() {\n  return (\n    <React.Suspense fallback={<div>Loading...</div>}>\n      <QueryResults />\n    </React.Suspense>\n  );\n}\n")),Object(o.b)("p",null,"\ub354 \ubcf5\uc7a1\ud55c \uc608\uc2dc\ub294 \uc774 ",Object(o.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"\uac00\uc774\ub4dc"),"\ub97c \ubcf4\uba74 \ub41c\ub2e4."))}u.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),l=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),u=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return n?l.a.createElement(d,c(c({ref:t},s),{},{components:n})):l.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);