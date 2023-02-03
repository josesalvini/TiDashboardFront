'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2c6fd75347bf6fd1f4fbb1dfbc99d1ec",
".git/config": "fe7e2b61adf4c7a3e9365f5e06730ebe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa8cd64caee8a24edcc5daaae522d672",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24bd5b212bca55106da534055b1ac3c7",
".git/logs/refs/heads/master": "24bd5b212bca55106da534055b1ac3c7",
".git/logs/refs/remotes/origin/master": "9d63c58c949f8524f9532ba3fc155203",
".git/objects/04/68e4d8591db5425d460d8dc5ce995d3387df8a": "51f0e6f5e76ec8ff2ca0cacbc8246efa",
".git/objects/06/10aeae2e022a4057e8a3dbc5e84e6d557ab900": "ba64593ab292437cdc1095595e7a7b7c",
".git/objects/0d/94b8351bde5b50b5b074538664e7593ac7c0ab": "1af75a8fbe24f6c66dd0bc0414f6b9e2",
".git/objects/0e/3eadabd8b10ed020e9d0ec217bb566f4c50a70": "78e67677fb8afbff9391490eea3d4564",
".git/objects/16/53207f680940db4f05c1cf10d69c63297f1f83": "310a590ef9c96f40affa3f3606085129",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/bd40248d835349c31b5d1f4fafe90f09aaff11": "85047fda8ee60a0a6806ef6fc2b67f3e",
".git/objects/22/c13b32ebb39e0b3da830eac1ad09017cba5654": "3e4d9e11620d49da7995eaec6cf774ac",
".git/objects/22/ff85f0418b538622f76d85e52aa85df6a646f5": "8c377e69c54387b035e2a1769d74be83",
".git/objects/28/ba385ad694b4505a9f0664d45be1433fbbeec6": "b6f7654ea3a7e6849b48bc3f4c6e801a",
".git/objects/2a/a64c51c719dd697fa508cd2b3d69754d6128c0": "a0095996f8eab677c7f7e6cad77e31b8",
".git/objects/2a/d59c9253628f93752ef402242a175c1d683831": "06f50a5a3baffe9f5d1a3531f234f0d6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/df2d4eb0bd8378b17fa4cf7bc3fe74d211df61": "22b7adeb8b5836c52e95e3fac5f02da9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/b9b72bb46bddfea027f76dea8664047215e8e3": "e51c85cc4c9721f17cf85f0a3afa6a4a",
".git/objects/4f/42b1e20ff3403f075852f728f57dc6b9f72bf1": "2c164fc81a00a00a258512ad90bddfa7",
".git/objects/54/08ad2e52e300f8247dd6502c682fd18d16c7d9": "92d9a052617b5148f16eb7dc9455e0f3",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/62/9fe2c326dd2180d18de39a3ca02385a3a32eed": "ed0ff4b145daa0a372a16ad795a9ded5",
".git/objects/67/9320afc58632bec153c9f8d819ce8997ff33d6": "2473d506b86f81f85208c3ae8ecf20b4",
".git/objects/67/bf9a84a58ed75dd8afcd0a1855def3f8c921bd": "699d16ed09d2a2e4b91debc3949b615d",
".git/objects/6b/d8475522d1f68c38c6b9407ef39ebd52eb1ebd": "7d946e17a4ed204862b22b21c8acc652",
".git/objects/71/7a5b8692e13c98b37ca4432addff3c382479b3": "d6a5829d8d5232ba34452d55366ff735",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/a27fae64ffce6d8fe4a6444a1413696024c401": "5b0e4d16ec207151e36d09c87f899c37",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/5d7187aadc94a8dca28c6088f6ae5fc2b6bf7f": "c8456d51e98fe0080a969872c2d35ee8",
".git/objects/81/c6a04d25c4d899fabaa3ab866f6ad95a36d2f8": "4baedb966d5783903c5ec917bb6d5ffd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e6e8c8845fec8f1ea74e5af65069fec9a58cf5": "5978ab801bdb9bbffaa9f0f12300ad33",
".git/objects/90/cfd740e3106f9bfa556a897dbc7ad3b37d0e37": "80c5f5d4149d1c0ba11254824956f461",
".git/objects/93/7e5aecc1c7fc8b40d935659befad4db5c62625": "a5d252870e26d044635a0e067f2dd28b",
".git/objects/96/b5e5fc03ab820c487d3429f1ab1c3d5ac4bae2": "0bc89de9c22e11f6780e44dda5132515",
".git/objects/97/4a7790fb871eeb1a5b675134f6ce8a3f609013": "9df903fe59f114a7467c88e04bc25d0d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/6319ffa88ee30ae49fb1131d3f4b3f3add2688": "611cc7db72b90e7b5eb6ce80aed37dff",
".git/objects/9e/f80ffe663daecf9cba9f5547ea3555398852d9": "950dce98be05e48049147fda64908762",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/0cd55bc901c5873f69737b628d51ff4f7bce2c": "2ea6e6489065f8f636644216216b6b09",
".git/objects/a3/ab151a8ed92c44f93c3ccbd2ac60e275112714": "45a2cad18995f9bf565894fc12e8ad39",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/d76c8967617fc0ce13cb7b53a8ee0b8712a82f": "230727f3dc78c21478f6128ad18ccad5",
".git/objects/af/ae73a65259a369268f3fa9374cfc84b710ec72": "77b76b976f2654a37e1c563f07a1a4e4",
".git/objects/b2/f95706cfcd02786d5d88b7b572c164d2f36209": "b8af1930db03e5042c767e8c295d1e48",
".git/objects/b5/b684ee467182da897f7648ed23a35909e9210f": "2d39cd83ad048eaf67f2bd65e46c4f64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/0cffe95540178f0f14ee7ecf63bf8cc27b38e7": "d09419646cc597a080675e5d66f5f1fa",
".git/objects/c3/40ef88c2b19d62924d309bc72e9c207d54e49b": "201207a7dc535bd894ab5781b37fd388",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/75f2b73a26930c9a404b3bc74356fc46767c6d": "95af69646499201701c3ab3f0eec9ea2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/134f49391d07c0734d62a7994f69da66f1570b": "2f31d60b490899f33de3cbf3051ea4cf",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/097fea4e9b0cf437f8948b51f4ce5a9dae8882": "171745acdceb9a20b5340a029c917052",
".git/objects/eb/6cd16aa976c2f39f6f692bd97c0848e2dbd365": "fdbab37518d763912d4c9e8fc3eb58a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/438541c873888eda26e9e9a0cb8e2461cf2e01": "1a61c24bbaa71ec878301dc576423e0e",
".git/objects/f5/48e913601d0c2405bed1e0cf8e177fe79da75c": "d05a42dd3ae32d7451c201b812e17780",
".git/objects/f7/573445df119d32848d7a308108d243c42d78b2": "d2f2dbf200bb431c6cfd7700635e5df4",
".git/objects/fd/efffa9cb712b662ffe567818c86ff9f946ecd4": "f6f1793ab6c5826e178d94c79053824b",
".git/refs/heads/master": "115b47ea9d657bab6ea1b5b11f924535",
".git/refs/remotes/origin/master": "115b47ea9d657bab6ea1b5b11f924535",
"assets/AssetManifest.json": "3f3a75de5707621156aa3047df66818f",
"assets/assets/42010401": "7c6628a29a3fa0dff54199c29805f3df",
"assets/assets/731d8547": "b1ee9db8f2a902b373d189f2c279d81d",
"assets/assets/ac57f1b": "b1ee9db8f2a902b373d189f2c279d81d",
"assets/assets/auth_background.jpg": "0677581f1b5be4bbeb80543e6ba48aab",
"assets/assets/auth_background_1.jpg": "a3b5d9b64c0310a5cee3c8fb0a7c7f8a",
"assets/assets/auth_background_2.jpg": "a34fb62006521aa8af722caeaa79cefd",
"assets/assets/avatar.png": "7c6628a29a3fa0dff54199c29805f3df",
"assets/assets/c405aff4": "31899ac57f01a5bb633cb54f41f46f68",
"assets/assets/c96abdaf": "31899ac57f01a5bb633cb54f41f46f68",
"assets/assets/loader.gif": "74b84c61dc457547ce5c674e0ef82c19",
"assets/assets/lottie/404-website.json": "df9177972f44a8c3973886df803270fa",
"assets/assets/lottie/404page.json": "eb1ded2b746d1a2501b380aef2b88c6b",
"assets/assets/lottie/58dd3151": "df9177972f44a8c3973886df803270fa",
"assets/assets/lottie/d7d3d8c4": "df9177972f44a8c3973886df803270fa",
"assets/assets/lottie/login-and-sign-up.json": "c85bde50a8f26ba74bb773899b4bc068",
"assets/assets/lottie/lonely-404.json": "0306cb9c22346d7e5076e34f6839f7cf",
"assets/assets/lottie/man-account-icon.json": "9b5b42f138aecb6e27a7093d3f83cf66",
"assets/assets/lottie/panel_admin.json": "78b8069595184ccdef6746f6c0a2f17d",
"assets/assets/lottie/user-icon-animate.json": "23f6294bcf540d3696e5e0fcc651fbbb",
"assets/assets/no-image.png": "b1ee9db8f2a902b373d189f2c279d81d",
"assets/assets/no-image2.png": "c6537b949766f2b825d3d3520e62e09e",
"assets/assets/simple-male-avatar.jpg": "31899ac57f01a5bb633cb54f41f46f68",
"assets/assets/tipre_logo.png": "8ae6f7f96291cc24663354c5c4c0d173",
"assets/auth_background.jpg": "0677581f1b5be4bbeb80543e6ba48aab",
"assets/auth_background_1.jpg": "a3b5d9b64c0310a5cee3c8fb0a7c7f8a",
"assets/auth_background_2.jpg": "a34fb62006521aa8af722caeaa79cefd",
"assets/avatar.png": "7c6628a29a3fa0dff54199c29805f3df",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/loader.gif": "74b84c61dc457547ce5c674e0ef82c19",
"assets/lottie/404-website.json": "df9177972f44a8c3973886df803270fa",
"assets/lottie/404page.json": "eb1ded2b746d1a2501b380aef2b88c6b",
"assets/lottie/login-and-sign-up.json": "c85bde50a8f26ba74bb773899b4bc068",
"assets/lottie/lonely-404.json": "0306cb9c22346d7e5076e34f6839f7cf",
"assets/lottie/man-account-icon.json": "9b5b42f138aecb6e27a7093d3f83cf66",
"assets/lottie/panel_admin.json": "78b8069595184ccdef6746f6c0a2f17d",
"assets/lottie/user-icon-animate.json": "23f6294bcf540d3696e5e0fcc651fbbb",
"assets/no-image.png": "b1ee9db8f2a902b373d189f2c279d81d",
"assets/no-image2.png": "c6537b949766f2b825d3d3520e62e09e",
"assets/NOTICES": "1241a3cfc95b3034a090b4e7889fea8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"assets/simple-male-avatar.jpg": "31899ac57f01a5bb633cb54f41f46f68",
"assets/tipre_logo.png": "8ae6f7f96291cc24663354c5c4c0d173",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9327b7fa36477569575bfd3b9d6f9f57",
"/": "9327b7fa36477569575bfd3b9d6f9f57",
"main.dart.js": "7fb81f81f686e45aa3f1265d53e6a16b",
"manifest.json": "34f4bd367f5bf7a13207a7014b03c385",
"version.json": "12481ed665e76f12267e9aff8cb08c2c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
