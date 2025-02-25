/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

import {getOrCreatePrecacheController} from './utils/getOrCreatePrecacheController.js';

import './_version.js';

/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 * 
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox.routing.Route~handlerCallback}
 *
 * @alias workbox.precaching.createHandlerBoundToURL
 */
export const createHandlerBoundToURL = (url: string) => {
  const precacheController = getOrCreatePrecacheController();
  return precacheController.createHandlerBoundToURL(url);
};
