import axios from 'axios';

export function addTracksToPlaylist(access_token, userId, playlistId, data) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, data, config);
}

export function createPlaylist(access_token, userId, data) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, data, config);
}

export function getArtist(access_token, id) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get(`https://api.spotify.com/v1/artists/${id}`, config);
}

export function getArtistAlbums(access_token, id) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, config);
}

export function getTopArtistsOrTracks(access_token, type, timeRange) {
  var timeRange = timeRange || 'medium_term';
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get(`https://api.spotify.com/v1/me/top/${type}?limit=24&time_range=${timeRange}`, config);
}

export function getUserInfo(access_token) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get('https://api.spotify.com/v1/me', config);
}

export function getUserRecentlyPlayed(access_token) {
  const config = { headers: { 'Authorization': 'Bearer ' + access_token } };
  return axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=20', config);
}

export function refreshToken(refresh_token) {
  return axios.get(`/refresh?refresh=${refresh_token}`);
}
