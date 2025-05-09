'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a2231adde3c94070da40cdf88c609878",
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
"main.dart.js": "933d029d5be9ed220e0cf048cf8bc14f",
".well-known/assetlinks.json": "100eb2534a5846a9505adf848013fc81",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.mjs": "b286726cf1145bcc682a370b4084246c",
"icons/apple-touch-icon.png": "c0a9ab0e7027163df6ab5b705df12741",
"icons/icon-192.png": "7508ebd7dc89b564d0d86bc0a0ed4128",
"icons/icon-192-maskable.png": "0ddd23c46129bdaec5826318689d3f17",
"icons/icon-512-maskable.png": "be031bfd4f3005de60908722ca8a747f",
"icons/icon-512.png": "50d218aba2b3f2cc3169875ad0d7bff5",
"manifest.json": "b455255a5824e1c289ca1248ebeaca38",
"main.dart.wasm": "1c37b48687329afbbdb9ffa702e68033",
".git/config": "40f6d460b301e89e6de923cf12de2c18",
".git/objects/pack/pack-2f2904dfb071de88b7de16b0a69a62bf4093aed4.rev": "6d50c0b80fc9747c518da64ad03bd9c9",
".git/objects/pack/pack-2f2904dfb071de88b7de16b0a69a62bf4093aed4.idx": "0ec69ddcdf63fb992622f46fe58222f2",
".git/objects/pack/pack-2f2904dfb071de88b7de16b0a69a62bf4093aed4.pack": "2603e3a81b3b0bee1af600945ce8bfb2",
".git/objects/b9/ba4cedda76abcf72481db09bb95ade146c07de": "dcdb6b802a4cd0567667d2d55258fe2a",
".git/objects/2b/06720d4827dc430e1caf7da2955b33e62ea66d": "22dbfed9e122c99d5b5df2ce407e4a51",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8f898801d35337b4401f5cfef1799fcf",
".git/logs/refs/heads/main": "8f898801d35337b4401f5cfef1799fcf",
".git/logs/refs/remotes/origin/HEAD": "9a492fcfcdbe4478b5384b0409e390ce",
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
".git/refs/heads/main": "f1fec06bcdaf0785a78885534ba62996",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "7559c4cc6a40c951e6d129a27bbb44b1",
".git/packed-refs": "052d1476bc52bfa4f4b0b8a8f8b7e118",
".git/COMMIT_EDITMSG": "7e2492fb7a6d3aaf5aa61f51b990889f",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
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
