/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

import './_version.js';


// Give TypeScript the correct global.
declare var self: ServiceWorkerGlobalScope;

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @alias workbox.core.clientsClaim
 */
export const clientsClaim = () => {
  self.addEventListener('activate', () => self.clients.claim());
};
