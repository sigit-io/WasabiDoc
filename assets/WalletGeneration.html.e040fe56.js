import{_ as d,a as c,b as u}from"./AddWalletAddPassword.45b736a5.js";import{_ as h,a as p}from"./AddWalletConfirmRecoveryWords.2792528c.js";import{_ as m}from"./CoinjoinStrategy.5455b7fb.js";import{_ as v,r as o,o as b,c as w,a as e,d as a,w as n,b as t,e as r}from"./app.9c9ccab2.js";const y="/AddWalletSuccessfullyAdded.png",_={},f=e("h1",{id:"wallet-generation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#wallet-generation","aria-hidden":"true"},"#"),t(" Wallet Generation")],-1),g={class:"table-of-contents"},k=r('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>With Wasabi you can generate an unlimited number of Bitcoin wallets very quickly, without any cost, and without asking anyone for permission. Each wallet has separate private and public keys in a unique backup, and they are not at all linked to the other wallets generated on the same computer. So, with several wallets, you can conveniently manage your bitcoin for different use cases without worrying about revealing that you control them.</p><h2 id="generating-the-wallet-step-by-step" tabindex="-1"><a class="header-anchor" href="#generating-the-wallet-step-by-step" aria-hidden="true">#</a> Generating the wallet step-by-step</h2><ol><li><p>Launch Wasabi Wallet. The very first time you run the software the <code>Add Wallet</code> dialog will be open automatically, but you can also access it by clicking on <code>Add Wallet</code> in the NavBar or Searchbar.</p></li><li><p>Click <code>Create a new wallet</code> to generate a new wallet.</p></li></ol><p><img src="'+d+'" alt="Add a Bitcoin wallet with Wasabi" title="Add a Bitcoin wallet with Wasabi"></p><ol start="3"><li>Name the new wallet precisely to ensure a proper differentiation from wallets created in the future. This label is not shared with anyone, it is only stored locally on your computer. Click <code>Continue</code>.</li></ol><p><img src="'+c+'" alt="Add Wallet Wallet Name" title="Add Wallet Wallet Name"></p>',7),W={start:"4"},P=e("strong",null,"together with",-1),x={href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank",rel:"noopener noreferrer"},B=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"Back up your recovery words!"),e("p",null,"Without the recovery words (Seed phrase) AND the password, you cannot recover your wallet. So, triple-check that you have a proper backup! Make sure the backup of your recovery words is stored separately from the password backup.")],-1),S=e("p",null,[e("img",{src:h,alt:"Wasabi Wallet recovery words",title:"Wasabi Wallet recovery words"})],-1),A=e("ol",{start:"5"},[e("li",null,[t("You must confirm 3 of the 12 Recovery Words, as a quick check to make sure that your Recovery Words are backed up. So, confirm the Recovery Words, and click "),e("code",null,"Continue"),t(".")])],-1),C=e("p",null,[e("img",{src:p,alt:"Wasabi Wallet confirm recovery words",title:"Wasabi Wallet confirm recovery words"})],-1),I={start:"6"},N=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"Back up your password!"),e("p",null,"Without the password, you cannot spend your bitcoin or recover your wallet, even if you have the recovery words (Seed phrase). So, triple-check that you have a proper backup!")],-1),E=e("li",null,[e("p",null,[t("Confirm the password and click the "),e("code",null,"Continue"),t(" button.")])],-1),T=r('<p><img src="'+u+'" alt="Wasabi Wallet Add Password" title="Wasabi Wallet Add Password"></p><ol start="8"><li>Select the coinjoin strategy for this wallet and click <code>Continue</code>.</li></ol><p><img src="'+m+'" alt="Add Wallet Coinjoin Strategy" title="Add Wallet Coinjoin Strategy"></p><ol start="9"><li>The wallet is succesfully added! Click <code>Done</code>.</li></ol><p><img src="'+y+'" alt="Wallet Successfully Added" title="Wallet Successfully Added"></p><h2 id="important-info-about-your-wallet-password" tabindex="-1"><a class="header-anchor" href="#important-info-about-your-wallet-password" aria-hidden="true">#</a> Important info about your wallet password</h2>',6),G={href:"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",target:"_blank",rel:"noopener noreferrer"},L=e("strong",null,"both",-1),R=e("h2",{id:"how-are-the-secrets-created",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-are-the-secrets-created","aria-hidden":"true"},"#"),t(" How are the secrets created")],-1),V={href:"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",target:"_blank",rel:"noopener noreferrer"},j=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                      +--------------+
                      | Entropy      |
                      +--------------+
  +------------+             |
  | Word list  +------------&gt;+
  +------------+             |
                      +------v-------+
                      | Mnemonics    |
                      +--------------+
                             |
                   +---------&gt;
                   |         |
                   |  +------v-------+
                   |  | Seed         |
                   |  +--------------+
                   |         |
   +-----------+   |         |
   | Password  +---+  +------v-------+
   +-----------+   |  | Extended Key |
                   |  +--------------+
                   |         |
                   |         |
                   |  +------v-------+
                   |  | Private key  |     ** This step is needed to use bip38
                   |  +--------------+
                   |         |              +-------------+
                   +--------&gt;+&lt;-------------+  Network    |
                             |              +-------------+
                      +------v-------+
                      | Encrypted    |
                      | secret       |
                      +--------------+
                             |
                             |
                             |
                  +--------------------+
                  | Save encrypted     |
                  | secret+chaincode+  |
                  | Fingerprint+ExtPub |
                  +--------------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function q(K,Y){const i=o("router-link"),s=o("ExternalLinkIcon"),l=o("RouterLink");return b(),w("div",null,[f,e("nav",g,[e("ul",null,[e("li",null,[a(i,{to:"#introduction"},{default:n(()=>[t("Introduction")]),_:1})]),e("li",null,[a(i,{to:"#generating-the-wallet-step-by-step"},{default:n(()=>[t("Generating the wallet step-by-step")]),_:1})]),e("li",null,[a(i,{to:"#important-info-about-your-wallet-password"},{default:n(()=>[t("Important info about your wallet password")]),_:1})]),e("li",null,[a(i,{to:"#how-are-the-secrets-created"},{default:n(()=>[t("How are the secrets created")]),_:1})])])]),k,e("ol",W,[e("li",null,[e("p",null,[t("Write down the 12 recovery words (mnemonic seed phrase) in the correct order and store them in a safe place. You have to use this seed phrase "),P,t(" your password to recover your wallet on a different computer using Wasabi or another "),e("a",x,[t("BIP 39"),a(s)]),t(" compliant wallet.")]),B])]),S,A,C,e("ol",I,[e("li",null,[e("p",null,[t("Write a long and random password (passphrase) and "),e("strong",null,[a(l,{to:"/using-wasabi/BackupBestPractices.html"},{default:n(()=>[t("back it up")]),_:1})]),t(". It encrypts your secrets, and you will need it every time you want to open the wallet, spend bitcoin from this wallet or recover your wallet.")]),e("p",null,[t("If you are uncertain about how to create a secure password, refer to "),a(l,{to:"/using-wasabi/PasswordBestPractices.html"},{default:n(()=>[t("Password Best Practices")]),_:1}),t(" for helpful information.")]),N]),E]),T,e("p",null,[t("Wasabi integrates "),e("a",G,[t("BIP 38: Password-Protected Private Key"),a(s)]),t(", which means that the secrets needed to spend the bitcoin are encrypted on the computer. If someone has compromised your operating system and hardware and he only has the encrypted secrets, then no bitcoin can be spent by him. You need "),L,t(" the encrypted secrets and the password in order to enable the private key which can sign a spending transaction. This means that the password is your last line of defense against anyone who tries to steal your bitcoin.")]),R,e("p",null,[t("Wasabi uses "),e("a",V,[t("BIP 38: Password-Protected Private Key"),a(s)])]),j])}const $=v(_,[["render",q],["__file","WalletGeneration.html.vue"]]);export{$ as default};
