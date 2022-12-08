import{_ as l,r as s,o as c,c as h,a as e,d as t,w as i,b as o,e as d}from"./app.9c9ccab2.js";const u={},p=e("h1",{id:"explain-wasabi-like-i-m-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#explain-wasabi-like-i-m-5","aria-hidden":"true"},"#"),o(" Explain Wasabi like I'm 5")],-1),w={class:"table-of-contents"},y=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),o(" Introduction")],-1),b=e("p",null,"Wasabi Wallet is an open-source, non-custodial, privacy-focused Bitcoin wallet with built-in coinjoins. It is a piece of software that runs on your computer and helps you to manage your bitcoins. Although Wasabi has some very advanced magic under the hood, it is rather easy to use. You can generate a new set of seed words, or import already existing ones. With Wasabi you can receive bitcoins into your full control, and you can send them to someone else without needing permission from any other person or entity. There is also a powerful auto-coinjoin feature to help obfuscate your transaction history. You can use Wasabi to manage your hardware wallet, and it even connects to your own full node. Of course, Wasabi is libre and open-source, which means you have full control over the software you manage your money with.",-1),f=e("h2",{id:"installing-wasabi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-wasabi","aria-hidden":"true"},"#"),o(" Installing Wasabi")],-1),m={href:"https://wasabiwallet.io",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"generating-a-wallet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#generating-a-wallet","aria-hidden":"true"},"#"),o(" Generating a Wallet")],-1),_=e("p",null,"When you start Wasabi for the first time, the dialog to generate a new wallet will be open. You can set a unique name for the wallet so that you remember what it is for. In the next step, Wasabi will show your 12 recovery words. These must be carefully backed up, in the correct order, as they are needed to recover your wallet (together with the password) on another computer or in another wallet software. Next, choose a very secure password, as this encrypts the secrets, and should not be guessed by others. You will always need this password in order to spend your bitcoins, so take great care to back it up properly. Make sure you store the backup of your recovery words in a different location than the backup of your password.",-1),v=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"Backup both!"),e("p",null,"If you ever need to restore your wallet in Wasabi, or any other wallet, you will need both: your password AND your 12 recovery words.")],-1),k=e("h2",{id:"receiving-bitcoin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#receiving-bitcoin","aria-hidden":"true"},"#"),o(" Receiving bitcoin")],-1),W=e("p",null,[o("In order to receive bitcoin, you need to generate an address in the "),e("code",null,"Receive"),o(" dialog. But first, you must label it with the names of any observers who know that this address is yours. For example, if Alice pays you back for last nights pizza, then the label is "),e("code",null,"Alice"),o(". This is an important feature for you and the wallet to know which coin is from whom, and it will help with your privacy in the future. Once this newly generated address receives some coins, Wasabi Wallet will automatically hide this used address, so you don't reuse it by accident.")],-1),x=d('<h2 id="sending-bitcoin" tabindex="-1"><a class="header-anchor" href="#sending-bitcoin" aria-hidden="true">#</a> Sending bitcoin</h2><p>Sending process is different depending on the privacy of coins you have. Assuming you have enough private coins the sending process is the following:</p><ol><li>Click the <code>Send</code> button (top right corner) at the main view.</li><li>Insert the address of the receiver and type in the amount the receiver should get, then click <code>Continue</code>.</li><li>Enter the name of the person or company receiving the payment and click <code>Continue</code>.</li><li>Make sure everything is filled in correctly in <code>Preview Transaction</code> window and click <code>Confirm</code>.</li><li>Type in your password and click <code>Continue</code>.</li></ol><p>You will now see a pop-up window telling you that the transaction is broadcasted to the Bitcoin network.</p>',4),I=e("h2",{id:"coinjoin-with-wasabi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#coinjoin-with-wasabi","aria-hidden":"true"},"#"),o(" Coinjoin with Wasabi")],-1),j=e("p",null,[o("If you don't like that your employer knows where you spend your money, or that a merchant can find out how much money you have, then you should coinjoin your bitcoin, as this breaks link to its transaction history. Although the coinjoin protocol is a bit complex, it is very easy to use in Wasabi. The wallet automatically coinjoins all your funds, so that your money becomes private. This procress might take some time (hours/days). You can still use your wallet in the mean time, however it is a best practice to only use private funds, which the wallet does automatically when possible. At the wallet's homescreen the percentage indicates the progress to making your wallet fully private. The exact available private amount of bitcoin is listed as "),e("code",null,"PRIVATE"),o(".")],-1);function S(C,T){const a=s("router-link"),r=s("ExternalLinkIcon"),n=s("RouterLink");return c(),h("div",null,[p,e("nav",w,[e("ul",null,[e("li",null,[t(a,{to:"#introduction"},{default:i(()=>[o("Introduction")]),_:1})]),e("li",null,[t(a,{to:"#installing-wasabi"},{default:i(()=>[o("Installing Wasabi")]),_:1})]),e("li",null,[t(a,{to:"#generating-a-wallet"},{default:i(()=>[o("Generating a Wallet")]),_:1})]),e("li",null,[t(a,{to:"#receiving-bitcoin"},{default:i(()=>[o("Receiving bitcoin")]),_:1})]),e("li",null,[t(a,{to:"#sending-bitcoin"},{default:i(()=>[o("Sending bitcoin")]),_:1})]),e("li",null,[t(a,{to:"#coinjoin-with-wasabi"},{default:i(()=>[o("Coinjoin with Wasabi")]),_:1})])])]),y,b,f,e("p",null,[o("Installing Wasabi is super-easy. Go to the official website "),e("a",m,[o("wasabiwallet.io"),t(r)]),o(" and download the version for your operating system. You can then install Wasabi as you would do any other software on your computer.")]),e("p",null,[o("See "),t(n,{to:"/using-wasabi/InstallPackage.html"},{default:i(()=>[o("this chapter")]),_:1}),o(" for a detailed step-by-step tutorial for all operating systems, and also how to verify the PGP signature.")]),g,_,v,e("p",null,[o("See "),t(n,{to:"/using-wasabi/WalletGeneration.html"},{default:i(()=>[o("this chapter")]),_:1}),o(" for more information on how to securely generate your wallet.")]),k,W,e("p",null,[o("See "),t(n,{to:"/using-wasabi/Receive.html"},{default:i(()=>[o("this chapter")]),_:1}),o(" for a tutorial on how to properly label your addresses and receive bitcoin.")]),x,e("p",null,[o("See "),t(n,{to:"/using-wasabi/Send.html"},{default:i(()=>[o("this chapter")]),_:1}),o(" for more details about sending bitcoin and the privacy nuances of it.")]),I,j,e("p",null,[o("See "),t(n,{to:"/using-wasabi/CoinJoin.html"},{default:i(()=>[o("this chapter")]),_:1}),o(" for a thorough analysis of coinjoin, details on the Wasabi implementation and best practices on how to use it properly.")])])}const E=l(u,[["render",S],["__file","ELI5.html.vue"]]);export{E as default};
