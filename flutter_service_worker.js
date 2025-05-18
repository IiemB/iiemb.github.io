'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2423a54f38288c50c70291904340b325",
"version.json": "393a880e0d3df5bd1c2c6292f98fed6c",
"splash/img/light-2x.png": "d398329a10a2a982b023be73616bb949",
"splash/img/dark-4x.png": "64480346b32cae9b85c22b7fa7b2d747",
"splash/img/light-3x.png": "5d16fb080ddcd42819e2da523498d858",
"splash/img/dark-3x.png": "5d16fb080ddcd42819e2da523498d858",
"splash/img/light-4x.png": "64480346b32cae9b85c22b7fa7b2d747",
"splash/img/dark-2x.png": "d398329a10a2a982b023be73616bb949",
"splash/img/dark-1x.png": "8cbe8f94c9d00bfde0e5d8e209e7123d",
"splash/img/light-1x.png": "8cbe8f94c9d00bfde0e5d8e209e7123d",
"favicon.ico": "bf5f351612413f6f465d605e6e43cc33",
"index.html": "70f5a04dc02ef5f3c32d3e8647ceec4e",
"/": "70f5a04dc02ef5f3c32d3e8647ceec4e",
"favicon-icrm.ico": "48ac6601070adafea23667f9b01f8107",
"favicon-moni.ico": "f9e0bf6537f4c8bd41d4e868d50918d1",
"main.dart.js": "3e998f988c46f3dc50dec52f0d716722",
".well-known/assetlinks.json": "100eb2534a5846a9505adf848013fc81",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.mjs": "2b265d2f631ec8e64afb3facbc284d52",
"icons/apple-touch-icon.png": "c0a9ab0e7027163df6ab5b705df12741",
"icons/icon-192.png": "7508ebd7dc89b564d0d86bc0a0ed4128",
"icons/icon-192-maskable.png": "0ddd23c46129bdaec5826318689d3f17",
"icons/icon-512-maskable.png": "be031bfd4f3005de60908722ca8a747f",
"icons/icon-512.png": "50d218aba2b3f2cc3169875ad0d7bff5",
"manifest.json": "b455255a5824e1c289ca1248ebeaca38",
"main.dart.wasm": "e727c4f4915d668d89919a3896b72519",
".git/ORIG_HEAD": "fda46e6b71cf161028f8828d20e1fb9c",
".git/config": "40f6d460b301e89e6de923cf12de2c18",
".git/objects/68/bf1b491f0311892d11ae3226baa31a6845fac3": "9bd6ed9e4832d7d5f45e9723a9e8f5f1",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9e/53a37d2789177b31e745a1f14da3ad63e2aad5": "1a19acb7839d0bed090e8718ac822bc9",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/d3c171d22c918dc32a133741153a90e07d84f8": "0467d49af51aa782cb795b01d8b1f975",
".git/objects/58/15a2c04f6234a712b26411d6e3d137666fc378": "c2ef415172e2891442af3804697e6064",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/5e3a21a00d6b41e40a99227b2199a96bcb8853": "d050ec189a85baecb3dee6770075248e",
".git/objects/9d/673eda0efded5b00190810bb71dbfe14f165bf": "7cc9484a0ebf63735aa9fa3a50fe8c46",
".git/objects/02/a4e68248cbbb46e3ac8f49b449fdf03a16bfc8": "241fbc6b72eb7dfb32e34dfefcae7758",
".git/objects/a4/1985b5994895c78d15815d4dd9b13dbbcddfc8": "5f5ba2cedb44dee7a62bf2803cc71cfc",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/5ac63c173486714b22a64668000d9fda7ee04c": "9027b11287f09f1bf114c7bedb2c8adc",
".git/objects/bb/43929a8f5a8d53cae78d52f4a31b4b23567441": "f3afe8079754fb5f91b7f229e8506e39",
".git/objects/d7/b05b51f8e1f157abe6f93a76db3ec286935c3f": "6550a3a1b08de7a332194c6fbebb3061",
".git/objects/d0/0461a652b6ecfebfeda98f98d3c17767105458": "31e1cd5d4633c567c591c8fec444884f",
".git/objects/d0/9703c5ecf70be1f045d88095da41b2e46547ac": "b9b430102b660f06f2e9e2eb778c6889",
".git/objects/d0/595c88913df0ae5c8b03032abb25142043270b": "bcb5fbe65737078ba65c5aa829b53c30",
".git/objects/be/7f6bf0165192d26fd7504f4d3edcb88bed8de3": "3f70880e6579def3448f353b5ea074ca",
".git/objects/a2/030be0f55a65b4a31e53d032f0900f999b767f": "d25ab82b0ab9d9961f91c5fea2c8c9a5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/89bf12150bc75d154174848b77ad4f2faa366d": "b786f973ce520ffe5f43ca823a6d2ea5",
".git/objects/d6/d28b3a468f93d169c93b701ac27b40afd560c9": "721555a59c745465a803a64393c06053",
".git/objects/ae/619e97800948f7de4f43c02cdeb7aefc81dd1e": "c77eeb8d7bbafffb41d9f439b3518c0c",
".git/objects/ae/8d30c00657ffdcb47370d27e83763726afefaf": "100b3008b77c893a3b63ae93cba9d5e0",
".git/objects/e5/c3ba2b85dd5747cb57a611b8e4d2366cf02fa2": "cb44aa1a5eadcec03a075b47e4b19247",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c7/76da37cb9989dcaa8e6e28b8b693b5c61bba29": "8a2be7a35a8f5543b64fb4d0913661e6",
".git/objects/c7/14c9e614de0ebaa09004bb6e24bc3783c2fd49": "d3768ec18c1df1bc0dca5acb9d07ebc6",
".git/objects/ee/12a1d0828bff69a6d7e118e7a3ff3756d4d1b6": "76592a8562f2635f9e9b6ffcbc5e8518",
".git/objects/fc/54e48366c14891643120005e4074397d5a4f7b": "cdce264aaa0eff61fe9328e58526a45d",
".git/objects/fc/a812d45f84cf21dc1bfb4728653bf7e6242210": "9498bd7ab969b0a68b74e10043b95cc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/16313bd64d622d1baf840e5c8eaaf0254cb2ca": "1599d5322f09c267f218e0209fc51586",
".git/objects/c6/514b23cf8f85a255bbb1e83583ae46cab4bc39": "be0e19e523be28de487e00ff96c07ad2",
".git/objects/20/540d33eeac827df3f7a559eda84a5e8c0a8a4c": "f2c4cfcf10b2e1438992bec0a76eca05",
".git/objects/27/4b331e937a778a02ba7b592ce784ac70d1f60c": "0f620251443e394a1803e635f6a6c657",
".git/objects/27/6232b1a5689c00a5737256ca2e93bd2540eaee": "c3c200b6255525a7a2dcfa30dedfc225",
".git/objects/4b/4011bc5e5f05e32da5961557bfea4526ac1ddf": "4407f48624466e6d456fc9a3261fcf59",
".git/objects/pack/pack-2f2904dfb071de88b7de16b0a69a62bf4093aed4.rev": "6d50c0b80fc9747c518da64ad03bd9c9",
".git/objects/pack/pack-2f2904dfb071de88b7de16b0a69a62bf4093aed4.idx": "0ec69ddcdf63fb992622f46fe58222f2",
".git/objects/pack/pack-2f2904dfb071de88b7de16b0a69a62bf4093aed4.pack": "2603e3a81b3b0bee1af600945ce8bfb2",
".git/objects/7c/5fe6e41ffc8bf8345743eac60091251ab1c50b": "81023f8c5f3eefcc5ceb26a600e3c016",
".git/objects/45/c1b79e4a2c2a5e32cdc8fd0bd0505b0c5d0c9e": "343a779c7d885daf24b88d00809e3e81",
".git/objects/73/a4af9e24845c08cad64563d73c5b600639a50f": "97ede6073bd3b059506d1f735c1d1297",
".git/objects/74/30bcf9f29414a086ea3348563d037e36f24ba0": "75dae949c97eae47f2bc7564af07e252",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/d451d027e95ab30c4f6d0e2d5c0208ca9b0752": "b54f2ad65d28eb61895308b7eba48924",
".git/objects/4c/c678a6ba5e1f8bb2af6eadc7d0e920595f02a4": "fa074098bdf40608aefd24b1934bc28e",
".git/objects/4c/08c8df3196065b4594217505f6779f56d53fc8": "d9e7c395cf03f9907082b73a31d785eb",
".git/objects/21/5db16ac591b5b5e027a3a7ab1f068211679df7": "7c6bcf9fdd1b38b70fc19d8018773afd",
".git/objects/75/67c2ffd356f6f6d3aa807da8029609e57a2bb1": "abdb814202a957a436fc3884586d9cd9",
".git/objects/2f/41b8b3c45db33121831ca0766f75dd56a16842": "d77be1318a453ba2cc470a8d5593cc75",
".git/objects/07/01a21b336377caaa7ebd434fd8e1f89f98ed57": "49dd9040f554e6000fb2c8db1bd3a279",
".git/objects/38/6d3a6dacedacb3fb68ecf65acce0f301685363": "3102fd220f42567eeadd91d11b72f567",
".git/objects/38/c50b427482771196f668ffd26109b4d8789e14": "ec2326bc614e5dcc0390851161187d34",
".git/objects/36/92d02103ba190d79d9564fdeddaac766f1f257": "9e1d82ab346d6f0987ba070c2787bf19",
".git/objects/5c/0f1f48282c5f996d748d444cda93de6897d9fd": "f18efd981c5a1595710b450d915c2aa1",
".git/objects/09/4cf695031e06e3b380756a4a1e5910942c1220": "3f09440c0460d86330fa80d5fdd168bf",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/efc66b7a5a60b25c3d79117e4fbb83826e508d": "c360c3633d80fffbf0f7c866294210ac",
".git/objects/3a/57209a97f2880b3d5f643c75999a8f777059eb": "2baa05c38871295e9086333af1a4d707",
".git/objects/5e/215ce45684dae9b2c0408a0f6f5dae51ef1c4d": "e159c541a92335e2e244619a28b39ba8",
".git/objects/01/dac9a9e2e7f635ac3c231565711d8efc5ae94f": "2c75f8a92092e7138e6bbba5b1326dd5",
".git/objects/55/588ae19c8641f300134085c5891bf5b8a3fc4e": "9e4b4c7dcdb966fb17258eebd4767686",
".git/objects/55/37b2b72bea3f3bbc73bbeb25e687fd8ce2426d": "d273276cedd1787ad2662a6ba9dae458",
".git/objects/0f/5afce5f5e7f75dc32e52633da6318361163e39": "a4ac145e652c86233a3961111faffd83",
".git/objects/64/79e0330f342cf03918583e0322f0bd8a1229c5": "c573f4ba8276458e33bceb5a7f6018c2",
".git/objects/90/139992e6b9f118360ea08a53d747924e100bd5": "b5e4b9a93e29b19b26fd713c747deb26",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/470f9acc4dc612bf2d27c43ed223589d3f07de": "5b1a3d6c824358ddfa57239de6582234",
".git/objects/dd/29fc1c16d111c7398d8598cc7f6b4d3d3706e9": "c9c2ef08f36ca3c353241f7ed6c4e895",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/955cf57138aab475746d946c2751941ced9b42": "27858ee5604f031f5a7b32df4b745e99",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/d52be520a02c2eb38b97acad1d46e155f4745d": "3404dc83659b4ba4a09cd21fb65ef7be",
".git/objects/a6/7cafd187835163a9beaedfd5e7672b044500e7": "9e628646f658e513551a7c44c6ae07bd",
".git/objects/b9/ba4cedda76abcf72481db09bb95ade146c07de": "dcdb6b802a4cd0567667d2d55258fe2a",
".git/objects/a1/d069090cc7a29a071d27e2fb75057ea5b0ca2c": "5e8af468a0ceaa19df32e3f912804628",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/ddc650e894176d6cfdd829c0fcdfa50b3c1f56": "2e490f0f89affa79afd1c1b0ee9085c4",
".git/objects/c3/8f7559a5301cfd4729b0212d4286d5d3321f9e": "8b85d37f08733e873d7446ead85416c5",
".git/objects/c4/f1d9c39f5a49fd66342a31fdd42b3442e45aac": "fe095111e4d3fd62471698fb75d3c050",
".git/objects/e6/2e61d5208532ba58b76e5cbdbe7be8841b1fe0": "871d4e8b59cdea92b9ea0eadcad6c23d",
".git/objects/c5/e1b399a72597de3861b5b8d2cd2f3acd73a046": "8f64681322284bcb4c6f12428742cbe9",
".git/objects/f6/c7ffc4e96c5f8b6bf59f101fabeb8d81439e66": "56bafbe0902e9560bb4c3a3b6e749ec1",
".git/objects/cb/a2a8f2fc0b99b9cda03d6c299697d4c655d87a": "6e9b1c2e98d04c199ed90f7684611ba9",
".git/objects/ce/3f47ef03d1725ce22771b1311d96e36d7caf21": "7e093a205d8241f62c48a9bd7a816f55",
".git/objects/83/99e9831e4060856f6699e449eab6e9559547b9": "fb4a6a865441577abc2243b84bc070dc",
".git/objects/77/958f5140c409b98a2b517953df045919b41609": "ea1c6db280f0cc20686ffe9b58cfe02a",
".git/objects/1e/3967984714a09edd1a252536d12d6cc20038a0": "069c1681436d156996242a39889995d4",
".git/objects/1e/58066f4a1de5084ce84fafadf1ed85c73d82de": "0f08f912d82df5f109e0154708d16e0c",
".git/objects/1e/6ddb2860328221d065d6f6d81e09942d924867": "8b315616d6e16089f0848470440fde44",
".git/objects/1e/77059b3286e321aec17fbedc1eee2e6d223342": "5f4a093ab24d7e979927e4de8c62a7d7",
".git/objects/4a/3052f7f11099c9eb4f9fae8a6c96e2b419cc88": "d251671fbab96746e603c5bd19455cf3",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/15/abe5d076bf67f27992e637484cecca2e3857c8": "bd5b11b3840b5a6af5be8abecbcb05ee",
".git/objects/1d/e3d2c574ad9c2a7ca1c589527150ebc68b9f71": "31f2c87f7073673daf1245577ceb63b2",
".git/objects/71/a5f0fdda200c959e827ae94f6d392c6c4f00be": "dcc93de3d64255a38b81b1c216151b1e",
".git/objects/76/b02cc8d998849679b3d216a17d9a950d449f4a": "eea0cd1559aa9f25eef939699795cdc8",
".git/objects/82/b9a26c49057fc7de191d5a83feed3c34972801": "5d4504da4bfba5a5b62d0140686ff080",
".git/objects/82/a931f0f91b85ac0a6dceb7c33a33cfe7a34678": "7e6ae9167a38f1fbdfc45270d5e25907",
".git/objects/49/817ef98eb281512ab6d70f3a0071fa3555b41a": "9aeb9d404913118cb3548157ee561428",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/06720d4827dc430e1caf7da2955b33e62ea66d": "22dbfed9e122c99d5b5df2ce407e4a51",
".git/objects/7f/a2ed1a6d8cd5b01e02cd9635abe138e52630d1": "8b10a713c39b080b18f0bb2367c081ae",
".git/objects/8e/188b46de311de154f5c6beabfcd943234bb40e": "951e57063649248c829f5687f27d2a8b",
".git/objects/25/f722a63c194a248b448e26acccb0be009b5c7b": "80c7c2419df2cd1a859d6854ea44a225",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7913dafd58265c5057ae0949eb7fc87b",
".git/logs/refs/heads/main": "7913dafd58265c5057ae0949eb7fc87b",
".git/logs/refs/remotes/origin/HEAD": "9a492fcfcdbe4478b5384b0409e390ce",
".git/logs/refs/remotes/origin/main": "d93dec2d6c65d7bedf200938352ed526",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fda46e6b71cf161028f8828d20e1fb9c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fda46e6b71cf161028f8828d20e1fb9c",
".git/index": "d31117b40ed2ce8c867b29b52918c871",
".git/packed-refs": "052d1476bc52bfa4f4b0b8a8f8b7e118",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "5edafb46d483627e832442950e985db7",
"assets/AssetManifest.json": "21944a6bd33ba85807237cd03c66024b",
"assets/NOTICES": "fe6808b5aa42c5feb4299e10c3843129",
"assets/FontManifest.json": "fb8a9747997ac1a807f4c75d873d7c27",
"assets/AssetManifest.bin.json": "1a32b8a3fced9f86943296c25ca63f9c",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "ad53fadd26bbee6b1941321cc5911c78",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "5d304fa130484129be6bf4b79a675638",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "003d691b53ee8fab57d5db497ddc54db",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "f2dc1cd993671b155e3235044280ba47",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "8fedcf7067a22a2a320214168689b05c",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "f128e0009c7b98aba23cafe9c2a5eb06",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "03787d6461fc6fa6d91fbdb5cbc48b25",
"assets/fonts/MaterialIcons-Regular.otf": "1263c042e8b15d5c4dda603e894a6f6c",
"assets/assets/png/app_icon.png": "dee8b80f661aabb83ddf959b1fc86e1d",
"assets/assets/fonts/FiraCode/FiraCode-Medium.ttf": "5b787767a4865ea8439fe08afb9ec810",
"assets/assets/fonts/FiraCode/FiraCode-Regular.ttf": "6c0e247027e8aafe474e53f07365969d",
"assets/assets/fonts/FiraCode/FiraCode-Bold.ttf": "86df85ace714fe95178a3f6e7445dd3e",
"assets/assets/fonts/FiraCode/FiraCode-SemiBold.ttf": "630243e176d08ebd30424f0a75e681da",
"assets/assets/fonts/FiraCode/FiraCode-Light.ttf": "b43359b05bd3b86593e7a68b8fffabbe",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-MediumItalic.ttf": "6efa621b283ff999f05bc4d672de8c95",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-Light.ttf": "d6fb190614a9297c6263f85094463592",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-Medium.ttf": "9fb6d71fc9edf9db455adeb04da9795c",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBoldItalic.ttf": "ba442a7aab453d20c5709ae7ca0837ac",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf": "08d59825aa09f741c9272b85e6a1adbf",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-SemiBoldItalic.ttf": "9f3904d1769f5e804c644e59c203f447",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraLightItalic.ttf": "4a090ca0e9382ed4996f23042b335391",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-LightItalic.ttf": "0bf00206fd7547022cfa3e0ec073e427",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf": "7dae244963714ee2b16fcbab46661792",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraLight.ttf": "bd1c3b0ba032000f9e62c171bd0558eb",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBold.ttf": "9bfdb6bb1fda2806463b64e44c5eaed9",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-Italic.ttf": "5d157c8d8e47cc6e2da60b8158e78ca8",
"assets/assets/fonts/PlusJakartaSans/PlusJakartaSans-BoldItalic.ttf": "fdbe93c588403b5c67963757775c98cb",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
