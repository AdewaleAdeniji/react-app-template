/**
 * Transforms tracked location updates and returns the last location update
 * @param {{}} locationUpdates 
 * @returns {{[key:string]: {lat:number,lng:number,textAddress:string,timestamp:string}}}
 */
 const normalizeTrackedLocationUpdates = (locationUpdates) => {
    if(!locationUpdates) return [];
  
    let output = {};
  
    for(const trackerId in locationUpdates) {
      const trackerData = locationUpdates[trackerId];
      if(!trackerData) continue;
  
      const movementId = trackerData?.lastActive || Object.keys(trackerData)[0];
      if(!movementId) continue;
  
      const movement = trackerData[movementId];
      if(!movement) continue;
  
      const movementLocations = Object.values(movement.locations || {});
      if(!movementLocations?.length) continue;
      
      // We take only the most recent location update
      output[movementId] = movementLocations[movementLocations.length - 1];
    }
  
    return output;
  };
  
  /**
   * Transforms tracked location updates and returns the last location update
   * @param {{}} locationUpdates 
   * @returns {{[key:string]: {lat:number,lng:number,textAddress:string,timestamp:string}}}
   */
  const normalizeUntrackedLocationUpdates = (locationUpdates) => {
    if(!locationUpdates) return [];
  
    let output = {};
  
    for(const movementId in locationUpdates) {
      const movement = locationUpdates[movementId];
      if(!movement) continue;
  
      const movementLocations = Object.values(movement.locations || {});
      if(!movementLocations?.length) continue;
      
      // We take only the most recent location update
      output[movementId] = movementLocations[movementLocations.length - 1];
    }
  
    return output;
  };
  
  /**
   * 
   * @param {Date} time1 
   * @param {Date} time2 
   * @returns 
   */
  const isGreaterThan = (time1, time2) => {
    return time1.getMilliseconds() > time2.getMilliseconds();
  }
  
  /**
   * Merge location updates for tracked and untracked shipments and return the most recent
   * @param {{}} tracked 
   * @param {{}} untracked 
   * @returns 
   */
  const mergeLocationUpdates = (tracked, untracked) => {
    const output = {...tracked};
  
    for(const movementId in untracked) {
      if(movementId in output) {
          // Check which is most recent
          output[movementId] = isGreaterThan(
              new Date(output[movementId].timestamp),
              new Date(untracked[movementId].timestamp)
          ) ? output[movementId] : untracked[movementId];
  
          continue;
      }
  
      output[movementId] = untracked[movementId];
    }
  
    return output;
  };
  
  /**
   * Helper function to extract the location data from the most recent location update
   * @param {string} movementId 
   * @returns 
   */
  export const getLocation = (locations) => {
      const normalizedTracked = normalizeTrackedLocationUpdates(locations?.tracked);
      const normalizedUntracked = normalizeUntrackedLocationUpdates(locations?.untracked);
  
      return mergeLocationUpdates(normalizedTracked, normalizedUntracked);
  }
  
  export function animateMarkerTo(marker, newPosition) {
    var options = {
        duration: 1000,
        easing: function (x, t, b, c, d) { // jquery animation: swing (easeOutQuad)
            return -c *(t/=d)*(t-2) + b;
        }
    };
  
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  
    // save current position. prefixed to avoid name collisions. separate for lat/lng to avoid calling lat()/lng() in every frame
    marker.AT_startPosition_lat = marker.getPosition().lat();
    marker.AT_startPosition_lng = marker.getPosition().lng();
    var newPosition_lat = newPosition.lat();
    var newPosition_lng = newPosition.lng();
  
    // crossing the 180° meridian and going the long way around the earth?
    if (Math.abs(newPosition_lng - marker.AT_startPosition_lng) > 180) {
        if (newPosition_lng > marker.AT_startPosition_lng) {
            newPosition_lng -= 360;
        } else {
            newPosition_lng += 360;
        }
    }
  
    var animateStep = function(marker, startTime) {
        var ellapsedTime = (new Date()).getTime() - startTime;
        var durationRatio = ellapsedTime / options.duration; // 0 - 1
        var easingDurationRatio = options.easing(durationRatio, ellapsedTime, 0, 1, options.duration);
  
        if (durationRatio < 1) {
            marker.setPosition({
                lat: (
                    marker.AT_startPosition_lat +
                    (newPosition_lat - marker.AT_startPosition_lat)*easingDurationRatio
                ),
                lng: (
                    marker.AT_startPosition_lng +
                    (newPosition_lng - marker.AT_startPosition_lng)*easingDurationRatio
                )
            });
  
            // use requestAnimationFrame if it exists on this browser. If not, use setTimeout with ~60 fps
            if (window.requestAnimationFrame) {
                marker.AT_animationHandler = window.requestAnimationFrame(function() {animateStep(marker, startTime)});
            } else {
                marker.AT_animationHandler = setTimeout(function() {animateStep(marker, startTime)}, 17);
            }
  
        } else {
            marker.setPosition(newPosition);
        }
    }
  
    // stop possibly running animation
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(marker.AT_animationHandler);
    } else {
        clearTimeout(marker.AT_animationHandler);
    }
  
    animateStep(marker, (new Date()).getTime());
  }