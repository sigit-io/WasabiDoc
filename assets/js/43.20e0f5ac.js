(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{319:function(e,t,o){"use strict";o.r(t);var n=o(10),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"send"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[e._v("#")]),e._v(" Send")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#how-to-send-bitcoin-step-by-step"}},[e._v("How to send bitcoin step-by-step")])]),t("li",[t("a",{attrs:{href:"#coins"}},[e._v("Coins")])]),t("li",[t("a",{attrs:{href:"#clusters"}},[e._v("Clusters")])]),t("li",[t("a",{attrs:{href:"#anonymity-set"}},[e._v("Anonymity Set")])]),t("li",[t("a",{attrs:{href:"#receiving-address"}},[e._v("Receiving Address")])]),t("li",[t("a",{attrs:{href:"#observers"}},[e._v("Observers")])]),t("li",[t("a",{attrs:{href:"#amount"}},[e._v("Amount")])]),t("li",[t("a",{attrs:{href:"#mining-fee"}},[e._v("Mining Fee")])]),t("li",[t("a",{attrs:{href:"#password"}},[e._v("Password")])]),t("li",[t("a",{attrs:{href:"#broadcast"}},[e._v("Broadcast")])])])]),t("p"),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"how-to-send-bitcoin-step-by-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-bitcoin-step-by-step"}},[e._v("#")]),e._v(" How to send bitcoin step-by-step")]),e._v(" "),t("ol",[t("li",[e._v("Click the Send button.")]),e._v(" "),t("li",[e._v("Specify a destination address.")]),e._v(" "),t("li",[e._v("Specify the amount of bitcoin to send to the destination address. Optionally, you can specify the dollar amount to send.")]),e._v(" "),t("li",[e._v("Label the recipient by entering the name of the person or company who you are sending to.")]),e._v(" "),t("li",[e._v("Preview Transaction.\n"),t("ul",[t("li",[e._v("Verify the amount, recipient, and the address.")]),e._v(" "),t("li",[e._v("Review the estimated time for confirmation and the transaction fees. Optionally, you can change the transaction fee or confirmation time.")]),e._v(" "),t("li",[e._v("Review suggestions to improve your privacy by clicking the shield icon in the top right corner. For example, you may want to increase or decrease your payment to avoid change.")])])]),e._v(" "),t("li",[e._v("Click "),t("code",[e._v("Confirm")]),e._v(".")]),e._v(" "),t("li",[e._v("Type in your password, then click "),t("code",[e._v("Continue")]),e._v(".")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/Send.png",alt:"Wasabi Wallet Home Screen",title:"Wasabi Wallet Home Screen"}})]),e._v(" "),t("h2",{attrs:{id:"coins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coins"}},[e._v("#")]),e._v(" Coins")]),e._v(" "),t("p",[e._v("A coin is an unspent transaction output (UTXO): a chunk of bitcoin that can be sent in a future transaction.\nUnlike fiat currencies which have fixed denominations, each UTXO contains a variable amount of bitcoin.\nYou can get coins by first "),t("RouterLink",{attrs:{to:"/using-wasabi/Receive.html"}},[e._v("receiving")]),e._v(" them from someone else.\nWhen you want to send some bitcoin you simply enter the amount to send and the address after clicking the "),t("code",[e._v("Send")]),e._v(" button.\nWasabi Wallet does the job of automatically selecting the appropriate combination of coins to include as inputs in the transaction.")],1),e._v(" "),t("h2",{attrs:{id:"clusters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clusters"}},[e._v("#")]),e._v(" Clusters")]),e._v(" "),t("p",[e._v("Every time you receive a payment, you first must "),t("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#the-importance-of-labeling"}},[e._v("label the observers")]),e._v(" who know this address is yours.\nThis transaction metadata is used to build a cluster of which people know about your coins.\nFor example, if you receive a coin from Alice, then the cluster is "),t("code",[e._v("Alice")]),e._v(".\nIf you now send half of this coin to Bob, then the cluster of your change coin is "),t("code",[e._v("Alice, Bob")]),e._v(".\nThe goal is to know the observers who know about your coins and try to reduce their number for each coin.")],1),e._v(" "),t("h2",{attrs:{id:"anonymity-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#anonymity-set"}},[e._v("#")]),e._v(" Anonymity Set")]),e._v(" "),t("p",[e._v("A typical bitcoin transaction will contain one input and two outputs - one of the outputs is the coin you are sending and the other output is the change coin that goes back to your wallet.\nYour change coin can be linked to this one input.\nThere is a 1 in 1 chance to find this link and no plausible deniability.\nThus, Wasabi denotes this coin's anonymity set as "),t("code",[e._v("1")]),e._v(".")]),e._v(" "),t("p",[e._v("In a Wasabi "),t("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[e._v("coinjoin")]),e._v(", many peers register coins in the input of the transaction, and in the output there are several equal value coins.\nFor example, the output may contain 20 coins worth exactly 0.3 bitcoin.\nThis means that when looking at one of these coinjoin outputs, there is a 1 in 20 chance to find the corresponding input: thus an anonymity set of 20.\nTherefore, the higher the anonymity set, the more your post-coinjoin coin is delinked from the pre-coinjoin history.")],1),e._v(" "),t("p",[e._v("There are three coinjoin strategies to choose from in Wasabi Wallet which effect the target anonymity score for your coins.\nThese three strategies are "),t("code",[e._v("Minimize Cost")]),e._v(", "),t("code",[e._v("Maximize Speed")]),e._v(", and "),t("code",[e._v("Maximize Privacy")]),e._v(".\nEach of these strategies come with different trade-offs.")]),e._v(" "),t("p",[e._v("Alternatively, custom coinjoin settings can be configured.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/CoinjoinStrategy.png",alt:"Coinjoin Strategy",title:"Coinjoin Strategy"}})]),e._v(" "),t("h2",{attrs:{id:"receiving-address"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiving-address"}},[e._v("#")]),e._v(" Receiving Address")]),e._v(" "),t("p",[e._v("When sending bitcoin, you need to know the destination address of the receiver.\nThis commits to the spending condition that the receiver agrees to have for this coin.\nThe address can be a public key hash [starting with "),t("code",[e._v("1")]),e._v("], a script hash [starting with "),t("code",[e._v("3")]),e._v("], a native SegWit bech32 public key hash [starting with "),t("code",[e._v("bc1q")]),e._v("], or a Taproot bech32m public key [starting with "),t("code",[e._v("bc1p")]),e._v("].\nMake sure that you ask the receiver for a "),t("RouterLink",{attrs:{to:"/why-wasabi/AddressReuse.html"}},[e._v("new address")]),e._v(" for every payment to protect your privacy and theirs.\nWasabi will calculate the checksum and notify you if the provided address is wrong.")],1),e._v(" "),t("h2",{attrs:{id:"observers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#observers"}},[e._v("#")]),e._v(" Observers")]),e._v(" "),t("p",[e._v("It is a requirement to provide one or more "),t("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#the-importance-of-labeling"}},[e._v("labels")]),e._v(" each time you initiate a transfer of bitcoin.\nThese labels should be the observers of the transaction.\nAn observer of a sending transaction is, of course, the receiver, as well as any other third party that knows that you are the sender of this transaction.\nFor example, you should include as a label the payment processor or the bitcoin exchange if you use their services.\nThis metadata will be used to build an accurate cluster of observers who know about your coins.")],1),e._v(" "),t("h2",{attrs:{id:"amount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amount"}},[e._v("#")]),e._v(" Amount")]),e._v(" "),t("p",[e._v("In the "),t("code",[e._v("Amount")]),e._v(" text box you can specify how many bitcoins the receiving address will gain.\nIf it is below the value of the selected inputs, then the leftover value will be sent to an automatically generated change address of yours.\nYou can send a whole coin by selecting the "),t("code",[e._v("Max")]),e._v(" button, which will build a transaction with only one output, the receiving address, and no change.\nYou can also see the current US Dollar value of the sending amount.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Avoid sending rounded values")]),e._v(" "),t("p",[e._v("If you specify a rounded amount, like "),t("code",[e._v("0.0100 0000 bitcoin")]),e._v(", then the change output will not be rounded, like "),t("code",[e._v("0.0896 8413 bitcoin")]),e._v(".\nThis makes it easy for an observer to conclude that the spending amount was the "),t("code",[e._v("0.01 bitcoin")]),e._v(", and that the other output is the change back to the sender.\nSo in order to increase your privacy, you can set a non-rounded amount, like "),t("code",[e._v("0.0101 6843")]),e._v(".")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/SendAmountFeePassword.png",alt:"Wasabi Wallet send transaction",title:"Wasabi Wallet send transaction"}})]),e._v(" "),t("h2",{attrs:{id:"mining-fee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mining-fee"}},[e._v("#")]),e._v(" Mining Fee")]),e._v(" "),t("p",[e._v("Every transaction must specify a fee which incentives the miner to include it in a block, it is calculated by "),t("code",[e._v("value of inputs - value of outputs")]),e._v(".\nThe higher the fee per virtual byte (vbyte) transaction size, the more likely miners are to confirm this transaction.\nWasabi uses Bitcoin Core's "),t("code",[e._v("smart fee")]),e._v(" algorithm to estimate the time it will take to confirm at the given fee level.\nYou can change the fee by moving the slider, or even specify it manually by activating this functionality in the "),t("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-do-i-set-custom-fee-rate"}},[e._v("settings")]),e._v(".\nBy clicking on the fee in the brackets below the slider, you can cycle through displaying the "),t("code",[e._v("total bitcoin amount")]),e._v(", "),t("code",[e._v("sats per vbyte")]),e._v(", "),t("code",[e._v("percentage fee of sending amount")]),e._v(" or "),t("code",[e._v("US Dollar equivalent")]),e._v(".")],1),e._v(" "),t("p",[t("img",{attrs:{src:"/SendFeeSlider.png",alt:"Wasabi Wallet custom mining fee",title:"Wasabi Wallet custom mining fee"}})]),e._v(" "),t("p",[e._v("In some cases, there is very little demand for block space, and then Wasabi will set the minimum fee of "),t("code",[e._v("1 sat/vbyte")]),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("High-priority transaction fees")]),e._v(" "),t("p",[e._v("When using Bitcoin Core's "),t("code",[e._v("smart fee")]),e._v(" algorithm to estimate the time a transaction will take to confirm given the current mempool, the algorithm considers the historic data for transactions in the mempool and in recent blocks.")]),e._v(" "),t("p",[e._v("If, after you select the highest fee for a "),t("code",[e._v("send")]),e._v(", other people decide to send coins using even higher fees than you selected, their transactions will be placed ahead of yours in the mempool.")]),e._v(" "),t("p",[e._v("The placement of a transaction in line to be confirmed in the mempool is an ongoing auction for block space.")]),e._v(" "),t("p",[e._v("As such, a fee that is high enough to be confirmed in the next block when you create a transaction can be outbid by people sending coins after you who also want to be in the next block, which places your transaction farther back in line to be confirmed.")]),e._v(" "),t("p",[e._v("If you have a transaction that is high-priority and you really want it to be confirmed ASAP:")]),e._v(" "),t("ol",[t("li",[e._v("Go into your Wasabi "),t("code",[e._v("Settings")]),e._v(" and turn on "),t("code",[e._v("Manual fee entry")]),e._v(".")]),e._v(" "),t("li",[e._v("Use "),t("a",{attrs:{href:"https://mempool.space",target:"_blank",rel:"noopener noreferrer"}},[e._v("a mempool monitor"),t("OutboundLink")],1),e._v(" (available "),t("a",{attrs:{href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tor onion website"),t("OutboundLink")],1),e._v(") to see what fees are likely to get a transaction to be confirmed in the next block.")]),e._v(" "),t("li",[e._v("Select a fee that is well above the current highest fee....perhaps double or triple it....if it is very important to you that the transaction is confirmed soon.")])]),e._v(" "),t("p",[e._v("For a deeper dive into the fee estimation process, "),t("a",{attrs:{href:"https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),t("OutboundLink")],1),e._v(" is worth reading.")])]),e._v(" "),t("h2",{attrs:{id:"password"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[e._v("#")]),e._v(" Password")]),e._v(" "),t("p",[e._v("In order to spend a coin, the transaction must be signed by the private key corresponding to that coin.\nWasabi stores a secret on the computer, encrypted with the password that you specified during the "),t("RouterLink",{attrs:{to:"/using-wasabi/WalletGeneration.html#what-password-to-choose"}},[e._v("wallet generation")]),e._v(".\nTo spend a coin you need to type in the password, which decrypts the encrypted secret, and then derive the child private key that signs the transaction.\nAfterwards, the password is wiped from memory.")],1),e._v(" "),t("h2",{attrs:{id:"broadcast"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcast"}},[e._v("#")]),e._v(" Broadcast")]),e._v(" "),t("p",[e._v("Once the transaction is signed, Wasabi will connect to a random Bitcoin P2P node over Tor and provide this transaction, then it will immediately disconnect.\nThis first node will gossip the transaction throughout the network, then miners can include it in a block.")]),e._v(" "),t("p",[e._v("If for some reason the first broadcast fails, then if you have Wasabi connected to "),t("RouterLink",{attrs:{to:"/using-wasabi/BitcoinFullNode.html"}},[e._v("your own Bitcoin full node")]),e._v(" this node will broadcast the transaction to the network.\nIf this also fails, then the transaction is sent to the backend coordinator with a new Tor identity, who then broadcasts the transaction to the network.")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);