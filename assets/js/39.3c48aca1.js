(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{315:function(e,t,a){"use strict";a.r(t);var i=a(10),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"receive-bitcoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receive-bitcoin"}},[e._v("#")]),e._v(" Receive bitcoin")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#generating-addresses-step-by-step"}},[e._v("Generating addresses step-by-step")])]),t("li",[t("a",{attrs:{href:"#bitcoin-public-keys-and-addresses"}},[e._v("Bitcoin public keys and addresses")])]),t("li",[t("a",{attrs:{href:"#the-problem-with-address-reuse"}},[e._v("The problem with address reuse")])]),t("li",[t("a",{attrs:{href:"#the-importance-of-labeling"}},[e._v("The importance of labeling")]),t("ul",[t("li",[t("a",{attrs:{href:"#clusters"}},[e._v("Clusters")])]),t("li",[t("a",{attrs:{href:"#coinjoined-coins"}},[e._v("CoinJoined coins")])]),t("li",[t("a",{attrs:{href:"#final-words-about-labels-and-examples"}},[e._v("Final words about labels and examples")])])])])])]),t("p"),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"generating-addresses-step-by-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-addresses-step-by-step"}},[e._v("#")]),e._v(" Generating addresses step-by-step")]),e._v(" "),t("ol",[t("li",[e._v("Start Wasabi and open the wallet that you want to receive coins into.")]),e._v(" "),t("li",[e._v("Click the "),t("code",[e._v("Receive")]),e._v(" button in the main view's top right corner.")]),e._v(" "),t("li",[e._v("Type in the name of the entities who know that this address is yours.\nIf you have already used a label before, simply choose it from the suggested labels.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/ReceiveLabelingRequired.png",alt:"Receive label in Wasabi",title:"Receive label in Wasabi"}})]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Press "),t("code",[e._v("Continue")]),e._v(" and the wallet will generate a new address.")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/UnusedReceiveAddress.png",alt:"Bitcoin address in Wasabi",title:"Bitcoin address in Wasabi"}})]),e._v(" "),t("h2",{attrs:{id:"bitcoin-public-keys-and-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-public-keys-and-addresses"}},[e._v("#")]),e._v(" Bitcoin public keys and addresses")]),e._v(" "),t("p",[e._v("The Bitcoin protocol utilizes "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Public-key_cryptography",target:"_blank",rel:"noopener noreferrer"}},[e._v("public key cryptography"),t("OutboundLink")],1),e._v(" to defend and verify the property rights of the individuals holding and transacting bitcoin.\nA private key is a large random number that should be kept secret.\nWith the "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",target:"_blank",rel:"noopener noreferrer"}},[e._v("elliptic curve digital signature algorithm"),t("OutboundLink")],1),e._v(", based on the private key you can calculate a public key.\nIf someone has only the public key, it is computationally infeasible [pretty much impossible] to calculate the private key.\nWhoever knows the private key can calculate a cryptography signature over a message, which proves that the private key was known by the signer, without actually revealing the secret.")]),e._v(" "),t("p",[e._v("For data size efficiency, in Bitcoin, the public key is "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function",target:"_blank",rel:"noopener noreferrer"}},[e._v("hashed"),t("OutboundLink")],1),e._v(" and encoded into a "),t("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-173-base32-address-format-for-native-v0-16-witness-outputs"}},[e._v("bech32")]),e._v(' address.\nThis address commits to the public key, which commits to the private key.\nIn a Bitcoin transaction, the output creates a new unspent transaction output which is "locked up" by an address.\nThe input of the transaction spends a UTXO by providing a valid signature of the public key that the address committed to.')],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v('Wasabi Wallet does not "store your money", rather it stores your public keys and an encrypted secret that requires your password to derive the private keys.\nIt creates addresses for receiving bitcoin, and it signs transactions that spend your bitcoin.')])]),e._v(" "),t("h2",{attrs:{id:"the-problem-with-address-reuse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-problem-with-address-reuse"}},[e._v("#")]),e._v(" The problem with address reuse")]),e._v(" "),t("p",[e._v("Whenever you use the same address to lock up different UTXOs, then all these coins can be spent by anyone who knows the same private key.\nThis makes it obvious for anyone that this one entity [you] owns all these coins, which is very bad for privacy.\nThe first rule of Bitcoin privacy is "),t("RouterLink",{attrs:{to:"/why-wasabi/AddressReuse.html"}},[e._v("never reuse addresses")]),e._v("!")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("This is why Wasabi removes the address from the "),t("code",[e._v("Unused Receive Address")]),e._v(" list as soon as it has received a coin.")])]),e._v(" "),t("h2",{attrs:{id:"the-importance-of-labeling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-importance-of-labeling"}},[e._v("#")]),e._v(" The importance of labeling")]),e._v(" "),t("p",[e._v("Satoshis are the base unit currency of the Bitcoin network and are truly fungible, meaning that any 100 000 000 satoshis are always equal to 1 bitcoin.\nJust like with gold atoms, it doesn't matter which specific gold atoms you have, as long as it's gold, it's gold.\nHowever, an unspent transaction output, a bitcoin, is a chunk of money and is not fungible, because it has a different amount of satoshis in it, a different public key locking it up, a unique transaction history, and a unique index number.\nThis is just like a gold coin, with a unique amount of gold atoms, and either a pretty mintage or an old chipped broken coin.\nBecause UTXOs are not fungible, it is very important to know exactly which coin is which, and that is done by carefully labeling.")]),e._v(" "),t("p",[e._v("For example, if I create a new address to receive a "),t("code",[e._v("0.5 BTC")]),e._v(" payment from Andrew for a laptop that I sold to him then the label has to be: "),t("code",[e._v("Andrew")]),e._v(".")]),e._v(" "),t("p",[e._v("The label is not for describing the "),t("code",[e._v("reason for payment")]),e._v(", but rather to list those who know that this address is yours.\nUnderstanding this difference between labeling an address and describing a transaction is very important for your privacy.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("In Wasabi it is mandatory to give every receive address a label of those who know that this address is yours, so that later you know what to do with it, and it also helps the auto coin selection algorithm when sending.")])]),e._v(" "),t("h3",{attrs:{id:"clusters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clusters"}},[e._v("#")]),e._v(" Clusters")]),e._v(" "),t("p",[e._v("Following the previous example, if I have to send a fraction ("),t("code",[e._v("0.1 BTC")]),e._v(") of the previously received coin to Charlie then in the "),t("code",[e._v("Send")]),e._v(" tab the observers should be: "),t("code",[e._v("Charlie")]),e._v(".\nIn that way, the change ("),t("code",[e._v("0.4 BTC")]),e._v(") will be known by Andrew and Charlie because they both will be able to follow the change.\nThat's exactly what Wasabi displays in the coins list (cluster column), Wasabi tells us who are the ones that know about each of our coins in order to allow us to decide what to do with the coins.")]),e._v(" "),t("p",[e._v("Let's take a look at another example:\nImagine you have three coins, one known by Alice, one known by a KYC exchange and finally one known by Charlie.\nImagine you need to sell a few sats to Charlie, which coin/s should you send?\nThe obvious selection is the one already known by Charlie because by doing that he cannot learn anything new about our wallet, moreover, neither Alice nor the KYC exchange can learn anything new!\nBut what if the coin is not big enough and we need to use more than one coin?\nYou can use the one known by Alice or the one known by the KYC exchange, but are you okay with Charlie knowing about your deposit/withdrawal from the exchange?\nAre you okay with Alice knowing about your deal with Charlie?\nIn case none of those combinations are acceptable for you then you should CoinJoin your coins.")]),e._v(" "),t("h3",{attrs:{id:"coinjoined-coins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coinjoined-coins"}},[e._v("#")]),e._v(" CoinJoined coins")]),e._v(" "),t("p",[e._v("Those that participate in a Wasabi "),t("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html"}},[e._v("CoinJoin")]),e._v(" transaction receive at least one coin with an anonymity set level that depends on the number of participants in that transaction.\nBy default Wasabi tries to create transactions with 100 unknown participants, so the received coin can have 100 anonymity set which means it is really hard for an observer to know who that coin belongs to.\nFor that reason, a coin with a high anonymity set loses the cluster which it originally had.")],1),e._v(" "),t("h3",{attrs:{id:"final-words-about-labels-and-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#final-words-about-labels-and-examples"}},[e._v("#")]),e._v(" Final words about labels and examples")]),e._v(" "),t("p",[e._v("4 coins with good labels:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Andrew\nDavid, Me\nCarlos, Sofia\nKYC exchange\n")])])]),t("p",[e._v("2 coins with bad labels:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Payment from Andrew for my laptop\nFrom my old wallet\n")])])]),t("p",[e._v("In case we take the two first coins with good labels and send them to María, look how the change cluster will be displayed: "),t("code",[e._v("Maria, Andrew, David, Me")]),e._v(" (these people know about the coin).\nNow, look how this will be displayed if I use the two coins with bad labels: "),t("code",[e._v("Maria, Payment from Andrew for my laptop, From my old wallet")]),e._v(" (Is this high-quality info about the privacy level of my coin? Not really.).")]),e._v(" "),t("p",[e._v("So, think about coins, think about who knows and make sure to make decisions about privacy based on what you are going to reveal and to whom.\nWasabi doesn't care about why you transact with bitcoins, it only cares about who you transact with because this is what helps you reclaim your privacy.")])])}),[],!1,null,null,null);t.default=s.exports}}]);