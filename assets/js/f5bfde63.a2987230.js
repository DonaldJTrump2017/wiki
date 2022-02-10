"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2600],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6518:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_label:"Interaction Between Programs",sidebar_position:4},l="Cross-contract communication",s={unversionedId:"developing-contracts/interactions-between-programs",id:"developing-contracts/interactions-between-programs",title:"Cross-contract communication",description:"This article explains how several programs (smart contracts) can communicate with each other by sending messages.",source:"@site/docs/developing-contracts/interactions-between-programs.md",sourceDirName:"developing-contracts",slug:"/developing-contracts/interactions-between-programs",permalink:"/developing-contracts/interactions-between-programs",editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/developing-contracts/interactions-between-programs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Interaction Between Programs",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Message Format",permalink:"/developing-contracts/messaging"},next:{title:"Program testing",permalink:"/developing-contracts/testing"}},p=[{value:"<code>My Token</code> contract",id:"my-token-contract",children:[],level:3},{value:"<code>Wallet</code> contract",id:"wallet-contract",children:[],level:3}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-contract-communication"},"Cross-contract communication"),(0,o.kt)("p",null,"This article explains how several programs (smart contracts) can communicate with each other by sending messages."),(0,o.kt)("p",null,"Two simple programs are taken as an example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"My Token")," - this contract will have an ability to mint tokens"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Wallet")," - this contract will store information about how many tokens the user has")),(0,o.kt)("h3",{id:"my-token-contract"},(0,o.kt)("inlineCode",{parentName:"h3"},"My Token")," contract"),(0,o.kt)("p",null,"Let's write the contract ",(0,o.kt)("inlineCode",{parentName:"p"},"My Token")," and the first step will be defining the contract struct that stores ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"balances")," of accounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Default, Encode, Decode, TypeInfo)]\npub struct MyToken {\n    name: String,\n    symbol: String,\n    balances: BTreeMap<ActorId, u128>,\n}\n")),(0,o.kt)("p",null,"Then we define ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," message types for contract initialization ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," and message handling ",(0,o.kt)("inlineCode",{parentName:"p"},"handle"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The contract will be initialized with the following struct:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct InitConfig {\n    name: String,\n    symbol: String,\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The incoming messages will call this contract either for minting tokens or request an account balance:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum Action {\n    Mint(u128),\n    BalanceOf(ActorId),\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The outcoming messages will either report a successful mint or the user's balance:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Encode, Decode, TypeInfo)]\npub enum Event {\n    Minted {\n        to: ActorId,\n        amount: u128,\n    },\n    BalanceOf(u128),\n}\n")))),(0,o.kt)("p",null,"It is necessary to define the message types in ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata!")," macro which is used to export functions from Rust:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'gstd::metadata! {\n    title: "MyFungibleToken",\n        init:\n            input: InitConfig,\n        handle:\n            input: Action,\n            output: Event,\n}\n')),(0,o.kt)("p",null,"The next step is to write the program initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'static mut TOKEN: Option<MyToken> = None;\n#[no_mangle]\npub unsafe extern "C" fn init() {\n    let config: InitConfig= msg::load().expect("Unable to decode InitConfig");\n    let token = MyToken {\n        name: config.name,\n        symbol: config.symbol,\n        balances: BTreeMap::new(),\n    };\n    TOKEN = Some(token);\n}\n')),(0,o.kt)("p",null,"Then we write the processing of incoming messages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\npub unsafe extern "C" fn handle() {\n    let action: Action = msg::load().expect("Could not load Action");\n    let token: &mut MyToken = TOKEN.get_or_insert(MyToken::default());\n    match action {\n        Action::Mint(amount) => {\n            token.mint(amount);\n        }\n        Action::BalanceOf(account)=> {\n            token.balance_of(&account);\n        }\n    }\n}\n')),(0,o.kt)("p",null,"And finally we write an implementation block for ",(0,o.kt)("inlineCode",{parentName:"p"},"MyToken"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyToken {\n    fn mint(&mut self, amount: u128) {\n        *self.balances.entry(msg::source()).or_insert(0) += amount;\n        msg::reply(\n            Event::Minted {\n                to: msg::source(),\n                amount\n            },\n            exec::gas_available() - GAS_RESERVE,\n            0,\n        );\n    }\n    fn balance_of(&mut self, account: &ActorId) {\n        let balance = self.balances.get(account).unwrap_or(&0);\n        msg::reply(\n            Event::Balance(*balance),\n            exec::gas_available() - GAS_RESERVE,\n            0,\n        );\n    }\n}\n")),(0,o.kt)("p",null,"Note that here we use ",(0,o.kt)("inlineCode",{parentName:"p"},"msg::source()")," which identifies the account that sends the current message being processed."),(0,o.kt)("h3",{id:"wallet-contract"},(0,o.kt)("inlineCode",{parentName:"h3"},"Wallet")," contract"),(0,o.kt)("p",null,"The second contract is very simple: it receives the message ",(0,o.kt)("inlineCode",{parentName:"p"},"AddBalance")," and replies with ",(0,o.kt)("inlineCode",{parentName:"p"},"BalanceAdded"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct AddBalance {\n   account: ActorId,\n   token_id: ActorId,\n}\n#[derive(Debug, Encode, Decode, TypeInfo)]\npub struct BalanceAdded {\n  account: ActorId,\n  token_id: ActorId,\n  amount: u128,\n}\ngstd::metadata! {\n   title: "Wallet",\n       handle:\n           input: AddBalance,\n           output: BalanceAdded,\n}\n')),(0,o.kt)("p",null," Since an account can have several different fungible tokens, the contract stores users and their balances in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'static mut WALLET: BTreeMap<ActorId, BTreeMap<ActorId,u128>> = BTreeMap::new();\n#[no_mangle]\npub unsafe extern "C" fn init() {}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Wallet")," contract sends the message to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyToken")," contract asking for the user balance. The address of the token contract is indicated in ",(0,o.kt)("inlineCode",{parentName:"p"},"AddBalance"),". "),(0,o.kt)("p",null,"Note that here we use the async messaging function ",(0,o.kt)("inlineCode",{parentName:"p"},"send_and_wait_for_reply"),", so ",(0,o.kt)("inlineCode",{parentName:"p"},"#[gstd::async_main]")," macro must be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[gstd::async_main]\nasync fn main() {\n    let msg: AddBalance = msg::load().expect("Failed to decode `AddBalance`");\n    let reply: Event = msg::send_and_wait_for_reply(\n        msg.token_id,\n        Action::BalanceOf(msg.account),\n        GAS_RESERVE,\n        0,\n    )\n    .await\n    .expect("Function call error");\n    if let Event::Balance(amount) = reply{\n        WALLET.entry(msg.account)\n                .and_modify(|id| *id.entry(msg.token_id).or_insert(0) += amount)\n                .or_insert_with(|| {\n                        let mut a = BTreeMap::new();\n                        a.insert(msg.token_id, amount);\n                        a\n                    }\n                );\n        msg::reply(\n            BalanceAdded {\n                account: msg.account,\n                token_id: msg.token_id,\n                amount,\n            },\n            exec::gas_available() - GAS_RESERVE,\n            0,\n        );\n    }\n}\n')))}m.isMDXComponent=!0}}]);