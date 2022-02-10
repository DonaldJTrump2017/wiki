"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5865],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return g}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||s;return n?t.createElement(d,o(o({ref:a},p),{},{components:n})):t.createElement(d,o({ref:a},p))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9415:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var t=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],l={sidebar_position:3,sidebar_label:"Examples"},i="Examples",c={unversionedId:"api/examples",id:"api/examples",title:"Examples",description:"Here are small code snippets in a question-answer format for start to interact with the main Gear component.",source:"@site/docs/api/examples.md",sourceDirName:"api",slug:"/api/examples",permalink:"/api/examples",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/examples.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Examples"},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/api/cli"},next:{title:"Web3",permalink:"/general/web3"}},p=[{value:"Encode / decode payloads",id:"encode--decode-payloads",children:[],level:3},{value:"Getting metadata",id:"getting-metadata",children:[],level:3},{value:"Sign messages",id:"sign-messages",children:[],level:3},{value:"Upload program",id:"upload-program",children:[],level:3},{value:"Send message",id:"send-message",children:[],level:3},{value:"Read state of program",id:"read-state-of-program",children:[],level:3},{value:"Subscribe to events",id:"subscribe-to-events",children:[],level:3},{value:"Get blockHash by block number",id:"get-blockhash-by-block-number",children:[],level:3},{value:"Get block number by blockhash",id:"get-block-number-by-blockhash",children:[],level:3},{value:"Get all block&#39;s events",id:"get-all-blocks-events",children:[],level:3},{value:"Get all block&#39;s extrinsics",id:"get-all-blocks-extrinsics",children:[],level:3},{value:"Create keyring",id:"create-keyring",children:[],level:3}],m={toc:p};function u(e){var a=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Here are small code snippets in a question-answer format for start to interact with the main Gear component."),(0,s.kt)("h3",{id:"encode--decode-payloads"},"Encode / decode payloads"),(0,s.kt)("p",null,"Encode data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { CreateType } from '@gear-js/api';\n\n// If \"TypeName\" alredy registred\nconst result = CreateType.encode('TypeName', somePayload);\n// Otherwise need to add metadata containing TypeName and all required types\nconst result = CreateType.encode('TypeName', somePayload, metadata);\n")),(0,s.kt)("p",null,"By analogy data is decoded"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = CreateType.decode('TypeName', someBytes);\n// or\nconst result = CreateType.decode('TypeName', someBytes, metadata);\n")),(0,s.kt)("p",null,"Result of this functions is data of type ",(0,s.kt)("inlineCode",{parentName:"p"},"Codec")," and it has the next methods"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"result.toHex(); // - returns a hex represetation of the value\nresult.toHuman(); // - returns human friendly object representation of the value\nresult.toString(); //  - returns a string represetation of the value\nresult.toU8a(); // - encodes the value as a Unit8Array\nresult.toJSON(); // - converts the value to JSON\n")),(0,s.kt)("h3",{id:"getting-metadata"},"Getting metadata"),(0,s.kt)("p",null,"Getting metadata from program.meta.wasm"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { getWasmMetadata } from '@gear-js/api';\nconst fileBuffer = fs.readFileSync('path/to/program.meta.wasm');\nconst meta = await getWasmMetadata(fileBuffer);\n")),(0,s.kt)("h3",{id:"sign-messages"},"Sign messages"),(0,s.kt)("p",null,"Creating signature"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearKeyring } from '@gear-js/api';\nconst message = 'your message';\nconst signature = GearKeyring.sign(keyring, message);\n\n// Check signature\nconst publicKey = keyring.address;\nconst verified = GearKeyring.checkSign(publicKey, signature, message);\n")),(0,s.kt)("h3",{id:"upload-program"},"Upload program"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const code = fs.readFileSync('path/to/program.wasm');\n\nconst program = {\n  code,\n  gasLimit: 1000000,\n  value: 1000,\n  initPayload: somePayload,\n};\n\ntry {\n  const programId = await gearApi.program.submit(uploadProgram, meta);\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\n\ntry {\n  await gearApi.program.signAndSend(keyring, (event) => {\n    console.log(event.toHuman());\n  });\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\n")),(0,s.kt)("h3",{id:"send-message"},"Send message"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  const message = {\n    destination: destination, // programId\n    payload: somePayload,\n    gasLimit: 10000000,\n    value: 1000,\n  };\n  // In that case payload will be encoded using meta.handle_input type\n  await gearApi.message.submit(message, meta);\n  // So if you want to use another type you can specify it\n  await gearApi.message.submit(message, meta, meta.async_handle_input); // For example\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\ntry {\n  await gearApi.message.signAndSend(keyring, (event) => {\n    console.log(event.toHuman());\n  });\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\n")),(0,s.kt)("h3",{id:"read-state-of-program"},"Read state of program"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const metaWasm = fs.readFileSync('path/to/meta.wasm');\nconst state = gearApi.programState.read(programId, metaWasm);\n// If program expects inputValue in meta_state function it's possible to specify it\nconst state = gearApi.programState.read(programId, metaWasm, inputValue);\n")),(0,s.kt)("h3",{id:"subscribe-to-events"},"Subscribe to events"),(0,s.kt)("p",null,"Subscribe to all events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await gearApi.allEvents((events) => {\n  console.log(event.toHuman());\n});\n// Unsubscribe\nunsub();\n")),(0,s.kt)("p",null,"Check what the event is"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"gearApi.allEvents((events) => {\n  events\n    .filter(({ event }) => gearApi.events.gear.InitMessageEnqueued.is(event))\n    .forEach(({ event: { data } }) => {\n      console.log(data.toHuman());\n    });\n\n  events\n    .filter(({ event }) => gearApi.events.balances.Transfer.is(event))\n    .forEach(({ event: { data } }) => {\n      console.log(data.toHuman());\n    });\n});\n")),(0,s.kt)("p",null,"Subscribe to Log events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await gearApi.gearEvents.subscribeLogEvents(({ data: { id, source, dest, payload, reply } }) => {\n  console.log(`\n  logId: ${id.toHex()}\n  source: ${source.toHex()}\n  payload: ${payload.toHuman()}\n  `);\n});\n// Unsubscribe\nunsub();\n")),(0,s.kt)("p",null,"Subscribe to Program events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await gearApi.gearEvents.subscribeProgramEvents(({ method, data: { info, reason } }) => {\n  console.log(method);\n  console.log(`ProgramId: ${info.programId}`);\n  reason && console.log(`Reason: ${reason.toHuman()}`);\n});\n// Unsubscribe\nunsub();\n")),(0,s.kt)("p",null,"Subscribe to Transfer events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await gearApi.gearEvents.subscribeTransferEvents(({ data: { from, to, value } }) => {\n  console.log(`\n    Transfer balance:\n    from: ${from.toHex()}\n    to: ${to.toHex()}\n    value: ${+value.toString()}\n    `);\n});\n// Unsubscribe\nunsub();\n")),(0,s.kt)("p",null,"Subscribe to new blocks"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await gearApi.gearEvents.subscribeNewBlocks((header) => {\n  console.log(`New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`);\n});\n// Unsubscribe\nunsub();\n")),(0,s.kt)("h3",{id:"get-blockhash-by-block-number"},"Get blockHash by block number"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const hash = await gearApi.blocks.getBlockHash(blockNumber);\nconsole.log(hash.toHex());\n")),(0,s.kt)("h3",{id:"get-block-number-by-blockhash"},"Get block number by blockhash"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const hash = await gearApi.blocks.getBlockNumber(blockHash);\nconsole.log(hash.toNumber());\n")),(0,s.kt)("h3",{id:"get-all-blocks-events"},"Get all block's events"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const events = await gearApi.blocks.getEvents(blockHash);\nevents.forEach((event) => {\n  console.log(event.toHuman());\n});\n")),(0,s.kt)("h3",{id:"get-all-blocks-extrinsics"},"Get all block's extrinsics"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const extrinsics = await gearApi.blocks.getExtrinsics(blockHash);\nextrinsics.forEach((extrinsic) => {\n  console.log(extrinsic.toHuman());\n});\n")),(0,s.kt)("h3",{id:"create-keyring"},"Create keyring"),(0,s.kt)("p",null,"Creating a new keyring"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import { GearKeyring } from '@gear-js/api';\nconst { keyring, json } = await GearKeyring.create('keyringName', 'passphrase');\n")),(0,s.kt)("p",null,"Getting a keyring from JSON"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const jsonKeyring = fs.readFileSync('path/to/keyring.json').toString();\nconst keyring = GearKeyring.fromJson(jsonKeyring, 'passphrase');\n")),(0,s.kt)("p",null,"Getting JSON for keyring"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const json = GearKeyring.toJson(keyring, 'passphrase');\n")),(0,s.kt)("p",null,"Getting a keyring from seed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const seed = '0x496f9222372eca011351630ad276c7d44768a593cecea73685299e06acef8c0a';\nconst keyring = await GearKeyring.fromSeed(seed, 'name');\n")),(0,s.kt)("p",null,"Getting a keyring from mnemonic"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const mnemonic = 'slim potato consider exchange shiver bitter drop carpet helmet unfair cotton eagle';\nconst keyring = GearKeyring.fromMnemonic(mnemonic, 'name');\n")),(0,s.kt)("p",null,"Generate mnemonic and seed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const { mnemonic, seed } = GearKeyring.generateMnemonic();\n\n// Getting a seed from mnemonic\nconst { seed } = GearKeyring.generateSeed(mnemonic);\n")))}u.isMDXComponent=!0}}]);