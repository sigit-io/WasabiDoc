import{_ as d}from"./Logo_without_text_with_bg_dark_with_yt.82339e58.js";import{_ as h,a as u,b as l}from"./SendFeeSlider.c5043cab.js";import{_ as p}from"./CoinjoinStrategy.5455b7fb.js";import{_ as m,r,o as b,c as f,a as e,d as o,w as i,b as t,e as c}from"./app.74f2e2ab.js";const y="/SendButton.png",_="/Send.png",g="/SendRecipientLabel.png",w="/SendChangeFee.png",v="/SendPrivacySuggestion.png",W="/SendPreviewTransaction.png",k="/SendPassword.png",S="/PaymentSuccessful.png",x={},T=e("h1",{id:"send",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#send","aria-hidden":"true"},"#"),t(" Send")],-1),A={class:"table-of-contents"},C={href:"https://youtu.be/vCI5aza-lv0",title:"Send in Wasabi Wallet",target:"_blank",rel:"noopener noreferrer"},F=e("img",{src:d,alt:"Send in Wasabi Wallet"},null,-1),P=c('<h2 id="how-to-send-bitcoin-step-by-step" tabindex="-1"><a class="header-anchor" href="#how-to-send-bitcoin-step-by-step" aria-hidden="true">#</a> How to send bitcoin step-by-step</h2><ol><li>Click the <code>Send</code> button.</li></ol><p><img src="'+y+'" alt="Wasabi Wallet Send Button" title="Wasabi Wallet Send Button"></p><ol start="2"><li>Enter the destination address.</li></ol><p><img src="'+u+'" alt="Wasabi Wallet Send To Field" title="Wasabi Wallet Send To Field"></p><ol start="3"><li>Specify the amount of bitcoin to send to the destination address. Optionally, you can specify the dollar amount to send instead.</li></ol><p><img src="'+l+'" alt="Wasabi Wallet Send Amount Field" title="Wasabi Wallet Send Amount Field"></p><ol start="4"><li>Click <code>Continue</code>.</li></ol><p><img src="'+_+'" alt="Wasabi Wallet Send" title="Wasabi Wallet Send"></p><ol start="5"><li>Label the recipient by entering the name of the person or company who you are sending to.</li></ol><p><img src="'+g+'" alt="Wasabi Wallet Send Recipient Label" title="Wasabi Wallet Send Recipient Label"></p><ol start="6"><li><p>Preview Transaction.</p><ul><li>Verify the amount, recipient, and the address.</li><li>Review the estimated time for confirmation and the transaction fee. Optionally, you can change the transaction fee or confirmation time by clicking on the edit fee icon.</li></ul><p><img src="'+w+'" alt="Wasabi Wallet Send Change Fee" title="Wasabi Wallet Send Change Fee"></p><ul><li>Review the suggestions to improve your privacy by clicking the shield icon in the top right corner. For example, you may want to slightly increase or decrease your payment amount to avoid change.</li></ul><p><img src="'+v+'" alt="Wasabi Wallet Send Privacy Suggestion" title="Wasabi Wallet Send Privacy Suggestion"></p></li><li><p>Click <code>Confirm</code>.</p></li></ol><p><img src="'+W+'" alt="Wasabi Wallet Send Preview Transaction" title="Wasabi Wallet Send Preview Transaction"></p><ol start="8"><li>Type in your password, then click <code>Continue</code>.</li></ol><p><img src="'+k+'" alt="Wasabi Wallet Send Password" title="Wasabi Wallet Send Password"></p><ol start="9"><li>Transaction successfully sent!</li></ol><p><img src="'+S+'" alt="Wasabi Wallet Payment Successful" title="Wasabi Wallet Payment Successful"></p><h2 id="coins" tabindex="-1"><a class="header-anchor" href="#coins" aria-hidden="true">#</a> Coins</h2>',18),B=e("code",null,"Send",-1),I=e("h2",{id:"clusters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clusters","aria-hidden":"true"},"#"),t(" Clusters")],-1),R=e("code",null,"Alice",-1),j=e("code",null,"Alice, Bob",-1),L=e("h2",{id:"anonymity-set",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#anonymity-set","aria-hidden":"true"},"#"),t(" Anonymity Set")],-1),E=e("p",null,[t("A typical bitcoin transaction will contain one input and two outputs - one of the outputs is the coin you are sending and the other output is the change coin that goes back to your wallet. Your change coin can be linked to this one input. There is a 1 in 1 chance to find this link and no plausible deniability. Thus, Wasabi denotes this coin's anonymity set as "),e("code",null,"1"),t(".")],-1),O=e("p",null,[t("There are three coinjoin strategies to choose from in Wasabi Wallet which effect the target anonymity score for your coins. These three strategies are "),e("code",null,"Minimize Cost"),t(", "),e("code",null,"Maximize Speed"),t(", and "),e("code",null,"Maximize Privacy"),t(". Each of these strategies come with different trade-offs.")],-1),M=e("p",null,"Alternatively, custom coinjoin settings can be configured.",-1),U=e("p",null,[e("img",{src:p,alt:"Coinjoin Strategy",title:"Coinjoin Strategy"})],-1),z=e("h2",{id:"receiving-address",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#receiving-address","aria-hidden":"true"},"#"),t(" Receiving Address")],-1),N=e("code",null,"1",-1),V=e("code",null,"3",-1),q=e("code",null,"bc1q",-1),Y=e("code",null,"bc1p",-1),H=e("h2",{id:"observers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#observers","aria-hidden":"true"},"#"),t(" Observers")],-1),Q=c('<h2 id="amount" tabindex="-1"><a class="header-anchor" href="#amount" aria-hidden="true">#</a> Amount</h2><p>In the <code>Amount</code> text box you can specify how many bitcoins the receiving address will gain. You can also see and enter the current US Dollar value of the sending amount.</p><div class="custom-container tip"><p class="custom-container-title">Avoid sending rounded values</p><p>If you specify a rounded amount, like <code>0.0100 0000 bitcoin</code>, then the change output will not be rounded, like <code>0.0896 8413 bitcoin</code>. This makes it easy for an observer to conclude that the spending amount was the <code>0.01 bitcoin</code>, and that the other output is the change back to the sender. So in order to increase your privacy, you can set a non-rounded amount, like <code>0.0101 6843</code>.</p></div><p><img src="'+l+'" alt="Send Amount Field" title="Send Amount Field"></p><h2 id="mining-fee" tabindex="-1"><a class="header-anchor" href="#mining-fee" aria-hidden="true">#</a> Mining Fee</h2>',5),X=e("code",null,"value of inputs - value of outputs",-1),D=e("code",null,"smart fee",-1),G=e("p",null,[e("img",{src:h,alt:"Wasabi Wallet Fee Slider",title:"Wasabi Wallet Fee Slider"})],-1),J=e("p",null,[t("In some cases, there is very little demand for block space, and then Wasabi will set the minimum fee of "),e("code",null,"1 sat/vByte"),t(".")],-1),$={class:"custom-container tip"},K=e("p",{class:"custom-container-title"},"High-priority transaction fees",-1),Z=e("p",null,"If you have a transaction that is high-priority and you really want it to be confirmed ASAP:",-1),ee={href:"https://mempool.space",target:"_blank",rel:"noopener noreferrer"},te={href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/",target:"_blank",rel:"noopener noreferrer"},oe=e("li",null,"Select a fee that is well above the current highest fee (perhaps double or triple it) if it is very important to you that the transaction is confirmed soon.",-1),ie={href:"https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0",target:"_blank",rel:"noopener noreferrer"},ne=e("h2",{id:"password",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#password","aria-hidden":"true"},"#"),t(" Password")],-1),ae=e("h2",{id:"broadcast",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#broadcast","aria-hidden":"true"},"#"),t(" Broadcast")],-1),se=e("p",null,"Once the transaction is signed, Wasabi will connect to a random Bitcoin P2P node over Tor and provide this transaction, then it will immediately disconnect. This first node will gossip the transaction throughout the network, then miners can include it in a block.",-1);function re(le,ce){const n=r("router-link"),s=r("ExternalLinkIcon"),a=r("RouterLink");return b(),f("div",null,[T,e("nav",A,[e("ul",null,[e("li",null,[o(n,{to:"#how-to-send-bitcoin-step-by-step"},{default:i(()=>[t("How to send bitcoin step-by-step")]),_:1})]),e("li",null,[o(n,{to:"#coins"},{default:i(()=>[t("Coins")]),_:1})]),e("li",null,[o(n,{to:"#clusters"},{default:i(()=>[t("Clusters")]),_:1})]),e("li",null,[o(n,{to:"#anonymity-set"},{default:i(()=>[t("Anonymity Set")]),_:1})]),e("li",null,[o(n,{to:"#receiving-address"},{default:i(()=>[t("Receiving Address")]),_:1})]),e("li",null,[o(n,{to:"#observers"},{default:i(()=>[t("Observers")]),_:1})]),e("li",null,[o(n,{to:"#amount"},{default:i(()=>[t("Amount")]),_:1})]),e("li",null,[o(n,{to:"#mining-fee"},{default:i(()=>[t("Mining Fee")]),_:1})]),e("li",null,[o(n,{to:"#password"},{default:i(()=>[t("Password")]),_:1})]),e("li",null,[o(n,{to:"#broadcast"},{default:i(()=>[t("Broadcast")]),_:1})])])]),e("p",null,[e("a",C,[F,o(s)])]),P,e("p",null,[t("A coin is an unspent transaction output (UTXO): a chunk of bitcoin that can be sent in a future transaction. Unlike fiat currencies which have fixed denominations, each UTXO contains a variable amount of bitcoin. You can get coins by first "),o(a,{to:"/using-wasabi/Receive.html"},{default:i(()=>[t("receiving")]),_:1}),t(" them from someone else. When you want to send some bitcoin you simply enter the amount to send and the address after clicking the "),B,t(" button. Wasabi Wallet does the job of automatically selecting the appropriate combination of coins to include as inputs in the transaction.")]),I,e("p",null,[t("Every time you receive a payment, you first must "),o(a,{to:"/using-wasabi/Receive.html#the-importance-of-labeling"},{default:i(()=>[t("label the observers")]),_:1}),t(" who know this address is yours. This transaction metadata is used to build a cluster of which people know about your coins. For example, if you receive a coin from Alice, then the cluster is "),R,t(". If you now send half of this coin to Bob, then the cluster of your change coin is "),j,t(". The goal is to know the observers who know about your coins and try to reduce their number for each coin.")]),L,E,e("p",null,[t("In a Wasabi "),o(a,{to:"/using-wasabi/CoinJoin.html"},{default:i(()=>[t("coinjoin")]),_:1}),t(", many peers register coins in the input of the transaction, and in the output there are several equal value coins. For example, the output may contain 20 coins worth exactly 0.3 bitcoin. This means that when looking at one of these coinjoin outputs, there is a 1 in 20 chance to find the corresponding input: thus an anonymity set of 20. Therefore, the higher the anonymity set, the more your post-coinjoin coin is delinked from the pre-coinjoin history.")]),O,M,U,z,e("p",null,[t("When sending bitcoin, you need to know the destination address of the receiver. This commits to the spending condition that the receiver agrees to have for this coin. The address can be a public key hash [starting with "),N,t("], a script hash [starting with "),V,t("], a native SegWit bech32 public key hash [starting with "),q,t("], or a Taproot bech32m public key [starting with "),Y,t("]. Make sure that you ask the receiver for a "),o(a,{to:"/why-wasabi/AddressReuse.html"},{default:i(()=>[t("new address")]),_:1}),t(" for every payment to protect your privacy and theirs. Wasabi will calculate the checksum and notify you if the provided address is wrong.")]),H,e("p",null,[t("In Wasabi it is mandatory to provide one or more "),o(a,{to:"/using-wasabi/Receive.html#the-importance-of-labeling"},{default:i(()=>[t("labels")]),_:1}),t(" each time you initiate a transfer of bitcoin. These labels should be the observers of the transaction. An observer of a sending transaction is, of course, the receiver, as well as any other third party that knows that you are the sender of this transaction. For example, you should include as a label the payment processor or the bitcoin exchange if you use their services. This metadata will be used to build an accurate cluster of observers who know about your coins.")]),Q,e("p",null,[t("Every transaction must specify a fee which incentives the miner to include it in a block, it is calculated by "),X,t(". The higher the fee per virtual byte (vByte) transaction size, the more likely miners are to confirm this transaction. Wasabi uses Bitcoin Core's "),D,t(" algorithm to estimate the time it will take to confirm at the given fee level. You can change the fee by moving the slider, or by manually setting the "),o(a,{to:"/FAQ/FAQ-UseWasabi.html#how-do-i-set-custom-fee-rate"},{default:i(()=>[t("transaction fee rate")]),_:1}),t(".")]),G,J,e("div",$,[K,Z,e("ol",null,[e("li",null,[t("Use "),e("a",ee,[t("a mempool monitor"),o(s)]),t(" (available "),e("a",te,[t("Tor onion website"),o(s)]),t(") to see what fees are likely to get a transaction to be confirmed in the next block.")]),oe]),e("p",null,[t("For a deeper dive into the fee estimation process, "),e("a",ie,[t("this article"),o(s)]),t(" is worth reading.")])]),ne,e("p",null,[t("In order to spend a coin, the transaction must be signed by the private key corresponding to that coin. Wasabi stores a secret on the computer, encrypted with the password that you specified during the "),o(a,{to:"/using-wasabi/WalletGeneration.html#important-info-about-your-wallet-password"},{default:i(()=>[t("wallet generation")]),_:1}),t(". To spend a coin you need to type in the password, which decrypts the encrypted secret, and then derive the child private key that signs the transaction. Afterwards, the password is wiped from memory.")]),ae,se,e("p",null,[t("If for some reason the first broadcast fails, then if you have Wasabi connected to "),o(a,{to:"/using-wasabi/BitcoinFullNode.html"},{default:i(()=>[t("your own Bitcoin full node")]),_:1}),t(" this node will broadcast the transaction to the network. If this also fails, then the transaction is sent to the backend coordinator with a new Tor identity, who then broadcasts the transaction to the network.")])])}const me=m(x,[["render",re],["__file","Send.html.vue"]]);export{me as default};
