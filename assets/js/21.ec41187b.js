(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{297:function(t,a,e){"use strict";e.r(a);var i=e(10),r=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"privacy-and-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacy-and-wasabi"}},[t._v("#")]),t._v(" Privacy and Wasabi")]),t._v(" "),a("details",{attrs:{id:"twoweeks"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#twoweeks","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("#twoweeks")])]),t._v(" "),a("p",[t._v("The #twoweeks is a fun inside joke often used in the Wasabi documentation and, more generally, in the Internet community.\nIn the case of Wasabi documentation, it usually indicates the arrival of a new function or update, to which the future date is still uncertain.")]),t._v(" "),a("p",[t._v('E.g. "Lightning Network is coming to Wasabi in #twoweeks"')])]),a("details",{attrs:{id:"address-reuse"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#address-reuse","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Address Reuse")])]),t._v(" "),a("p",[t._v("Address reuse refers to the use of the same address for multiple transactions, this is very bad for privacy.\nRead more: "),a("RouterLink",{attrs:{to:"/why-wasabi/AddressReuse.html"}},[t._v("Address reuse")])],1)]),a("details",{attrs:{id:"anonymity-set-anonset"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#anonymity-set-anonset","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Anonymity Set (anonset)")])]),t._v(" "),a("p",[t._v("The anonymity set is effectively the size of the group you are hiding in during a CoinJoin.\nIt's the quantity of equal value outputs of one CoinJoin transaction.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-anonymity-set"}},[t._v("What is the anonymity set?")])],1)]),a("details",{attrs:{id:"backend"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#backend","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Backend")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.merriam-webster.com/dictionary/back%20end",target:"_blank",rel:"noopener noreferrer"}},[t._v("The part of a software system that is not usually visible or accessible to a user of that system"),a("OutboundLink")],1),t._v(".\nIn the case of Wasabi, the backend functions as the coinjoin coordinator and provides data to the "),a("RouterLink",{attrs:{to:"/glossary/Glossary-PrivacyWasabi.html#Client"}},[t._v("client")]),t._v(" (user) like block filters, exchange rate, and network estimations (mempool).")],1)]),a("details",{attrs:{id:"block-filters"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#block-filters","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Block filters")])]),t._v(" "),a("p",[t._v("A filter representing a compact list of addresses in one block.\nWasabi checks locally if any block filter contains transactions with addresses of the wallet.\nNo public keys are sent to any third party server, thus it is very private.\nRead more: "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 158: Compact Block Filters for Light Clients"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"blockchain-analysis"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-analysis","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Blockchain Analysis")])]),t._v(" "),a("p",[t._v("Blockchain analysis is used by transaction surveillance companies to follow the transaction history of coins.\nTechniques like the common-input-ownership heuristic or change detection are used to create a cluster of transactions belonging to one user.\nRead more: "),a("RouterLink",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#blockchain-analysis"}},[t._v("Blockchain Analysis")])],1)]),a("details",{attrs:{id:"bloom-filter"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bloom-filter","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Bloom Filter")])]),t._v(" "),a("p",[t._v("A filter used primarily by SPV clients to request only block headers and merkle proofs of a given transaction from full nodes.\nThis is very bad for privacy, as third party servers learn about which addresses you are interested in.\nRead more: "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("BIP 37: Connection Bloom Filtering"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"change-address-detection"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#change-address-detection","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Change Address Detection")])]),t._v(" "),a("p",[t._v("Many Bitcoin transactions have change outputs.\nIt would be a serious privacy leak if the change address can be somehow found, as it would link the ownership of the (now spent) inputs with a new output.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/ChangeCoins.html"}},[t._v("Change coins")])],1)]),a("details",{attrs:{id:"chaumian-coinjoin"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#chaumian-coinjoin","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Chaumian CoinJoin")])]),t._v(" "),a("p",[t._v("A Chaumian CoinJoin is a special type of CoinJoin that utilizes Chaumian [or Schnorr] blind signatures to prevent the central coordinator from spying on the linkage between inputs and outputs.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html#zerolink-protocol-step-by-step"}},[t._v("Use of blind signatures in CoinJoin")])],1)]),a("details",{attrs:{id:"client"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#client","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Client")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.merriam-webster.com/dictionary/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("A software that allows a computer to function as a client in a network"),a("OutboundLink")],1),t._v(".\nIn the case of Wasabi, the client is a Wasabi Wallet software version which a user has on his own local machine.\nThe client can communicate with the "),a("RouterLink",{attrs:{to:"/glossary/Glossary-PrivacyWasabi.html#Backend"}},[t._v("backend")]),t._v(".")],1)]),a("details",{attrs:{id:"cluster"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Cluster")])]),t._v(" "),a("p",[t._v("Which entities know about which coins.\nFor example, this coin belongs to a cluster that is known by a KYC exchange and Alice.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-cluster-history"}},[t._v("What is the cluster history?")])],1)]),a("details",{attrs:{id:"coin-control"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#coin-control","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Coin Control")])]),t._v(" "),a("p",[t._v("Coin control is a must learn if you care about your privacy in Bitcoin.\nAs can be understood from the name, this is a proper control of one's coins.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#coin-control-best-practices"}},[t._v("Coin Control Best Practices")])],1)]),a("details",{attrs:{id:"coinjoin-cj"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin-cj","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("CoinJoin (CJ)")])]),t._v(" "),a("p",[t._v("CoinJoin is a trustless method for combining multiple Bitcoin payments from multiple spenders into a single transaction to make it more difficult for outside parties to determine which spender paid which recipient.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-Introduction.html#what-is-a-coinjoin"}},[t._v("What is a CoinJoin?")])],1)]),a("details",{attrs:{id:"coinjoin-strategy"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin-strategy","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Coinjoin Strategy")])]),t._v(" "),a("p",[t._v("A "),a("em",[t._v("Coinjoin Strategy")]),t._v(' contains instructions for the automatic "coinjoin robot" about configurations like when and how much to coinjoin.\nRead more: '),a("RouterLink",{attrs:{to:"/Using-Wasabi/CoinJoin.html#coinjoin-strategy"}},[t._v("Coinjoin Strategy")])],1)]),a("details",{attrs:{id:"coinjoined-coins"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#coinjoined-coins","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("CoinJoined coins")])]),t._v(" "),a("p",[t._v("Coins that have successfully participated in a CoinJoin (with the exception of the change) and thus lose their association to a previous cluster.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-Introduction.html#what-is-the-privacy-i-get-after-mixing-with-wasabi"}},[t._v("What is the privacy I get after mixing with Wasabi?")])],1)]),a("details",{attrs:{id:"common-input-ownership-heuristic"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#common-input-ownership-heuristic","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Common-Input-Ownership heuristic")])]),t._v(" "),a("p",[t._v("This is a heuristic or assumption which says that if a transaction has more than one input then all those inputs are owned by the same entity.")])]),a("details",{attrs:{id:"coordinator"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#coordinator","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Coordinator")])]),t._v(" "),a("p",[t._v("The coordinator is a server which creates CoinJoins and accepts UTXOs in the mix.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-does-my-wallet-communicate-with-the-wasabi-coordinator-server"}},[t._v("How does my wallet communicate with the Wasabi coordinator server?")])],1)]),a("details",{attrs:{id:"dust"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#dust","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Dust")])]),t._v(" "),a("p",[t._v("Dust is an UTXO that is uneconomical to spend.\nAlso, small portions of bitcoin can lead to serious consequences for one's privacy, for example the so called "),a("code",[t._v("forced address reuse attack")]),t._v(".\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#what-is-the-dust-threshold"}},[t._v("What is the dust threshold")])],1)]),a("details",{attrs:{id:"know-your-customer-kyc"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#know-your-customer-kyc","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Know Your Customer (KYC)")])]),t._v(" "),a("p",[t._v("KYC (Know Your Customer) is the process of a business being forced to identify and verify the identity of its clients, and to share this information with a government.\nThe term is also used to refer to the bank regulation which governs these activities.\nRead more: "),a("RouterLink",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#aml-kyc-information"}},[t._v("AML/KYC Information")])],1)]),a("details",{attrs:{id:"discreet-mode"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#discreet-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Discreet Mode")])]),t._v(" "),a("p",[t._v("Discreet Mode is a Wasabi feature that hides sensitive and critical information on the wallet itself, which is useful for screenshots.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/DiscreetMode.html"}},[t._v("Discreet Mode")])],1)]),a("details",{attrs:{id:"observers"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#observers","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Observers")])]),t._v(" "),a("p",[t._v("A way to track who knows about the ownership of your coins.\nNot to be confused with a description of a transaction.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/Receive.html#the-importance-of-labeling"}},[t._v("The importance of labeling")])],1)]),a("details",{attrs:{id:"pay-to-endpoint-p2ep"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#pay-to-endpoint-p2ep","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Pay to EndPoint (P2EP)")])]),t._v(" "),a("p",[t._v("Pay to EndPoint is when the receiver is reachable over the internet and the sender communicates with the receiver to coordinate a more advanced transaction.\nThe Tor onion service, IP address or domain of the receiver is included in a BIP21 Bitcoin URI payment link.")])]),a("details",{attrs:{id:"peers"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#peers","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Peers")])]),t._v(" "),a("p",[t._v("Peers in our documentation refers mainly to Bitcoin and Wasabi Wallet users, but it also means people.\nThey are literally peers in the network, or in the CoinJoin.")])]),a("details",{attrs:{id:"rpc"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("RPC")])]),t._v(" "),a("p",[t._v("RPC, or Remote Procedure Call, is an interface to interact with Wasabi Wallet programmatically.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/RPC.html"}},[t._v("RPC Interface")])],1)]),a("details",{attrs:{id:"taint"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#taint","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Taint")])]),t._v(" "),a("p",[t._v("Taint is equivalent to the 'trail' that a Bitcoin transaction leaves during the course of its journey.\nThe taint analysis of a Bitcoin transaction evaluates the association between an address involved in the chain of transactions.\nRead more: "),a("RouterLink",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html#blockchain-analysis"}},[t._v("Blockchain Analysis")])],1)]),a("details",{attrs:{id:"the-onion-router-tor"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#the-onion-router-tor","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("The Onion Router (Tor)")])]),t._v(" "),a("p",[t._v("Tor (The Onion Router) is free and open-source software for enabling anonymous communication.\nIt is widely used by Wasabi.\nRead more: "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-GeneralBitcoinPrivacy.html#how-does-tor-protect-my-network-level-privacy"}},[t._v("How does Tor protect my network level privacy?")])],1)]),a("details",{attrs:{id:"transaction-surveillance-company"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-surveillance-company","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Transaction Surveillance Company")])]),t._v(" "),a("p",[t._v("A transaction surveillance company is one which attempts to spy on all Bitcoin users.\nTheir business model is usually to sell the data to any government, corporation or individual willing to pay for their services.\nRead more: "),a("RouterLink",{attrs:{to:"/why-wasabi/TransactionSurveillanceCompanies.html"}},[t._v("Transaction Surveillance Companies")])],1)]),a("details",{attrs:{id:"tumbling-tumbler"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#tumbling-tumbler","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Tumbling / Tumbler")])]),t._v(" "),a("p",[t._v("Tumbling is a synonym of 'Mixing'.\nSimilarly, Tumbler is the synonym of 'Mixer'.")])]),a("details",{attrs:{id:"wabisabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#wabisabi","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("WabiSabi")])]),t._v(" "),a("p",[t._v("WabiSabi is a protocol for constructing coinjoin transactions with the aid of a centralized coordinator.\nIt utilizes keyed-verification anonymous credentials, homomorphic value commitments, and zero knowledge proofs to achieve privacy and flexibility.\nRead more: "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WabiSabi/releases/latest/download/WabiSabi.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("WabiSabi"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"wallet-fingerprinting"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet-fingerprinting","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Wallet fingerprinting")])]),t._v(" "),a("p",[t._v("A careful analyst sometimes deduces which software created a certain transaction, because many different wallet softwares don't always create transactions in exactly the same way.\nRead more: "),a("RouterLink",{attrs:{to:"/building-wasabi/TechnicalOverview.html"}},[t._v("Technical Overview of Wasabi Wallet")])],1)]),a("details",{attrs:{id:"wasabika"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#wasabika","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("Wasabika")])]),t._v(" "),a("p",[t._v("Wasabikas are builders, users and supporters of Wasabi in general.")])]),a("details",{attrs:{id:"xpub-extended-public-key"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#xpub-extended-public-key","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("XPUB (Extended Public Key)")])]),t._v(" "),a("p",[t._v("An xpub, also know as Extended Public Key, is a part of BIP-32 that will allow you to observe your wallet without the private key (xpriv).\nRead more: "),a("RouterLink",{attrs:{to:"/why-wasabi/AddressReuse.html#wasabi-s-solution"}},[t._v("Wasabi's Solution")])],1)]),a("details",{attrs:{id:"zerolink"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#zerolink","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("h4",[t._v("ZeroLink")])]),t._v(" "),a("p",[t._v("ZeroLink is a framework to holistically design a privacy and fungibility setup for Bitcoin.\nThis encompasses more than just a single CoinJoin transaction, but also includes network level privacy defense against third party spying.\nRead more: "),a("RouterLink",{attrs:{to:"/using-wasabi/CoinJoin.html#zerolink-protocol-step-by-step"}},[t._v("ZeroLink: the Bitcoin Fungibility Framework")])],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);