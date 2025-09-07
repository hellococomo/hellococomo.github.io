import { e as escape_html } from './escaping-CqgfEcN3.js';
import { t as push, z as copy_payload, F as assign_payload, v as pop, G as slot, J as bind_props } from './index-xwsDOZVr.js';
import { j as fallback } from './utils2-Bl_acQ9N.js';

function Geolocation($$payload, $$props) {
  push();
  let coords = fallback($$props["coords"], () => [-1, -1], true);
  let position = fallback($$props["position"], () => ({}), true);
  let options = fallback($$props["options"], () => ({}), true);
  let getPosition = fallback($$props["getPosition"], false);
  let watch = fallback($$props["watch"], false);
  let loading = fallback($$props["loading"], false);
  let success = fallback($$props["success"], false);
  let error = fallback($$props["error"], false);
  let notSupported = fallback($$props["notSupported"], false);
  function watchPosition(opts) {
    notSupported = false;
    loading = true;
    error = false;
    if (!("geolocation" in navigator)) {
      notSupported = true;
    } else {
      if (watcherId) clearWatcher(watcherId);
      watcherId = navigator.geolocation.watchPosition(handlePosition, handleError, opts);
      return watcherId;
    }
  }
  async function getGeolocationPosition(opts) {
    notSupported = false;
    loading = true;
    error = false;
    if (!("geolocation" in navigator)) {
      notSupported = true;
    } else {
      navigator.geolocation.getCurrentPosition(handlePosition, handleError, opts);
    }
  }
  function clearWatcher(id) {
    if (!("geolocation" in navigator)) {
      notSupported = true;
    } else {
      navigator.geolocation.clearWatch(id);
      watcherId = void 0;
    }
  }
  let watcherId = void 0;
  let lastPosition = void 0;
  function handlePosition(pos) {
    coords = [pos.coords.longitude, pos.coords.latitude];
    position = {
      coords: {
        accuracy: pos.coords.accuracy,
        altitude: pos.coords.altitude,
        altitudeAccuracy: pos.coords.altitudeAccuracy,
        heading: pos.coords.heading,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        speed: pos.coords.speed
      },
      timestamp: pos.timestamp
    };
    if (!lastPosition || lastPosition.coords.latitude !== pos.coords.latitude || lastPosition.coords.longitude !== pos.coords.longitude) {
      lastPosition = pos;
    }
    loading = false;
  }
  function handleError(geolocationError) {
    error = geolocationError;
    loading = false;
  }
  if (typeof window !== "undefined" && getPosition && watch) {
    watchPosition(options);
  }
  if (typeof window !== "undefined" && getPosition && !watch) {
    getGeolocationPosition(options);
  }
  success = getPosition && !loading && !error;
  if ((!getPosition || !watch) && watcherId) clearWatcher(watcherId);
  $$payload.out.push(`<!---->`);
  slot($$payload, $$props, "default", { loading, success, error, notSupported, coords });
  $$payload.out.push(`<!---->`);
  bind_props($$props, {
    coords,
    position,
    options,
    getPosition,
    watch,
    loading,
    success,
    error,
    notSupported,
    watchPosition,
    getGeolocationPosition,
    clearWatcher
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  let coords = [];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Geolocation($$payload2, {
      getPosition: true,
      get coords() {
        return coords;
      },
      set coords($$value) {
        coords = $$value;
        $$settled = false;
      }
    });
    $$payload2.out.push(`<!----> <pre>${escape_html(JSON.stringify(coords))}</pre>`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Dd2BXU4m.js.map
